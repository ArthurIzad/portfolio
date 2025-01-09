'use client'

import Image from "next/image"
import Link from "next/link"
import bg from "../../public/images/code.jpg"
import scroll from "../../public/images/scroll2.jpeg"
import { useState } from "react"



export default function Home() {
  // change nav color wheb scrolling
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY > 150){
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <>
      <header className="flex justify-end ">
        {/* <nav className="fixed bg-black text-red-700 ml-0 w-full flex justify-end"> */}
        <nav className={color ?
          "fixed bg-white font-bold text-black w-full flex justify-end py-7 pr-14 drop-shadow-2xl" /// en scrollant
          : "fixed bg-transparent text-white font-bold w-full flex justify-end py-7 pr-14 drop-shadow"}> {/* en haut */}
          <a href="/images/CV_Arthur_Izad.pdf" download="CV_Arthur_Izad.pdf" className="px-3 py-2 rounded-full hover:bg-black/50 hover:text-white">Mon CV</a>
          <a href="#competence" className="px-3 py-2 rounded-full hover:bg-black/50 hover:text-white">Mes compétences</a>
          <a href="#projets" className="px-3 py-2 rounded-full hover:bg-black/50 hover:text-white">Projets</a>
          <a href="#a_propos" className="px-3 py-2 rounded-full hover:bg-black/50 hover:text-white">À propos de moi</a>
          <a href="#contact" className="px-3 py-2 rounded-full hover:bg-black/50 hover:text-white">Me contacter</a>
        </nav>
      </header>
      
      <main className="">
        <div className="flex flex-col pt-12 pb-12 text-white h-40" 
          style={{
            backgroundImage: `url(${bg.src})`,
            width: '100%',
            height: '650px',
          }}
        >
          <div className="flex items-center flex-col ">
            <Image src="/images/pp.jpg" height={0} width={250} alt="pp" className="rounded-full py-10"/>
            <h1 className="text-6xl pt-3 pb-3">Arthur Izad - Développeur fullstack</h1>
            <div className="w-2/3 flex justify-evenly item-center text-center text-4xl py-4">
              <a href="#contact" className="py-3 px-8 rounded-full bg-black border-white border-2 hover:bg-slate-900">Me contacter</a>
              <a className="bg-blue-700 hover:bg-blue-900 py-3 px-8 rounded-full border-white border-2" href="/images/CV_Arthur_Izad.pdf" download="CV_Arthur_Izad.pdf">Mon CV</a>
            </div>
          </div>
        </div>


        <div className="presentation_general flex items-center flex-col py-10 ">
          <div className="justify-center text-center">
            <h2 className="text-2xl py-3"> Développeur fullstack junior</h2>
            <p className="py-2"> Passionné par la biologie marine et l'informatique, j'ai finalement choisi cette <br />dernière après une réorientation professionnelle </p>
            <p className="py-2">Diplômé d'OpenClassrooms en tant que développeur full-stack, je suis toujours curieux d'apprendre des nouvelles choses et bien décidé <br /> à donner le meilleur de moi même en toute circonstance</p>
            <p className="py-2">Je n'ai pas d'affinité pour un domaine en particulier, bien au contraire, je suis enthousiaste à l'idée de rejoindre tout type de projets !!!</p>
          </div>
          
          
        </div>

        <div className="  flex items-center flex-col" id="competence">
          <div className="bg-lime-700 w-full flex justify-center pt-4 pb-4 bg-fixed bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${scroll.src})`,
              width: '100%',
              height: '100%',
            }}
          >
            <h2 className="text-2xl font-bold">Mes compétences</h2>
          </div>
          <div className="flex w-full justify-around text-center flex-row pt-10 pb-10">
            <section className="px-2">
              <h3 className="font-bold text-xl">Frontend</h3>
              <p >
                HTML5 <br />
                CSS3 / SCSS / Tailwind <br />
                JavaScript / React / NextJS
              </p>
              </section>
            <section className="px-2 ">
              <h3 className="font-bold text-xl">Backend</h3>
              <p >
                NodeJS <br />
                Express <br />
                MongoDB
              </p>
            </section>
            <section className="px-2">
              <h3 className="font-bold text-xl">En cours d'apprentissage !</h3>
              <p>
                Java <br />
                Python <br />
                SQL           
              </p>
            </section>
          </div>
        </div>

        <div id="projets" className="flex items-center flex-col">
          <div className="bg-amber-700 w-full flex justify-center pt-4 pb-4 bg-fixed bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${scroll.src})`,
              width: '100%',
              height: '100%',
            }}
          >
            <h2 className="text-2xl font-bold">Projets</h2>            
          </div>
          <div className="pt-10 pb-10">
            <h3>Projets réalisés avec OpenClassrooms</h3>
            <p>Booki - Création d'une interface statique responsive en HTML/CSS</p>
            <p>Sophie Bluel - Création d'une page dynamique avec JavaScript</p>
            <p>Nina Carducci - Débug et optimisation du SEO d'un site</p>
            <p>Kasa - Création d'une page dynamique en utilisant React</p>
            <p>Mon vieux grimoire - création du Backend d'un site avec ExpressJS / MongoDB</p>
          </div>
        </div>
        <div className="flex items-center flex-col ">
          <div className="w-full flex justify-center pt-4 pb-4 bg-fixed bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${scroll.src})`,
              width: '100%',
              height: '100%',
            }}
          >
            <h2 id="a_propos" className="text-2xl font-bold">À propos de moi</h2>
          </div>
          <div className="pt-10 pb-10">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          
        </div>
          
      </main>
      <footer id="contact" className="bg-black text-white flex flex-col pt-12 pb-12 pl-12">
        <h2>Me contacter</h2>
        <p>Téléphone : 06 40 15 96 22</p>
        <a href="mailto:arthur.izad@gmail.com">Mail</a>
      </footer>
      
    
    </>
  )
}