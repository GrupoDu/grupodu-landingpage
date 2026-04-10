import { ReactNode } from "react";

export interface BaseButton {
  children: ReactNode;
  border?: string;
  href?: string;
  click?: () => void;
  type: "button" | "link" | "submit";
}
