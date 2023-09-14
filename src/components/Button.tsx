import React from "react";

interface Props {
  text: string;
  color?: "primary" | "secondary" | "danger"; // ? means optional, type is enum kind
  onClick: () => void;
}

const Button = ({ text, color = "primary", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
