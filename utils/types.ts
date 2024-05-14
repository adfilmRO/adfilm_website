export type SideNavItem = {
    title: string;
    path: string;
    icon?: JSX.Element;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
  };

  export type StaffCardProps = {
    name: string;
    image_src: string;
    instagramLink: string;
    position: string;
  }
  
  export type VideoCardProps = {
    title: string;
    youtube_link: string;
  }
