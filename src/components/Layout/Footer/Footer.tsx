import { Link } from 'react-router-dom'
import { footerContacts, footerLinks, footerPolicies, footerSocials } from '../../../data/FooterData'
import './Footer.css'


const Footer = () => {
    return (
        <>
            <footer>
                <div className='topFooter'>
                    <div className='infoContact'>
                        <div className='descFooter'>
                            <img src="/assets/img/LogoFooter.png" alt="logo" />
                            <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                        </div>
                        <div className='infoFooter'>
                            {footerContacts.map((contact) => (
                                <div key={contact.id}>
                                    <div className="iconFooter">
                                        {contact.icon}
                                    </div>

                                    <p>
                                        <a href={contact.href}>
                                            {contact.text}
                                        </a>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='linksPage'>
                        {footerLinks.map((group) => (
                            <div
                                className={`Links ${group.id}Links`}
                                key={group.id}
                            >
                                <h2>{group.title}</h2>

                                <ul>
                                    {group.links.map((link) => (
                                        <li key={link.id}>
                                            <a href={link.href}>
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='policy'>
                    <div className='policyList'>
                        <ul>
                            {footerPolicies.map((policy) => (
                                <li key={policy.route}>
                                    <a href={policy.route}>
                                        {policy.content}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='soctial'>
                        {footerSocials.map((social) => (
                            <a
                                className="iconSoctial"
                                href={social.href}
                                key={social.id}
                                aria-label={social.label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className='copyright'>
                    <p>                    Copyright © [2023] Little Learners Academy. All rights reserved.
                    </p>
                </div>

            </footer>
        </>
    )
}

export default Footer
