import React from 'react'
import { Button, Card, ProjectModal } from '../components'
import { listProjects } from '../graphql/queries'

export const Home = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null)
  const [open, setOpen] = React.useState(false)
  const [modalData, setModalData] = React.useState({
    title: '',
    url: '',
    imageUrl: '',
    description: '',
  })
  return (
    <div className="w-screen  bg-gradient-to-r from-violet-spanish to-violet-russian flex flex-col items-center px-8 pb-10">
      <div className="w-screen h-[800px] flex flex-col items-center justify-center">
        <h1 className="text-light-timber text-xl font-semibold mb-20 text-center">
          Hi I'm Kacper Biegajlo Automation Testeser with passion for coding and
          cat girls. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged
        </h1>
        <div className="w-60">
          <Button
            title="Projects"
            onClick={() =>
              sectionRef &&
              sectionRef?.current?.scrollIntoView({ behavior: 'smooth' })
            }
          />
        </div>
      </div>
      <div
        className="w-screen flex flex-row justify-around gap-10  flex-wrap items-center px-10 pt-16"
        ref={sectionRef}
      >
        <Card
          title="Test"
          imageUrl="https://streamsentials.com/wp-content/uploads/2021/01/pepehands-transparent-pic.png"
          onClick={() => {
            setModalData({
              title: 'test',
              imageUrl:
                'https://streamsentials.com/wp-content/uploads/2021/01/pepehands-transparent-pic.png',
              url: 'https://google.com',
              description: 'asdadasfsddfg dfgd gdsfg dsfg dsgdsgdfs g',
            })
            setOpen(true)
          }}
        />
        {open && (
          <ProjectModal
            setOpen={(e) => setOpen(e)}
            title={modalData.title}
            url={modalData.url}
            imageUrl={modalData.imageUrl}
            description={modalData.description}
          />
        )}
      </div>
    </div>
  )
}
