import type { InnerHeroData } from "../../../interfaces";
import './InnerPageHero.css'

interface InnerPageHeroProps {
    data: InnerHeroData;
}
const InnerPageHero = ({ data }: InnerPageHeroProps) => {
    return (
        <>


            <div className="innerHero">
                <div className="content">
                    <p className="subtitle">{data.subtitle}</p>
                    <h1>{data.title}</h1>
                </div>
                <div className="descHero">
                    <p>{data.description}</p>
                </div>

            </div>
        </>
    )
}

export default InnerPageHero
