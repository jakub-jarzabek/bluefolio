import { withAuthenticator } from '@aws-amplify/ui-react'
import React, { useEffect, useState } from 'react'
import { Button, AdminCard, FormModal } from '../components'
import { fetchProjects, removeProject } from '../services/project'
import { toast } from 'react-toastify'
interface ProjectType {
  id: string
  description: string
  imageUrl: string
  repoUrl: string
  title: string
}
const Admin = () => {
  const [projects, setProjects] = useState<ProjectType[]>([])
  useEffect(() => {
    ;(async function getProjects() {
      const data = await fetchProjects()
      console.log(data)
      setProjects((data as any)?.data?.listProjects?.items as ProjectType[])
    })()
  }, [])
  const [open, setOpen] = React.useState(false)
  const [modalData, setModalData] = React.useState({
    title: '',
    url: '',
    imageUrl: '',
    description: '',
    id: '',
  })

  const handleDelete = async (id: string) => {
    await removeProject({ id })
    toast.success('Pomyslnie usunieto projekt')
    setProjects(projects.filter((_) => _.id !== id))
  }

  return (
    <div className="w-screen h-screen p-4 ">
      <div className="w-full flex flex-col gap-4 bg-light-honey p-4 rounded-xl mt-20">
        <div className="mb-10">
          <Button
            title="Add"
            onClick={() => {
              setModalData({
                title: '',
                url: '',
                imageUrl: '',
                description: '',
                id: '',
              })
              setOpen(true)
            }}
          />
        </div>
        {projects &&
          projects.map((_, i) => (
            <AdminCard
              title={_.title}
              _id={_.id}
              handleEdit={() => {
                setModalData({
                  title: _.title,
                  url: _.repoUrl,
                  imageUrl: _.imageUrl,
                  description: _.description,
                  id: _.id,
                })
                setOpen(true)
              }}
              handleDelete={() => handleDelete(_.id)}
            />
          ))}
      </div>
      {open && (
        <FormModal
          setOpen={(e) => setOpen(e)}
          title={modalData.title}
          url={modalData.url}
          imageUrl={modalData.imageUrl}
          description={modalData.description}
          id={modalData.id}
        />
      )}
    </div>
  )
}
export default withAuthenticator(Admin, { hideSignUp: true })
