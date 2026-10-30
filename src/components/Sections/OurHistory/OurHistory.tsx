import { OurHistoryData } from '../../../data/OurHistoryData'
import { OurHistoryHeaderData } from '../../../data/SectionHeadersData'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'
import './OurHistory.css'
import OurHistoryCard from './OurHistoryCard'

const OurHistory = () => {
    return (
        <>
            <section id='ourHistory' className='ourHistory'>
                <SectionHeader
                    {...OurHistoryHeaderData}
                    className="FAQHeader"
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
