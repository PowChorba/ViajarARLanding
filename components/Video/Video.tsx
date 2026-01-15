import s from './Video.module.css'

export default function Video(){
    return(
            <div>
                <video controls className={s.video} poster="caratula.jpeg"><source src="video-publicado.mp4" type="video/mp4"/></video> 
            </div>
        )
}
