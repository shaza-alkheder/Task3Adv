import { missionVisionData } from "../../../data/OurMissionData"
import SectionHeader from "../../UI/SectionHeader/SectionHeader"
import './OurMission.css'
const OurMission = () => {
    return (
        <>
            <section id="ourMission" className="ourMission">
                <SectionHeader
                    className="ourMissionHeader"
                    subTitle="Mission & Visions"
                    title="Our Mission & Visions"
                    description="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
                />
                <div className="cardsMission">
                    {missionVisionData.map((data) => (
                        <div className="cardMission" key={data.id}>
                            <div className="headerCard">
                                <h2>{data.title}</h2>
                                <img src={data.icon} alt={data.iconAlt} />
                            </div>

                            <p>{data.description}</p>
                        </div>
                    ))}
                </div>

            </section>
        </>
    )
}

export default OurMission
