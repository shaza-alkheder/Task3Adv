import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import './OurTestimonials.css'
import { useRef } from 'react'
import { OurTestimonialsData } from '../../../data/OurTestimonialsData'
import OurTestimonialsCard from './OurTestimonialsCard'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'
import { slider } from '../../UI/Slider/slider'

const OurTestimonials = () => {
    const cardsRef = useRef<HTMLDivElement>(null)
    return (
        <>
            <section className='OurTestimonials' id='testimonials'>
                <SectionHeader
                    className="testimonialsHeader"
                    subTitle="Their Happy Words 🤗"
                    title="Our Testimonials"
                    description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
                />
                <div className='sliders'>

                    <div className='arrowLeft'>
                        <button
                            onClick={() => slider(cardsRef.current, -1)}
                            aria-label="Previous testimonial"
                        >
                            <GoArrowLeft />
                        </button>

                    </div>
                    <div className='cards' ref={cardsRef}>
                        {OurTestimonialsData.map((testimonial) => (
                            <OurTestimonialsCard
                                key={testimonial.id}
                                testimonial={testimonial}
                            />
                        ))}
                    </div>
                    <div className='arrowRight '>
                        <button
                            onClick={() => slider(cardsRef.current, 1)}
                            aria-label="Next testimonial"
                        >
                            <GoArrowRight />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTestimonials
