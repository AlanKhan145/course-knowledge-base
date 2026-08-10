# Module 08 - MLOps

**Course:** 04 - MLOps and Deployment

This module has 24 lessons from the AI & Data Scientist roadmap.

## Outcome

Deploy, version, monitor and operate ML models with APIs, Docker, CI/CD and drift-aware workflows.

## Project

Mini project: Deploy ML Model API with FastAPI endpoint `/predict`, Dockerfile and README.

## Content Groups

- [Model Serving APIs](01-Serving/README.md) (Lessons 001-006)
- [Docker Packaging](02-Docker/README.md) (Lessons 007-012)
- [CI-CD and Deployment Automation](03-CICD/README.md) (Lessons 013-016)
- [Monitoring and Drift](04-Monitor/README.md) (Lessons 017-022)
- [Experiment and Model Versioning](05-Version/README.md) (Lessons 023-024)

## Lessons


Note: Lesson files are organized in topic subfolders for easier study.

- [001 - Serving Model](01-Serving/001 - Serving Model.md) - exposing a trained model so other systems can request predictions
- [002 - Pickle / joblib](01-Serving/002 - Pickle - joblib.md) - serializing a trained Python model to disk for reuse
- [003 - FastAPI](01-Serving/003 - FastAPI.md) - a Python framework for building fast, typed web APIs
- [004 - REST API](01-Serving/004 - REST API.md) - an HTTP interface for requesting predictions or data over the network
- [005 - Batch Prediction](01-Serving/005 - Batch Prediction.md) - scoring many records at once on a schedule
- [006 - Real-time Prediction](01-Serving/006 - Real-time Prediction.md) - scoring a single request as it arrives, with low latency
- [007 - Docker](02-Docker/007 - Docker.md) - packaging an application and its dependencies into a portable container
- [008 - Dockerfile](02-Docker/008 - Dockerfile.md) - the instructions used to build a Docker image
- [009 - Image](02-Docker/009 - Image.md) - the packaged, immutable snapshot of an application and its dependencies
- [010 - Container](02-Docker/010 - Container.md) - a running instance of a Docker image
- [011 - Environment Variable](02-Docker/011 - Environment Variable.md) - configuration values injected into a container at runtime
- [012 - Build and Run Service](02-Docker/012 - Build and Run Service.md) - turning a Dockerfile into a running, callable service
- [013 - CI/CD for ML](03-CICD/013 - CI - CD for ML.md) - automating testing and deployment for machine learning code and models
- [014 - GitHub Actions](03-CICD/014 - GitHub Actions.md) - a CI/CD platform for running automated workflows on GitHub
- [015 - Test Pipeline](03-CICD/015 - Test Pipeline.md) - automated checks that run before code or a model is deployed
- [016 - Auto Deploy](03-CICD/016 - Auto Deploy.md) - automatically releasing a new model or service version after checks pass
- [017 - Model Artifact](04-Monitor/017 - Model Artifact.md) - the versioned files (weights, config) produced by a training run
- [018 - Model Monitoring](04-Monitor/018 - Model Monitoring.md) - tracking a deployed model's health and prediction quality over time
- [019 - Prediction Log](04-Monitor/019 - Prediction Log.md) - recording model inputs and outputs for auditing and debugging
- [020 - Input Distribution](04-Monitor/020 - Input Distribution.md) - the statistical shape of data a model receives in production
- [021 - Data Drift](04-Monitor/021 - Data Drift.md) - when production input data shifts away from the training distribution
- [022 - Model Performance Decay](04-Monitor/022 - Model Performance Decay.md) - a model's accuracy degrading over time as conditions change
- [023 - Experiment Tracking](05-Version/023 - Experiment Tracking.md) - logging parameters, metrics, and artifacts across training runs
- [024 - Model Versioning](05-Version/024 - Model Versioning.md) - tracking and managing different trained versions of a model (mini project)

## How to Study This Module

- Go through the lessons in order if you're just starting out.
- For each lesson, write down 3 key takeaways and 1 real data/ML example.
- Build a small artifact: a notebook, SQL query, chart, model metric, API endpoint, Dockerfile, or portfolio note.
