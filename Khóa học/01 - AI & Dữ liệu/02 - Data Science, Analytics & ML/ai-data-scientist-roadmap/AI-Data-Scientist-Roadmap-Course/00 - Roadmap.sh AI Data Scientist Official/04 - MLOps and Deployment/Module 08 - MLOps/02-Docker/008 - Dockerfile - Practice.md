# 008 — Dockerfile

**Course:** 04 — MLOps and Deployment
**Module:** Module 08 — MLOps
**Content Group:** Docker
**Roadmap Source:** MLOps / Docker
**Lesson Type:** MLOps
**Order in Module:** 008
**Suggested Duration:** 22 minutes

---

## 1. Overview

A **Dockerfile** is a text file containing instructions for building a Docker image.

In an AI or data science project, a Dockerfile can package:

* Application source code
* A trained machine learning model
* Python dependencies
* System libraries
* Environment configuration
* API startup commands

into a reproducible container image.

Without containerization, a machine learning application may work on one computer but fail on another because of differences in:

* Python versions
* Operating systems
* Installed packages
* System libraries
* Environment variables
* File paths
* Model artifacts

A Dockerfile helps solve the classic problem:

```text
"It works on my machine."
```

by defining the application environment as code.

```text
Source code + dependencies + model + Dockerfile
                       ↓
                 Docker build
                       ↓
                 Docker image
                       ↓
               Docker container
                       ↓
              Running ML service
```

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

* Explain what a Dockerfile is.
* Distinguish between a Dockerfile, image, and container.
* Describe how Docker supports machine learning deployment.
* Write a Dockerfile for a Python application.
* Package a FastAPI model-serving application.
* Use common Dockerfile instructions.
* Build and run a Docker image.
* Reduce image size and improve build speed.
* Apply basic Docker security practices.
* Use environment variables and health checks.
* Identify common Dockerfile mistakes.
* Add a Dockerfile to an MLOps portfolio project.

---

## 3. Dockerfile, Image, and Container

These three terms are related but not identical.

| Concept          | Description                                        |
| ---------------- | -------------------------------------------------- |
| Dockerfile       | A text file containing image-building instructions |
| Docker image     | An immutable package created from a Dockerfile     |
| Docker container | A running instance of a Docker image               |

The relationship is:

```text
Dockerfile
    ↓ docker build
Docker image
    ↓ docker run
Docker container
```

### Example

```text
Dockerfile
    ↓
ml-api:1.0.0 image
    ↓
Running FastAPI container
```

A single image can create multiple containers:

```text
                  ┌── Container 1
Docker image ─────┼── Container 2
                  └── Container 3
```

This makes it possible to scale a model-serving application by running multiple identical containers.

---

## 4. Why Dockerfiles Matter in MLOps

A notebook is useful for experimentation, but a production application needs a predictable runtime environment.

A Dockerfile helps move a project through the following workflow:

```text
Notebook experiment
        ↓
Training script
        ↓
Serialized model
        ↓
Prediction API
        ↓
Dockerfile
        ↓
Docker image
        ↓
CI/CD pipeline
        ↓
Production deployment
        ↓
Logs and monitoring
```

Docker supports MLOps by improving:

* Reproducibility
* Portability
* Dependency isolation
* Deployment consistency
* Versioning
* Testing
* Rollback
* Scaling

---

## 5. Basic Dockerfile Structure

A simple Dockerfile for a Python application may look like this:

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "main.py"]
```

Each instruction creates part of the final image.

```text
Base Python image
       ↓
Create working directory
       ↓
Copy dependency file
       ↓
Install dependencies
       ↓
Copy application code
       ↓
Define startup command
```

---

## 6. Common Dockerfile Instructions

### 6.1 `FROM`

`FROM` defines the base image.

```dockerfile
FROM python:3.12-slim
```

The base image provides:

* An operating system layer
* A Python runtime
* Standard system utilities
* Package-management tools

Examples:

```dockerfile
FROM python:3.12
```

```dockerfile
FROM python:3.12-slim
```

```dockerfile
FROM ubuntu:24.04
```

For many Python model-serving projects, a slim Python image is a practical starting point.

```text
Full Python image
    ├── More tools included
    ├── Easier for debugging
    └── Larger image

Slim Python image
    ├── Fewer packages
    ├── Smaller attack surface
    └── Smaller image
