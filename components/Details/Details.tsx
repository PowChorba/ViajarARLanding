import Image from 'next/image'
import s from './Details.module.css'
import DetailOne from '../../assets/detalle_1.webp'
import Bell from '../../assets/campana.webp'

export default function Details(){
    return(
        <section id='details' className={s.container}>
            <article className={s.content}>
                <Image src={DetailOne} alt='Buscar viaje' width={500} height={750} className={s.phoneDetail}/>
                <div className={s.textContainer}>
                    <div>
                        <div className={s.titleBell}>
                            <Image src={Bell} alt='Bell' width={48} height={48}/>
                            <h4>Buscá  viajes más facilmente.</h4>
                        </div>
                        <p>¡No más busquedas interminables en grupos de Facebook y Whatsapp! Con ViajAR, podés buscar viajes basados en tus preferencias de manera más practica.</p>
                    </div>
                    <div>
                        <div className={s.titleBell}>
                            <Image src={Bell} alt='Bell' width={48} height={48}/>
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
                            <Image src={Bell} alt='Bell' width={48} height={48}/>
                        </div>
                        <p>Programá los viajes de manera eficiente. Los pasajeros y los conductores pueden colaborar juntos en un solo chat para una planificación conveniente.</p>
                    </div>
                    <div>
                        <div className={s.titleBell}>
                            <h4>Viajá con confianza y tranquilidad.</h4>
                            <Image src={Bell} alt='Bell' width={48} height={48}/>
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
                            <Image src={Bell} alt='Bell' width={48} height={48}/>
                            <h4>Aprovechá el chat integrado en la aplicación.</h4>
                        </div>
                        <p>Programá los viajes de manera eficiente. Los pasajeros y los conductores pueden colaborar juntos en un solo chat para una planificación conveniente.</p>
                    </div>
                    <div>
                        <div className={s.titleBell}>
                            <Image src={Bell} alt='Bell' width={48} height={48}/>
                            <h4>Viajá con confianza y tranquilidad.</h4>
                        </div>
                        <p>En ViajAR, valoramos conocer a nuestros usuarios. Revisamos cuidadosamente las opiniones y perfiles de cada uno para que sepas con quién vas a compartir tu viaje. Podes reservar tu próximo trayecto con total seguridad y tranquilidad.</p>
                    </div>
                </div>
                <Image src={DetailOne} alt='Buscar viaje' width={500} height={750} className={s.phoneDetail}/>
            </article>
        </section>)
}
