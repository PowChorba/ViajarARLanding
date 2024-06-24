import Image from "next/image";
import Logo from '../../assets/logo.webp'
import s from './Navbar.module.css'
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={s.container}>
        <Image src={Logo} alt='Logo' width={160} height={75} className={s.imgReponsive}/>
        <div className={s.links}>
            <Link href='#details'>Sobre la app</Link>
            <Link href='#benefits'>Beneficios</Link>
            <Link href='#faq'>FAQ</Link>
        </div>
        <button className={s.button}><Link href='#suscribirse'>Suscribirme</Link></button>
    </nav>
  );
}


