import type { ReactNode } from "react";

export interface NavItemInterface {
    content: string;
    route: string;
}

export interface NavInterface {
    logo: string;
    navItems: NavItemInterface[];
}
export interface HeroStat {
    id: number;
    value: string;
    label: string;
}
export interface InnerHeroData {
    title: string;
    subtitle: string;
    description: string;
}
export interface FeatureCardItem {
    id: number;
    icon: string;
    iconAlt: string;
    title: string;
    description: string;
}


export interface SectionHeaderProps {
    subTitle: string;
    title: string;
    description: string;
    className?: string;

}

export interface TestimonialItem {
    id: number;
    name: string;
    image: string;
    description: string;
}

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}



export interface FooterLinkGroup {
    id: string;
    title: string;
    links: {
        id: string;
        label: string;
        href: string;
    }[];
}

export interface FooterContactItem {
    id: string;
    text: string;
    href: string;
    icon: ReactNode;
}

export interface FooterSocialItem {
    id: string;
    label: string;
    href: string;
    icon: ReactNode;
}

export interface OurPageItem {
    id: number;
    title: string;
    description: string;

}



export interface OurTeamItem {
    id: number
    name: string
    image: string
    imageAlt: string
    qualification: string
    description: string
}

export interface StudentsLearnItem {
    id: number
    title: string
    description: string
    image: string
    imageAlt: string
}

export interface OurGalleryItem {
    id: number
    category: string
    title: string
    description: string
    images: string[]
}
