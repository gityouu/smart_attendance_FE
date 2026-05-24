type SolutionTabId = 'universities' | 'corporate' | 'examinations';

interface SolutionTab {
    id: SolutionTabId;
    label: string;
    icon: string;
    badge: string;
    title: string;
    description: string;
    stats: { label: string; value: string }[];
    bullets: string[];
}

export const solutionsData: Record<SolutionTabId, SolutionTab> = {
    universities: {
        id: 'universities',
        label: 'Universities & Colleges',
        icon: 'school',
        badge: 'Higher Education',
        title: 'Stop Proxy Attendance Across 300+ Seat Lecture Halls',
        description: 'Large lecture halls make manual rolls and paper signatures completely unmanageable. ' +
            'Formally enables professors to display dynamic, rotating QR codes on the projector, verifying actual ' +
            'physical attendance in seconds without forcing students to download any app.',
        stats: [
            { label: 'Proxy Fraud Reduction', value: '99.4%' },
            { label: 'Avg Hall Check-in Time', value: '45 sec' },
            { label: 'Student App Downloads', value: '0 Required' }
        ],
        bullets: [
            'Dynamic 30-second token rotation stops screenshots from being forwarded in class group chats.',
            'High-precision GPS geofencing confirms check-ins originate inside the lecture hall, not from student dorms.',
            'Hardware binding blocks single students from signing in for multiple absent friends on one smartphone.'
        ]
    },
    corporate: {
        id: 'corporate',
        label: 'Corporate Training & Seminars',
        icon: 'corporate_fare',
        badge: 'Enterprise & Compliance',
        title: 'Auditable Presence Verification for Mandatory Training',
        description: 'Regulatory, safety, and employee accreditation programs demand proof of attendance. ' +
            'Formally produces an immutable digital attendance ledger with zero friction for guests and external ' +
            'contractors.',
        stats: [
            { label: 'Admin Overhead', value: '-85%' },
            { label: 'Audit Trail Accuracy', value: '100%' },
            { label: 'Visitor Setup Time', value: 'Instant' }
        ],
        bullets: [
            'Immediate digital sign-off without enterprise login hurdles or pre-provisioned employee accounts.',
            'Exportable certified CSV/Excel attendance summaries generated the moment a workshop wraps up.',
            'Direct email receipts sent to compliance officers and workshop organizers automatically.'
        ]
    },
    examinations: {
        id: 'examinations',
        label: 'Exam & Assessment Centers',
        icon: 'fact_check',
        badge: 'Testing Integrity',
        title: 'Tamper-Resistant Seated Roll Call Before Test Papers Open',
        description: 'Ensure the candidate seated in the desk matches the official registration roster. ' +
            'Formally verifies physical entrance and locks candidate submissions to their physical hardware device ' +
            'before exams begin.',
        stats: [
            { label: 'Hardware Deployment Cost', value: '$0' },
            { label: 'Roster Verification Speed', value: 'Instant' },
            { label: 'Duplicate Entry Block', value: 'Guaranteed' }
        ],
        bullets: [
            'Unique PostgresSQL database hardware lock flags any re-attempt from previously registered devices.',
            'Eliminates the risk of misplaced physical exam sign-in slips and contentious audit disputes.',
            'Runs effortlessly on existing laptops and student smartphones without fingerprint scanners.'
        ]
    }
};
