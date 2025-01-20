'use client'

import Image from "next/image"
import Link from "next/link"
import bg from "../../public/images/code.jpg"
import scroll from "../../public/images/scroll2.jpeg"
import { useEffect, useState } from "react"


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
  useEffect(() => {
    window.addEventListener('scroll', changeColor)
  })

  return (
    <>
      <header className="flex justify-end ">
        {/* <nav className="fixed bg-black text-red-700 ml-0 w-full flex justify-end"> */}
        <nav className={color ?
          "navbar fixed bg-white font-bold text-black w-full flex justify-end py-7 pr-14 drop-shadow-2xl" /// en scrollant
          : "navbar fixed bg-transparent text-white font-bold w-full flex justify-end py-7 pr-14 drop-shadow "} > {/* en haut */}
          <a href="/images/CV_Arthur_Izad.pdf" download="CV_Arthur_Izad.pdf" className="px-3 py-2 rounded-full hover:bg-black/50 hover:text-white">Mon CV</a>
          <a href="#competence" className="px-3 py-2 rounded-full hover:bg-black/50 hover:text-white">Mes compétences</a>
          <a href="#projets" className="px-3 py-2 rounded-full hover:bg-black/50 hover:text-white">Projets</a>
          <a href="#a_propos" className="px-3 py-2 rounded-full hover:bg-black/50 hover:text-white">À propos de moi</a>
          <a href="#contact" className="px-3 py-2 rounded-full hover:bg-black/50 hover:text-white">Me contacter</a>
        </nav>
      </header>
      
      <main className="">
        <div className="background flex flex-col pt-12 pb-12 text-white h-40" 
          style={{
            backgroundImage: `url(${bg.src})`,
            width: '100%',
            height: '650px',
          }}
        >
          <div className="bg-container flex items-center flex-col ">
           
              <Image src="/images/pp.jpg" height={0} width={250} alt="pp" className="rounded-2xl my-10"/>
            
            <h1 className="text-6xl text-center pt-3 pb-3">Arthur Izad - Développeur fullstack</h1>
            <div className="bg-container-link w-2/3 flex justify-evenly item-center text-center text-4xl py-4">
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

        <div className="competence flex items-center flex-col" id="competence">
          <div className="bg-lime-700 w-full flex justify-center pt-4 pb-4 bg-fixed bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${scroll.src})`,
              width: '100%',
              height: '100%',
            }}
          >
            <h2 className="text-2xl font-bold text-white">Mes compétences</h2>
          </div>
          <div className="competence_content flex w-full justify-around text-center flex-row pt-10 pb-10">
            <section className="px-2">
              <h3 className="competence_title text-2xl">Frontend</h3>
              <p><span className="font-bold">Langage :</span> JavaScript</p>
              <p><span className="font-bold">Framework :</span>  React / NextJS</p>
              <p> <span className="font-bold">Intégration web :</span> HTML5, <br />CSS3 / SCSS / Tailwind</p>
            </section>
            <section className="px-2 ">
              <h3 className="competence_title text-2xl">Backend</h3>
              <p><span className="font-bold">Langage :</span> JavaScript</p>
              <p><span className="font-bold">Framework :</span> ExpressJS</p>
              <p><span className="font-bold">Base de données :</span> MongoDB</p>
            </section>
            <section className="px-2">
              <h3 className="competence_title text-2xl">En cours d'apprentissage !</h3>
              <p>Java</p>
              <p>Python</p>
              <p>SQL</p>
              <p>TypeScript</p>
            </section>
          </div>
        </div>

        <div id="projets" className="projets flex items-center flex-col">
          <div className="bg-amber-700 w-full flex justify-center pt-4 pb-4 bg-fixed bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${scroll.src})`,
              width: '100%',
              height: '100%',
            }}
          >
          <h2 className="text-2xl font-bold text-white">Projets</h2>            
          </div>
          <div className="projets_content text-center pt-10 pb-10">
            <h3 className="underline pb-2">Projets réalisés avec OpenClassrooms :</h3>
            <div className="all_cards flex flex-wrap justify-around">
              <div className="cards border-2 w-1/6 rounded-md">
                <a href="https://arthurizad.github.io/projet_1_OC/">
                  <Image src="/images/booki.png" height={0} width={600} alt="pp" className="object-cover h-3/4 rounded-md pb-10 w-full hover:scale-110 transition-all duration-500"/>
                  <p className="text-sm">Booki - Création d'une interface statique responsive en HTML/CSS</p>
                
                </a>
              </div>
              <div className="cards border-2 w-1/6 rounded-md ">
                <a href="https://github.com/ArthurIzad/projet_2" className="">
                    <Image src="/images/sophie_bluel.png" height={0} width={600} alt="pp" className="object-cover h-3/4 rounded-md pb-10 w-full hover:scale-110 transition-all duration-500"/>
                  <p>Sophie Bluel - Création d'une page dynamique avec JavaScript</p>
                </a>
              </div>
              <div className="cards border-2 w-1/6 rounded-md">
                <a href="https://arthurizad.github.io/projet_4_OC/">
                  <Image src="/images/nina_carducci.png" height={0} width={600} alt="pp" className="object-cover h-3/4 rounded-md pb-10 w-full hover:scale-110 transition-all duration-500"/>
                  <p>Nina Carducci - Débug et optimisation du SEO d'un site</p>
                </a>
              </div>
              <div className="cards border-2 w-1/6 rounded-md">
                <a href="https://projet-5-rho.vercel.app/">
                  <Image src="/images/kasa.png" height={0} width={600} alt="pp" className="object-cover h-3/4 rounded-md pb-10 w-full hover:scale-110 transition-all duration-500"/>
                  <p>Kasa - Création d'une page dynamique en utilisant React</p>
                </a>
              </div>
              <div className="cards border-2 w-1/6 rounded-md">
                <a href="https://github.com/ArthurIzad/projet_6">
                  <Image src="/images/grimoire.png" height={0} width={600} alt="pp" className="object-cover h-3/4 rounded-md pb-10 w-full hover:scale-110 transition-all duration-500"/>
                  <p>Mon vieux grimoire - Création du Backend d'un site avec ExpressJS / MongoDB</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center text-center flex-col ">
          <div className="w-full flex justify-center pt-4 pb-4 bg-fixed bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${scroll.src})`,
              width: '100%',
              height: '100%',
            }}
          >
            <h2 id="a_propos" className="text-white text-2xl font-bold">À propos de moi</h2>
          </div>
          <div className="py-10">
            <p className="py-1">D'une première formation en biologie marine, j'ai décidé de me reconvertir dans le développement web pour découvrir de nouveaux horizons</p>
            <p className="py-1">Amoureux de voyage et de la mer, j'aime explorer et décourvir de nouveaux hobby.</p>
            <p className="py-1">Je suis disponible immédiatemment pour tout type de missions. <br />J'ai évolué dans suffisamment de structures différentes pour pouvoir m'intégrer et être efficace rapidement.</p>
          </div>
          
        </div>
          
      </main>
      <footer id="contact" className="bg-black text-white flex flex-col py-10 pl-12">
        <h2 className="text-2xl font-bold pb-3">Me contacter</h2>
        <p>Téléphone : 06 40 15 96 22</p>
        <a href="mailto:arthur.izad@gmail.com">Mon mail : arthur.izad@gmail.com</a>
      </footer>
      
    
    </>
  )
}