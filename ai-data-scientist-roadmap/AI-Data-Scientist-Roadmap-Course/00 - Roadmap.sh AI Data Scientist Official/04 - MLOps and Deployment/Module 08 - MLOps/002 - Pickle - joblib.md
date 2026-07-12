# 002 — Pickle and Joblib

**Course:** 04 — MLOps and Deployment
**Module:** Module 08 — MLOps
**Content Group:** Model Serving
**Roadmap Source:** MLOps / Model Serving
**Lesson Type:** MLOps
**Order in Module:** 002
**Suggested Duration:** 22 minutes

---

## 1. Overview

This lesson explains how **Pickle** and **Joblib** are used to serialize, save, load, and deploy machine learning models.

During model development, a model usually exists only as a Python object inside a notebook or training script. To reuse that model later, it must be stored in a file.

Pickle and Joblib allow you to convert Python objects such as:

* Trained machine learning models
* Preprocessing pipelines
* Encoders
* Scalers
* Feature transformers
* Configuration dictionaries

into files that can be loaded by another Python process.

A common workflow is:

```text
Train model
    ↓
Serialize model
    ↓
Store model artifact
    ↓
Load model in an API
    ↓
Receive input
    ↓
Return prediction
```

After completing this lesson, you should understand how model serialization fits into an MLOps workflow and how to use it safely in a small deployment project.

---

## 2. Learning Objectives

By the end of this lesson, you should be able to:

* Explain serialization and deserialization.
* Describe the purpose of Pickle and Joblib.
* Save and load a trained machine learning model.
* Compare Pickle and Joblib.
* Save an entire preprocessing and prediction pipeline.
* Load a serialized model inside a FastAPI application.
* Identify compatibility and security risks.
* Version model artifacts and their dependencies.
* Build a small portfolio project containing a model, API, Dockerfile, and README.

---

## 3. Why Model Serialization Is Needed

Suppose you train a model inside a Jupyter Notebook:

```python
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(X_train, y_train)
```

The `model` object exists only while the Python process is running.

When the notebook kernel stops, the object disappears from memory.

Without serialization, you would need to train the model again every time the application starts.

Serialization solves this problem.

```text
Python object in memory
        ↓ serialization
Model artifact on disk
        ↓ deserialization
Python object in another process
```

A serialized model can be:

* Loaded by an API server
* Used in a batch prediction script
* Included in a Docker image
* Uploaded to cloud storage
* Registered in a model registry
* Shared with another team
* Restored during rollback

---

## 4. Serialization and Deserialization

### 4.1 Serialization

Serialization converts an in-memory object into a byte representation that can be saved or transferred.

```text
Trained model object
        ↓
Serialization
        ↓
Binary file
```

Example:

```python
import pickle

with open("model.pkl", "wb") as file:
    pickle.dump(model, file)
```

The mode `"wb"` means:

* `w`: write
* `b`: binary

---

### 4.2 Deserialization

Deserialization reconstructs the original Python object from the serialized file.

```python
import pickle

with open("model.pkl", "rb") as file:
    loaded_model = pickle.load(file)
```

The mode `"rb"` means:

* `r`: read
* `b`: binary

The loaded model can now make predictions:

```python
predictions = loaded_model.predict(X_test)
```

---

## 5. Pickle

`pickle` is a serialization module included in the Python standard library.

It can serialize many Python objects, including:

* Lists
* Dictionaries
* Classes
* Functions
* NumPy arrays
* Scikit-learn models
* Custom Python objects

### Basic Pickle workflow

```python
import pickle
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(X_train, y_train)

with open("logistic_regression.pkl", "wb") as file:
    pickle.dump(model, file)
```

Load the model:

```python
import pickle

with open("logistic_regression.pkl", "rb") as file:
    model = pickle.load(file)

predictions = model.predict(X_test)
```

---

## 6. Joblib

Joblib is a Python library commonly used to serialize machine learning models and objects containing large NumPy arrays.

Install it with:

```bash
pip install joblib
```

Save a model:

```python
import joblib

joblib.dump(model, "model.joblib")
```

Load the model:

```python
import joblib

model = joblib.load("model.joblib")
```

Make predictions:

```python
predictions = model.predict(X_test)
```

Joblib has a shorter interface than Pickle and is frequently used with Scikit-learn models.

