import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom';
import ProjectsList from "./Projects/ProjectsList";
import AddProject from "./Projects/AddProject";
import EditProject from "./Projects/EditProject";
import { v4 as uuidv4 } from "uuid";

const Pages = () => {
  const ProjectsState = [
    {
      id: uuidv4(),
      projectName: "Website Responsive",
      author: "Jorge Luis",
      createdAt: "Creation date:  09/09/2020 10:30 am",
      description: "Some Description",
    },
    {
      id: uuidv4(),
      projectName: "Swift Project",
      author: "Charles Manson",
      createdAt: "Creation date:  19/09/2020 11:30 am",
      description: "Some Description",
    },
    {
      id: uuidv4(),
      projectName: "React JS Project",
      author: "Nicolas Swarmann",
      createdAt: "Creation date:  09/01/2021 10:30 am",
      description: "Some Description",
    },
    {
      id: uuidv4(),
      projectName: "Node JS Project",
      author: "Ted Bundy",
      createdAt: "Creation date:  20/04/2020 18:00 pm",
      description: "Some Description",
    },
    {
      id: uuidv4(),
      projectName: "MERN Project",
      author: "Jorge Luis",
      createdAt: "Creation date:  09/09/2020 10:30 am",
      description: "Some Description",
    },
  ];

  const [projects, setProjects] = useState(ProjectsState);

  const sortProjects = projects.sort((a, b) =>
    a.projectName < b.projectName ? -1 : 1
  );

  const createProject = (project) => {
    project.id = uuidv4();
    setProjects([...projects, project]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  const projectState = {
    id: null,
    projectName: "",
    author: "",
    createdAt: "Creation date:  09/09/2020 10:30 am",
    description: "",
  };

  const [editing, setEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState(projectState);

  const editRow = (project) => {
    setEditing(true);

    setCurrentProject({
      id: project.id,
      projectName: project.projectName,
      author: project.author,
      createdAt: "Creation date:  09/09/2020 10:30 am",
      description: project.description,
    });
  };

  const updateProject = (id, updateProject) => {
    setEditing(false);

    setProjects(
      projects.map((project) => (project.id === id ? updateProject : project))
    );
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <ProjectsList
            sortProjects={sortProjects}
            deleteProject={deleteProject}
            editRow={editRow}
          />
        )}
      />
      <Route
        path="/add-project"
        render={() => <AddProject createProject={createProject} />}
      />
      <Route
        path="/edit-project/:id"
        render={() => (
          <EditProject
            currentProject={currentProject}
            updateProject={updateProject}
          />
        )}
      />
    </Switch>
  );
};

export default Pages;
