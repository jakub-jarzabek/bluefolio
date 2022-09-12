import { API, Auth, graphqlOperation } from 'aws-amplify'
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
    const projects = await API.graphql({
      query: listProjects,
      authMode: 'API_KEY',
    })
    return projects
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
    const auth = await Auth.currentSession()
    const token = auth.getAccessToken().getJwtToken()
    console.log({ token })
    await API.graphql({
      query: createProject,
      variables: { input: { title, description, repoUrl, imageUrl } },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      authToken: token,
    })
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
    const auth = await Auth.currentSession()
    const token = auth.getAccessToken().getJwtToken()
    await API.graphql({
      query: updateProject,
      variables: { input: { title, description, repoUrl, imageUrl, id } },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      authToken: token,
    })
  } catch (err) {
    console.log('error editing Project:', err)
  }
}

export async function removeProject({ id }: DeleteProjectInput) {
  try {
    const auth = await Auth.currentSession()
    const token = auth.getAccessToken().getJwtToken()
    await API.graphql({
      query: deleteProject,
      variables: { input: { id } },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
      authToken: token,
    })
  } catch (err) {
    console.log('error removing project:', err)
  }
}
