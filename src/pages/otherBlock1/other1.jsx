import { Floral } from "../../data"
import './other1.css'

const Other = () => {
    return (
        <section id='other'>
            <div id='otherTop'>
            <h1>Our floral services </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non alias mollitia quam enim, \
                incidunt nesciunt commodi fugiat fuga pariatur eius facilis facere quod voluptates corporis accusamus laborum aspernatur consectetur cumque?</p>
             </div>
            <div id="floralWrap">
                {
                    Floral.map((item) => (
                        <div className='floral'>
                            <img src={item} />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Other