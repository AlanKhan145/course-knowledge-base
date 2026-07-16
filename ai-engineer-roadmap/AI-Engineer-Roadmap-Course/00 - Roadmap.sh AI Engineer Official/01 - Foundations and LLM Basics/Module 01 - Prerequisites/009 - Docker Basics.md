# 009 — Docker Basics

**Course:** 01 — Foundations and LLM Basics
**Module:** Module 01 — Prerequisites
**Content Group:** Required Foundations
**Roadmap Source:** Prerequisites / Required Foundations
**Lesson Type:** Prerequisite
**Lesson Order:** 009
**Suggested Duration:** 18 minutes

---

## 1. Overview

This lesson introduces **Docker Basics** in the context of modern AI engineering.

Docker allows developers to package an application together with its runtime, system libraries, dependencies, and configuration into a portable unit called a **container**.

For an AI Engineer, Docker is useful because AI applications often depend on many components:

* A Python or Node.js runtime
* API frameworks such as FastAPI, Flask, or Express
* Machine learning libraries
* Vector databases
* Model-serving tools
* Environment variables
* Operating-system packages
* Background workers
* Monitoring and logging services

Without Docker, an application may work on one developer’s computer but fail in testing, production, or another team member’s environment.

By the end of this lesson, you should understand where Docker fits into an AI application workflow and how to package a small API as a reproducible container.

---

## 2. Learning Objectives

After completing this lesson, you should be able to:

* Explain Docker, images, containers, and registries in your own words.
* Describe the difference between a Docker image and a running container.
* Understand how Docker supports AI application development and deployment.
* Write a basic `Dockerfile`.
* Build and run a container locally.
* Expose an API port from a Docker container.
* Pass configuration through environment variables.
* Use `.dockerignore` to reduce image size and prevent unnecessary files from being copied.
* Identify common Docker failures and debug them.
* Package a small FastAPI or Node.js API as a portfolio-ready demo.

---

## 3. Why Docker Matters for AI Engineers

AI engineering is not only about writing prompts or calling language models.

A production AI application usually includes several software layers:

```text
User Interface
      |
      v
Backend API
      |
      +-------------------+
      |                   |
      v                   v
LLM Provider         Retrieval System
                          |
                          v
                    Vector Database
      |
      v
Logs, Cache, Database, Monitoring
```

Each component may require different dependencies and configuration.

Docker helps create predictable environments for these components.

For example, an AI application may require:

* Python 3.12
* FastAPI
* Uvicorn
* PostgreSQL client libraries
* Redis
* A specific version of PyTorch
* A vector database client
* An LLM provider SDK

Docker packages these requirements so that the same application can run consistently on:

* A developer’s laptop
* A CI/CD server
* A staging environment
* A cloud virtual machine
* Kubernetes
* A container hosting platform

---

## 4. Core Concepts

### 4.1 Docker Image

A **Docker image** is a read-only package containing everything required to run an application.

An image commonly includes:

* Application source code
* Runtime environment
* Dependencies
* System libraries
* Default configuration
* Startup command

An image is similar to a reusable application template.

Example image names:

```text
python:3.12-slim
node:22-alpine
postgres:17
redis:7-alpine
my-ai-api:1.0
```

---

### 4.2 Docker Container

A **container** is a running instance of a Docker image.

You can create multiple containers from the same image.

```text
Docker Image
    |
    +--> Container A
    |
    +--> Container B
    |
    +--> Container C
```

For example, the same API image may be used to run:

* One development container
* Three production API containers
* One testing container

---

### 4.3 Dockerfile

A `Dockerfile` is a text file containing instructions for building a Docker image.

A typical `Dockerfile` defines:

1. The base image
2. The working directory
3. The dependency installation process
4. The application files
5. The exposed port
6. The startup command

Example:

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

---

### 4.4 Docker Registry

A **Docker registry** stores and distributes Docker images.

Common registries include:

* Docker Hub
* GitHub Container Registry
* Amazon Elastic Container Registry
* Google Artifact Registry
* Azure Container Registry

The general workflow is:

```mermaid
flowchart LR
    A[Source Code] --> B[Dockerfile]
    B --> C[Build Docker Image]
    C --> D[Push to Registry]
    D --> E[Pull on Server]
    E --> F[Run Container]
```

---

### 4.5 Docker Volume

Containers should generally be treated as temporary.

When a container is deleted, files stored inside its writable layer may also disappear.

