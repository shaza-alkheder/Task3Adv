import type { OurHistoryItem } from '../../../interfaces'
import './OurHistoryCard.css'

interface OurHistoryCardProps {
    data: OurHistoryItem
    isLast: boolean
}

const OurHistoryCard = ({ data, isLast }: OurHistoryCardProps) => {
    return (
        <div className='ourHistoryDiv'>
            <div className='groupHistory'>

                <div className="dashes">
                    <div className="circlepageLeft"></div>

                    <div className="dash">
                        <div></div>
                    </div>

                    <div className="circlepageRight"></div>
                </div>

                {!isLast && (
                    <div className="verticalDash">
                        <div></div>
                    </div>
                )}

                <div className='contentDiv'>
                    <div className='dateourHistory'>
                        <img src="/assets/img/ourHistory.png" alt="" />
                        <h2>{data.year}</h2>
                    </div>

                    <div className='content'>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OurHistoryCard