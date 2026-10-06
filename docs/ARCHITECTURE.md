# Shyam Job Architecture

FUTURE / NOT IMPLEMENTED IN PHASE 0

The long-term architecture is a small, clear system:

JOB SOURCES -> SOURCE ADAPTER -> NORMALIZATION -> AI ENRICHMENT / RESEARCH -> SUPABASE -> SHYAM JOB FRONTEND

The application is intentionally narrow:

- Jobs
- Prepare
- About Company / Explore contextually
- Minimal navigation, not a large dashboard

The platform is designed so each source is isolated behind adapters. This keeps job-source integrations swappable and prevents one source from hard-coding app behavior.

## Refresh pipeline

scheduled backend refresh
↓
fetch latest jobs
↓
normalize
↓
deduplicate
↓
store/update Supabase
↓
frontend reads Supabase/backend

## Interview intelligence model

Future interview intelligence entries will contain company, role, year, interview type, category, topic, subtopic, question, source URL, source type, source count, last seen, and confidence labels.

Confidence labels:

- Frequently reported
- Reported multiple times
- Reported once

AI-derived structure must never be presented as an official company statement.