---

## 7. Pickle vs. Joblib

| Feature                   | Pickle            | Joblib               |
| ------------------------- | ----------------- | -------------------- |
| Included with Python      | Yes               | No                   |
| Installation required     | No                | Yes                  |
| General Python objects    | Excellent         | Excellent            |
| Large NumPy arrays        | Supported         | Often more efficient |
| Compression options       | Manual or limited | Built-in             |
| Common Scikit-learn usage | Yes               | Very common          |
| Safe for untrusted files  | No                | No                   |
| Cross-language format     | No                | No                   |
| Human-readable            | No                | No                   |

A simple guideline is:

```text
General Python object
        → Pickle is acceptable

Scikit-learn model with large arrays
        → Joblib is often preferred
```

The performance difference may not matter for small models. The most important concerns are usually:

* Reproducibility
* Dependency compatibility
* Security
* Versioning
* Deployment workflow

---

## 8. Saving a Complete Machine Learning Pipeline

Saving only the model is often not enough.

Suppose the training process uses:

* Missing-value imputation
* Feature scaling
* One-hot encoding
* Feature selection
* Classification

The production service must apply exactly the same transformations.

A dangerous workflow is:

```text
Training:
raw data → scaler → model

Production:
raw data → model
```

The production model receives incorrectly transformed input.

A better solution is to save the complete pipeline.

```text
Raw input
    ↓
Preprocessing
    ↓
Feature transformation
    ↓
Model prediction
```

### Example Scikit-learn pipeline

```python
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

pipeline = Pipeline(
    steps=[
        ("scaler", StandardScaler()),
        ("classifier", LogisticRegression()),
    ]
)

pipeline.fit(X_train, y_train)
```

Save the pipeline:

```python
import joblib

joblib.dump(pipeline, "classification_pipeline.joblib")
```

Load and use it:

```python
import joblib

pipeline = joblib.load("classification_pipeline.joblib")

predictions = pipeline.predict(X_test)
```

The same preprocessing logic is now applied during both training and inference.

---

## 9. End-to-End Example

The following example trains and saves an Iris classification model.

```python
from pathlib import Path

import joblib
from sklearn.datasets import load_iris
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler


ARTIFACT_DIR = Path("artifacts")
ARTIFACT_DIR.mkdir(parents=True, exist_ok=True)

MODEL_PATH = ARTIFACT_DIR / "iris_pipeline.joblib"


def train_model() -> None:
    dataset = load_iris()

    X_train, X_test, y_train, y_test = train_test_split(
        dataset.data,
        dataset.target,
        test_size=0.2,
        random_state=42,
        stratify=dataset.target,
    )

    pipeline = Pipeline(
        steps=[
            ("scaler", StandardScaler()),
            (
                "classifier",
                LogisticRegression(
                    max_iter=500,
                    random_state=42,
                ),
            ),
        ]
    )

    pipeline.fit(X_train, y_train)

    predictions = pipeline.predict(X_test)
    accuracy = accuracy_score(y_test, predictions)

    joblib.dump(pipeline, MODEL_PATH)

    print(f"Accuracy: {accuracy:.4f}")
    print(f"Model saved to: {MODEL_PATH}")


if __name__ == "__main__":
    train_model()
```

Load the model in another script:

```python
from pathlib import Path

import joblib
import numpy as np


MODEL_PATH = Path("artifacts/iris_pipeline.joblib")

model = joblib.load(MODEL_PATH)

sample = np.array([[5.1, 3.5, 1.4, 0.2]])

prediction = model.predict(sample)
probabilities = model.predict_proba(sample)

print("Predicted class:", int(prediction[0]))
print("Probabilities:", probabilities[0].tolist())
```

---

## 10. Model Artifact Metadata

A model file alone does not provide enough information for production use.

Store metadata alongside the model.

Example `metadata.json`:

```json
{
  "model_name": "iris-logistic-regression",
  "model_version": "1.0.0",
  "created_at": "2026-07-13T00:00:00Z",
  "framework": "scikit-learn",
  "framework_version": "1.x",
  "python_version": "3.12",
  "training_dataset": "scikit-learn iris dataset",
  "metric_name": "accuracy",
  "metric_value": 0.9667,
  "feature_order": [
    "sepal_length",
    "sepal_width",
    "petal_length",
    "petal_width"
  ]
}
```

