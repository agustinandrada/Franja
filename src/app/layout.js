import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Franja App",
  description: "App developer by Agustin Andrada",
};

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Franja App</title>
      </head>
      <body className={inter.className}>
        <header>
          <nav>
            <ul className={styles.nav}>
              {links.map(({ label, route }) => (
                <li key={route} className={styles.buttonNav}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
        <a href="https://www.linkedin.com/in/agustinandrada-fwd/">
          <footer className={styles.footer}>
            App developed by
            {" Agustin Andrada "}
          </footer>
        </a>
      </body>
    </html>
  );
}
