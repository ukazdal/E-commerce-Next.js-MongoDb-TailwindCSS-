"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface IInput {
  id: string;
  placeholder?: string;
  disabled?: boolean;
  type: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  label?: string;
}

const Input: React.FC<IInput> = ({
  id,
  placeholder,
  disabled,
  type,
  required,
  register,
  errors,
  label,
}) => {
  return (
    <div className="mb-3">
      <label
        htmlFor="first-name"
        className="block text-sm font-medium text-white mb-1"
      >
        {label}
      </label>
      <input
        className={`${
          errors[id] ? "border-red-500" : ""
        } w-full p-2 border border-gray-300 rounded-md focus:outline-none`}
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        {...register(id, { required })}
      />
    </div>
  );
};

export default Input;