A **volume** provides persistent storage outside the container lifecycle.

Volumes are useful for:

* Database files
* Uploaded documents
* Model files
* Generated reports
* Cache data
* Local development data

Example:

```bash
docker run \
  -v ai_app_data:/app/data \
  my-ai-api
```

---

### 4.6 Port Mapping

An application running inside a container has its own network environment.

To access the application from the host machine, map a host port to a container port.

```bash
docker run -p 8000:8000 my-ai-api
```

The syntax is:

```text
HOST_PORT:CONTAINER_PORT
```

The request flow becomes:

```text
Browser
  |
  | http://localhost:8000
  v
Host Port 8000
  |
  v
Container Port 8000
  |
  v
FastAPI Application
```

---

### 4.7 Environment Variables

Environment variables allow configuration to be passed into a container without hardcoding values into the image.

Examples include:

* Database URLs
* API endpoints
* Application environment
* Model names
* Feature flags
* Logging levels

Example:

```bash
docker run \
  -p 8000:8000 \
  -e APP_ENV=development \
  -e MODEL_NAME=gpt-4.1-mini \
  my-ai-api
```

In Python:

```python
import os

app_env = os.getenv("APP_ENV", "development")
model_name = os.getenv("MODEL_NAME", "default-model")
```

Secrets such as API keys should not be committed to source control or embedded directly in the Docker image.

---

## 5. Docker Workflow

A standard Docker workflow looks like this:

```mermaid
flowchart TD
    A[Write Application Code] --> B[Create Dependency File]
    B --> C[Write Dockerfile]
    C --> D[Build Docker Image]
    D --> E[Run Container]
    E --> F[Test API]
    F --> G{Does It Work?}
    G -- No --> H[Inspect Logs and Fix]
    H --> D
    G -- Yes --> I[Tag Image]
    I --> J[Push to Registry]
    J --> K[Deploy]
```

The essential commands are:

```bash
docker build -t my-ai-api .
docker run -p 8000:8000 my-ai-api
docker ps
docker logs <container-name>
docker stop <container-name>
```

---

## 6. Practical Demo: Dockerizing a FastAPI Application

### 6.1 Project Structure

Create the following files:

```text
docker-fastapi-demo/
├── main.py
├── requirements.txt
├── Dockerfile
└── .dockerignore
```

---

### 6.2 FastAPI Application

Create `main.py`:

```python
from fastapi import FastAPI
from pydantic import BaseModel


app = FastAPI(
    title="Docker AI API Demo",
    version="1.0.0",
)


class PromptRequest(BaseModel):
    prompt: str


@app.get("/health")
def health_check() -> dict[str, str]:
    return {
        "status": "healthy",
        "service": "docker-ai-api",
    }


@app.post("/generate")
def generate_response(request: PromptRequest) -> dict[str, str]:
    clean_prompt = request.prompt.strip()

    if not clean_prompt:
        return {
            "response": "The prompt cannot be empty.",
        }

    return {
        "response": f"Demo AI response for: {clean_prompt}",
    }
```

This example does not call a real language model. Its purpose is to demonstrate how an AI-style API can be packaged and run inside Docker.

---

### 6.3 Dependency File

Create `requirements.txt`:

```text
fastapi==0.116.1
uvicorn[standard]==0.35.0
```

For a real project, dependency versions should be reviewed and updated according to your application requirements.

---

### 6.4 Dockerfile

Create `Dockerfile`:

```dockerfile
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD [
  "uvicorn",
  "main:app",
  "--host",
  "0.0.0.0",
  "--port",
  "8000"
]
```

### Explanation

```dockerfile
FROM python:3.12-slim
```

Uses a lightweight Python base image.

```dockerfile
WORKDIR /app
```

Sets `/app` as the working directory inside the image.

```dockerfile
COPY requirements.txt .
```

Copies the dependency file before the source code.

This improves Docker layer caching because dependencies are only reinstalled when `requirements.txt` changes.

```dockerfile
RUN pip install --no-cache-dir -r requirements.txt
```

Installs Python dependencies.

```dockerfile
COPY . .
```

Copies the application files into the image.

```dockerfile
EXPOSE 8000
```

Documents that the application listens on port `8000`.

```dockerfile
CMD [...]
```

Defines the command that runs when the container starts.

---

### 6.5 Docker Ignore File

Create `.dockerignore`:

