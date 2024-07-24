import Image from "next/image";
import LOGO from '../../assets/viajar.svg'
import s from './Footer.module.css'
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { AiFillTikTok } from "react-icons/ai";

export default function Footer(){
    return(
        <footer className={s.container}>
            <Image src={LOGO} alt='Logo' width={300} height={135} className={s.logo}/>
            <div className={s.content}>
                <h4>Contacto</h4>
                <div>
                <FaInstagram color="#56BBF1" size={20}/>
                    <Link href='https://www.instagram.com/viajar_app/' target="_onblank">Viajar_app</Link>
                </div>
                <div>
                <AiFillTikTok color="#56BBF1" size={20}/>
                <Link href='https://www.tiktok.com/@viajar_app' target="_onblank">Viajar_app</Link>
                </div>
                <div>
                <IoMailOutline color="#56BBF1" size={20}/>
                    <Link href='mailto:info@viajarapp.com'>info@viajarapp.com</Link>
                </div>
                {/* <p>&copy; 2024 Viajar - Todos los derechos reservados</p> */}
            </div>
        </footer>)
}