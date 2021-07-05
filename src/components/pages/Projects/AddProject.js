import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Flecha from "../../../assets/flecha.png";

const AddProject = ({ createProject }) => {
  const projectState = {
    id: null,
    projectName: "",
    author: "",
    description: "",
    createdAt: "Creation date:  09/09/2020 10:30 am",
  };

  const [project, setProject] = useState(projectState);

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (
      project.projectName === "" ||
      project.author === "" ||
      project.description === ""
    ) {
      alert("Please complete all the fields");
    }

    createProject(project);
    setProject(projectState);
    history.push("/");
  };

  return (
    <>
      <div className="subheader-back">
        <Link className="btn-back" to="/">
          <img src={Flecha} alt="" />
          <p>Back</p>
        </Link>
        <h1 className="title-subheader">Add project</h1>
      </div>
      <div className="form">
        <form onSubmit={onHandleSubmit}>
          <div className="rows">
            <label htmlFor="projectName">Project Name</label>
            <input
              type="text"
              name="projectName"
              value={project.projectName}
              onChange={handleInputChange}
            />
          </div>
          <div className="rows">
            <label htmlFor="author">Author</label>
            <input
              type="text"
              name="author"
              value={project.author}
              onChange={handleInputChange}
            />
          </div>
          <div className="rows">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              value={project.description}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Create</button>
        </form>
      </div>
    </>
  );
};

export default AddProject;
