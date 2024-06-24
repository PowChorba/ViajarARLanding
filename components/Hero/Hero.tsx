import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import s from './Hero.module.css'
import Phone from '../../assets/phone_hero.webp'

export default function Hero(){
    return(
        <section className={s.container}>
            <Navbar/>
            <div className={s.content}>
                <div className={s.titleHero}>
                    <h1>Una nueva forma de <strong>ViajAR</strong></h1>
                    <p>Conectá con conductores y pasajeros para compartir viajes de manera segura,  económica y conveniente.</p>
                    <button>Suscribirme</button>
                </div>
                <div className={s.imageHero}>
                    <Image src={Phone} alt='Telefono' width={760} height={760} className={s.phoneHero} loading="eager"/>
                    <video controls className={s.image} poster="caratula.JPG"><source src="video-proximamente.mp4" type="video/mp4"/></video> 
                </div>
            </div>
        </section>)
}