```

---

### 6.2 `WORKDIR`

`WORKDIR` sets the current directory inside the image.

```dockerfile
WORKDIR /app
```

After this instruction, subsequent commands operate relative to `/app`.

```dockerfile
WORKDIR /app

COPY main.py .
```

The file will be copied to:

```text
/app/main.py
```

Using `WORKDIR` is usually clearer than repeatedly writing:

```dockerfile
RUN mkdir -p /app
RUN cd /app
```

---

### 6.3 `COPY`

`COPY` copies files from the local build context into the image.

```dockerfile
COPY requirements.txt .
```

This copies:

```text
Local machine:
requirements.txt

Container image:
/app/requirements.txt
```

Copy an entire directory:

```dockerfile
COPY app ./app
```

Copy a model artifact:

```dockerfile
COPY artifacts/model.joblib ./artifacts/model.joblib
```

Copy the complete project:

```dockerfile
COPY . .
```

Be careful when copying everything because the build context may contain:

* Git history
* Virtual environments
* Datasets
* Secrets
* Notebook checkpoints
* Cache files
* Large model artifacts

Use a `.dockerignore` file to exclude unnecessary content.

---

### 6.4 `RUN`

`RUN` executes a command while building the image.

```dockerfile
RUN pip install --no-cache-dir -r requirements.txt
```

Other examples:

```dockerfile
RUN apt-get update
```

```dockerfile
RUN mkdir -p /app/logs
```

```dockerfile
RUN pytest
```

`RUN` happens during image creation, not every time the container starts.

```text
docker build
    ↓
RUN commands execute
    ↓
Image is created
```

---

### 6.5 `CMD`

`CMD` defines the default command executed when the container starts.

```dockerfile
CMD ["python", "main.py"]
```

For FastAPI:

```dockerfile
CMD [
    "uvicorn",
    "app.main:app",
    "--host",
    "0.0.0.0",
    "--port",
    "8000"
]
```

Only the final `CMD` instruction is used.

This is incorrect:

```dockerfile
CMD ["python", "prepare.py"]
CMD ["python", "main.py"]
```

Only the second command becomes the default startup command.

---

### 6.6 `ENTRYPOINT`

`ENTRYPOINT` defines the main executable for the container.

```dockerfile
ENTRYPOINT ["python", "main.py"]
```

A simplified distinction is:

| Instruction  | Typical purpose                              |
| ------------ | -------------------------------------------- |
| `CMD`        | Default startup command or default arguments |
| `ENTRYPOINT` | Fixed main executable                        |

Example:

```dockerfile
ENTRYPOINT ["python", "predict.py"]
CMD ["--input", "data/input.csv"]
```

The container runs:

```bash
python predict.py --input data/input.csv
```

The default arguments can be replaced:

```bash
docker run batch-predictor --input data/new_input.csv
```

---

### 6.7 `EXPOSE`

`EXPOSE` documents the port used by the application.

```dockerfile
EXPOSE 8000
```

This does not automatically publish the port to the host machine.

You still need:

```bash
docker run -p 8000:8000 ml-api
```

The mapping means:

```text
Host port 8000
       ↓
Container port 8000
```

---

### 6.8 `ENV`

`ENV` defines an environment variable inside the image.

```dockerfile
ENV MODEL_PATH=/app/artifacts/model.joblib
```

```dockerfile
ENV APP_ENV=production
```

The Python application can access it:

```python
import os

model_path = os.getenv(
    "MODEL_PATH",
    "/app/artifacts/model.joblib",
)
```

Environment variables are useful for configuration such as:

* Model paths
* Log levels
* API ports
* Deployment environments
* Feature flags
* Database locations

Do not place secrets directly in the Dockerfile.

Unsafe:

```dockerfile
ENV DATABASE_PASSWORD=my-secret-password
```

Secrets may become visible in:

* Image history
* Source control
* Build logs
* Container metadata

---

### 6.9 `ARG`

`ARG` defines a build-time variable.

```dockerfile
ARG PYTHON_VERSION=3.12

FROM python:${PYTHON_VERSION}-slim
```

Build with another value:

```bash
docker build \
  --build-arg PYTHON_VERSION=3.11 \
  -t ml-api .
```

Difference:

| Variable | Available during build | Available at runtime |
| -------- | ---------------------: | -------------------: |
| `ARG`    |                    Yes |           Usually no |
| `ENV`    |                    Yes |                  Yes |

---

### 6.10 `USER`

`USER` defines which operating-system user runs subsequent commands or the container process.

```dockerfile
USER appuser
```

Running the application as a non-root user reduces security risk.

Example:

```dockerfile
RUN useradd --create-home appuser

