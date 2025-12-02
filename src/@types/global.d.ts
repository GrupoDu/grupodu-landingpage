declare module "swiper/css";
declare module "swiper/css/navigation";
declare module "swiper/css/pagination";
declare module "swiper/css/scrollbar";

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "@/app/globals.scss" {
  const content: string;
  export default content;
}

declare global {
  interface baseButton {
    children: React.ReactNode;
    border?: string;
    href?: string;
    click?: () => void;
    type: "button" | "link" | "submit";
  }

  interface IUserInfos {
    email: string;
    name: string;
    phone: string;
    company: string;
  }

  interface IContactInfos extends IUserInfos {
    message: string;
    subject: string;
  }
}

export {};