A typical artifact directory may look like this:

```text
artifacts/
├── iris_pipeline.joblib
├── metadata.json
├── metrics.json
└── requirements.txt
```

The metadata helps answer questions such as:

* Which model version is deployed?
* Which Python version created the artifact?
* Which library versions are required?
* Which dataset was used?
* What metric did the model achieve?
* What is the expected feature order?

---

## 11. Loading a Model in FastAPI

A serialized model is commonly loaded when an API application starts.

```text
Client request
      ↓
FastAPI endpoint
      ↓
Input validation
      ↓
Loaded model
      ↓
Prediction
      ↓
JSON response
```

### Example FastAPI application

```python
from contextlib import asynccontextmanager
from pathlib import Path

import joblib
import numpy as np
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field


MODEL_PATH = Path("artifacts/iris_pipeline.joblib")

model = None


class PredictionRequest(BaseModel):
    sepal_length: float = Field(gt=0)
    sepal_width: float = Field(gt=0)
    petal_length: float = Field(gt=0)
    petal_width: float = Field(gt=0)


class PredictionResponse(BaseModel):
    predicted_class: int
    probabilities: list[float]


@asynccontextmanager
async def lifespan(app: FastAPI):
    global model

    if not MODEL_PATH.exists():
        raise RuntimeError(f"Model artifact not found: {MODEL_PATH}")

    model = joblib.load(MODEL_PATH)

    yield

    model = None


app = FastAPI(
    title="Iris Prediction API",
    version="1.0.0",
    lifespan=lifespan,
)


@app.get("/health")
def health_check() -> dict[str, str]:
    return {
        "status": "healthy",
        "model_loaded": str(model is not None),
    }


@app.post("/predict", response_model=PredictionResponse)
def predict(request: PredictionRequest) -> PredictionResponse:
    if model is None:
        raise HTTPException(
            status_code=503,
            detail="Model is not available.",
        )

    features = np.array(
        [
            [
                request.sepal_length,
                request.sepal_width,
                request.petal_length,
                request.petal_width,
            ]
        ]
    )

    prediction = model.predict(features)
    probabilities = model.predict_proba(features)

    return PredictionResponse(
        predicted_class=int(prediction[0]),
        probabilities=probabilities[0].tolist(),
    )
```

Run the API:

```bash
uvicorn app.main:app --reload
```

Example request:

```bash
curl -X POST "http://127.0.0.1:8000/predict" \
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
  ]
}
```

---

## 12. Deployment Architecture

```text
┌────────────────────┐
│ Training Dataset   │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Training Pipeline  │
│ - preprocessing    │
│ - model fitting    │
│ - evaluation       │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Serialized Artifact│
│ model.joblib       │
│ metadata.json      │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ FastAPI Service    │
│ /health            │
│ /predict           │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Docker Container   │
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Production Runtime │
│ logs + monitoring  │
└────────────────────┘
```

---

## 13. Dependency Compatibility

Pickle and Joblib files are closely connected to the Python environment in which they were created.

A model saved with one library version may fail when loaded with another version.

For example:

```text
Training environment:
Python 3.11
scikit-learn 1.x
NumPy 2.x

Serving environment:
Python 3.8
scikit-learn 0.x
NumPy 1.x
```

Possible results include:

* Import errors
* Missing attributes
* Unexpected predictions
* Deserialization failures
* Runtime warnings
* Incompatible internal model structures

Record exact dependency versions:

```bash
pip freeze > requirements.txt
```

Example:

```text
fastapi==...
joblib==...
numpy==...
pydantic==...
scikit-learn==...
uvicorn==...
```

For stronger reproducibility, use:

* Docker
* Lock files
* Conda environment files
* Poetry
* `pip-tools`
* Model registries
* Continuous integration tests

---

## 14. Security Warning

Pickle and Joblib files must not be treated as ordinary data files.

Loading a malicious serialized file can execute arbitrary Python code.

Therefore:

> Never load a Pickle or Joblib artifact from an unknown or untrusted source.

Unsafe example:

```python
model = joblib.load(user_uploaded_file)
```

An attacker could upload a malicious artifact that executes commands during loading.

Safer practices include:

