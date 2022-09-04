import React, { useEffect } from 'react'
import { Input, Button } from '../components'
import { fetchProjects } from '../services/project'

export const Login = () => {
  const [login, setLogin] = React.useState('')
  const [password, setPassword] = React.useState('')
  useEffect(() => {
    fetchProjects()
  }, [])
  const handleLogin = () => null
  return (
    <div className="w-screen h-screen">
      <div className="w-[500px] mx-auto glass flex flex-col gap-6 items-center p-4 mt-40">
        <Input
          label="Login"
          placeholder="Login"
          type="text"
          onChange={(e) => setLogin(e)}
        />
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e)}
        />
        <Button title="LogIn" onClick={handleLogin} />
      </div>
    </div>
  )
}