USER appuser
```

---

### 6.11 `HEALTHCHECK`

`HEALTHCHECK` tells Docker how to determine whether a container is healthy.

```dockerfile
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD python -c \
    "import urllib.request; urllib.request.urlopen('http://localhost:8000/health')"
```

The application should expose a health endpoint:

```python
@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "model_loaded": model is not None,
    }
```

The health flow is:

```text
Docker
   ↓
Call /health
   ↓
API responds successfully?
   ├── Yes → healthy
   └── No  → unhealthy
```

---

### 6.12 `LABEL`

`LABEL` adds metadata to the image.

```dockerfile
LABEL org.opencontainers.image.title="Iris Model API"
LABEL org.opencontainers.image.version="1.0.0"
LABEL org.opencontainers.image.description="FastAPI model serving demo"
```

Useful metadata may include:

* Image name
* Application version
* Source repository
* Build revision
* Description
* Maintainer information

---

## 7. Dockerfile Execution Model

Docker processes Dockerfile instructions from top to bottom.

```dockerfile
FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "main.py"]
```

Conceptually:

```text
Layer 1: Python base image
Layer 2: Working directory
Layer 3: requirements.txt
Layer 4: Installed dependencies
Layer 5: Application files
Layer 6: Startup configuration
```

Docker can reuse unchanged layers from previous builds.

This is called build caching.

---

## 8. Build Cache and Instruction Order

A poor instruction order can cause dependencies to be reinstalled unnecessarily.

### Less efficient Dockerfile

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir -r requirements.txt
```

Every source-code change invalidates the `COPY . .` layer, so package installation may run again.

### Better Dockerfile

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .
```

Now dependencies are reinstalled only when `requirements.txt` changes.

```text
requirements.txt unchanged
         ↓
Reuse dependency layer
         ↓
Copy updated source code
         ↓
Faster build
```

---

## 9. Dockerfile for a FastAPI ML Service

Suppose the project structure is:

```text
ml-model-api/
├── app/
│   ├── __init__.py
│   └── main.py
├── artifacts/
│   ├── model.joblib
│   └── metadata.json
├── requirements.txt
├── Dockerfile
└── .dockerignore
```

A basic Dockerfile could be:

```dockerfile
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY app ./app
COPY artifacts ./artifacts

EXPOSE 8000

CMD [
    "uvicorn",
    "app.main:app",
    "--host",
    "0.0.0.0",
    "--port",
    "8000"
]
```

---

## 10. Production-Oriented FastAPI Dockerfile

A stronger version can include:

* Environment variables
* A non-root user
* Health checks
* Metadata
* Unbuffered logs
* Explicit paths

```dockerfile
FROM python:3.12-slim

LABEL org.opencontainers.image.title="ML Prediction API"
LABEL org.opencontainers.image.version="1.0.0"
LABEL org.opencontainers.image.description="FastAPI service for model inference"

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV MODEL_PATH=/app/artifacts/model.joblib
ENV PORT=8000

WORKDIR /app

COPY requirements.txt .

RUN pip install \
    --no-cache-dir \
    --disable-pip-version-check \
    -r requirements.txt

COPY app ./app
COPY artifacts ./artifacts

RUN useradd \
    --create-home \
    --shell /usr/sbin/nologin \
    appuser \
    && chown -R appuser:appuser /app

USER appuser

EXPOSE 8000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
    CMD python -c \
    "import urllib.request; urllib.request.urlopen('http://localhost:8000/health')"

CMD [
    "uvicorn",
    "app.main:app",
    "--host",
    "0.0.0.0",
    "--port",
    "8000"
]
```

---

## 11. Important Python Environment Variables

### `PYTHONDONTWRITEBYTECODE`

```dockerfile
ENV PYTHONDONTWRITEBYTECODE=1
```

This prevents Python from creating `.pyc` bytecode files.

It can help keep the container filesystem cleaner.

---

### `PYTHONUNBUFFERED`

```dockerfile
ENV PYTHONUNBUFFERED=1
```

This causes Python logs to be written immediately instead of being buffered.

This is useful for container logging systems.

```text
Application event
       ↓
stdout or stderr
       ↓
Docker logs
       ↓
