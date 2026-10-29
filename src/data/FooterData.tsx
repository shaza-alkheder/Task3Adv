import { MdEmail, MdLocationPin, MdOutlineFacebook } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { IoLogoLinkedin } from "react-icons/io";
import type { FooterContactItem, FooterLinkGroup, FooterSocialItem, NavItemInterface } from "../interfaces";

export const footerLinks: FooterLinkGroup[] = [
    {
        id: "home",
        title: "Home",
        links: [
            { id: "features", label: "Features", href: "#features" },
            { id: "testimonials", label: "Our Testimonials", href: "/#testimonials" },
            { id: "faq", label: "FAQ", href: "#faq" },
        ],
    },
    {
        id: "about",
        title: "About Us",
        links: [
            { id: "mission", label: "Our Mission", href: "/#mission" },
            { id: "vision", label: "Our Vision", href: "/#vision" },
            { id: "awards", label: "Awards and Recognitions", href: "/#awards" },
            { id: "history", label: "History", href: "/#history" },
            { id: "teachers", label: "Teachers", href: "/#teachers" },
        ],
    },
    {
        id: "academic",
        title: "Academics",
        links: [
            { id: "special-features", label: "Special Features", href: "/#special-features" },
            { id: "gallery", label: "Gallery", href: "/#gallery" },
        ],
    },
    {
        id: "contact",
        title: "Contact Us",
        links: [
            { id: "information", label: "Information", href: "#information" },
            { id: "directions", label: "Map & Direction", href: "#directions" },
        ],
    },
];

export const footerContacts: FooterContactItem[] = [
    {
        id: "email",
        text: "hello@littlelearners.com",
        href: "mailto:hello@littlelearners.com",
        icon: <MdEmail />,
    },
    {
        id: "phone",
        text: "+91 91813 23 2309",
        href: "tel:+9191813232309",
        icon: <FaPhoneAlt />,
    },
    {
        id: "location",
        text: "Somewhere in the World",
        href: "#location",
        icon: <MdLocationPin />,
    },
];

export const footerSocials: FooterSocialItem[] = [
    {
        id: "facebook",
        label: "Facebook",
        href: "https://www.facebook.com/",
        icon: <MdOutlineFacebook />,
    },
    {
        id: "twitter",
        label: "Twitter",
        href: "https://twitter.com/",
        icon: <GrTwitter />,
    },
    {
        id: "linkedin",
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: <IoLogoLinkedin />,
    },
];

export const footerPolicies: NavItemInterface[] = [
    { content: "Terms of Service", route: "#terms" },
    { content: "Privacy Policy", route: "#privacy" },
    { content: "Cookie Policy", route: "#cookies" },
];