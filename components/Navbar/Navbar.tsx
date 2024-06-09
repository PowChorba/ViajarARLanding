import Image from "next/image";
import Logo from '../../assets/logo.svg'
import s from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={s.container}>
        <Image src={Logo} alt='Logo' width={160} height={75}/>
        <div className={s.links}>
            <p>Sobre la app</p>
            <p>Beneficios</p>
            <p>FAQ</p>
        </div>
        <button className={s.button}>Suscribirme</button>
    </nav>
  );
}


