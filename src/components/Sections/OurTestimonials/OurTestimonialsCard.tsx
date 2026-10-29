import type { TestimonialItem } from '../../../interfaces';
import './OurTestimonialsCard.css'
interface TestimonialCardProps {
    testimonial: TestimonialItem;
}
const OurTestimonialsCard = ({ testimonial }: TestimonialCardProps) => {
    return (
        <>
            <div className='card'>
                <div className='person-img'>
                    <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <p className='person-name'>{testimonial.name}</p>
                <img src='/assets/img/stars.png' alt='stars' />
                <p className='person-desc'> {testimonial.description}    </p>

            </div>
        </>
    )
}

export default OurTestimonialsCard
