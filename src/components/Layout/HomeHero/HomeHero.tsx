import { heroStats } from "../../../data/heroData"
import './HomeHero.css'

const HomeHero = () => {
    return (
        <>
            <div className="hero">
                <div className="heroImage">
                    <img src="/assets/img/heroImage.png" alt="children" className="img-children" />

                </div>
                <div className='content'>
                    <p className='welcom-content'>Welcome to Little Learners Academy </p>
                    <h1>Where Young Minds Blossom and <span>Dreams Take Flight.</span> </h1>
                    <p className='description'>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
                    <div className='counter'>
                        {heroStats.map((stat) => (
                            <div key={stat.id}>
                                <h2>{stat.value}</h2>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomeHero
