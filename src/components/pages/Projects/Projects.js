import React from "react";
import { Link } from "react-router-dom";
import Dots from "../../../assets/Vector.png";
import Edit from "../../../assets/edit-solid-24.png";
import Trash from "../../../assets/trash-alt-regular-24.png";

const Projects = ({ project, deleteProject, editRow }) => {
  const mostrarAlert = () => {
    alert(`Are you sure do you delete ${project.projectName}`);
  };

  return (
    <>
      <th scope="row">{project.id}</th>
      <td>{project.projectName}</td>
      <td>{project.author}</td>
      <td>{project.createdAt}</td>
      <td>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={Dots} alt="Dots" />
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to={`/edit-project/${project.id}`}>
              <button onClick={() => editRow(project)}>
                <img src={Edit} alt="Edit" />
                Edit
              </button>
            </Link>
            <button onClick={() => mostrarAlert(deleteProject(project.id))}>
              <img src={Trash} alt="Trash" />
              Delete
            </button>
          </div>
        </div>
      </td>
    </>
  );
};

export default Projects;
