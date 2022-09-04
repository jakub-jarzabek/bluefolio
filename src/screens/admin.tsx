import React from "react";
import { Button, AdminCard, FormModal } from "../components";

export const Admin = () => {
  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({
    title: "",
    url: "",
    imageUrl: "",
    description: "",
  });
  return (
    <div className="w-screen h-screen p-4 ">
      <div className="w-full flex flex-col gap-4 bg-light-honey p-4 rounded-xl mt-20">
        <div className="mb-10">
          <Button
            title="Add"
            onClick={() => {
              setModalData({
                title: "",
                url: "",
                imageUrl: "",
                description: "",
              });
              setOpen(true);
            }}
          />
        </div>
        <AdminCard
          title="test"
          _id="1231312321"
          handleEdit={() => {
            setModalData({
              title: "",
              url: "",
              imageUrl: "",
              description: "",
            });
            setOpen(true);
          }}
          handleDelete={() => null}
        />
        <AdminCard
          title="test"
          _id="1231312321"
          handleEdit={() => null}
          handleDelete={() => null}
        />
        <AdminCard
          title="test"
          _id="1231312321"
          handleEdit={() => null}
          handleDelete={() => null}
        />
      </div>
      {open && (
        <FormModal
          setOpen={(e) => setOpen(e)}
          title={modalData.title}
          url={modalData.url}
          imageUrl={modalData.imageUrl}
          description={modalData.description}
        />
      )}
    </div>
  );
};
