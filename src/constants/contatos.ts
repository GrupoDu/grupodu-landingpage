import { Contato } from "@/@types/contatos";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import { MdOutlineEmail, MdOutlinePinDrop } from "react-icons/md";

export const contatos: Contato[] = [
  {
    tipo_contato: "Whatsapp",
    contato: "(81) 99904-0919",
    icon: FaWhatsapp,
  },
  {
    tipo_contato: "Telefone",
    contato: "(81) 2011-4432",
    icon: HiOutlinePhone,
  },
  {
    tipo_contato: "Email",
    contato: "dommetalind@gmail.com",
    icon: MdOutlineEmail,
  },
  {
    tipo_contato: "Localização",
    contato:
      "Av. Pan Nordestina, 655 - Varadouro, Olinda - PE, 53010-210, Brasil",
    icon: MdOutlinePinDrop,
  },
];
