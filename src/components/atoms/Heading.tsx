import type { ElementType, ReactNode } from "react";

interface HeadingProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

const Heading = ({ as: Tag = "h1", children, className = "" }: HeadingProps) => {
  return (
    <Tag
      className={`font-headline-xl text-[clamp(32px,6vw,56px)] leading-[1.1] text-on-surface font-bold tracking-tight ${className}`}
    >
      {children}
    </Tag>
  );
};

export default Heading;