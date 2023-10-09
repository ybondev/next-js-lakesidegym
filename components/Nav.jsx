"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const navbar_links = [
  {
    id: 1,
    path: "home",
    link: "home",
  },
  {
    id: 2,
    path: "about_us",
    link: "about us",
  },
  {
    id: 3,
    path: "services",
    link: "services",
  },
  {
    id: 4,
    path: "plan",
    link: "plan",
  },
  {
    id: 5,
    path: "contact_us",
    link: "contact",
  },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const sticky = useRef();

  useEffect(() => {
    const navbarHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", navbarHandler);

    return () => {
      document.removeEventListener("mousedown", navbarHandler);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", function () {
      sticky.current.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);
  return (
    <div className="container-fluid navbar_fluid sticky-top" ref={sticky}>
      <div className="container">
        <nav className="navbar" ref={menuRef}>
          <Link href={`#home`}>
            <Image
              src={"./assets/logo-1516c06a.png"}
              width={100}
              height={0}
              alt=""
              className="img-fluid"
            />
          </Link>
          <ul className={open ? "active" : "inactive"}>
            {navbar_links &&
              navbar_links.map((x) => {
                return (
                  <li key={x.id}>
                    <Link href={`#${x.path}`} className="link_item">
                      {x.link}
                    </Link>
                  </li>
                );
              })}
          </ul>
          <div className="hamburger_menu" onClick={() => setOpen(!open)}>
            {open ? (
              <IoCloseSharp className="fa_icon" />
            ) : (
              <FaBars className="fa_icon" />
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
