import { ReactNode } from "react";

export function InputRow({ children }: { children: ReactNode }) {
  return <div className="my-3 flex gap-3 w-full">{children}</div>;
}
