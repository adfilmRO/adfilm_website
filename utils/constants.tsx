import { Icon } from "@iconify/react";

import { SideNavItem } from "./types";

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Portofoliu",
    path: "/portofoliu",
    submenu: true,
    subMenuItems: [
      { title: "Video", path: "/portofoliu/video" },
      { title: "Podcast", path: "/portofoliu/podcast" },
      // { title: "Foto", path: "/portofoliu/foto" },
    ],
  },
  {
    title: "Contact",
    path: "/contact",
  },
];
