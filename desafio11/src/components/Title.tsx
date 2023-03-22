import { ReactNode } from "react";

export function Title({ children }: { children: ReactNode }) {
  return <h1 className="font-bold text-3xl">{children}</h1>;
}
