import Image from 'next/image'
import s from './Details.module.css'
import DetailOne from '../../assets/detalle_1.svg'
import Bell from '../../assets/campana.svg'

export default function Details(){
    return(
        <section className={s.container}>
            <article className={s.content}>
                <Image src={DetailOne} alt='Buscar viaje' width={550} height={550}/>
                <div className={s.textContainer}>
                    <div>
                        <div className={s.titleBell}>
                            <Image src={Bell} alt='Bell' width={48} height={48}/>
                            <h3>Buscá  viajes más facilmente.</h3>
                        </div>
                        <p>¡No más busquedas interminables en grupos de Facebook y Whatsapp! Con ViajAR, podés buscar viajes basados en tus preferencias de manera más practica.</p>
                    </div>
                    <div>
                        <div className={s.titleBell}>
                            <Image src={Bell} alt='Bell' width={48} height={48}/>
                            <h3>Conectá con viajeros de manera más rapida.</h3>
                        </div>
                        <p>Publicá tus intenciones de viajes para que otros usuarios las puedan encontrar.</p>
                    </div>
                </div>
            </article>
            <article className={s.content}>
                <div className={s.textContainer}> 
                    <div>
                        <div className={s.titleBell}>
                            <Image src={Bell} alt='Bell' width={48} height={48}/>
                            <h3>Aprovechá el chat integrado en la aplicación.</h3>
                        </div>
                        <p>Programá los viajes de manera eficiente. Los pasajeros y los conductores pueden colaborar juntos en un solo chat para una planificación conveniente.</p>
                    </div>
                    <div>
                        <div className={s.titleBell}>
                            <Image src={Bell} alt='Bell' width={48} height={48}/>
                            <h3>Viajá con confianza y tranquilidad.</h3>
                        </div>
                        <p>En ViajAR, valoramos conocer a nuestros usuarios. Revisamos cuidadosamente las opiniones y perfiles de cada uno para que sepas con quién vas a compartir tu viaje. Podes reservar tu próximo trayecto con total seguridad y tranquilidad.</p>
                    </div>
                </div>
                <Image src={DetailOne} alt='Buscar viaje' width={750} height={750}/>
            </article>
            <article>
                
            </article>
        </section>)
}
