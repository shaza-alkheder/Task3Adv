import type { FeatureCardItem } from "../../../interfaces";
import './FeatureCard.css'

interface FeatureCardProps {
    item: FeatureCardItem;
    className?: string;
}
const FeatureCard = ({ item, className = "" }: FeatureCardProps) => {

    return (
        <>
            <div className={`wapper ${className}`}>
                <div className="card">
                    <div className="divIcon">
                        <img src={item.icon} alt={item.iconAlt} />
                    </div>

                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            </div>
        </>
    )
}

export default FeatureCard
