import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import type { FAQItem } from "../../../interfaces";

interface FAQCardProps {
    faq: FAQItem;
}
const FAQCard = ({ faq }: FAQCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className={`cardfaq ${isOpen ? "open" : ""}`}>
                <div className={`faqQuestion ${isOpen ? "open" : ""}`}>
                    <p className={isOpen ? "open" : ""}>
                        {faq.question}
                    </p>

                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close answer" : "Open answer"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                </div>

                {isOpen && (
                    <p className="faqAnswer">{faq.answer}</p>
                )}
            </div>
        </>
    )
}

export default FAQCard
