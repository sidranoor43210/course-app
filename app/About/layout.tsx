import { ReactNode } from "react";

interface AboutLayoutProps {
  children: ReactNode;
}

const AboutLayout = ({ children }: AboutLayoutProps) => (
  <div>
    <h1>This is the About Layout</h1>
    {children}
  </div>
);

export default AboutLayout;
