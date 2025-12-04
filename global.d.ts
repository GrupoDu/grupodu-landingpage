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
  interface IUserInfos {
    email: string;
    name: string;
    phone: string;
    company: string;
  }

  interface IProduct {
    id: number;
    name: string;
    description: string;
    product_type: string;
    image: StaticImageData;
    features: string[];
  }
}

export {};
