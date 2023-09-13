import { ReactNode } from "react";

interface Props {
  //every component by default have a property called children. This is to access the children values when the component is used
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  );
};

export default Alert;
