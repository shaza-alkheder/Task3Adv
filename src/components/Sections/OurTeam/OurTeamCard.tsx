import type { OurTeamItem } from '../../../interfaces'
import './OurTeamCard.css'
interface OurTeamCardProps {
    data: OurTeamItem
}
const OurTeamCard = ({ data }: OurTeamCardProps) => {
    return (
        <>
            <div className='ourTeamCard'>
                <div className='ourTeamCardHeader'>
                    <div className='info'>
                        <div className='imgInfo'>
                            <img
                                src={data.image}
                                alt={data.imageAlt}
                            />
                        </div>
                        <h2>{data.name}</h2>

                    </div>
                    <div className='emailInfo'>
                        <img src='/assets/img/emailTeam.png' alt='emailTeam' />

                    </div>

                </div>
                <div className='ourTeamCardDesc'>
                    <h2>{data.qualification}</h2>
                    <p>{data.description}</p>
                </div>
            </div>
        </>
    )
}

export default OurTeamCard
