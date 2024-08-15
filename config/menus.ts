
import {
  Application,
 
  DashBoard,
 
  Graph,
  ClipBoard,
  Cart,
  Envelope,
  Messages,
  Monitor,
  ListFill,
  Calendar,
 
} from "@/components/svg";


export interface MenuItemProps {
  title: string;
  icon: any;
  href?: string;
  child?: MenuItemProps[];
  megaMenu?: MenuItemProps[];
  multi_menu? : MenuItemProps[]
  nested?: MenuItemProps[]
  onClick: () => void;

  
}

export const menusConfig = {
  mainNav: [
    
  ],
  sidebarNav: {
    modern: [
      {
        title: "Dashboard",
        icon: DashBoard,
        child: [
          {
            title: "Analytics",
            href: "/dashboard",
            icon: Graph,
          },
          {
            title: "Ecommerce",
            href: "/ecommerce",
            icon: Cart,
          },
          {
            title: "project ",
            href: "/project",
            icon: ClipBoard,
          },
        ],
      },
      {
        title: "Application",
        icon: Application,
        child: [
          {
            title: "chat",
            icon: Messages,
            href: "/chat",
          },
          {
            title: "email",
            icon: Envelope,
            href: "/email",
          },
          {
            title: "kanban",
            icon: Monitor,
            href: "/kanban",
          },
          {
            title: "task",
            icon: ListFill,
            href: "/task",
          },
          {
            title: "calendar",
            icon: Calendar,
            href: "/calendar",
          },

          {
            title: "project",
            icon: ClipBoard,
            nested: [
              {
                title: "project List",
                icon: ClipBoard,
                href: "/projects",
              },
              {
                title: "project Details",
                icon: ClipBoard,
                href: "/projects/76b99e8a-4d5e-4818-92cb-7932a5b8f42a/overview",
              },
            ],
          },
        ],
      },
       
    ],
    classic: [
      {
        isHeader: true,
        title: "menu",
      },
      {
        title: "Dashboard",
        icon: DashBoard,
        href: "/dashboard",
       
        
        child: [
          {
            title: "Analytics",
            href: "/dashboard",
            icon: Graph,
          },
          {
            title: "Ecommerce",
            href: "/ecommerce",
            icon: Cart,
          },
          {
            title: "Project ",
            href: "/project",
            icon: ClipBoard,
          },
        ],
      },
      {
        isHeader: true,
        title: "Application",
      },
      {
        title: "chat",
        icon: Messages,
        href: "/chat",
      },
      {
        title: "email",
        icon: Envelope,
        href: "/email",
      },
      {
        title: "kanban",
        icon: Monitor,
        href: "/kanban",
      },
      {
        title: "task",
        icon: ListFill,
        href: "/task",
      },
      {
        title: "calendar",
        icon: Calendar,
        href: "/calendar",
      },

      {
        title: "project",
        icon: ClipBoard,
        href: "/projects",
      },

      {
        isHeader: true,
        title: "Pages",
      },
     
    ],
  },
};


export type ModernNavType = (typeof menusConfig.sidebarNav.modern)[number]
export type ClassicNavType = (typeof menusConfig.sidebarNav.classic)[number]
export type MainNavType = (typeof menusConfig.mainNav)[number]