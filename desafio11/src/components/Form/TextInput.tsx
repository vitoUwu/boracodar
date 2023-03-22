import { Eye, EyeSlash } from "phosphor-react";
import React, { InputHTMLAttributes, MouseEvent, useState } from "react";

export const TextInput = React.forwardRef<
  HTMLInputElement,
  Omit<InputHTMLAttributes<HTMLInputElement>, "className">
>(({ type, ...props }, ref) => {
  const [hideContent, setHideContent] = useState(type === "password");

  function handleHideClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setHideContent((state) => !state);
  }

  const ButtonIcon = hideContent ? EyeSlash : Eye;

  return (
    <div className="relative">
      <input
        ref={ref}
        className="aria-[invalid='true']:outline-red-600 aria-[invalid='true']:outline aria-[invalid='true']:outline-2 placeholder:text-gray-400 py-4 px-3 rounded border border-gray-200 w-full focus:outline-violet-600"
        type={type === "password" && hideContent ? "password" : "text"}
        {...props}
      />
      {type === "password" ? (
        <button onClick={handleHideClick} tabIndex={-1}>
          <ButtonIcon
            size={22}
            className="text-gray-400 absolute right-4 top-1/2 -translate-y-1/2"
          />
        </button>
      ) : null}
    </div>
  );
});
