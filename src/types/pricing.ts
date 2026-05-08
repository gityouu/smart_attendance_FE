import React from "react";

export interface pricingHeroProps {
    isAnnual: boolean;
    setIsAnnual: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface pricingGridProps {
    isAnnual: boolean;
}

interface pricingTier {
    id: string;
    name: string;
    badge?: string;
    description: string;
    priceMonthly: number | 'Custom';
    priceAnnual: number | 'Custom';
    popular?: boolean;
    ctaText: string;
    ctaVariant: 'outline' | 'solid';
    features: string[];
}

export const pricingTiers: pricingTier[] = [
    {
        id: 'free',
        name: 'Ad-Hoc Educator',
        badge: 'No Account Required',
        description: 'Perfect for individual lecturers, TAs, and single-class trials.',
        priceMonthly: 0,
        priceAnnual: 0,
        ctaText: 'Launch Instant Session',
        ctaVariant: 'outline',
        features: [
            'Up to 25 students per session',
            '30s rotating dynamic QR tokens',
            'Browser GPS geofencing (50m)',
            'Hardware device lock',
            'Post-session CSV report via email',
            'Zero software installation'
        ]
    },
    {
        id: 'pro',
        name: 'Pro Department',
        badge: 'Most Popular',
        description: 'For faculty and active educators running regular weekly courses.',
        priceMonthly: 19,
        priceAnnual: 15,
        popular: true,
        ctaText: 'Start 14-Day Trial',
        ctaVariant: 'solid',
        features: [
            'Up to 400 students per session',
            'All anti-proxy security features',
            'Live Lecturer Monitoring Dashboard',
            'Persistent session history & archives',
            'Custom GPS radius (15m - 100m)',
            'Duplicate device attempt flagging',
            'Direct Excel / CSV gradebook exports'
        ]
    },
    {
        id: 'campus',
        name: 'Campus Enterprise',
        badge: 'Full Institution',
        description: 'For university-wide rollouts, large exam halls, and multi-faculty depts.',
        priceMonthly: 'Custom',
        priceAnnual: 'Custom',
        ctaText: 'Contact Enterprise',
        ctaVariant: 'outline',
        features: [
            'Unlimited students per session (1,000+)',
            'Unlimited concurrent halls & classes',
            'Single Sign-On (SSO / SAML / Google)',
            'Canvas, Blackboard, & Moodle LMS sync',
            'Department Dean analytics portal',
            'Custom SLA & dedicated support rep',
            'Official invoice & PO billing'
        ]
    }
];
