import type { NormalizedJob } from '../types/job';

export interface JobSourceAdapter {
  readonly sourceName: string;
  searchJobs(query: Record<string, unknown>): Promise<NormalizedJob[]>;
  fetchJob(externalId: string): Promise<NormalizedJob | null>;
  normalize(raw: unknown): NormalizedJob;
  identifySource(raw: unknown): string;
}
