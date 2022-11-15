import { useState } from "react";
import Link from "next/link";
import s from "./Header.module.scss";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div id="header" className={s.header}>
      <div className="container">
        <div
          className={`${s.toggle} ${menuActive ? s.toggleActive : ""}`}
          onClick={() => setMenuActive((prevState) => !prevState)}
        ></div>
        <nav className={`${s.nav}  ${menuActive ? s.menuActive : ""}`}>
          <ul className={s.list}>
            <li className={s.item}>
              <Link
                className={s.link}
                href="/"
                onClick={() => setMenuActive((prevState) => false)}
              >
                home
              </Link>
            </li>
            <li className={s.item}>
              <Link
                className={s.link}
                href="/#projects"
                scroll={false}
                onClick={() => setMenuActive((prevState) => false)}
              >
                projects
              </Link>
            </li>
            <li className={s.item}>
              <Link
                className={s.link}
                href="/#objects"
                scroll={false}
                onClick={() => setMenuActive((prevState) => false)}
              >
                objects
              </Link>
            </li>
            <li className={s.item}>
              <Link
                className={s.link}
                href="/#about"
                scroll={false}
                onClick={() => setMenuActive((prevState) => false)}
              >
                about
              </Link>
            </li>
            <li className={s.item}>
              <Link
                className={s.link}
                href="/#contact"
                scroll={false}
                onClick={() => setMenuActive((prevState) => false)}
              >
                contact
              </Link>
            </li>
          </ul>

          <ul className={s.list}>
            <li className={s.item}>
              <Link className={s.link} href="#">
                Eng
              </Link>
            </li>
            <li className={s.item}>
              <Link className={s.link} href="#">
                Geo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}