import React from "react";
import { Button } from "..";

interface CardProps {
  title: string;
  imageUrl: string;
  onClick: () => void;
}
export const Card: React.FC<CardProps> = ({ imageUrl, title, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="w-80 flex flex-col shadow-md hover:shadow-2xl transition-all duration-300 rounded border-2 border-violet-spanish p-4 items-center bg-light-honey  cursor-pointer rainbow"
    >
      <img src={imageUrl} className="w-full h-40 rounded" />
      <h1 className="font-semibold text-2xl text-violet-russian tracking-widest mt-4">
        {title}
      </h1>
    </div>
  );
};

interface AdminCardProps {
  title: string;
  _id: string;
  handleEdit: () => void;
  handleDelete: () => void;
}
export const AdminCard: React.FC<AdminCardProps> = ({
  title,
  _id,
  handleEdit,
  handleDelete,
}) => {
  return (
    <div className="w-full flex flex-row shadow-md hover:shadow-2xl transition-all duration-300 rounded border-2 border-violet-spanish p-4 items-center justify-between">
      <h1 className="font-semibold text-xl tracking-wide text-violet-russian">
        {title}
      </h1>
      <div className="flex flex-row gap-4">
        <Button title="Edit" onClick={handleEdit} />
        <Button title="Delete" onClick={handleDelete} />{" "}
      </div>
    </div>
  );
};