```text
.git
.gitignore
.env
.venv
venv
__pycache__
*.pyc
.pytest_cache
.mypy_cache
.DS_Store
README.md
```

This prevents unnecessary or sensitive files from being copied into the Docker build context.

---

### 6.6 Build the Image

Run:

```bash
docker build -t docker-ai-api:1.0 .
```

Command breakdown:

```text
docker build        Build a Docker image
-t                  Assign a name and tag
docker-ai-api       Image name
1.0                 Image version
.                   Use the current directory as the build context
```

Check the image:

```bash
docker images
```

---

### 6.7 Run the Container

Run:

```bash
docker run \
  --name docker-ai-api \
  -p 8000:8000 \
  docker-ai-api:1.0
```

Open:

```text
http://localhost:8000/health
```

Expected response:

```json
{
  "status": "healthy",
  "service": "docker-ai-api"
}
```

FastAPI documentation is available at:

```text
http://localhost:8000/docs
```

---

### 6.8 Test the API

Using `curl`:

```bash
curl http://localhost:8000/health
```

Test the generation endpoint:

```bash
curl -X POST \
  http://localhost:8000/generate \
  -H "Content-Type: application/json" \
  -d '{"prompt":"Explain retrieval-augmented generation"}'
```

Expected result:

```json
{
  "response": "Demo AI response for: Explain retrieval-augmented generation"
}
```

---

## 7. Docker Commands to Know

### Show running containers

```bash
docker ps
```

### Show all containers

```bash
docker ps -a
```

### Show local images

```bash
docker images
```

### View container logs

```bash
docker logs docker-ai-api
```

Follow logs continuously:

```bash
docker logs -f docker-ai-api
```

### Stop a container

```bash
docker stop docker-ai-api
```

### Start an existing container

```bash
docker start docker-ai-api
```

### Remove a container

```bash
docker rm docker-ai-api
```

### Remove an image

```bash
docker rmi docker-ai-api:1.0
```

### Open a shell inside a running container

```bash
docker exec -it docker-ai-api sh
```

---

## 8. Docker Compose Introduction

An AI application often needs more than one service.

For example:

```text
FastAPI API
PostgreSQL Database
Redis Cache
Vector Database
Background Worker
```

Starting every service manually becomes difficult.

Docker Compose allows multiple containers to be defined in one YAML file.

Example architecture:

```mermaid
flowchart LR
    U[User] --> API[FastAPI Container]
    API --> DB[(PostgreSQL Container)]
    API --> CACHE[(Redis Container)]
    API --> LLM[External LLM API]
    API --> VECTOR[(Vector Database)]
```

Example `compose.yaml`:

```yaml
services:
  api:
    build: .
    ports:
      - "8000:8000"
    environment:
      APP_ENV: development
      DATABASE_URL: postgresql://app:password@database:5432/ai_app
    depends_on:
      - database

  database:
    image: postgres:17-alpine
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: password
      POSTGRES_DB: ai_app
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

Start the services:

```bash
docker compose up --build
```

Run them in the background:

```bash
docker compose up --build -d
```

Stop and remove the containers:

```bash
docker compose down
```

Remove containers and volumes:

```bash
docker compose down -v
```

Use the last command carefully because it may delete persistent development data.

---

## 9. Docker in an AI Application Workflow

Docker can be used at several stages of an AI engineering project.

### Local Development

Docker provides a consistent development environment for all team members.

```text
Developer A: macOS
Developer B: Windows
Developer C: Linux
            |
            v
     Same Docker Image
```

### Automated Testing

CI systems can build the image and run tests inside it.

```text
Git Push
   |
   v
Build Image
   |
   v
Run Tests
   |
   v
Security Scan
   |
   v
Publish Image
```

### Model Serving

A trained model can be packaged with an API server.

```text
Model File
   +
Inference Code
   +
Python Libraries
   +
System Packages
   |
   v
Docker Image
```

### RAG Deployment

A Retrieval-Augmented Generation system may use separate containers for:

* API service
* Document ingestion worker
* Vector database
* Relational database
* Redis queue
* Monitoring service

### Agent Systems

An agent service can use Docker to isolate:

* Tool execution
* Code interpreters
* Browser workers
* Background jobs
* External integrations

Isolation is especially important when an agent executes generated commands or user-provided code.

---

## 10. Image Size and Layer Caching

Docker images should be reasonably small and reproducible.

### Poor Layer Ordering

```dockerfile
COPY . .

