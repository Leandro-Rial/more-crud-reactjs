import React, { useState } from "react";
import Projects from "./Projects";
import { Link } from "react-router-dom";
import Pagination from "../Utils/Pagination";

const ProjectsList = ({ sortProjects, deleteProject, editRow }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [ProjectsForPage] = useState(3);

  const indexOfLastProject = currentPage * ProjectsForPage;
  const indexOfFirstProject = indexOfLastProject - ProjectsForPage;
  const currentProjects = sortProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPageNum = Math.ceil(sortProjects.length / ProjectsForPage);

  return (
    <>
      <div className="subheader">
        <h1 className="title-subheader">Mi projects</h1>
        <Link className="btn" to="/add-project">
          + Add Project
        </Link>
      </div>
      <div className="list">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Project Name</th>
              <th scope="col">Author</th>
              <th scope="col">Created At</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {sortProjects.length > 0 ? (
              currentProjects
                .filter((project) => {
                  if (searchTerm === "") {
                    return project;
                  } else if (
                    project.projectName
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return project;
                  }
                  return false;
                })
                .map((project) => (
                  <tr key={project.id}>
                    <Projects
                      project={project}
                      deleteProject={deleteProject}
                      editRow={editRow}
                    />
                  </tr>
                ))
            ) : (
              <tr>
                <td>No Users</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination pages={totalPageNum} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default ProjectsList;
