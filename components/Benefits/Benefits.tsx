import s from './Benefits.module.css'
import SECURITY from '../../assets/seguridad.webp'
import AHORRO from '../../assets/ahorro.webp'
import AMISTAD from '../../assets/amistad.webp'
import ESTRELLA from '../../assets/estrella.webp'
import CONDUCTOR from '../../assets/conductor.webp'
import PREFERENCIAS from '../../assets/preferencias.webp'
import Image from 'next/image'

export default function Benefits(){
    return(
        <section id='benefits' className={s.container}>
            <h2 className={s.mainTitle}>Beneficios de ViajAR</h2>
            <article className={s.content}>
                <div>
                    <Image src={SECURITY} alt='Icono seguridad' width={90} height={90} className={s.icon}/>
                    <h4 className={s.title}>Seguridad</h4>
                    <p className={s.description}>ViajAR App tiene como objetivo crear una comunidad de carpooling segura y confiable.</p>
                </div>
                <div>
                    <Image src={AHORRO} alt='Icono ahorro' width={90} height={90} className={s.icon}/>
                    <h4 className={s.title}>Ahorro</h4>
                    <p className={s.description}>Ahorrá dinero compartiendo gastos de viaje con otras personas que van en tu misma dirección.</p>
                </div>
                <div>
                    <Image src={AMISTAD} alt='Icono amistad' width={90} height={90} className={s.icon}/>
                    <h4 className={s.title}>Amistad</h4>
                    <p className={s.description}>Conocé gente nueva y hacé amigos mientras viajas de manera segura y cómoda.</p>
                </div>
                <div>
                    <Image src={ESTRELLA} alt='Icono estrella' width={90} height={90} className={s.icon}/>
                    <h4 className={s.title}>Sistema de Puntuación</h4>
                    <p className={s.description}>Conoce las opiniones de otros usuarios antes de iniciar tu viaje. Comparte tu experiencia con la comunidad calificando al conductor como pasajero y a los pasajeros como conductor.</p>
                </div>
                <div>
                    <Image src={CONDUCTOR} alt='Icono conductor' width={90} height={90} className={s.icon}/>
                    <h4 className={s.title}>Conductores y Pasajeros Verificados</h4>
                    <p className={s.description}>Nos comprometemos a hacer de ViajAR una comunidad más segura verificando la documentación de conductores y pasajeros al registrarse.</p>
                </div>
                <div>
                    <Image src={PREFERENCIAS} alt='Icono preferencias' width={90} height={90} className={s.icon}/>
                    <h4 className={s.title}>Preferencias Personales</h4>
                    <p className={s.description}>Al permitir que los pasajeros y conductores compartan sus preferencias personales, ViajAR busca crear una comunidad de carpooling social y amigable.</p>
                </div>
            </article>
        </section>)
}