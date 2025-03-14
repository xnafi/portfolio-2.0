/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useController, Control } from "react-hook-form";

interface InputFieldProps {
  control: Control<any>;
  name: string;
  placeholder: string;
  type: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  control,
  name,
  placeholder,
  type,
  required = false,
}) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name,
    rules: { required: required ? `${placeholder} is required` : false },
  });

  return (
    <div className="space-y-2">
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        className="input-field w-full !py-2 !px-0 my-2 !focus:outline-none !focus:ring-0"
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
};

export default InputField;