* Load only artifacts produced by your trusted training pipeline.
* Restrict write access to model storage.
* Verify file checksums.
* Sign model artifacts.
* Use private object storage.
* Scan artifacts before deployment.
* Keep artifact provenance records.
* Avoid accepting serialized models through public upload endpoints.
* Run model services with limited operating-system permissions.

Example checksum creation:

```bash
sha256sum artifacts/iris_pipeline.joblib
```

Example output:

```text
a1b2c3...  artifacts/iris_pipeline.joblib
```

Store this checksum in release metadata and verify it before loading the model.

---

## 15. Model Versioning

Avoid using only a generic filename:

```text
model.pkl
```

It does not reveal:

* Which model it contains
* When it was trained
* Which dataset version was used
* Whether it is a development or production artifact

A better structure is:

```text
models/
├── iris-classifier/
│   ├── 1.0.0/
│   │   ├── model.joblib
│   │   └── metadata.json
│   ├── 1.1.0/
│   │   ├── model.joblib
│   │   └── metadata.json
│   └── production.json
```

Example `production.json`:

```json
{
  "active_version": "1.1.0"
}
```

The service can load the active model version from configuration.

```text
Request
   ↓
Production model version
   ↓
model.joblib
   ↓
Prediction
```

---

## 16. Rollback Strategy

A deployment may introduce:

* Lower prediction quality
* Higher latency
* Memory problems
* Incompatible dependencies
* Incorrect preprocessing
* Unexpected input failures

Model versioning makes rollback possible.

```text
Version 1.0.0
    ↓
Deploy version 1.1.0
    ↓
Production issue detected
    ↓
Switch active version to 1.0.0
```

A practical rollback should not require retraining the old model.

The previous artifact and its environment must remain available.

---

## 17. Testing Serialized Models

Serialization should be covered by tests.

### 17.1 Test that the artifact exists

```python
from pathlib import Path


def test_model_artifact_exists():
    model_path = Path("artifacts/iris_pipeline.joblib")

    assert model_path.exists()
    assert model_path.stat().st_size > 0
```

---

### 17.2 Test that the model can be loaded

```python
import joblib


def test_model_can_be_loaded():
    model = joblib.load("artifacts/iris_pipeline.joblib")

    assert model is not None
```

---

### 17.3 Test prediction consistency

The loaded model should produce the same prediction as the original model.

```python
import joblib
import numpy as np


def test_prediction_output():
    model = joblib.load("artifacts/iris_pipeline.joblib")

    sample = np.array([[5.1, 3.5, 1.4, 0.2]])

    prediction = model.predict(sample)

    assert prediction.shape == (1,)
    assert int(prediction[0]) in {0, 1, 2}
```

---

### 17.4 Test the API

```python
from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_predict_endpoint():
    response = client.post(
        "/predict",
        json={
            "sepal_length": 5.1,
            "sepal_width": 3.5,
            "petal_length": 1.4,
            "petal_width": 0.2,
        },
    )

    assert response.status_code == 200

    body = response.json()

    assert "predicted_class" in body
    assert "probabilities" in body
```

---

## 18. Logging and Monitoring

Serialization makes the model loadable, but it does not make the system production-ready.

A deployed model should produce operational signals.

Useful logs include:

* Request timestamp
* Model name
* Model version
* Prediction latency
* Input validation errors
* Prediction result
* Confidence score
* Service error
* Artifact loading status

Example structured log:

```json
{
  "event": "prediction_completed",
  "model_name": "iris-classifier",
  "model_version": "1.0.0",
  "latency_ms": 8.4,
  "predicted_class": 0,
  "confidence": 0.984
}
```

Avoid logging sensitive raw user data unless there is a valid reason and an appropriate data-protection policy.

---

## 19. Model Monitoring Workflow

```text
Incoming requests
       ↓
Input validation
       ↓
Prediction
       ↓
Prediction logs
       ↓
Monitoring system
       ↓
┌───────────────────────────────┐
│ Latency                       │
│ Error rate                    │
│ Input distribution            │
│ Prediction distribution       │
│ Data drift                    │
│ Model performance             │
└───────────────────────────────┘
       ↓
Alert, retrain, or rollback
```

Pickle and Joblib handle only the serialization stage.

They do not automatically provide:

