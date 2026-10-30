// import './OurPages.css'
// import { OurPagesData } from '../../../data/OurPagesData'
// import OurPageCard from './OurPageCard'
// import SectionHeader from '../../UI/SectionHeader/SectionHeader'

// const ourPages = () => {
//     return (
//         <>
//             <section className='ourPages'>
//                 <SectionHeader
//                     className="OurPagesHeader"
//                     subTitle="Explore More"
//                     title="Navigate through our Pages"
//                     description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
//                 />
//                 <div className='pages'>
//                     {OurPagesData.map((page) => (
//                         <OurPageCard
//                             key={page.id}
//                             page={page}
//                         />
//                     ))}
//                 </div>
//             </section>
//         </>
//     )
// }

// export default ourPages

import './OurPages.css'
import { OurPagesData } from '../../../data/OurPagesData'
import OurPageCard from './OurPageCard'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'
import { OurPagesHeaderData } from '../../../data/SectionHeadersData'

const OurPages = () => {
    return (
        <>
            <section className='ourPages'>
                <SectionHeader
                    {...OurPagesHeaderData}
                    className="FAQHeader"
                />
                <div className='pages'>
                    {OurPagesData.map((page) => (
                        <OurPageCard
                            key={page.id}
                            page={page}
                        />
                    ))}
                </div>
            </section>
        </>
    )
}

export default OurPages
