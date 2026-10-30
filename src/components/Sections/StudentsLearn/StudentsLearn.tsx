import { StudentsLearnHeaderData } from '../../../data/SectionHeadersData'
import { StudentsLearnData } from '../../../data/StudentsLearnData'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'
import './StudentsLearn.css'
import StudentsLearnCard from './StudentsLearnCard'
const StudentsLearn = () => {
    return (
        <>
            <section id='studentsLearn' className='studentsLearn'>
                <SectionHeader
                    {...StudentsLearnHeaderData}
                    className="FAQHeader"
                />
                <div className='studentsLearnCards'>
                    {/* <div className='studentsLearnCard'>
                        <div className='cardBg'></div>
                        <img src="/assets/img/studentLearn1.png" alt="studentLearn1" />

                        <div className='content'>
                            <h2>Language Arts</h2>
                            <p>Reading, writing, storytelling, and communication skills.</p>
                        </div>

                    </div> */}
                    {StudentsLearnData.map((data) => (
                        <StudentsLearnCard key={data.id} data={data} />
                    ))}

                </div>
            </section>
        </>
    )
}

export default StudentsLearn
