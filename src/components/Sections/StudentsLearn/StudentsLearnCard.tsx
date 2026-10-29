import type { StudentsLearnItem } from '../../../interfaces'
import './StudentsLearnCard.css'
interface StudentsLearnCardProps {
    data: StudentsLearnItem
}

const StudentsLearnCard = ({ data }: StudentsLearnCardProps) => {
    return (
        <>
            <div className='studentsLearnCard'>
                <div className='cardBg'></div>
                <img src={data.image} alt={data.imageAlt} />

                <div className='content'>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                </div>

            </div>
        </>
    )
}

export default StudentsLearnCard
