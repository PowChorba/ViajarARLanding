'use client'
import s from './Faq.module.css'
import { Accordion, AccordionItem } from '@nextui-org/accordion'
import { IoIosArrowDown } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";
import Link from 'next/link'

export default function Faq() {

    const iconArrow = () => { return <MdArrowForwardIos color="#56BBF1" size={20}  />}
    const iconPlus = () => { return <IoIosArrowDown color="#56BBF1" size={20}  />}
    const title = (index: number) => { return <h4 className={s.faqHeaderH5}>{faqs[index].question}</h4>}

    const faqs = [
        { question: '¿Qué es ViajAR App?', answer: 'ViajAR App es una aplicación en desarrollo que busca facilitar el carpooling, es decir, compartir viajes en automóvil con otras personas que comparten rutas similares.' },
        { question: '¿Cómo funciona ViajAR App?', answer: 'En ViajAR App, los usuarios pueden ofrecer o buscar viajes compartidos. Los conductores pueden publicar sus rutas disponibles y los pasajeros pueden buscar y reservar asientos en dichos viajes.\nEs una red de personas que comparten viajes en auto entre ciudades, haciendo una división equitativa de costos entre todos los viajeros o una contribución convenida.\nViajAr App no es un sistema de transporte de pasajeros, ni público ni privado.' },
        { question: '¿Cómo puedo participar en los testeos?', answer: 'Estamos reclutando testers para probar la aplicación y proporcionarnos comentarios valiosos. Si estás interesado en ser parte de nuestros testers, por favor registráte en nuestro sitio web y te vamos a mantener informado sobre cómo participar.' },
        { question: '¿Es seguro utilizar ViajAR App?', answer: 'La seguridad de nuestros usuarios es nuestra máxima prioridad. Estamos implementando medidas de seguridad, como la verificación de perfiles y comentarios de otros usuarios, para garantizar viajes seguros y confiables.' },
        { question: '¿Cómo puedo contactar al equipo?', answer: 'Si tienes más preguntas o necesitas ayuda, no dudes en contactarnos a través de nuestro correo electrónico de\nsoporte: admin@viajarapp.com o a través de nuestras redes sociales <Link href="https://www.instagram.com/viajar_app/">Instagram</Link>' },
        { question: '¿Donde va a estar disponible ViajAR? ', answer: 'Actualmente estamos enfocados en lanzar ViajAR App a lo largo y ancho de Argentina. Te recomendamos estar pendiente de nuestras actualizaciones para conocer las regiones donde estaremos disponibles inicialmente.' },
    ];

    return (
        <section id='faq' className={s.container}>
            <div className={s.titles}>
                <p>FAQ</p>
                <h2>Preguntas <strong>Frecuentes</strong></h2>
            </div>
            <article className={s.content}>
                {/* {faqs.map((faq, index) => (
                    <FaqItem key={index} question={faq.question} answer={faq.answer} i={index} />
                ))} */}
                <Accordion variant="splitted">
                    <AccordionItem key="1" aria-label="Accordion 1" title={title(0)} className={s.faqItem} indicator={({isOpen}) => (isOpen ? iconArrow() : iconPlus())}>
                        {faqs[0].answer}
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 1" title={title(1)} className={s.faqItem} indicator={({isOpen}) => (isOpen ? iconArrow() : iconPlus())}>
                        {faqs[1].answer}
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 1" title={title(2)} className={s.faqItem} indicator={({isOpen}) => (isOpen ? iconArrow() : iconPlus())}>
                        {faqs[2].answer}
                    </AccordionItem>
                </Accordion>
                <Accordion variant="splitted">
                    <AccordionItem key="1" aria-label="Accordion 1" title={title(3)} className={s.faqItem} indicator={({isOpen}) => (isOpen ? iconArrow() : iconPlus())}>
                        {faqs[3].answer}
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 1" title={title(4)} className={s.faqItem} indicator={({isOpen}) => (isOpen ? iconArrow() : iconPlus())}>

                        {/* {faqs[4].answer} */}Si tienes más preguntas o necesitas ayuda, no dudes en contactarnos a través de nuestro correo electrónico de soporte (<strong>admin@viajarapp.com</strong>) o a través de nuestras redes sociales <Link href="https://www.instagram.com/viajar_app"><strong>Instagram</strong></Link>
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 1" title={title(5)} className={s.faqItem} indicator={({isOpen}) => (isOpen ? iconArrow() : iconPlus())}>

                        {faqs[5].answer}
                    </AccordionItem>
                </Accordion>      
            </article>
        </section>
    );
}