Logging platform
```

---

## 12. Building a Docker Image

From the directory containing the Dockerfile, run:

```bash
docker build -t ml-model-api:1.0.0 .
```

Components:

```text
docker build
    ├── -t ml-model-api:1.0.0
    │       ├── repository: ml-model-api
    │       └── tag: 1.0.0
    └── .
            └── current directory is the build context
```

Another example:

```bash
docker build -t khanh/ml-model-api:1.0.0 .
```

List images:

```bash
docker image ls
```

---

## 13. Running a Container

Run the image:

```bash
docker run \
  --rm \
  -p 8000:8000 \
  ml-model-api:1.0.0
```

Options:

| Option               | Meaning                             |
| -------------------- | ----------------------------------- |
| `--rm`               | Remove the container after it stops |
| `-p 8000:8000`       | Map host port to container port     |
| `ml-model-api:1.0.0` | Image name and version              |

Open:

```text
http://localhost:8000
```

FastAPI documentation is commonly available at:

```text
http://localhost:8000/docs
```

Run in detached mode:

```bash
docker run \
  -d \
  --name ml-api \
  -p 8000:8000 \
  ml-model-api:1.0.0
```

---

## 14. Useful Container Commands

List running containers:

```bash
docker ps
```

List all containers:

```bash
docker ps -a
```

View logs:

```bash
docker logs ml-api
```

Follow logs continuously:

```bash
docker logs -f ml-api
```

Stop the container:

```bash
docker stop ml-api
```

Remove the container:

```bash
docker rm ml-api
```

Inspect the container:

```bash
docker inspect ml-api
```

Run a command inside the container:

```bash
docker exec -it ml-api sh
```

---

## 15. Testing the Prediction API

Example health request:

```bash
curl http://localhost:8000/health
```

Example response:

```json
{
  "status": "healthy",
  "model_loaded": true
}
```

Example prediction request:

```bash
curl -X POST "http://localhost:8000/predict" \
  -H "Content-Type: application/json" \
  -d '{
    "sepal_length": 5.1,
    "sepal_width": 3.5,
    "petal_length": 1.4,
    "petal_width": 0.2
  }'
```

Example response:

```json
{
  "predicted_class": 0,
  "probabilities": [
    0.984,
    0.016,
    0.0
  ],
  "model_version": "1.0.0"
}
```

---

## 16. Environment Variables at Runtime

Do not rebuild the image for every configuration change.

Pass runtime configuration with `-e`:

```bash
docker run \
  --rm \
  -p 8000:8000 \
  -e LOG_LEVEL=INFO \
  -e MODEL_VERSION=1.0.0 \
  ml-model-api:1.0.0
```

Use an environment file:

```text
LOG_LEVEL=INFO
MODEL_VERSION=1.0.0
MODEL_PATH=/app/artifacts/model.joblib
```

Run:

```bash
docker run \
  --rm \
  --env-file .env \
  -p 8000:8000 \
  ml-model-api:1.0.0
```

Do not commit sensitive `.env` files to a public repository.

---

## 17. The `.dockerignore` File

A `.dockerignore` file prevents unnecessary files from entering the build context.

Example:

```text
.git
.gitignore
.venv
venv
__pycache__
*.pyc
.pytest_cache
.mypy_cache
.ipynb_checkpoints
notebooks
data
logs
.env
*.log
README-drafts
```

Benefits:

* Faster builds
* Smaller build context
* Fewer accidental secret leaks
* Cleaner images
* Better cache performance

Without `.dockerignore`:

```text
Local project
   ↓
Send everything to Docker
   ↓
Large build context
   ↓
Slower builds
```

With `.dockerignore`:

```text
Local project
   ↓
Exclude unnecessary files
   ↓
Small build context
   ↓
