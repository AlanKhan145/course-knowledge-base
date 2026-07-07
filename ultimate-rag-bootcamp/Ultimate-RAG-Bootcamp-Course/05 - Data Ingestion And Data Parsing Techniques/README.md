# Module 05 — Data Ingestion And Data Parsing Techniques

- Lessons: 10
- Phase: Phase 2

## Purpose

This module covers the complete data ingestion pipeline in depth. Students learn how to load, parse, and chunk data from a wide variety of sources — text files, PDFs, Word documents, CSVs, Excel files, JSON, and SQL databases — using LangChain's document loaders and text splitters.

## Lessons

- [001 - Project Structure And Environment Set Up With UV Package](001%20-%20Project%20Structure%20And%20Environment%20Set%20Up%20With%20UV%20Package.md)
- [002 - Document Structure In LangChain](002%20-%20Document%20Structure%20In%20LangChain.md)
- [003 - Ingesting And Parsing Text Data Using Document Loaders](003%20-%20Ingesting%20And%20Parsing%20Text%20Data%20Using%20Document%20Loaders.md)
- [004 - Text Splitting Techniques](004%20-%20Text%20Splitting%20Techniques.md)
- [005 - Ingestion And Parsing PDF Documents](005%20-%20Ingestion%20And%20Parsing%20PDF%20Documents.md)
- [006 - Handling Common PDF Issues](006%20-%20Handling%20Common%20PDF%20Issues.md)
- [007 - Ingestion And Data Parsing Word Documents](007%20-%20Ingestion%20And%20Data%20Parsing%20Word%20Documents.md)
- [008 - Parsing CSV And Excel Files](008%20-%20Parsing%20CSV%20And%20Excel%20Files.md)
- [009 - JSON Files Parsing And Processing](009%20-%20JSON%20Files%20Parsing%20And%20Processing.md)
- [010 - SQL Databases Parsing And Processing](010%20-%20SQL%20Databases%20Parsing%20And%20Processing.md)

## Key Concepts

- UV package manager for fast Python project setup
- LangChain Document object structure (page_content + metadata)
- Document loaders for text, PDF, Word, CSV, Excel, JSON, SQL
- Text splitters: CharacterTextSplitter, RecursiveCharacterTextSplitter, TokenTextSplitter
- Handling edge cases: scanned PDFs, multi-sheet Excel, nested JSON

## Study Checklist

- [ ] Set up a UV-managed project and install dependencies
- [ ] Load a text file and a directory of files using LangChain loaders
- [ ] Split documents with RecursiveCharacterTextSplitter
- [ ] Load and chunk a PDF document
- [ ] Load a CSV file and convert rows to Documents
- [ ] Parse a nested JSON file with jq_schema
- [ ] Load rows from an SQL table as Documents
