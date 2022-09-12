import { Auth } from 'aws-amplify'
export const login = async (username: string, password: string) => {
  await Auth.signIn(username, password)
}
