import { OurTeamData } from '../../../data/OurTeamData'
import { OurTeamHeaderData } from '../../../data/SectionHeadersData'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'
import './OurTeam.css'
import OurTeamCard from './OurTeamCard'

const OurTeam = () => {
    return (
        <>
            <section id='ourTeam' className='ourTeam'>
                <SectionHeader
                    {...OurTeamHeaderData}
                    className="FAQHeader"
                />

                <div className='ourTeamCards'>

                    {OurTeamData.map((data) => (
                        <OurTeamCard key={data.id} data={data} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default OurTeam
