import clsx from "clsx";
import { container, type ContainerVariants } from "./Container.css";

type ContainerProps = React.ComponentPropsWithoutRef<"div"> & ContainerVariants;

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={clsx(container(), className)} {...props}>
      {children}
    </div>
  );
}
