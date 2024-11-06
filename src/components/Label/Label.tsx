import { PropsWithChildren } from "react";

interface LabelProps {
  htmlFor: string;
}

const Label = ({ htmlFor, children }: PropsWithChildren<LabelProps>) => {
  return (
    <label className="w-40 h-10 bg-secondary-strong" htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default Label;
