import Image from "next/image";
import s from "./page.module.css";
import Logo from '../assets/logo.webp'
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Details from "@/components/Details/Details";
import Benefits from "@/components/Benefits/Benefits";
import Carrousel from "@/components/Carrousel/Carrousel";
import Faq from "@/components/Faq/Faq";
import Suscription from "@/components/Suscription/Suscription";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <main className={s.container}>
        <Hero/>
        <Details/>
        <Carrousel/>
        <Benefits/>
        <Suscription/>
        <Faq/>
      </main>
      <Footer/>
    </>
  );
}