* Deployment
* Scaling
* Monitoring
* Experiment tracking
* Model registry functionality
* Data validation
* Drift detection
* Rollback automation

These capabilities must be added through the broader MLOps system.

---

## 20. Common Mistakes

### 20.1 Saving only the estimator

Problem:

```text
Training:
preprocessor → model

Saved:
model only
```

The serving application may apply different preprocessing.

Better approach:

```text
Save:
preprocessor + model as one pipeline
```

---

### 20.2 Ignoring feature order

The model may expect:

```text
age, income, balance
```

but receive:

```text
balance, age, income
```

The input dimensions may still be valid, but the prediction will be incorrect.

Store and validate feature names and order.

---

### 20.3 Loading the model for every request

Inefficient implementation:

```python
@app.post("/predict")
def predict(request):
    model = joblib.load("model.joblib")
    return model.predict(...)
```

This repeatedly reads the artifact from disk.

Better approach:

```text
Application startup
       ↓
Load model once
       ↓
Reuse model for every request
```

---

### 20.4 Using untrusted artifact files

Never deserialize files uploaded by unknown users.

Both Pickle and Joblib can execute malicious code during loading.

---

### 20.5 Not saving dependency versions

A model artifact without its environment may become unusable after a dependency upgrade.

Save:

* `requirements.txt`
* Python version
* Model framework version
* Artifact metadata
* Docker image tag

---

### 20.6 Overwriting the production model

Avoid repeatedly replacing:

```text
model.joblib
```

without keeping previous versions.

Use immutable versioned artifacts.

---

### 20.7 Committing large model files directly to Git

Git is usually inefficient for large binary artifacts.

Depending on the project, consider:

* Git LFS
* Cloud object storage
* DVC
* MLflow
* A model registry
* Artifact storage from a CI/CD platform

---

### 20.8 Assuming serialization equals deployment

Saving a model file is only one step.

```text
Model training
    ↓
Serialization
    ↓
Artifact storage
    ↓
API integration
    ↓
Containerization
    ↓
Testing
    ↓
Deployment
    ↓
Monitoring
```

---

## 21. When Pickle or Joblib May Not Be Enough

Pickle and Joblib are convenient for Python-based projects, but they are not always the best production format.

Consider other formats when you need:

* Cross-language inference
* Hardware optimization
* Browser deployment
* Mobile deployment
* Stronger portability
* Independent serving runtimes

Possible alternatives include:

| Format or Tool           | Common Use                                   |
| ------------------------ | -------------------------------------------- |
| ONNX                     | Cross-framework and cross-language inference |
| TorchScript              | PyTorch model deployment                     |
| TensorFlow SavedModel    | TensorFlow serving                           |
| MLflow Models            | Model packaging and registry workflows       |
| BentoML                  | Model service packaging                      |
| PMML                     | Traditional model interchange                |
| Native framework formats | Framework-specific deployment                |

Example decision flow:

```text
Python-only Scikit-learn service?
        ├── Yes → Joblib or Pickle may be sufficient
        └── No
             ↓
Cross-language or optimized runtime required?
        ├── Yes → Consider ONNX or another portable format
        └── No → Use the framework's recommended format
```

---

## 22. Practical Exercise

Build a small model-serving project.

### Task 1: Train a model

Choose a simple dataset such as:

* Iris
* Wine
* Breast Cancer Wisconsin
* Titanic
* House Prices

Train a Scikit-learn model and evaluate it.

---

### Task 2: Build a pipeline

Include preprocessing and the estimator in one pipeline.

```text
Raw data
   ↓
Preprocessing
   ↓
Model
```

---

### Task 3: Serialize the pipeline

Save the pipeline using Joblib:

```python
joblib.dump(pipeline, "artifacts/model.joblib")
```

---

### Task 4: Add metadata

Create a `metadata.json` file containing:

* Model name
* Model version
* Creation time
* Framework version
* Python version
* Training metric
* Feature names
* Dataset version

---

### Task 5: Create an API

Implement:

```text
GET  /health
POST /predict
```

The `/predict` endpoint should:

1. Validate the input.
2. Convert the request into the correct feature order.
3. Run the model.
4. Return the prediction.
5. Return probabilities when available.

---

### Task 6: Add tests

Test:

* Model artifact existence
* Successful deserialization
* Prediction shape
* Valid API request
* Invalid API request
* Health endpoint

