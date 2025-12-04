export interface baseButton {
  children: React.ReactNode;
  border?: string;
  href?: string;
  click?: () => void;
  type: "button" | "link" | "submit";
}
