export type AudienceType = 'school' | 'corporate';

export interface AudienceToastTabsProps {
    initialAudience?: AudienceType;
    onChange?: (audience: AudienceType) => void;
}