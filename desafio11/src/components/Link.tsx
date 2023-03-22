import { AnchorHTMLAttributes } from "react";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className">;

export function Link({ children, ...props }: LinkProps) {
  return (
    <a
      className="font-semibold text-violet-600 focus:outline-none focus:underline cursor-pointer"
      {...props}
    >
      {children}
    </a>
  );
}
