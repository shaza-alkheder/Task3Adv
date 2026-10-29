import { OurTeamData } from '../../../data/OurTeamData'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'
import './OurTeam.css'
import OurTeamCard from './OurTeamCard'

const OurTeam = () => {
    return (
        <>
            <section id='ourTeam' className='ourTeam'>
                <SectionHeader
                    className="ourTeamHeader"
                    subTitle="Our Teachers With Experties"
                    title="Our Team Members"
                    description="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
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
