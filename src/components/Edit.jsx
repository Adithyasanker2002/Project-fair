import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import projectImgUpload from "../assets/projectImgUpload.png";
import { FaEdit } from "react-icons/fa";
import SERVER_BASE_URL from "../services/serverUrl";
import { updateProjectAPI } from "../services/allAPI";
import { editProjectContext } from "../context/ContextShare";

const Edit = ({ project }) => {
  const {editProjectResponse,setEditProjectResponse} = useContext(editProjectContext)
  //EDITING STATES
  const [preview, setPreview] = useState("");
  const [uploadFileStatus, setUploadFileStatus] = useState(false);
  const [projectDetails, setProjectDetails] = useState({
    id: project?._id,
    title: project?.title,
    languages: project?.languages,
    overview: project?.overview,
    github: project?.github,
    website: project?.website,
    projectImage: "",
  });
  console.log(projectDetails);

  //MODAL STATE
  const [show, setShow] = useState(false);

  useEffect(() => {
    //VALID IMAGE FILE
    if (
      projectDetails.projectImage.type == "image/png" ||
      projectDetails.projectImage.type == "image/jpg" ||
      projectDetails.projectImage.type == "image/jpeg"
    ) {
      setUploadFileStatus(true);
      setPreview(URL.createObjectURL(projectDetails.projectImage));
    } else {
      //INVALID IMAGE FILE
      setUploadFileStatus(false);
      setPreview("");
      setProjectDetails({ ...projectDetails, projectImage: "" });
    }
  }, [projectDetails.projectImage]);

  //MODAL FUNCTIONS
  const handleClose = () => {
    setShow(false);
    setProjectDetails({
      id: project?._id,
      title: project?.title,
      languages: project?.languages,
      overview: project?.overview,
      github: project?.github,
      website: project?.website,
      projectImage: "",
    });
  };
  const handleShow = () => {
    setShow(true);
    setProjectDetails({
      id: project?._id,
      title: project?.title,
      languages: project?.languages,
      overview: project?.overview,
      github: project?.github,
      website: project?.website,
      projectImage: "",
    });
  };

  const handleUpdateProject = async () => {
    const { id, title, languages, overview, github, website, projectImage } =
      projectDetails;
    if (title && languages && overview && github && website) {
      //API CALLING
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("languages", languages);
      reqBody.append("overview", overview);
      reqBody.append("github", github);
      reqBody.append("website", website);

      preview
        ? reqBody.append("projectImage", projectImage)
        : reqBody.append("projectImage", project?.projectImage);
      const token = sessionStorage.getItem("token");

      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };
        //MAKE API CALL
        try {
          const result = await updateProjectAPI(id,reqBody,reqHeader)
          if (result.status == 200) {
            alert(`${title} : Updated Successfully !`);
            handleClose();
            //SHARE RESULT TO VIEW VIA CONTEXT
            setEditProjectResponse(result);
          } else {
            if (result.response.status == 406) {
              alert(result.response.data);
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <>
      <button onClick={handleShow} className="btn">
        <FaEdit style={{ fontSize: "22px" }} />
      </button>
      <Modal
        size="lg"
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center p-3">
            <div className="col-lg-4">
              <label>
                <input
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      projectImage: e.target.files[0],
                    })
                  }
                  type="file"
                  style={{ display: "none" }}
                />
                <img
                  src={
                    preview
                      ? preview
                      : `${SERVER_BASE_URL}/uploads/${project?.projectImage}`
                  }
                  className="img-fluid"
                  style={{ width: "150px" }}
                  alt=""
                />
              </label>
              {!uploadFileStatus && (
                <div className="text-danger">
                  *Upload only the following file types (jpeg, jpg, png) here.
                </div>
              )}
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input
                  value={projectDetails.title}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      title: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  placeholder="Project Title"
                />
              </div>
              <div className="mb-2">
                <input
                  value={projectDetails.languages}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      languages: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  placeholder="Project Languages"
                />
              </div>
              <div className="mb-2">
                <input
                  value={projectDetails.overview}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      overview: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  placeholder="Project Overview"
                />
              </div>
              <div className="mb-2">
                <input
                  value={projectDetails.github}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      github: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  placeholder="Project Github Link"
                />
              </div>
              <div className="mb-2">
                <input
                  value={projectDetails.website}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      website: e.target.value,
                    })
                  }
                  type="text"
                  className="form-control"
                  placeholder="Project Website Link"
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdateProject} variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Edit;