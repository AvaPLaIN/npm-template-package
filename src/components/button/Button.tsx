import React from "react";

interface IButtonProps {
  name: string;
}

const Button = ({ name }: IButtonProps) => {
  return <div>Button {name}</div>;
};

export default Button;
