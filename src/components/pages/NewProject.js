import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm';

import styles from './NewProject.module.css';

function NewProject() {

  const navigate = useNavigate();

  function createPost(project) {
    
    // Initialize cost and services
    project.cost = 0;
    project.service = [];
    

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        // redirect
        navigate('/projects', { state: true });
        
      })
      .catch(err => console.error(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
    </div>
  );
}

export default NewProject;