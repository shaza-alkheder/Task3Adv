import './FAQ.css'
import FAQCard from './FAQCard'
import { FAQData } from '../../../data/FAQData'
import SectionHeader from '../../UI/SectionHeader/SectionHeader'

const FAQ = () => {
    return (
        <>
            <section className='FAQ' id='faq'>
                <SectionHeader
                    className="FAQHeader"
                    subTitle="Solutions For The Doubts"
                    title="Frequently Asked Questions"
                    description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
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