Faster builds
```

---

## 18. Installing System Dependencies

Some Python packages require operating-system libraries or compilers.

Example:

```dockerfile
FROM python:3.12-slim

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        libgomp1 \
    && rm -rf /var/lib/apt/lists/*
```

Important practices:

1. Use `--no-install-recommends`.
2. Remove package-manager cache.
3. Install only necessary packages.
4. Keep related commands in one `RUN` instruction.

```dockerfile
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        gcc \
    && rm -rf /var/lib/apt/lists/*
```

Avoid:

```dockerfile
RUN apt-get update
RUN apt-get install -y gcc
```

The separate layers may preserve unnecessary package metadata.

---

## 19. Multi-Stage Builds

A multi-stage build uses multiple `FROM` instructions.

It can separate:

* Dependency building
* Compilation
* Testing
* Final runtime

Example:

```dockerfile
FROM python:3.12-slim AS builder

WORKDIR /build

COPY requirements.txt .

RUN pip wheel \
    --no-cache-dir \
    --wheel-dir /wheels \
    -r requirements.txt


FROM python:3.12-slim AS runtime

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY --from=builder /wheels /wheels
COPY requirements.txt .

RUN pip install \
    --no-cache-dir \
    --no-index \
    --find-links=/wheels \
    -r requirements.txt \
    && rm -rf /wheels

COPY app ./app
COPY artifacts ./artifacts

RUN useradd --create-home appuser \
    && chown -R appuser:appuser /app

USER appuser

EXPOSE 8000

CMD [
    "uvicorn",
    "app.main:app",
    "--host",
    "0.0.0.0",
    "--port",
    "8000"
]
```

Architecture:

```text
Builder stage
    ├── Compilers
    ├── Header files
    ├── Build tools
    └── Python wheels
             ↓ copy only required artifacts
Runtime stage
    ├── Python runtime
    ├── Installed packages
    ├── Application code
    └── ML model
```

The final image does not need to contain all build tools.

---

## 20. Containerizing Batch Prediction

Not every model needs a real-time API.

A Dockerfile can also package a batch prediction script.

Project:

```text
batch-prediction/
├── src/
│   └── predict.py
├── artifacts/
│   └── model.joblib
├── requirements.txt
└── Dockerfile
```

Dockerfile:

```dockerfile
FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY src ./src
COPY artifacts ./artifacts

ENTRYPOINT ["python", "src/predict.py"]
```

Run:

```bash
docker run \
  --rm \
  batch-predictor:1.0.0 \
  --input /data/input.csv \
  --output /data/predictions.csv
```

Mount a local directory:

```bash
docker run \
  --rm \
  -v "$(pwd)/data:/data" \
  batch-predictor:1.0.0 \
  --input /data/input.csv \
  --output /data/predictions.csv
```

Flow:

```text
Local input CSV
       ↓ volume mount
Container
       ↓
Load model
       ↓
Batch prediction
       ↓
Output CSV
       ↓ volume mount
Local filesystem
```

---

## 21. Volumes and Model Artifacts

A model can be packaged inside the image:

```dockerfile
COPY artifacts/model.joblib ./artifacts/model.joblib
```

Advantages:

* Image is self-contained.
* Model and service are versioned together.
* Deployment is simple.
* Rollback is predictable.

Disadvantages:

* A new model requires a new image.
* Large models make images larger.
* Build and transfer times increase.

Alternatively, mount the model at runtime:

```bash
docker run \
  --rm \
  -p 8000:8000 \
  -v "$(pwd)/models:/models:ro" \
  -e MODEL_PATH=/models/model.joblib \
  ml-model-api:1.0.0
```

Advantages:

* Update models independently.
* Avoid embedding large files.
* Reuse one service image.

Disadvantages:

* Deployment configuration is more complex.
* Model and service compatibility must be managed carefully.
* Missing files can prevent startup.

---

## 22. Image Tagging and Versioning

Avoid using only:

```bash
docker build -t ml-api:latest .
```

The `latest` tag does not identify a specific release.

Prefer versioned tags:

```bash
docker build -t ml-api:1.0.0 .
```

```bash
docker build -t ml-api:1.1.0 .
```

You can also use a source-control revision:

```bash
docker build -t ml-api:git-a1b2c3d .
```

A practical strategy:

```text
ml-api:1.0.0
ml-api:1.1.0
ml-api:git-a1b2c3d
ml-api:production
```

Immutable version tags make rollback easier:

```text
Production: 1.1.0
       ↓ problem detected
Rollback
       ↓
Production: 1.0.0
```

---

## 23. Dockerfile and CI/CD

A CI/CD pipeline can automate:

```text
Push code
    ↓
Run tests
    ↓
Build Docker image
    ↓
Scan image
    ↓
Tag image
    ↓
Push to registry
    ↓
Deploy
    ↓
Run health check
```

Example conceptual pipeline:

```yaml
steps:
  - run: pytest
  - run: docker build -t ml-api:${VERSION} .
  - run: docker push ml-api:${VERSION}
  - run: deploy ml-api:${VERSION}
  - run: verify /health
```

Before publishing an image, the pipeline should verify:

* Unit tests pass.
* API tests pass.
* Model artifact loads successfully.
* The image builds successfully.
* The container starts.
* The health endpoint responds.
* Security scanning does not find unacceptable issues.

---

## 24. Docker Security Practices

### 24.1 Use a trusted base image

```dockerfile
FROM python:3.12-slim
```

Avoid unknown base images from untrusted publishers.

---

### 24.2 Pin important versions

Less reproducible:

```dockerfile
FROM python:latest
```

More reproducible:

```dockerfile
FROM python:3.12-slim
```

Also pin Python dependencies:

```text
fastapi==...
joblib==...
numpy==...
scikit-learn==...
uvicorn==...
```

---

### 24.3 Run as a non-root user

```dockerfile
RUN useradd --create-home appuser
USER appuser
```

---

### 24.4 Do not store secrets in the image

Do not copy:

* `.env`
* Cloud credentials
* Private keys
* API tokens
* Database passwords

Use runtime secret-management mechanisms instead.

---

### 24.5 Minimize installed software

Do not install tools that the application does not need.

Each additional package can increase:

* Image size
* Build time
* Maintenance burden
* Attack surface

---

### 24.6 Use read-only model mounts when possible

```bash
-v "$(pwd)/models:/models:ro"
```

The `:ro` suffix makes the mounted directory read-only inside the container.

---

### 24.7 Validate model artifacts

Pickle and Joblib artifacts can execute code when loaded.

Only load trusted artifacts produced by an approved training pipeline.

---

## 25. Logging in Containers

Containerized applications should usually write logs to:

* Standard output
* Standard error

Avoid relying only on files inside the container because containers may be temporary.

```text
Application
    ↓
stdout / stderr
    ↓
Docker logging driver
    ↓
Central logging system
```

View logs:

```bash
docker logs ml-api
```

Example structured log:

```json
{
  "event": "prediction_completed",
  "model_version": "1.0.0",
  "latency_ms": 12.4,
  "status": "success"
}
```

Useful logs include:

* Application startup
* Model loading success or failure
* Model version
* Request ID
* Prediction latency
* Validation errors
* HTTP status
* Service exceptions

Avoid logging sensitive raw input unless it is necessary and properly protected.

---

## 26. Monitoring a Containerized ML Service

Docker packages the application, but it does not automatically provide complete monitoring.

A production system may monitor:

```text
Container health
       +
CPU usage
       +
Memory usage
       +
Request latency
       +
Error rate
       +
Prediction distribution
       +
Input drift
       +
Model quality
```

Architecture:

```text
Client
   ↓
Containerized API
   ↓
Prediction
   ├── Application logs
   ├── Infrastructure metrics
   ├── Prediction metrics
   └── Drift statistics
             ↓
      Monitoring platform
             ↓
       Alert or rollback
```

---

## 27. Common Dockerfile Mistakes

### 27.1 Using a very large base image

Example:

```dockerfile
FROM ubuntu:latest
```

and then manually installing many unnecessary tools.

Better:

```dockerfile
FROM python:3.12-slim
```

when the application only needs Python.

---

### 27.2 Copying the entire project too early

Problem:

```dockerfile
COPY . .
RUN pip install -r requirements.txt
```

Every code change invalidates the dependency layer.

Better:

```dockerfile
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
```

---

### 27.3 Forgetting `.dockerignore`

This may copy:

* `.git`
* Virtual environments
* Secrets
* Large datasets
* Cache directories

---

### 27.4 Running as root

Containers run as root by default unless another user is configured.

Better:

```dockerfile
RUN useradd --create-home appuser
USER appuser
```

---

### 27.5 Binding the API only to localhost

Incorrect inside a container:

```dockerfile
CMD [
    "uvicorn",
    "app.main:app",
    "--host",
    "127.0.0.1",
    "--port",
    "8000"
]
```

The service may not be reachable from outside the container.

Use:

```dockerfile
CMD [
    "uvicorn",
    "app.main:app",
    "--host",
    "0.0.0.0",
    "--port",
    "8000"
]
```

---

### 27.6 Assuming `EXPOSE` publishes the port

This is not enough:

```dockerfile
EXPOSE 8000
```

You still need:

```bash
docker run -p 8000:8000 ml-api
```

---

### 27.7 Installing unpinned dependencies

Problem:

```text
fastapi
numpy
scikit-learn
```

A future build may install incompatible versions.

Use tested dependency versions and a lock strategy.

---

### 27.8 Copying secrets into the image

Unsafe:

```dockerfile
COPY .env .
```

Even if the file is later deleted, it may remain in an earlier image layer.

---

### 27.9 Loading the model during every request

Docker does not fix poor application design.

Inefficient:

```python
@app.post("/predict")
def predict(data):
    model = joblib.load("model.joblib")
    return model.predict(data)
```

Better:

```text
Container startup
       ↓
Load model once
       ↓
Reuse model for requests
```

---

### 27.10 Using only the `latest` tag

Problem:

```bash
docker build -t ml-api:latest .
```

It is difficult to know which version is running.

Use explicit release tags.

---

### 27.11 Storing important data only inside the container

Containers may be deleted and recreated.

Use external storage for persistent information such as:

* Databases
* Uploaded files
* Prediction archives
* Model registries
* Durable logs

---

## 28. Development vs. Production Containers

Development and production environments have different needs.

| Development                   | Production                   |
| ----------------------------- | ---------------------------- |
| Auto-reload                   | Stable startup               |
| Debug tools                   | Minimal tools                |
| Source-code mounts            | Immutable image              |
| Detailed debugging            | Structured logging           |
| Flexible dependencies         | Pinned dependencies          |
| Root may be tolerated locally | Non-root strongly preferred  |
| Fast iteration                | Security and reproducibility |

Development command:

```bash
docker run \
  --rm \
  -p 8000:8000 \
  -v "$(pwd)/app:/app/app" \
  ml-api-dev \
  uvicorn app.main:app \
  --host 0.0.0.0 \
  --port 8000 \
  --reload
```

Production command:

```bash
docker run \
  -d \
  --name ml-api \
  --restart unless-stopped \
  -p 8000:8000 \
  ml-api:1.0.0
```

---

## 29. Practical Exercise

Build and run a Dockerized machine learning API.

### Task 1: Prepare the project

Create:

```text
ml-model-api/
├── app/
│   ├── __init__.py
│   └── main.py
├── artifacts/
│   └── model.joblib
├── tests/
│   └── test_api.py
├── requirements.txt
├── Dockerfile
├── .dockerignore
└── README.md
```

---

### Task 2: Create the API

Implement:

```text
GET  /health
POST /predict
```

The application should:

1. Load the model during startup.
2. Validate input with Pydantic.
3. Return a prediction.
4. Return a model version.
5. Log prediction latency.
6. Return an error if the model is unavailable.

---

### Task 3: Write the Dockerfile

Requirements:

* Use a slim Python base image.
* Set `/app` as the working directory.
* Copy and install dependencies first.
* Copy application code and the model artifact.
* Set Python environment variables.
* Use a non-root user.
* Expose port `8000`.
* Add a health check.
* Start FastAPI with Uvicorn.

---

### Task 4: Add `.dockerignore`

Exclude:

* Git metadata
* Virtual environments
* Python caches
* Test caches
* Local datasets
* Environment files
* Logs
* Notebook checkpoints

---

### Task 5: Build the image

```bash
docker build -t ml-model-api:1.0.0 .
```

---

### Task 6: Run the container

```bash
docker run \
  --rm \
  --name ml-model-api \
  -p 8000:8000 \
  ml-model-api:1.0.0
```

---

### Task 7: Test the service

```bash
curl http://localhost:8000/health
```

```bash
curl -X POST "http://localhost:8000/predict" \
  -H "Content-Type: application/json" \
  -d '{
    "sepal_length": 5.1,
    "sepal_width": 3.5,
    "petal_length": 1.4,
    "petal_width": 0.2
  }'
```

---

### Task 8: Inspect logs

```bash
docker logs ml-model-api
```

Confirm that the logs show:

* Successful application startup
* Successful model loading
* Model version
* Request result
* Prediction latency
* Errors when invalid input is sent

---

### Task 9: Test invalid input

Example:

```bash
curl -X POST "http://localhost:8000/predict" \
  -H "Content-Type: application/json" \
  -d '{
    "sepal_length": -1,
    "sepal_width": 3.5
  }'
```

Verify that the API returns a validation error instead of crashing.

---

### Task 10: Version the image

Build another version:

```bash
docker build -t ml-model-api:1.1.0 .
```

Record:

* Source-code revision
* Model version
* Image tag
* Dependency versions
* Build date
* Deployment environment

---

## 30. Suggested README Content

A strong README should contain:

### Project overview

```text
This project packages a trained Scikit-learn pipeline inside a FastAPI
prediction service and deploys it as a Docker container.
```

### Architecture

```text
Client request
      ↓
Docker container
      ↓
FastAPI input validation
      ↓
Scikit-learn pipeline
      ↓
Prediction response
```

### Build command

```bash
docker build -t ml-model-api:1.0.0 .
```

### Run command

```bash
docker run \
  --rm \
  -p 8000:8000 \
  ml-model-api:1.0.0
```

### Health request

```bash
curl http://localhost:8000/health
```

### Prediction request

```bash
curl -X POST "http://localhost:8000/predict" \
  -H "Content-Type: application/json" \
  -d '{
    "sepal_length": 5.1,
    "sepal_width": 3.5,
    "petal_length": 1.4,
    "petal_width": 0.2
  }'
```

### Testing

```bash
pytest
```

### Limitations

Document limitations such as:

* Demonstration dataset
* No authentication
* No autoscaling
* No external model registry
* No drift detection
* No persistent prediction store
* No automated retraining

---

## 31. Completion Checklist

* [ ] I can explain what a Dockerfile is.
* [ ] I understand the difference between an image and a container.
* [ ] I can explain how Docker supports MLOps.
* [ ] I can use `FROM`, `WORKDIR`, `COPY`, `RUN`, and `CMD`.
* [ ] I understand `CMD` and `ENTRYPOINT`.
* [ ] I understand that `EXPOSE` does not publish a port.
* [ ] I can build a Docker image.
* [ ] I can run and stop a container.
* [ ] I can view container logs.
* [ ] I have created a `.dockerignore` file.
* [ ] I order instructions to improve build caching.
* [ ] I use a versioned base image.
* [ ] I pin important application dependencies.
* [ ] I avoid storing secrets in the image.
* [ ] I run the service as a non-root user.
* [ ] I can add a container health check.
* [ ] I can package a model artifact with an API.
* [ ] I can send a sample `/predict` request.
* [ ] I version Docker images for rollback.
* [ ] I have documented at least one limitation or production risk.

---

## 32. Related Outcome

Deploy, version, monitor, and operate machine learning models using:

* Model artifacts
* Prediction APIs
* Docker images
* Container registries
* Automated tests
* CI/CD pipelines
* Structured logs
* Health checks
* Monitoring
* Versioned releases
* Rollback strategies
* Drift-aware workflows

---

## 33. Related Project

### Mini Project: Dockerized Machine Learning API

Build a portfolio project containing:

* A trained Scikit-learn pipeline
* A serialized model artifact
* A FastAPI `/predict` endpoint
* A `/health` endpoint
* Pydantic input validation
* Structured logging
* Automated tests
* A production-oriented Dockerfile
* A `.dockerignore` file
* Versioned image tags
* A complete README

Optional extensions:

* Add Docker Compose.
* Add PostgreSQL for prediction logs.
* Add Redis for caching.
* Add Prometheus metrics.
* Add Grafana dashboards.
* Add a model registry.
* Add image security scanning.
* Add GitHub Actions or another CI/CD pipeline.
* Push the image to a container registry.
* Deploy the service to a cloud platform.
* Add canary deployment.
* Add automated rollback.
* Add data-drift monitoring.

---

## 34. Summary

A Dockerfile defines how an application environment is built.

```text
Application code
       +
Python dependencies
       +
System libraries
       +
Model artifact
       +
Dockerfile
       ↓
Docker image
       ↓
Running container
       ↓
Prediction service
```

The most important lessons are:

1. A Dockerfile is a reproducible build specification.
2. A Docker image is built from a Dockerfile.
3. A container is a running instance of an image.
4. Copy dependency files before source code to improve build caching.
5. Use a `.dockerignore` file to reduce image size and prevent accidental file leaks.
6. Run production containers as a non-root user.
7. Do not place credentials or secrets inside the Dockerfile.
8. Bind API servers to `0.0.0.0` inside containers.
9. Use explicit image and dependency versions.
10. Add health checks, logs, tests, and monitoring.
11. Treat the model artifact and application image as versioned deployment assets.
12. Remember that Docker packages the application, but a complete MLOps system also requires CI/CD, monitoring, drift detection, and rollback.

A strong AI or data science portfolio should demonstrate not only how to train a model, but also how to package it into a reproducible, testable, secure, and deployable container.

---

# Bài luyện tập

## Mục tiêu


## Đề bài


## Yêu cầu hoàn thành

- [ ] 
- [ ] 
- [ ] 

## Kết quả / lời giải


## Ghi chú
