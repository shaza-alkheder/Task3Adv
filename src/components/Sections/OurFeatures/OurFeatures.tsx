import { OurFeaturesData } from '../../../data/OurFeaturesData'
import { OurFeaturesHeaderData } from '../../../data/SectionHeadersData'
import FeatureCard from '../../UI/FeatureCard/FeatureCard'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'
import './OurFeatures.css'
const OurFeatures = () => {
    return (
        <>
            <section id='ourFeatures' className='ourFeatures'>
                <SectionHeader
                    {...OurFeaturesHeaderData}
                    className="FAQHeader"
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
