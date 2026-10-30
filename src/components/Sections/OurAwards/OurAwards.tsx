import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'
import './OurAwards.css'
import FeatureCard from '../../UI/FeatureCard/FeatureCard'
import { OurAwardsData } from '../../../data/OurAwardsData'
import { useEffect, useRef, useState } from 'react'
import { slider } from '../../UI/Slider/slider'
import { OurAwardsHeaderData } from '../../../data/SectionHeadersData'

const OurAwards = () => {
    const cardsRef = useRef<HTMLDivElement>(null)
    const [remainingAwards, setRemainingAwards] = useState(0)

    const updateRemainingAwards = () => {
        const slider = cardsRef.current
        if (!slider) return

        const cards = slider.querySelectorAll('.ourAwardsCard')
        const card = cards[0] as HTMLElement | undefined

        if (!card) return

        const gap = parseFloat(getComputedStyle(slider).gap) || 0
        const cardWidth = card.offsetWidth


        const maxScroll = slider.scrollWidth - slider.clientWidth
        const remaining = Math.ceil(
            Math.max(0, maxScroll - slider.scrollLeft) /
            (cardWidth + gap)
        )

        setRemainingAwards(remaining)
    }
    useEffect(() => {
        const currentSlider = cardsRef.current
        if (!currentSlider) return

        updateRemainingAwards()

        currentSlider.addEventListener('scroll', updateRemainingAwards)
        window.addEventListener('resize', updateRemainingAwards)

        return () => {
            currentSlider.removeEventListener('scroll', updateRemainingAwards)
            window.removeEventListener('resize', updateRemainingAwards)
        }
    }, [])
    return (
        <>
            <section id='OurAwards' className='OurAwards'>
                <SectionHeader
                    {...OurAwardsHeaderData}
                    className="FAQHeader"
                />
                <div className='OurAwardsSliders'>
                    <div className='OurAwardsCards' ref={cardsRef}>
                        {OurAwardsData.map((data) => (
                            <FeatureCard
                                key={data.id}
                                item={data}
                                className="ourAwardsCard"
                            />
                        ))}
                    </div>

                    <div className='content'>
                        {/* <p>8 More Awards</p> */}
                        <p>{remainingAwards} More Awards</p>
                        <div className='btns'>
                            <button
                                onClick={() => slider(cardsRef.current, -1)}
                                aria-label="Previous awards"
                            ><FaArrowLeftLong /></button>
                            <button
                                onClick={() => slider(cardsRef.current, 1)}
                                aria-label="Next awards"
                            ><FaArrowRightLong /></button>



                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default OurAwards
