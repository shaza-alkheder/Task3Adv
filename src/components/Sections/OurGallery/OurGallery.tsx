import { useState } from 'react'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'
import './OurGallery.css'
import { OurGalleryData } from '../../../data/OurGalleryData'
import OurGalleryCard from './OurGalleryCard'
import { OurGalleryHeaderData } from '../../../data/SectionHeadersData'

const OurGallery = () => {
    const categories = [
        'All',
        'Classrooms',
        'Library',
        'Science Lab',
        'Computer Lab',
        'Garden and Nature Area',
    ]
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredGallery =
        activeCategory === 'All'
            ? OurGalleryData
            : OurGalleryData.filter(
                (item) => item.category === activeCategory
            )
    return (
        <>
            <section className='ourGallery' id='ourGallery'>
                <SectionHeader
                    {...OurGalleryHeaderData}
                    className="FAQHeader"
                />
                <div className='ourGalleryDiv'>
                    <div className='ourGalleryBtn'>
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                className={
                                    activeCategory === category
                                        ? 'active'
                                        : ''
                                }
                                aria-pressed={activeCategory === category}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className='ourGalleryCards'>
                        {filteredGallery.map((data) => (
                            <OurGalleryCard
                                key={data.id}
                                data={data}
                            />
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default OurGallery
