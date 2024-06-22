'use client'
import s from './Carrousel.module.css';
import CarrouselUno from '../../assets/carrousel_1.svg';
import CarrouselDos from '../../assets/carrousel_2.svg';
import CarrouselTres from '../../assets/carrousel_3.svg';
import CarrouselCuatro from '../../assets/carrousel_4.svg';
import CarrouselCinco from '../../assets/carrousel_5.svg';
import Image from 'next/image';
import Slider from "react-slick";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const images = [
  { src: CarrouselUno, alt: 'Carrousel uno' },
  { src: CarrouselDos, alt: 'Carrousel dos' },
  { src: CarrouselTres, alt: 'Carrousel tres' },
  { src: CarrouselCuatro, alt: 'Carrousel cuatro' },
  { src: CarrouselCinco, alt: 'Carrousel cinco' }
];

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <MdOutlineKeyboardArrowRight
      className={className}
      style={{ ...style, display: "block", backgroundColor: "transparent", color: '#56BBF1' , width: '50px', height: '50px', marginRight: '10px'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <MdOutlineKeyboardArrowLeft
      className={className}
      style={{ ...style, display: "block", backgroundColor: "transparent", color: '#56BBF1', width: '50px', height: '50px', marginLeft: '10px' }}
      onClick={onClick}
    />
  );
}

export default function Carrousel() {

  const settings = {
    customPaging: function(i: any) {
      return (
        // <a>
          
          <Image src={images[i].src} alt={images[i].alt} width={100} height={100}/>
        // </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section className={s.container}>
      <Slider {...settings}>
        <div className={s.prueba}>
          <Image src={CarrouselUno} alt="APP 1" className={s.imagen}/>
        </div>
        <div>
          <Image src={CarrouselDos} alt="APP 2" className={s.imagen}/>
        </div>
        <div>
        <Image src={CarrouselTres} alt="APP 3" className={s.imagen}/>
        </div>
        <div>
        <Image src={CarrouselCuatro} alt="APP 4" className={s.imagen}/>
        </div>
        <div>
        <Image src={CarrouselCinco} alt="APP 5" className={s.imagen}/>
        </div>
    </Slider>
    </section>
  );
}
