import { OurFeaturesData } from '../../../data/OurFeaturesData'
import FeatureCard from '../../UI/FeatureCard/FeatureCard'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'
import './OurFeatures.css'
const OurFeatures = () => {
    return (
        <>
            <section id='ourFeatures' className='ourFeatures'>
                <SectionHeader
                    className="ourFeaturesHeader"
                    subTitle="Our Features"
                    title="Our Special Features"
                    description="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
                />
                <div className='cards'>
                    {OurFeaturesData.map((data) => (
                        <FeatureCard
                            key={data.id}
                            item={data}
                            className="OurFeaturesCard"
                        />
                    ))}
                </div>

            </section>
        </>
    )
}

export default OurFeatures