RUN pip install -r requirements.txt
```

Any source-code change invalidates the dependency installation layer.

### Better Layer Ordering

```dockerfile
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .
```

Dependencies are reinstalled only when the dependency file changes.

### Additional Optimization Techniques

* Use slim base images where appropriate.
* Add a `.dockerignore` file.
* Remove temporary package-manager files.
* Avoid installing unnecessary development tools.
* Use multi-stage builds for compiled applications.
* Do not copy local virtual environments into the image.
* Separate development and production dependencies.
* Pin important dependency versions.

---

## 11. Security Basics

Docker does not automatically make an application secure.

Follow these basic practices:

### Do Not Store Secrets in the Image

Avoid:

```dockerfile
ENV OPENAI_API_KEY=secret-value
```

The value may remain visible in the image history.

Pass secrets at runtime instead:

```bash
docker run \
  -e OPENAI_API_KEY="$OPENAI_API_KEY" \
  docker-ai-api:1.0
```

### Avoid Running as Root

A production image can create a non-root user:

```dockerfile
RUN adduser --disabled-password --gecos "" appuser

USER appuser
```

### Use Trusted Base Images

Prefer official or well-maintained base images.

### Update Dependencies

Old application and system dependencies may contain known vulnerabilities.

### Limit Container Permissions

Do not grant privileged access unless it is absolutely necessary.

Avoid:

```bash
docker run --privileged ...
```

### Do Not Mount Sensitive Host Directories

Mounting the host file system into a container may expose private data or allow dangerous modifications.

---

## 12. Common Mistakes

### Mistake 1: The Application Uses `localhost`

Inside Docker, `localhost` refers to the current container.

If the API needs to connect to a database container, use the Compose service name:

```text
database
```

instead of:

```text
localhost
```

Example:

```text
postgresql://app:password@database:5432/ai_app
```

---

### Mistake 2: The Server Binds Only to `127.0.0.1`

This may make the application inaccessible outside the container.

Incorrect:

```bash
uvicorn main:app --host 127.0.0.1
```

Correct:

```bash
uvicorn main:app --host 0.0.0.0
```

---

### Mistake 3: Port Mapping Is Missing

Running:

```bash
docker run docker-ai-api:1.0
```

does not expose the container port to the host.

Use:

```bash
docker run -p 8000:8000 docker-ai-api:1.0
```

---

### Mistake 4: Environment Variables Are Missing

The application may fail with errors such as:

```text
OPENAI_API_KEY is not configured
DATABASE_URL is missing
```

Inspect the container configuration and pass the required variables.

---

### Mistake 5: Large Files Are Copied into the Image

Possible causes include:

* Local model checkpoints
* Git history
* Virtual environments
* Datasets
* Cache directories
* Build outputs

Use `.dockerignore` and inspect the build context.

---

### Mistake 6: Data Is Stored Only Inside the Container

Database files or uploaded documents disappear after container removal.

Use volumes for persistent data.

---

### Mistake 7: Using the `latest` Tag for Everything

The `latest` tag does not clearly identify which application version is running.

Prefer explicit versions:

```text
my-ai-api:1.0.0
my-ai-api:1.1.0
my-ai-api:2026-07-16
```

---

### Mistake 8: Installing Dependencies Every Time the Code Changes

This usually happens because the Dockerfile has poor layer ordering.

Copy dependency files before copying frequently changed source code.

---

## 13. Debugging Docker Applications

When a container fails, use a systematic debugging process.

```mermaid
flowchart TD
    A[Container Fails] --> B[Check Container Status]
    B --> C[Read Logs]
    C --> D{Application Started?}
    D -- No --> E[Check Command and Dependencies]
    D -- Yes --> F{Port Reachable?}
    F -- No --> G[Check Port Mapping and Host Binding]
    F -- Yes --> H{External Service Available?}
    H -- No --> I[Check Network, DNS and Environment Variables]
    H -- Yes --> J[Inspect Application Logic]
