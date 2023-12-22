import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "../app/components/Header/Header";
import { BodyGrid } from "../app/components/Body/Body";
import { FooterLinks } from "./components/Footer/FooterLinks";

export default function Home() {
  return (
    <div>
      <Header />
      <BodyGrid />
      <FooterLinks />
    </div>
  );
}
