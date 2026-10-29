import type { SectionHeaderProps } from '../../../interfaces'
import './SectionHeader.css'

const SectionHeader = ({ subTitle, title, description, className = '', }: SectionHeaderProps) => {
    return (
        <>
            <div className={`sectionHeader ${className}`}>
                <p className="sectionHeader-subTitle" >
                    {subTitle}
                </p>

                <h1 className="sectionHeader-title" >
                    {title}
                </h1>

                <p className="sectionHeader-description" >
                    {description}
                </p>
            </div>
        </>
    )
}

export default SectionHeader
