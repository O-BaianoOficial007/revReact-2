import s from './App.module.css'
import { Menu } from './components/menu'
import neyImg from '../public/neypngfalso.jpg'
import neyImg2 from '../public/neygato.jpg'

function App() {

  return (
    <>
      <Menu/>
        <div className={s.wrapHome}>
          <div className={s.section1}>

            <div className={s.wrapImag}>
              <img className={s.imgSection1} src={neyImg} alt="" />
            </div>

            <div className={s.wrapTexts}>
              <h1 className={s.tituloSection1} >Título de Página</h1>
              <p className={s.textSection1} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem commodi consectetur quaerat saepe perferendis nisi, natus esse asperiores neque.</p>
              <button className={s.btnSection1}>Clique Aqui</button>
            </div>

          </div>

          <div className={s.section2}>
            <iframe className={s.vid} src="https://www.youtube.com/embed/OWOjRdmpM6I?si=zCji7fTJr6k1EUDT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className={s.section3}>

            <div className={s.content}>
              <h1 className={s.s3title}>NEYMAR JR</h1>
              <p className={s.s3text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam amet hic repellat eaque cupiditate accusamus autem facere reprehenderit et omnis soluta, debitis aliquam eum ex aliquid temporibus eius delectus illo. Asperiores aut eos ducimus provident accusamus ex assumenda cum a.</p>
            </div>

            <div className={s.s3Img}>
                <img className={s.img3} src={neyImg2} alt="" />
            </div>

          </div>

          <div className={s.section4}>

          </div>
          
        </div>

        
    
    </>
  )
}

export default App

