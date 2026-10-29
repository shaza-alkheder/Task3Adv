import SectionHeader from '../../UI/SectionHeader/SectionHeader'
import './OurBenefits.css'
import { OurBenefitsData } from '../../../data/OurBenefitsData'
import FeatureCard from '../../UI/FeatureCard/FeatureCard'

const OurBenefits = () => {
    return (
        <>
            <section className='benefits '>
                <SectionHeader
                    className="benefitsHeader"
                    subTitle="Children Deserve Bright Future"
                    title="Our Benefits"
                    description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
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
