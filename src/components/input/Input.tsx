import React from "react";

interface InputProps {
  label?: string;
  placeholder: string;
  onChange: (_: string) => void;
  type: "text" | "password" | "textarea";
}
export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  onChange,
  type,
}) => {
  return (
    <div className='w-full'>
      {label && (
        <label
          htmlFor="price"
          className="block text-sm font-medium text-violet-spanish"
        >
          {label}
        </label>
      )}
      <div className="relative mt-1 rounded shadow-sm">
        {type === "textarea" ? (
          <textarea
            onChange={(e) => onChange(e.target.value)}
            className="block w-full rounded border-violet-russian px-2 focus:border-violet-russian focus:via-violet-russian sm:text-sm"
            placeholder={placeholder}
          />
        ) : (
          <input
            onChange={(e) => onChange(e.target.value)}
            type={type}
            className="block w-full rounded border-violet-russian px-2 focus:border-violet-russian focus:via-violet-russian sm:text-sm"
            placeholder={placeholder}
          />
        )}
      </div>
    </div>
  );
};
