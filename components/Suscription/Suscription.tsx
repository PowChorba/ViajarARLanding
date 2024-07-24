'use client'
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import {Checkbox} from "@nextui-org/checkbox";
import ARROW from '../../assets/arrow-left.svg'
import Image from "next/image";
import s from './Suscription.module.css'
import { useState } from "react";
import { newSubscriber } from "./helper/helper";
import { ToastContainer, toast, Slide } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export function validate(input: string) {
    const asd = input.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    if(asd === null){
        return 'error'
    }
    return 'ok'

}

export default function Suscription(){
    const [user,setUser] = useState({
        fullName: '',
        email: '',
    })

    const [error,setError] = useState<boolean>(false)

    const [terms, setTerms] = useState<boolean>(false)
    const [alerts,setAlerts] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    function showNotification() {
        toast.error('Ese email ya esta registrado', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            });
      }

    const showSucces = () => {
        toast.success('Gracias por formar parte de ViajAR!', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            });
    }  

    const showTerms = () => {
        toast.warn('Debes aceptar los terminos y condiciones', {
            position: "bottom-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Slide,
            });
    } 

    const handelSubmit = async () => {
        const validatee = validate(user.email)
        if(validatee === 'error'){
            setError(true)
        }else{
            setError(false)
        }
        if(terms && validatee !== 'error'){
            const submit = await newSubscriber(user)
            if(submit.status === 'success'){
                showSucces()
                setUser({fullName: '', email: ''})
                setAlerts(true)
                setAlerts(false)
            }else{
                showNotification()
            }
        }else if(!terms) {
            showTerms()
        }
        
    }

    const arrowIcon = () => {
        return <Image src={ARROW} alt='Arrow' width={15} height={15}/>
    }

    return(
        <form id="suscribirse" className={s.container}>
            <ToastContainer />
            <h2 className={s.title}>Sé el primero en enterarte del <span>lanzamiento</span></h2>
            <h5 className={s.subTitle}>Suscribite a nuestra lista de espera y recibí notificaciones inmediatas en cuanto la App esté disponible. <strong>¡No te pierdas ninguna novedad!</strong></h5>
            <div className={s.input}>
                <Input
                    key='asd1'
                    type="text"
                    label="Nombre y apellido"
                    labelPlacement='outside'
                    size="lg"
                    placeholder=""
                    name="fullName"
                    value={user.fullName}
                    onChange={handleChange}
                    />
                <Input
                    key='asd'
                    type="email"
                    label="Email"
                    labelPlacement='outside'
                    size="lg"
                    placeholder=""
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    color={error ? "danger" : "default"}
                    />
            </div>
            <div className={s.checkbox}>
                <Checkbox size="lg" color="default" value='asd' checked={terms ? true : false} onClick={() => setTerms(!terms)}></Checkbox>
                <p>Al suscribirme, acepto los <strong>Términos y Condiciones y la Política de Privacidad.</strong></p>
            </div>
            <Button color="primary" size="lg" endContent={arrowIcon()} className={s.button} onClick={() => handelSubmit()}>Suscribirse</Button>
            {/* <ModalSub/> */}
        </form>)
}