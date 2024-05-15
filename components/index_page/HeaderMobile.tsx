"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SIDENAV_ITEMS } from "@/utils/constants";
import { SideNavItem } from "@/utils/types";
import { Icon } from "@iconify/react";
import { motion, useCycle } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import { useScrollBlock } from "@/hooks/useScrollBlock";

type MenuItemWithSubMenuProps = {
  item: SideNavItem;
  toggleOpen: () => void;
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const HeaderMobile = () => {
  const pathname = usePathname();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    if (isOpen === true) blockScroll();
    else if (isOpen === false) allowScroll();
  }, [isOpen]);

  const MenuToggle = ({ toggle }: { toggle: any }) => (
    <button
      onClick={toggle}
      className="pointer-events-auto absolute right-7 top-[20px] z-[10]"
    >
      {isOpen === false ? (
        <>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className={`flex justify-center items-center gap-2 p-2 text-white border-white rounded cursor-pointer border`}
          >
            <p className="font-montserrat text-md">Meniu</p>
            <RxHamburgerMenu className="text-2xl" />
          </motion.div>
        </>
      ) : (
        <>
          <div
            className={`flex justify-center items-center gap-2 py-2 px-4 text-white border-white rounded cursor-pointer border`}
          >
            <IoMdClose className="text-2xl" />
          </div>
        </>
      )}
    </button>
  );

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className={`fixed inset-0 flex h-screen justify-center items-center z-50 w-full lg:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
      ref={containerRef}
    >
      <motion.div
        className="absolute hello inset-0 right-0 z-[9] w-full bg-black opacity-90 flex h-screen flex-col justify-center items-center"
        variants={sidebar}
      />
      <motion.ul
        variants={variants}
        className="THING absolute flex flex-col justify-center w-[80%] gap-3 px-10 py-16 overflow-y-auto"
      >
        {SIDENAV_ITEMS.map((item, idx) => {
          const isLastItem = idx === SIDENAV_ITEMS.length - 1; // Check if it's the last item

          return (
            <div key={idx} className="z-[10]">
              {item.submenu ? (
                <MenuItemWithSubMenu item={item} toggleOpen={toggleOpen} />
              ) : (
                <MenuItem>
                  <Link
                    href={item.path}
                    onClick={() => toggleOpen()}
                    className={`flex w-full text-xl text-white ${
                      item.path === pathname
                        ? "font-bold text-white"
                        : "text-white"
                    }`}
                  >
                    {item.title}
                  </Link>
                </MenuItem>
              )}

              {!isLastItem && (
                <MenuItem className="my-5">
                  <div className="navMenuLine w-full bg-cover bg-no-repeat h-[2px]" />
                </MenuItem>
              )}
            </div>
          );
        })}
      </motion.ul>
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};

export default HeaderMobile;

const MenuItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  );
};

const MenuItemWithSubMenu: React.FC<MenuItemWithSubMenuProps> = ({
  item,
  toggleOpen,
}) => {
  const pathname = usePathname();
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <>
      <MenuItem>
        <button
          className="flex w-full text-xl"
          onClick={() => setSubMenuOpen(!subMenuOpen)}
        >
          <div className="flex flex-row justify-between w-full items-center font-mustica">
            <span
              className={`${
                pathname.includes(item.path)
                  ? "font-bold font-mustica text-white"
                  : "text-white font-mustica"
              }`}
            >
              {item.title}
            </span>
            <div className={`${subMenuOpen && "rotate-180"}`}>
              <Icon
                icon="lucide:chevron-down"
                width="24"
                height="24"
                className="text-white"
              />
            </div>
          </div>
        </button>
      </MenuItem>
      <div className="mt-5 ml-2 flex flex-col space-y-6">
        {subMenuOpen && (
          <>
            {item.subMenuItems?.map((subItem, subIdx) => {
              return (
                <MenuItem key={subIdx}>
                  <Link
                    href={subItem.path}
                    onClick={() => toggleOpen()}
                    className={`text-white text-xl  ${
                      subItem.path === pathname
                        ? "font-bold text-white"
                        : "text-white"
                    }`}
                  >
                    {subItem.title}
                  </Link>
                </MenuItem>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return dimensions.current;
};
