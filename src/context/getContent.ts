export const getContent = (type: string) => {
    switch (type) {
        case 'device_collision':
            return {
                icon: 'phone_locked',
                badge: 'Anti-Proxy Triggered',
                badgeColor: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
                title: 'Device Already Registered',
                description:
                    'This phone has already recorded attendance for another student in this class.',
                tip: 'To prevent proxy sign-ins, every attendee must check in using their own physical device.',
            };

        case 'capacity_exceeded':
            return {
                icon: 'group_off',
                badge: 'Room Limit Reached',
                badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
                title: 'Session At Maximum Capacity',
                description:
                    'The 50-attendee capacity limit for this free session has been reached.',
                tip: 'Please notify your lecturer or session organizer to adjust plan capacity or record you manually.',
            };

        case 'already_checked_in':
            return {
                icon: 'verified_user',
                badge: 'Duplicate Submission',
                badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
                title: 'Already Checked In',
                description:
                    'Your student identifier has already been verified for this attendance window.',
                tip: 'Your attendance is already confirmed on the session roster.',
            };
    }
};
