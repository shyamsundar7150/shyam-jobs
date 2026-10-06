# Source Architecture

FUTURE / NOT IMPLEMENTED IN PHASE 0

Job sources must be isolated behind adapters so that new sources can be added without rewriting the app.

## Conceptual interface

```ts
interface JobSourceAdapter {
  sourceName: string;
  searchJobs(query: Record<string, unknown>): Promise<unknown[]>;
  fetchJob(externalId: string): Promise<unknown | null>;
  normalize(raw: unknown): NormalizedJob;
  identifySource(raw: unknown): string;
}
```

## Planned responsibilities

- searchJobs(): discover jobs from a source
- fetchJob(): retrieve a single job by external identifier
- normalize(): convert source-specific payloads to the normalized job model
- identifySource(): preserve source origin and trust metadata

## Source hierarchy

- Tier 1: Official company sources
- Tier 2: Reputable external sources
- Tier 3: Candidate/community interview reports

The system must eventually distinguish official company information from externally reported information and candidate-reported interview information. AI-derived structure should never be presented as an official company statement.

## Scope for Phase 0

This phase defines the architecture and interfaces only. No Adzuna integration, no scraping, and no API calls are implemented yet.
