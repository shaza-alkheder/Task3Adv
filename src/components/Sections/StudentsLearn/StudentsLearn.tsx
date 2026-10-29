import { StudentsLearnData } from '../../../data/StudentsLearnData'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'
import './StudentsLearn.css'
import StudentsLearnCard from './StudentsLearnCard'
const StudentsLearn = () => {
    return (
        <>
            <section id='studentsLearn' className='studentsLearn'>
                <SectionHeader
                    className="studentsLearnHeader"
                    subTitle="Our Features"
                    title="What Students Learn"
                    description="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
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
