import './whyUs.css'
const WhyUs = () => {
    return (
        <section id='whyUs'>
            <h2>why choose us</h2>
            <div id='whyWrap'>
                <div className='item'>
                   <div className='itemCircle'>
                    <img src='./gallery.png'/>
                   </div> 
                   <h2>professional editing</h2>
                   <p>your creativity our inspiration anything you want </p>
                </div>
                <div className='item'>
                   <div className='itemCircle'>
                    <img src='./target.png' />
                   </div> 
                   <h2>long hour shoots</h2>
                   <p>your creativity our inspiration anything you want </p>
                </div>
                <div className='item'>
                   <div className='itemCircle'>
                    <img src='./camera.png'/>
                   </div> 
                   <h2>extensive equipmentt</h2>
                   <p>your creativity our inspiration anything you want </p>
                </div>
            </div>
        </section>
    )
}

export default WhyUs