import Image from "next/image";
import LOGO from '../../assets/viajar.svg'
import PHONE from '../../assets/phone.webp'
import MAIL from '../../assets/mail.webp'
import s from './Footer.module.css'

export default function Footer(){
    return(
        <footer className={s.container}>
            <Image src={LOGO} alt='Logo' width={300} height={135} className={s.logo}/>
            <div className={s.content}>
                <h4>Contacto</h4>
                <div>
                    <Image src={PHONE} alt='Icono telefono' width={30} height={30}/>
                    <p>+54 11 1234 5678</p>
                </div>
                <div>
                    <Image src={MAIL} alt='Icono telefono' width={30} height={30}/>
                    <p>info@viajar.com</p>
                </div>
                {/* <p>&copy; 2024 Viajar - Todos los derechos reservados</p> */}
            </div>
        </footer>)
}