---

### Task 7: Add Docker support

Example Dockerfile:

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

Build the image:

```bash
docker build -t iris-model-api:1.0.0 .
```

Run the container:

```bash
docker run --rm -p 8000:8000 iris-model-api:1.0.0
```

---

## 23. Suggested Project Structure

```text
ml-model-api/
├── app/
│   ├── __init__.py
│   └── main.py
├── artifacts/
│   ├── model.joblib
│   ├── metadata.json
│   └── metrics.json
├── scripts/
│   └── train.py
├── tests/
│   ├── test_model.py
│   └── test_api.py
├── Dockerfile
├── requirements.txt
├── README.md
└── .gitignore
```

---

## 24. README Requirements

A strong portfolio README should explain:

### Project purpose

```text
This project trains a classification model, serializes the complete
Scikit-learn pipeline with Joblib, and serves predictions through FastAPI.
```

### How to train the model

```bash
python scripts/train.py
```

### How to run the API

```bash
uvicorn app.main:app --reload
```

### How to send a request

```bash
curl -X POST "http://127.0.0.1:8000/predict" \
  -H "Content-Type: application/json" \
  -d '{
    "sepal_length": 5.1,
    "sepal_width": 3.5,
    "petal_length": 1.4,
    "petal_width": 0.2
  }'
```

### How to run tests

```bash
pytest
```

### How to run with Docker

```bash
docker build -t iris-model-api .
docker run --rm -p 8000:8000 iris-model-api
```

### Limitations

Document limitations such as:

* Small demonstration dataset
* No authentication
* No production database
* No automated model retraining
* No real-time drift detection
* Python-specific serialized artifact

---

## 25. Completion Checklist

* [ ] I can explain serialization and deserialization.
* [ ] I can explain the difference between Pickle and Joblib.
* [ ] I can save a trained model.
* [ ] I can load a model and reproduce predictions.
* [ ] I can serialize an entire preprocessing pipeline.
* [ ] I understand why feature order matters.
* [ ] I know that untrusted Pickle and Joblib files are dangerous.
* [ ] I record Python and library versions.
* [ ] I attach metadata to the model artifact.
* [ ] I use versioned artifact names or directories.
* [ ] I can load the artifact inside a FastAPI service.
* [ ] I have implemented `/health` and `/predict`.
* [ ] I have added model and API tests.
* [ ] I have created a Dockerfile.
* [ ] I have documented how to run the project.
* [ ] I have recorded at least one limitation or production risk.

---

## 26. Related Outcome

Deploy, version, monitor, and operate machine learning models using:

* Serialized model artifacts
* APIs
* Docker
* Automated tests
* CI/CD
* Logging
* Monitoring
* Drift-aware workflows
* Rollback strategies

---

## 27. Related Project

### Mini Project: Deploy a Machine Learning Model API

Build a project containing:

* A trained Scikit-learn pipeline
* A Joblib model artifact
* Model metadata
* A FastAPI `/predict` endpoint
* A `/health` endpoint
* Input validation
* Automated tests
* A Dockerfile
* A README
* Example requests and responses

Optional improvements:

* Add model version information to API responses.
* Store artifacts in cloud object storage.
* Add structured JSON logging.
* Add Prometheus metrics.
* Add request latency monitoring.
* Add a model registry.
* Add a CI workflow.
* Add input drift reports.
* Add canary deployment or rollback logic.

---

## 28. Summary

Pickle and Joblib convert Python objects into reusable model artifacts.

```text
Trained pipeline
      ↓
Pickle or Joblib
      ↓
Versioned model artifact
      ↓
FastAPI service
      ↓
Docker deployment
      ↓
Logging and monitoring
```

The most important lessons are:

1. Serialize the complete preprocessing and model pipeline whenever possible.
2. Load the model once when the service starts.
3. Never load serialized artifacts from untrusted sources.
4. Record the model version, framework version, Python version, features, and metrics.
5. Test that the saved artifact can be loaded and produces valid predictions.
6. Keep previous model versions to support rollback.
7. Remember that serialization is only one part of a complete MLOps workflow.

A strong portfolio project should not stop at a notebook. It should show how a trained model becomes a reproducible, testable, versioned, containerized, and observable prediction service.
