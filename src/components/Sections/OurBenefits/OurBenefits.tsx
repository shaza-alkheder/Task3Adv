import SectionHeader from '../../UI/SectionHeader/SectionHeader'
import './OurBenefits.css'
import { OurBenefitsData } from '../../../data/OurBenefitsData'
import FeatureCard from '../../UI/FeatureCard/FeatureCard'
import { OurBenefitsHeaderData } from '../../../data/SectionHeadersData'

const OurBenefits = () => {
    return (
        <>
            <section className='benefits '>
                <SectionHeader
                    {...OurBenefitsHeaderData}
                    className="FAQHeader"
                />
                <div className='cards'>
                    {OurBenefitsData.map((benefit) => (
                        <FeatureCard
                            key={benefit.id}
                            item={benefit}
                            className="benefitsCard"
                        />
                    ))}
                </div>

            </section>
        </>
    )
}

export default OurBenefits
