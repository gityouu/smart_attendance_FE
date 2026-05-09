import React from "react";

export type categoryFilter = 'all' | 'toolkits' | 'students' | 'security' | 'integrations';

export interface quickAccessCardsProps {
    setActiveFilter: React.Dispatch<React.SetStateAction<categoryFilter>>;
}

export interface articlesProps {
    activeFilter: categoryFilter;
    setActiveFilter: React.Dispatch<React.SetStateAction<categoryFilter>>;
}

interface resourceItem {
    id: string;
    title: string;
    description: string;
    category: categoryFilter;
    badge: string;
    icon: string;
    readTime: string;
}

export const resourcesList: resourceItem[] = [
    {
        id: 'anti-proxy-playbook',
        title: 'The Anti-Proxy Playbook: Defeating Screenshot Relays with Dynamic QR Tokens',
        description: 'A deep architectural look into how 30-second token rotation, single-device registration, ' +
            'and geofencing eliminate proxy attendance in lecture halls.',
        category: 'security',
        badge: 'Technical Guide',
        icon: 'security',
        readTime: '6 min read'
    },
    {
        id: 'first-day-toolkit',
        title: 'First-Day Classroom Setup: Running Your First Live Formally Session',
        description: 'A quick checklist for professors on configuring session duration, toggling GPS verification, ' +
            'and displaying dynamic codes on lecture hall projectors.',
        category: 'toolkits',
        badge: 'Educator Kit',
        icon: 'school',
        readTime: '4 min read'
    },
    {
        id: 'student-privacy-faq',
        title: 'Student Privacy & Ephemeral Location: How Geofencing Actually Works',
        description: 'Why Formally only checks GPS coordinates once during form submission and does not track continuous ' +
            'location in the background.',
        category: 'students',
        badge: 'Privacy & Trust',
        icon: 'privacy_tip',
        readTime: '3 min read'
    },
    {
        id: 'auditorium-gps-tips',
        title: 'Classroom Geofencing in Heavy Concrete Auditoriums & Basement Halls',
        description: 'Best practices for setting coordinate thresholds when lecture halls experience slight GPS ' +
            'degradation due to architectural shielding.',
        category: 'toolkits',
        badge: 'Best Practices',
        icon: 'location_on',
        readTime: '5 min read'
    },
    {
        id: 'lms-gradebook-sync',
        title: 'Importing Formally CSV Attendance Logs into Canvas & Blackboard',
        description: 'Format guide and column mapping instructions for importing post-session CSV attendance exports ' +
            'directly into standard university gradebooks.',
        category: 'integrations',
        badge: 'LMS Integration',
        icon: 'table_chart',
        readTime: '4 min read'
    },
    {
        id: 'safari-chrome-permissions',
        title: 'Fixing Location and Camera Permissions on iOS Safari & Android Chrome',
        description: 'Step-by-step visual guide for students who accidentally tapped "Block" on browser geolocation or ' +
            'camera permissions.',
        category: 'students',
        badge: 'Troubleshooting',
        icon: 'perm_device_information',
        readTime: '2 min read'
    }
];

export const downloadableAssets = [
    {
        title: 'Classroom Projector Slide (1-Slide Student Onboarding)',
        desc: 'Drop this single slide into your PowerPoint or Keynote deck to show students how to scan and verify.',
        type: 'PPTX',
        size: '1.2 MB'
    },
    {
        title: 'Standard Canvas / Blackboard Attendance CSV Template',
        desc: 'Pre-formatted spreadsheet template ready to map student IDs and attendance statuses.',
        type: 'CSV',
        size: '14 KB'
    },
    {
        title: 'Institutional Academic Integrity Policy Snippet',
        desc: 'Pre-written syllabus policy text addressing digital attendance verification and proxy submission rules.',
        type: 'PDF',
        size: '220 KB'
    }
];

export const troubleshootingFaqs = [
    {
        q: 'A student says their phone camera is struggling to scan the projector from the back row.',
        a: 'Students can pinch-to-zoom on their default smartphone camera to focus on the QR code without leaving their ' +
            'seats. Alternatively, the lecturer can click the "Expand QR" button on the dashboard to scale the code ' +
            'full-screen.'
    },
    {
        q: 'A student accidentally blocked browser location access. How do they reset it?',
        a: 'On iOS Safari: Tap the "aA" or page settings icon in the address bar → Website Settings → Location → change ' +
            'to "Allow". On Android Chrome: Tap the tune/padlock icon next to the URL → Permissions → toggle Location to ' +
            '"On", then refresh.'
    },
    {
        q: 'Can two students submit attendance from the same smartphone if one forgot their device?',
        a: 'No. Formally binds a cryptographically generated hardware UUID to the student submission for that session. ' +
            'If a second student attempts to check in using the same phone, the system rejects it to enforce the ' +
            'one-person, one-device anti-proxy rule.'
    }
];
