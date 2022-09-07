import React, { useState } from 'react'
import { Button, Input } from '..'
import { BsGithub } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { addProject, editProject } from '../../services/project'
import { updateProject } from '../../graphql/mutations'

interface ModalProps {
  setOpen: (_: boolean) => void
  children: React.ReactNode
  testID?:string
}
export const Modal: React.FC<ModalProps> = ({ setOpen, children, testID }) => {
  return (
    <div 
      data-testID={testID}
      className="fixed top-0 left-0 w-screen h-screen">
      <div
        className="absolute top-0 left-0 w-screen h-screen bg-gray-900 opacity-30 z-10 blur"
        onClick={() => setOpen(false)}
      ></div>

      <div className="relative z-20 w-[600px] mt-20 mx-auto bg-light-timber rounded-xl shadow-2xl p-4">
        {children}
      </div>
    </div>
  )
}

interface ProjectModalProps {
  title: string
  url: string
  imageUrl: string
  description: string
  testID?:string
  setOpen: (_: boolean) => void
}
export const ProjectModal: React.FC<ProjectModalProps> = ({
  title,
  url,
  imageUrl,
  description,
  testID,
  setOpen,
}) => {
  const handleClick = () => {
    return null
  }
  return (
    <Modal setOpen={setOpen}>
      <div className="flex flex-col items-center gap-2 overflow-hidden ">
        <h1 className="text-violet-russian text-xl font-semibold tracking-wide self-start mb-6">
          {title}
        </h1>
        <img src={imageUrl} className="w-full rounded h-auto" />
        <p className="text-md text-violet-russian my-4 w-full">{description}</p>
        <Button
          title="Repo"
          onClick={handleClick}
          Icon={
            <BsGithub
              color="white"
              size="16px"
              style={{ marginRight: '8px' }}
            />
          }
        />
      </div>
    </Modal>
  )
}

interface FormModalProps {
  id?: string
  testID?: string
  title: string
  url: string
  imageUrl: string
  description: string
  setOpen: (_: boolean) => void
}
export const FormModal: React.FC<FormModalProps> = ({
  title: propsTitle,
  url: propsUrl,
  imageUrl,
  description,
  setOpen,
  id,
  testID,
}) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [url, setUrl] = useState('')
  const [imgSrc, setImgSrc] = useState('')
  const handleAdd = async () => {
    await addProject({
      title,
      description: desc,
      repoUrl: url,
      imageUrl: imgSrc,
    })
  }
  const handleUpdate = async () => {
    await editProject({
      title,
      description: desc,
      repoUrl: url,
      imageUrl: imgSrc,
      id: id ?? '',
    })
  }

  return (
    <Modal data-testID={testID} setOpen={setOpen}>
      <div 
        className="flex flex-col items-center gap-2 overflow-hidden ">
        <Input
          label="Title"
          onChange={(e) => setTitle(e)}
          placeholder="Title"
          type="text"
        />
        <Input
          label="Repo Url"
          onChange={(e) => setUrl(e)}
          placeholder="Repo Url"
          type="text"
        />

        {imageUrl ? (
          <img
            src={imageUrl}
            className="w-32 h-32 bg-light-honey border border-violet-russian shadow-md rounded-xl cursor-pointer hover:shadow-2xl transition-all duration-300"
          />
        ) : (
          <div className="w-32 h-32 bg-light-honey border border-violet-russian shadow-md rounded-xl flex flex-col justify-center items-center cursor-pointer hover:shadow-2xl transition-all duration-300">
            <AiOutlinePlus size="32px" color="#23022E" />
          </div>
        )}

        <Input
          label="Description"
          onChange={(e) => setDesc(e)}
          placeholder="Description"
          type="textarea"
        />

        <Button
          title={id ? 'Edit' : 'Add'}
          onClick={id ? handleUpdate : handleAdd}
        />
      </div>
    </Modal>
  )
}
