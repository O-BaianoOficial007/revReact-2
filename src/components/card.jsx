import s from './card.module.css'
import Tilt from 'react-parallax-tilt';
import teste from '/neyNoTreino.jpg'

export const Card = () => {
    return(
            <Tilt tiltReverse>
                <div className={s.card}>
                    <div className={s.wrapImg}>
                        <img className={s.imagem} src={teste} alt="Imagem produto" />
                    </div>
                    <div className={s.wrapCardTexts}>
                        <h2 className={s.cardTitle}>TITULO</h2>
                        <p className={s.cardText}>BLA BLA BLA</p>
                    </div>
                </div>
            </Tilt>
    )
}
