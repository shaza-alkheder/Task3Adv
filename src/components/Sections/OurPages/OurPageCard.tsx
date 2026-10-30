import { FaArrowRightLong } from "react-icons/fa6";
import type { OurPageItem } from "../../../interfaces";
import './OurPageCard.css'

interface OurPageCardProps {
    page: OurPageItem;
}
const OurPageCard = ({ page }: OurPageCardProps) => {
    const dashes = Array.from({ length: 6 }, (_, index) => index);
    return (
        <>
            <div className='cardpage'>
                <h2>{page.title}</h2>
                <div className="dashes">
                    <div className="circlepageLeft">

                    </div>
                    {dashes.map((dash) => (
                        <div className="dash" key={dash}>
                            <div></div>
                        </div>
                    ))}
                    <div className="circlepageRight">

                    </div>
                </div>
                <p>{page.description}</p>
                <button>Learn More  <FaArrowRightLong /></button>
            </div>
        </>
    )
}

export default OurPageCard
