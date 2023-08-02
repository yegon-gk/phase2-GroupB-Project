import { HiHome } from "react-icons/hi";
import { FiInfo } from "react-icons/fi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";

export const MenuItems = [
  {
    title: "Home",
    url: "/",
    icon: <HiHome />,
  },
  {
    title: "About",
    url: "/About",
    icon: <FiInfo />,
  },
  {
    title: "Service",
    url: "/Service",
    icon: <RiCustomerService2Fill />,
  },
  {
    title: "Contact",
    url: "/Contact",
    icon: <IoMdContact />,
  },
];
