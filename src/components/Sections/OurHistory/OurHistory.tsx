import { OurHistoryData } from '../../../data/OurHistoryData'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'
import './OurHistory.css'
import OurHistoryCard from './OurHistoryCard'

const OurHistory = () => {
    return (
        <>
            <section id='ourHistory' className='ourHistory'>
                <SectionHeader
                    className="ourHistoryHeader"
                    subTitle="Our Progressive Journey"
                    title="Our History"
                    description="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
                />
                <div className='ourHistoryCard'>
                    {OurHistoryData.map((data, index) => (
                        <OurHistoryCard
                            key={data.id}
                            data={data}
                            isLast={index === OurHistoryData.length - 1}
                        />
                    ))}
                </div>

            </section>


        </>
    )
}

export default OurHistory
