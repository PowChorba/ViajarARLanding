import Image from "next/image";
import LOGO from '../../assets/viajar.svg'
import PHONE from '../../assets/instagram.svg'
import MAIL from '../../assets/mail.webp'
import s from './Footer.module.css'
import Link from "next/link";

export default function Footer(){
    return(
        <footer className={s.container}>
            <Image src={LOGO} alt='Logo' width={300} height={135} className={s.logo}/>
            <div className={s.content}>
                <h4>Contacto</h4>
                <div>
                    <Image src={PHONE} alt='Icono telefono' width={30} height={30}/>
                    <Link href='https://www.instagram.com/viajar_app/' target="_onblank">ViajarAR_app</Link>
                </div>
                <div>
                    <Image src={MAIL} alt='Icono telefono' width={30} height={30}/>
                    <Link href='mailto:info@viajarapp.com'>info@viajar.com</Link>
                </div>
                {/* <p>&copy; 2024 Viajar - Todos los derechos reservados</p> */}
            </div>
        </footer>)
}