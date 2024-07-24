import Image from 'next/image'
import s from './Details.module.css'
import DetailOne from '../../assets/detalle_1.webp'
import Bell from '../../assets/campana.webp'
import { IoSearchOutline, IoChatboxEllipsesOutline  } from "react-icons/io5";
import { PiCarLight } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

export default function Details(){
    return(
        <section id='details' className={s.container}>
            <article className={s.content}>
                <Image src={DetailOne} alt='Buscar viaje' width={500} height={750} className={s.phoneDetail}/>
                <div className={s.textContainer}>
                    <div>
                        <div className={s.titleBell}>
                            <div className={s.divIcon}>
                                <IoSearchOutline size={24} color='white'/>
                            </div>
                            <h4>Buscá viajes más facilmente.</h4>
                        </div>
                        <p>¿Necesitas ir de una ciudad a otra? Nuestra aplicación te conecta con conductores y pasajeros que comparten rutas similares para el mismo lado. Encontra un viaje en cuestión de minutos.</p>
                    </div>
                    <div>
                        <div className={s.titleBell}>
                            <div className={s.divIcon}>
                                <PiCarLight size={24} color='white'/>
                            </div>
                            <h4>Conectá con viajeros de manera más rapida.</h4>
                        </div>
                        <p>Publicá tus intenciones de viajes para que otros usuarios las puedan encontrar.</p>
                    </div>
                </div>
            </article>
            <article className={s.content}>
                <div className={s.textContainerTwo}> 
                    <div>
                        <div className={s.titleBell}>
                            <h4>Aprovechá el chat integrado en la aplicación.</h4>
                            <div className={s.divIcon}>
                                <IoChatboxEllipsesOutline size={24} color='white'/>
                            </div>
                        </div>
                        <p>Programá los viajes de manera eficiente. Los pasajeros y los conductores pueden colaborar juntos en un solo chat para una planificación conveniente.</p>
                    </div>
                    <div>
                        <div className={s.titleBell}>
                            <h4>Viajá con confianza y tranquilidad.</h4>
                            <div className={s.divIcon}>
                                <CiUser size={24} color='white'/>
                            </div>
                        </div>
                        <p>En ViajAR, valoramos conocer a nuestros usuarios. Revisamos cuidadosamente las opiniones y perfiles de cada uno para que sepas con quién vas a compartir tu viaje. Podes reservar tu próximo trayecto con total seguridad y tranquilidad.</p>
                    </div>
                </div>
                <Image src={DetailOne} alt='Buscar viaje' width={500} height={750} className={s.phoneDetail}/>
            </article>
            <article className={s.contentNone}>
                <div className={s.textContainer}> 
                    <div>
                        <div className={s.titleBell}>
                            <div className={s.divIcon}>
                                <IoChatboxEllipsesOutline size={24} color='white'/>
                            </div>
                            <h4>Aprovechá el chat integrado en la aplicación.</h4>
                        </div>
                        <p>Programá los viajes de manera eficiente. Los pasajeros y los conductores pueden colaborar juntos en un solo chat para una planificación conveniente.</p>
                    </div>
                    <div>
                        <div className={s.titleBell}>
                            <div className={s.divIcon}>
                                <CiUser size={24} color='white'/>
                            </div>
                            <h4>Viajá con confianza y tranquilidad.</h4>
                        </div>
                        <p>En ViajAR, valoramos conocer a nuestros usuarios. Revisamos cuidadosamente las opiniones y perfiles de cada uno para que sepas con quién vas a compartir tu viaje. Podes reservar tu próximo trayecto con total seguridad y tranquilidad.</p>
                    </div>
                </div>
                <Image src={DetailOne} alt='Buscar viaje' width={500} height={750} className={s.phoneDetail}/>
            </article>
        </section>)
}
