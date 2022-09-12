import React, { useState, useEffect } from 'react'
import { Button, Input } from '..'
import { BsGithub } from 'react-icons/bs'
import { addProject, editProject } from '../../services/project'
import { toast } from 'react-toastify'
import { fadeIn, fadeOut } from 'react-animations'
// @ts-ignore
import Radium, { StyleRoot } from 'radium'
import { useNavigate } from 'react-router-dom'

const styles = {
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
  },
  fadeOut: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeOut, 'fadeOut'),
  },
}

interface ModalProps {
  setOpen: (_: boolean) => void
  children: React.ReactNode
  testID?:string
}

export const Modal: React.FC<ModalProps> = ({ setOpen, children }) => {
  const [animation, setAnimation] = useState(styles.fadeIn)

  const handleSetOpen = () => {
    setAnimation(styles.fadeOut)
    setTimeout(() => {
      setOpen(false)
    }, 900)
  }
  return (
    <StyleRoot>
      <div
        className="fixed top-0 left-0 w-screen h-screen z-50"
        style={animation as any}
      >
        <div
          className="absolute top-0 left-0 w-screen h-screen bg-gray-900 opacity-40 z-10 blur"
          onClick={handleSetOpen}
        ></div>

        <div className="relative  z-20 w-[600px] mt-20 mx-auto bg-light-timber rounded-xl shadow-2xl p-4 glass">
          {children}
        </div>
      </div>
    </StyleRoot>
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
  console.log({ description })
  const handleClick = () => {
    window.location = url as Location & string
  }
  return (
    <Modal setOpen={setOpen}>
      <div className="flex flex-col items-center gap-2 overflow-hidden p-4 pb-10">
        <h1 className="text-violet-russian text-xl font-semibold tracking-wide self-start mb-6">
          {title}
        </h1>
        <img src={imageUrl} className="w-full rounded h-auto" />
        <p className="text-md text-light-honey my-4 w-full">{description}</p>
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
  const [title, setTitle] = useState(propsTitle ?? '')
  const [desc, setDesc] = useState(description ?? '')
  const [url, setUrl] = useState(propsUrl ?? '')
  const [imgSrc, setImgSrc] = useState(imageUrl ?? '')

  const handleAdd = async () => {
    await addProject({
      title,
      description: desc,
      repoUrl: url,
      imageUrl: imgSrc,
    })
    toast.success('Pomyslnie dodano projekt')
  }
  const handleUpdate = async () => {
    await editProject({
      title,
      description: desc,
      repoUrl: url,
      imageUrl: imgSrc,
      id: id ?? '',
    })
    toast.success('Pomyslnie zaktualizowano projekt')
  }

  return (
    <Modal data-testID={testID} setOpen={setOpen}>
      <div 
        className="flex flex-col items-center gap-2 overflow-hidden ">
        <Input
          label="Title"
          onChange={(e) => setTitle(e)}
          value={title}
          placeholder="Title"
          type="text"
        />
        <Input
          label="Repo Url"
          onChange={(e) => setUrl(e)}
          placeholder="Repo Url"
          type="text"
          value={url}
        />

        <Input
          label="Image Url"
          onChange={(e) => setImgSrc(e)}
          placeholder="Image Src"
          type="text"
          value={imgSrc}
        />

        <Input
          label="Description"
          onChange={(e) => setDesc(e)}
          placeholder="Description"
          type="textarea"
          value={desc}
        />

        <Button
          title={id ? 'Edit' : 'Add'}
          onClick={id ? handleUpdate : handleAdd}
        />
      </div>
    </Modal>
  )
}