```

### Step 1: Check the container

```bash
docker ps -a
```

Look for:

* Exit status
* Restart loops
* Container name
* Port mapping

### Step 2: Read logs

```bash
docker logs docker-ai-api
```

### Step 3: Inspect the container

```bash
docker inspect docker-ai-api
```

### Step 4: Open a shell

```bash
docker exec -it docker-ai-api sh
```

Then inspect files and environment variables:

```bash
ls -la
env
python --version
pip list
```

### Step 5: Test from inside the container

```bash
curl http://localhost:8000/health
```

This helps determine whether the problem is inside the application or in Docker networking.

---

## 14. Example Production Failure

### Scenario

The FastAPI container starts successfully, but users cannot access the API.

### Symptoms

```text
The container is running.
No application error appears in the logs.
http://localhost:8000 does not respond.
```

### Possible Causes

1. Uvicorn is bound to `127.0.0.1`.
2. Port `8000` was not published.
3. The host port is already in use.
4. A firewall or cloud security rule blocks the port.
5. The container is listening on a different port.

### Debugging Commands

```bash
docker ps
docker logs docker-ai-api
docker inspect docker-ai-api
```

### Correct Run Command

```bash
docker run \
  --name docker-ai-api \
  -p 8000:8000 \
  docker-ai-api:1.0
```

### Correct Server Binding

```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

---

## 15. Practical Exercise

Create a Dockerized AI-style API with the following endpoints:

```text
GET  /health
POST /generate
GET  /config
```

### Requirements

The application should:

* Use FastAPI, Flask, or Express.
* Accept a text prompt.
* Return a mock generated response.
* Read `APP_ENV` and `MODEL_NAME` from environment variables.
* Include a `Dockerfile`.
* Include a `.dockerignore` file.
* Run with one Docker command.
* Expose a health-check endpoint.
* Log incoming requests.
* Return a useful error when the prompt is empty.

### Suggested Project Structure

```text
docker-ai-demo/
├── app/
│   ├── __init__.py
│   ├── main.py
│   └── config.py
├── tests/
│   └── test_health.py
├── requirements.txt
├── Dockerfile
├── compose.yaml
├── .dockerignore
├── .env.example
└── README.md
```

### Example Runtime Command

```bash
docker run \
  --rm \
  -p 8000:8000 \
  -e APP_ENV=development \
  -e MODEL_NAME=mock-model \
  docker-ai-demo:1.0
```

---

## 16. Reflection Questions

Write short answers without looking at the lesson:

1. What is the difference between a Docker image and a Docker container?
2. Why must a FastAPI server usually bind to `0.0.0.0` inside Docker?
3. What does `-p 8000:8000` mean?
4. Why should dependency files be copied before application source code?
5. Why should secrets not be stored in a Dockerfile?
6. When should you use a Docker volume?
7. How can Docker help a RAG or AI agent system?
8. What commands would you use when a container exits unexpectedly?

---

## 17. Completion Checklist

* [ ] I can explain Docker in one or two minutes.
* [ ] I understand the difference between an image and a container.
* [ ] I can explain the purpose of a `Dockerfile`.
* [ ] I can build an image with `docker build`.
* [ ] I can run a container with `docker run`.
* [ ] I understand port mapping.
* [ ] I can pass environment variables into a container.
* [ ] I know why `.dockerignore` is important.
* [ ] I can inspect container logs.
* [ ] I can open a shell inside a running container.
* [ ] I understand when persistent volumes are required.
* [ ] I have created a small Dockerized API demo.
* [ ] I have documented at least one production risk or limitation.

---

## 18. Related Outcome

Prepare the web, backend, programming, and deployment foundations required before building production AI applications.

Docker provides the bridge between application code and repeatable deployment environments.

---

## 19. Related Project

Build a minimal FastAPI or Node.js API that includes:

* Git version control
* A REST endpoint
* Request validation
* A database connection
* Environment-based configuration
* Docker packaging
* A health-check endpoint
* Basic logging
* A clear README

A strong portfolio project should allow another developer to run the entire application with commands such as:

```bash
git clone <repository>
cd <repository>
docker compose up --build
```

---

## 20. Summary

**Docker Basics** is an essential milestone in the AI Engineer roadmap.

Docker helps transform an AI prototype into a reproducible software product by packaging:

* Application code
* Runtime dependencies
* System libraries
* Configuration
* Startup behavior

The most important concepts are:

```text
Dockerfile
    |
    v
Docker Image
    |
    v
Docker Container
    |
    v
Test, Deploy and Scale
```

Do not stop after memorizing Docker commands.

Build a small API, package it, intentionally break it, inspect its logs, fix its configuration, and document what you learned. That practical experience will prepare you for more advanced systems such as RAG pipelines, AI agents, model-serving APIs, background workers, and production deployment platforms.
