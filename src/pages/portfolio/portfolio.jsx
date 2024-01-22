import { Gallery } from "../../data"
import './portfolio.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Portfolio = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.to(".galleryItem", { y:10,ease:"bounce.in",delay:0.3,stagger:0.2,scrollTrigger: {
            trigger: "#portfolio",
            start: "top top",
            end: "+=500",
            scrub: 1,
          }});
      })

    return (
        <section id='portfolio'>
            <h2> some awesome shots </h2>
            <div id='gallery'>
                {
                    Gallery.map((item) =>(
                        <div className='galleryItem'>
                            <img  src={item}/>
                        </div>
                    ))
                }
               
            </div> 
        </section>
    )
}

export default Portfolio