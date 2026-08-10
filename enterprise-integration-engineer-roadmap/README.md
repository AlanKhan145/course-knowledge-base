# Enterprise Integration Engineer Course

## TIBCO BW6, API Gateway, REST/SOAP, Kafka, Redis, Database, Java

An English-language course built for a banking / enterprise integration engineering track. The goal is not "interview prep" — it is to give you the full working knowledge needed to **design, build, deploy, and operate a real integration flow**: client/partner calls an API → API Gateway authenticates/rate-limits → TIBCO BW6 orchestrates → calls SOAP/REST backends → writes to DB/cache → publishes a Kafka event → the whole path is logged, monitored, retried, and error-handled.

## Structure

- Course root: `Enterprise-Integration-Engineer-Course/`
- 7 phase folders, 18 modules, 171 lesson files, 1 capstone project
- Each module is a subfolder with one `.md` lesson per topic (numbered `001 - ...`, `002 - ...`) plus a `README.md` index — lesson files are scaffolded with title/phase/module headers only, content to be filled in
- `00 - Course Overview.md` has the target architecture diagram and the 16-week phase plan
- `08 - Optimal Learning Path.md` gives the recommended module order if you are not following the calendar week by week

## How to use this course

Go phase by phase in order — later phases (TIBCO, API Gateway, Kafka/Redis, production reliability) assume you're comfortable with the HTTP/REST, Java, SQL, and SOAP/XML fundamentals from Phases 1–2. If you already have backend experience, skim Phases 1–2 as a refresher and spend most of your time on Phases 3–6 (TIBCO BW6, API Gateway, Kafka/Redis, production engineering) plus the capstone in Phase 7.

The core skill this course builds is **not** interview trivia — it's the ability to design an integration system that is correct, stable, secure, traceable when something breaks, resilient under load, and never corrupts transactional data.

