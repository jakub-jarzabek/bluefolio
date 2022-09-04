import { API, graphqlOperation } from 'aws-amplify'
import { listProjects } from '../graphql/queries'
import {
  createProject,
  deleteProject,
  updateProject,
} from '../graphql/mutations'
import {
  CreateProjectInput,
  DeleteProjectInput,
  UpdateProjectInput,
} from '../API'
export async function fetchProjects() {
  try {
    const projects = await API.graphql(graphqlOperation(listProjects))
    console.log(projects)
  } catch (err) {
    console.log('Error fetching projects')
  }
}
export async function addProject({
  title,
  description,
  repoUrl,
  imageUrl,
}: CreateProjectInput) {
  try {
    await API.graphql(
      graphqlOperation(createProject, {
        input: { title, description, repoUrl, imageUrl },
      })
    )
  } catch (err) {
    console.log('error creating Project:', err)
  }
}
export async function editProject({
  id,
  title,
  description,
  repoUrl,
  imageUrl,
}: UpdateProjectInput) {
  try {
    await API.graphql(
      graphqlOperation(updateProject, {
        input: { id, title, description, repoUrl, imageUrl },
      })
    )
  } catch (err) {
    console.log('error editing Project:', err)
  }
}

export async function removeProject({ id }: DeleteProjectInput) {
  try {
    await API.graphql(
      graphqlOperation(deleteProject, {
        input: { id },
      })
    )
  } catch (err) {
    console.log('error removing project:', err)
  }
}
