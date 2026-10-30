import { missionVisionData } from "../../../data/OurMissionData"
import { OurMissionHeaderData } from "../../../data/SectionHeadersData"
import SectionHeader from "../../UI/SectionHeader/SectionHeader"
import './OurMission.css'
const OurMission = () => {
    return (
        <>
            <section id="ourMission" className="ourMission">
                <SectionHeader
                    {...OurMissionHeaderData}
                    className="FAQHeader"
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
