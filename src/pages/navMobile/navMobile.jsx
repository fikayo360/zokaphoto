import './navMobile.css'
import { useInView } from 'react-intersection-observer';

const NavMobile = ({navActive}) => {
    const [ref, inView] = useInView();
    return (
    <div id="navMobile" ref={ref} className={`${inView?'animate__animated animate__fadeInLeft animate__slow':''}`}>
        <div id="navMobileHead">
            <div id="headWrap">
            <h1>ZOKA</h1>
            <img src='./x.png' onClick={navActive} />
            </div>
        </div>

        <ul id="navMobileBody">
            <li ref={ref} onClick={navActive}><a href='#hero' className={`${inView?'animate__animated animate__fadeInDownBig  animate__delay-1s':''}`}>Home</a></li>
            <li ref={ref} onClick={navActive}><a href='#about' className={`${inView?'animate__animated animate__fadeInDownBig animate__delay-1s':''}`}>About</a></li>
            <li ref={ref} onClick={navActive}><a href='#whyUs' className={`${inView?'animate__animated animate__fadeInDownBig animate__delay-1s':''}`}>WhyUs</a></li>
            <li ref={ref} onClick={navActive}><a href='#testimonials' className={`${inView?'animate__animated animate__fadeInDownBig animate__delay-1s':''}`}>testimonial</a></li>
            <li ref={ref} onClick={navActive}><a href='#portfolio' className={`${inView?'animate__animated animate__fadeInDownBig animate__delay-1s':''}`}>Portfolio</a></li>
            <li ref={ref} onClick={navActive}><a href='#contact' className={`${inView?'animate__animated animate__fadeInDownBig animate__delay-1s':''}`}>Contact</a></li>
        </ul>

    </div>)
}

export default NavMobile
