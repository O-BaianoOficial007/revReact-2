import s from './App.module.css'
import { Menu } from './components/menu'
import neyImg from '../public/neypngfalso.jpg'
import neyImg2 from '../public/neygato.jpg'
import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

function App() {

  const position = [-25.4249118, -49.2749299]

  const [mapType, setMapType] = useState("normal")

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

        {/* MAPA */}
        <div className={s.mapa}>

          {/* BOTÕES */}
          <div className={s.mapButtons}>
            <button
              className={mapType === "normal" ? s.active : ""}
              onClick={() => setMapType("normal")}
            >
              Normal
            </button>

            <button
              className={mapType === "satelite" ? s.active : ""}
              onClick={() => setMapType("satelite")}
            >
              Satélite
            </button>
          </div>

          <MapContainer
            attributionControl={false}
            className={s.mapCont}
            center={position}
            zoom={17}
            scrollWheelZoom={false}
          >

            {/* MAPA NORMAL */}
            {mapType === "normal" && (
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            )}

            {/* MAPA SATÉLITE */}
            {mapType === "satelite" && (
              <TileLayer
                attribution='Tiles &copy; Esri'
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
              />
            )}

            <Marker position={position}>
              <Popup>
                Localização do marcador.
              </Popup>
            </Marker>

          </MapContainer>

        </div>
          
        </div>

    </>
  )
}

export default App

