import './FAQ.css'
import FAQCard from './FAQCard'
import { FAQData } from '../../../data/FAQData'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'
import { FAQHeaderData } from '../../../data/SectionHeadersData'

const FAQ = () => {
    return (
        <>
            <section className='FAQ' id='faq'>
                <SectionHeader
                    {...FAQHeaderData}
                    className="FAQHeader"
                />

                <div className='faqCards'>
                    {FAQData.map((faq) => (
                        <FAQCard
                            key={faq.id}
                            faq={faq}
                        />
                    ))}
                    {/* <div className='cardfaq'>
                        <p>Is there a uniform policy for students?</p>
                        <button><AiOutlinePlus /></button>

                    </div> */}


                </div>
            </section>
        </>
    )
}

export default FAQ
