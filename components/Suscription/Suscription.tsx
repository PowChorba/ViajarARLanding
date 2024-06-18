import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Checkbox} from "@nextui-org/checkbox";
import ARROW from '../../assets/arrow-left.webp'
import Image from "next/image";
import s from './Suscription.module.css'


export default function Suscription(){

    const arrowIcon = () => {
        return <Image src={ARROW} alt='Arrow' width={15} height={15}/>
    }

    return(
        <section className={s.container}>
            <h2 className={s.title}>Sé el primero en enterarte del <span>lanzamiento</span></h2>
            <h5 className={s.subTitle}>Suscribite a nuestra lista de espera y recibí notificaciones inmediatas en cuanto la App esté disponible. <strong>¡No te pierdas ninguna novedad!</strong></h5>
            <div className={s.input}>
                <Input
                    key='asd1'
                    type="text"
                    label="Nombre y apellido"
                    labelPlacement='outside'
                    size="lg"
                    placeholder=""/>
                <Input
                    key='asd'
                    type="email"
                    label="Email"
                    labelPlacement='outside'
                    size="lg"
                    placeholder=""/>
            </div>
            <div className={s.checkbox}>
                <Checkbox size="lg" color="default"></Checkbox>
                <p>Al suscribirme, acepto los <strong>Términos y Condiciones y la Política de Privacidad.</strong></p>
            </div>
            <Button color="primary" size="lg" endContent={arrowIcon()} className={s.button}>Suscribirse</Button>
        </section>)
}