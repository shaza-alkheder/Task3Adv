import { useRef } from 'react'
import type { OurGalleryItem } from '../../../interfaces'
import './OurGalleryCard.css'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { slider } from '../../UI/Slider/slider'
interface OurGalleryCardProps {
    data: OurGalleryItem
}
const OurGalleryCard = ({ data }: OurGalleryCardProps) => {
    const imagesRef = useRef<HTMLDivElement>(null)
    return (
        <>
            <div className='ourGalleryCard'>
                <div className='ourGalleryGroup'>
                    <div className='imgCard' ref={imagesRef}>
                        {data.images.map((image, index) => (
                            <img
                                key={`${data.id}-${index}`}
                                src={image}
                                alt={`${data.title} ${index + 1}`}
                            />
                        ))}
                    </div>
                    <div className='ourGalleryCardBtn'>
                        <h2>{data.title}</h2>

                        <div className='btnSlid'>
                            <button
                                type="button"
                                aria-label={`Previous ${data.title} images`}
                                onClick={() =>
                                    slider(imagesRef.current, -1)
                                }
                            >
                                <FaArrowLeftLong />
                            </button>

                            <button
                                type="button"
                                aria-label={`Next ${data.title} images`}
                                onClick={() =>
                                    slider(imagesRef.current, 1)
                                }
                            >
                                <FaArrowRightLong />
                            </button>
                        </div>
                    </div>
                    <div className='ourGalleryCardDesc'>
                        <p>{data.description}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default OurGalleryCard
