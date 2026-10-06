# Future Data Model

FUTURE / NOT IMPLEMENTED IN PHASE 0

This document defines the intended conceptual schema for the next phases of Shyam Job. The schema is not implemented in this repository yet.

## Core entities

- users
- profiles
- jobs
- job_sources
- job_locations
- companies
- company_sources
- company_research
- interview_records
- interview_questions
- interview_topics
- question_sources
- hidden_jobs
- saved_preferences

## Application tracking

There must NOT be an application tracker table. Shyam Job is not an application-tracking system. It is a career-intelligence layer that helps the user discover, understand, and prepare for opportunities without replacing the decision-making role of the user.

## Example intent

- users: app identity and authentication
- profiles: user role, experience, location, preferences
- jobs: normalized job records with source metadata
- job_sources: source definitions, trust levels, and refresh metadata
- job_locations: normalized locations and area/city mapping
- companies: canonical company records
- company_sources: source-backed company facts
- company_research: narrative or structured company research
- interview_records: candidate-reported or source-backed interview intelligence
- interview_questions: specific questions and context
- interview_topics: normalized taxonomy for interview preparation topics
- question_sources: where interview items originated
- hidden_jobs: user-hidden or deprioritized jobs
- saved_preferences: user-configured search and preparation preferences

This document intentionally leaves the exact schema flexible for future implementation and Supabase modeling work.

## Interview record intent

Interview records should support the following structure:

- company
- role
- year
- interviewType
- category
- topic
- subtopic
- question
- sourceUrl
- sourceType
- sourceCount
- lastSeen
- confidence

Possible confidence labels:

- Frequently reported
- Reported multiple times
- Reported once

These records are part of the future interview-intelligence layer, not a current production feature.
