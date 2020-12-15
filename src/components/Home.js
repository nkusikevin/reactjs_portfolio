import React from 'react'
import image from '../back.jpg'

function Home() {
    return (
       <main>
           <img src='https://media.giphy.com/media/Y3RpfxT7T7QU8/giphy.gif'  style={{height:"700px" }}alt="" className="absolute object-cover w-full h-14rem "/>
           <section className="relative flex justify-center main-h-screen pt-12 lg:pt-64 px-8">
               <h1 className="text-6xl 
                text-gray-50 font-bold cursive leading-none lg:leading-snug home-name">Hola bienvenido a mi pequeño mundo</h1>
           </section>
       </main>
    )
}

export default Home
