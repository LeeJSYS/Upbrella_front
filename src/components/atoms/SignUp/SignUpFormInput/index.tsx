import { ChangeEvent } from "react";

export type SignUpFormInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const SignUpFormInput = ({ label, name, value, onChange }: SignUpFormInputProps) => {
  return (
    <input
      className="flex items-center justify-start w-full h-48 p-12 text-15 text-gray-700 leading-22 font-normal placeholder-gray-400 placeholder:text-15 rounded-8 border border-solid border-gray-300 focus:outline-none"
      placeholder={label}
      type="text"
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default SignUpFormInput;
