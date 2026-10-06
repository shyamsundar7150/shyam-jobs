export type InterviewConfidence =
  | 'Frequently reported'
  | 'Reported multiple times'
  | 'Reported once';

export interface InterviewRecord {
  company?: string;
  role?: string;
  year?: number;
  interviewType?: string;
  category?: string;
  topic?: string;
  subtopic?: string;
  question?: string;
  sourceUrl?: string;
  sourceType?: string;
  sourceCount?: number;
  lastSeen?: string;
  confidence?: InterviewConfidence;
}
