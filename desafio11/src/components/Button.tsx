import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type ButtonType = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
  buttonType: "primary" | "ghost";
  size?: "sm" | "md" | "lg" | "full";
};

export function Button({ size = "full", buttonType, ...props }: ButtonType) {
  return (
    <button
      className={clsx("rounded font-semibold", {
        "w-full p-3": size === "full",
        "w-fit px-2 py-1 text-sm": size === "sm",
        "text-white bg-violet-600 focus:outline-2 focus:outline-violet-600 outline-offset-4":
          buttonType === "primary",
        "text-violet-600 focus:outline-2 focus:outline-violet-600 outline-offset-4":
          buttonType === "ghost",
      })}
      {...props}
    ></button>
  );
}
