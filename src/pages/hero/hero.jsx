import './hero.css'
import NavMobile from '../navMobile/navMobile'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer';
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
    gsap.registerPlugin(ScrollTrigger);
    const [navActive,setNavActive] = useState(false)
  
     const toggleMobileNav = () => {
        setNavActive((prev) => !prev)
        console.log('hi')
     }

     useGSAP(() => {
        gsap.fromTo("#mainLeftH", {y:-40 }, { y:3,ease:"slow(0.7,0.7,false)",delay:0.5,scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            end: "+=500",
            scrub: 1,
          }});
      })

    return (
        <section id='hero'>
             {navActive?<NavMobile navActive={toggleMobileNav} />:null}
            <div id="nav">
                    <h1 id='navH'>Zoka</h1>
                    <ul id='navCenter'>
                        <li><a href='#hero'>Home</a></li>
                        <li><a href="#about">about</a></li>
                        <li><a href="#whyUs">whyUs</a></li>
                        <li><a href="#portfolio">gallery</a></li>
                    </ul>
                    <button><a href="#contact">contact</a></button>
                    <img src='burger.png' id='burger' onClick={toggleMobileNav}/>
            </div>

            <main id='heroMain'>
                <div id='mainLeft'>
                    <h1 id='mainLeftH'>
                        where the creative process happens 
                    </h1>
                    <p id='mainLeftP'>
                        your creativity, our imagination whatever your story, set it free
                    </p>
                    <div id='mainLeftBtn'>
                        <span>get in touch</span>
                        <div id='arrowCont'><img src='./next.png'/></div>
                    </div>
                </div>
                <div id='mainRight'>
                    <div id='mTop'><img src='https://www.businessplan.com.ng/wp-content/uploads/2017/01/start-a-Photography-Business-in-Nigeria.jpg'/></div>
                    <div id='mBot'>
                        <div id='mBotL'><img src='https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/></div>
                        <div id='mBotR'><img src='https://images.pexels.com/photos/306763/pexels-photo-306763.jpeg?auto=compress&cs=tinysrgb&w=600'/></div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Hero