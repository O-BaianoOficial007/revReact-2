import s from './App.module.css'
import { Menu } from './components/menu'
import neyImg from '../public/neypngfalso.jpg'

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
          
        </div>
    
    </>
  )
}

export default App

