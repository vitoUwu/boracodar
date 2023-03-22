import { ReactNode } from "react";

export function InputCol({ children }: { children: ReactNode }) {
  return <div className="flex-col gap-1 items-end w-full">{children}</div>;
}
