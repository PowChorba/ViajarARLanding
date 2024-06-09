import Image from "next/image";
import s from "./page.module.css";
import Logo from '../assets/logo.svg'
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Details from "@/components/Details/Details";

export default function Home() {
  return (
    <main className={s.container}>
      <Hero/>
      <Details/>
    </main>
  );
}
