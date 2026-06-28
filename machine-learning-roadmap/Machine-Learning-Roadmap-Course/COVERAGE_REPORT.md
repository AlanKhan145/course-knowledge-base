# Coverage Report

This report maps the generated course back to the scraped Machine Learning roadmap source.

## Source Inputs

- PDF: `C:\Users\Khanh PC\Downloads\machine-learning.pdf`
- Normalized roadmap text: `C:\Users\Khanh PC\.codex\attachments\fe8e837b-2639-4727-9a15-42c96347bddc\pasted-text.txt`
- Official roadmap URL: https://roadmap.sh/machine-learning

## Generated Coverage

- Phases: 5
- Modules: 16
- Lessons: 367

## Roadmap Topic Mapping

### Module 01 - Prerequisites and Role Orientation

- Phase: 01 - Prerequisites and Foundations
- Outcome: Understand the ML Engineer role, required prerequisites and how Machine Learning differs from adjacent AI roles.
- Project: Mini project: Create a personal ML learning map and compare ML Engineer, AI Engineer and Data Scientist responsibilities.
- Lesson count: 15

#### Pre-requisites

- Programming Fundamentals
- Python Roadmap
- Mathematical Thinking
- Data Handling Basics
- ML Engineer Mindset
- AI Engineer Roadmap
- MLOps Roadmap
- AI and Data Scientist Roadmap
- AI Agents Roadmap

#### Introduction to Machine Learning

- What is Machine Learning?
- What is an ML Engineer?
- ML Engineer vs AI Engineer
- Skills and Responsibilities
- Model Lifecycle
- Data-to-Model Thinking

### Module 02 - Mathematical Foundations

- Phase: 01 - Prerequisites and Foundations
- Outcome: Build the calculus, linear algebra, statistics, probability and discrete math needed to reason about ML algorithms.
- Project: Mini project: Implement gradient descent for linear regression and explain each math concept used.
- Lesson count: 40

#### Calculus

- Derivatives
- Partial Derivatives
- Chain Rule
- Gradient
- Jacobian
- Hessian
- Gradient Descent
- Backpropagation
- Optimization
- Loss Minimization

#### Linear Algebra

- Scalars
- Vectors
- Matrices
- Tensors
- Matrix Operations
- Determinants
- Matrix Inverse
- Eigenvalues
- Diagonalization
- Singular Value Decomposition
- PCA Math
- Embeddings and Matrix Factorization

#### Statistics

- Descriptive Statistics
- Inferential Statistics
- Graphs and Charts
- Basic Statistical Concepts
- Probability Distributions
- Hypothesis Testing
- Confidence Intervals
- Model Error Analysis

#### Probability and Discrete Mathematics

- Basics of Probability
- Random Variables
- PDFs
- Bayes Theorem
- Sets
- Graphs
- Logic
- Combinatorics
- Trees
- Basic Algorithms

### Module 03 - Python for Machine Learning

- Phase: 01 - Prerequisites and Foundations
- Outcome: Use Python and the core ML ecosystem to create reproducible notebooks, scripts and experiments.
- Project: Mini project: Build a reproducible notebook that loads data, summarizes it and trains a baseline model.
- Lesson count: 24

#### Programming Fundamentals

- Basic Syntax
- Variables and Data Types
- Conditionals
- Loops
- Functions
- Built-in Functions
- Data Structures
- Exceptions
- Object Oriented Programming

#### Essential Libraries

- NumPy
- Pandas
- Matplotlib
- Seaborn
- Scikit-learn
- TensorFlow
- Keras
- PyTorch

#### Experiment Workflow

- Jupyter Notebook
- Virtual Environments
- Requirements Files
- Reproducible Seeds
- Project Structure
- Git for Experiments
- Notebook to Script Refactor

### Module 04 - Data Collection

- Phase: 02 - Data Preparation and Feature Work
- Outcome: Collect data from databases, APIs, files and devices while documenting schema, ownership and limitations.
- Project: Mini project: Collect data from a CSV and an API, then create a data dictionary and raw dataset snapshot.
- Lesson count: 23

#### Data Sources

- Databases - SQL
- Databases - NoSQL
- Internet APIs
- Mobile Apps
- IoT Devices
- Public Datasets
- Kaggle Datasets
- Data Licensing

#### Data Formats

- CSV
- Excel
- JSON
- Parquet
- Image Data
- Text Data
- Time Series Data
- Other Data Formats

#### Data Ingestion Basics

- pandas read_csv
- pandas read_excel
- JSON Normalization
- SQL Read
- API Pagination
- Data Schema
- Data Dictionary

### Module 05 - Data Cleaning and Preprocessing

- Phase: 02 - Data Preparation and Feature Work
- Outcome: Clean raw data, prevent leakage and prepare features for reliable model training and evaluation.
- Project: Mini project: Clean a messy tabular dataset and build a scikit-learn preprocessing pipeline.
- Lesson count: 24

#### Data Cleaning

- Missing Values
- Duplicate Data
- Outliers
- Normalize Column Names
- Data Type Conversion
- Data Leakage Checks
- Data Validation
- Exploratory Checks

#### Preprocessing Techniques

- Feature Engineering
- Feature Selection
- Feature Scaling
- Normalization
- Categorical Encoding
- Dimensionality Reduction
- Scikit-learn Pipeline
- ColumnTransformer

#### Train-Test Data

- Train Set
- Validation Set
- Test Set
- Data Split
- Stratified Split
- Time Based Split
- Leakage Prevention
- Holdout Strategy

### Module 06 - Types of Machine Learning

- Phase: 03 - Classical Machine Learning
- Outcome: Choose the right ML type for the problem: supervised, unsupervised, semi-supervised, self-supervised or reinforcement learning.
- Project: Mini project: Classify 20 example business problems by ML type and define the target/data needed for each.
- Lesson count: 16

#### Learning Paradigms

- Supervised Learning
- Unsupervised Learning
- Semi-supervised Learning
- Self-supervised Learning
- Reinforcement Learning
- Learning from Labels
- Learning without Labels
- Learning from Rewards

#### Problem Framing

- Classification Problems
- Regression Problems
- Clustering Problems
- Anomaly Detection Problems
- Ranking Problems
- Recommendation Problems
- Forecasting Problems
- When Not to Use ML

### Module 07 - Supervised Learning - Classification

- Phase: 03 - Classical Machine Learning
- Outcome: Train and evaluate classification models for labeled categorical prediction problems.
- Project: Project: Customer Churn Classification with precision, recall, F1, confusion matrix and ROC-AUC.
- Lesson count: 18

#### Classification Fundamentals

- Classification
- Binary Classification
- Multiclass Classification
- Multilabel Classification
- Decision Threshold
- Class Imbalance
- Spam Classification
- Fraud Detection
- Churn Prediction

#### Classification Algorithms

- Logistic Regression
- Support Vector Machines
- K-Nearest Neighbors
- Decision Trees
- Random Forest
- Gradient Boosting Machines
- XGBoost
- LightGBM
- Classifier Comparison

### Module 08 - Supervised Learning - Regression

- Phase: 03 - Classical Machine Learning
- Outcome: Train and evaluate regression models for numeric prediction problems.
- Project: Project: House Price Prediction with feature engineering, regression models and error analysis.
- Lesson count: 16

#### Regression Fundamentals

- Regression
- Target Variable
- Residuals
- Residual Analysis
- Target Transformation
- House Price Prediction
- Revenue Prediction
- Demand Forecasting

#### Regression Algorithms

- Linear Regression
- Polynomial Regression
- Ridge Regression
- Lasso Regression
- ElasticNet Regularization
- Decision Tree Regressor
- Random Forest Regressor
- Gradient Boosting Regressor

### Module 09 - Unsupervised Learning

- Phase: 03 - Classical Machine Learning
- Outcome: Discover structure in unlabeled data with clustering, dimensionality reduction and anomaly detection.
- Project: Mini project: Customer Segmentation with K-Means, PCA visualization and cluster interpretation.
- Lesson count: 20

#### Clustering

- Clustering
- Exclusive Clustering
- Overlapping Clustering
- Hierarchical Clustering
- Probabilistic Clustering
- K-Means
- DBSCAN
- Gaussian Mixture Models
- Agglomerative Clustering
- Silhouette Score

#### Dimensionality Reduction

- Principal Component Analysis
- Autoencoders for Dimensionality Reduction
- Visualization
- Noise Reduction
- Feature Compression
- Speed Up Training

#### Unsupervised Applications

- Anomaly Detection
- Hidden Group Discovery
- Customer Segmentation
- Embedding Visualization

### Module 10 - Reinforcement Learning

- Phase: 03 - Classical Machine Learning
- Outcome: Understand the core reinforcement learning loop and the main families of RL algorithms.
- Project: Mini project: Implement a tiny grid-world Q-Learning example and explain the reward design.
- Lesson count: 18

#### Core Concepts

- What is Reinforcement Learning?
- Agent
- Environment
- State
- Action
- Reward
- Policy
- Value Function
- Exploration vs Exploitation
- Episode

#### RL Algorithms

- Q-Learning
- Deep-Q Networks
- Policy Gradient
- Actor-Critic Methods
- Game AI
- Robotics
- Trading Agents
- Recommendation Optimization

### Module 11 - Model Evaluation

- Phase: 04 - Evaluation, Workflow and Deep Learning
- Outcome: Measure model performance with task-appropriate metrics, validation techniques and error analysis.
- Project: Mini project: Compare three models and choose the winner using metrics, cross-validation and error analysis.
- Lesson count: 26

#### Evaluation Basics

- What is Model Evaluation?
- Generalization
- Overfitting
- Underfitting
- Bias-Variance Tradeoff
- Baseline Model
- Metric Selection

#### Classification Metrics

- Accuracy
- Precision
- Recall
- F1-Score
- ROC-AUC
- Log Loss
- Confusion Matrix
- Threshold Tuning
- Calibration

#### Regression Metrics

- MAE
- MSE
- RMSE
- R-squared
- MAPE

#### Validation Techniques

- K-Fold Cross Validation
- LOOCV - Leave-One-Out Cross Validation
- Stratified Cross Validation
- Time Series Validation
- Error Analysis

### Module 12 - Machine Learning Workflow

- Phase: 04 - Evaluation, Workflow and Deep Learning
- Outcome: Run the end-to-end ML workflow from data source to monitoring with reproducibility and clear artifacts.
- Project: Project: End-to-end ML pipeline with data prep, training, tuning, evaluation and model report.
- Lesson count: 18

#### Workflow Steps

- Data Sources
- Data Collection Step
- Data Cleaning Step
- Data Preparation Step
- Train-Test Split Step
- Model Selection Step
- Training Step
- Tuning Step
- Prediction Step
- Model Evaluation Step
- Deployment Step
- Monitoring Step

#### Workflow Artifacts

- Experiment Tracking
- Model Versioning
- Model Card
- Data Card
- Reproducible Pipeline
- Deployment Readiness Checklist

### Module 13 - Deep Learning Foundations

- Phase: 04 - Evaluation, Workflow and Deep Learning
- Outcome: Understand neural networks, training loops, activation functions, losses, optimizers and DL libraries.
- Project: Mini project: Train a small MLP and compare it with a scikit-learn baseline.
- Lesson count: 20

#### Neural Network Basics

- Perceptron
- Multi-layer Perceptrons
- Forward Propagation
- Back Propagation
- Activation Functions
- Loss Functions
- Optimizer
- SGD
- Adam
- Regularization
- Dropout
- Batch Normalization
- Training Loop

#### Deep Learning Libraries

- TensorFlow for Deep Learning
- Keras for Deep Learning
- PyTorch for Deep Learning
- Scikit-learn for Baselines
- GPU Basics
- Model Checkpoints
- Learning Curves

### Module 14 - Deep Learning Architectures

- Phase: 04 - Evaluation, Workflow and Deep Learning
- Outcome: Understand CNNs, RNNs, attention, transformers, autoencoders and GANs at a practical level.
- Project: Project: Image Classification with CNN and a short architecture/evaluation report.
- Lesson count: 33

#### Convolutional Neural Networks

- Convolutional Neural Networks
- Convolution
- Padding
- Strides
- Pooling
- Applications of CNNs
- Image Classification
- Image Segmentation
- Image and Video Recognition
- Data Augmentation

#### Recurrent Neural Networks

- Recurrent Neural Networks
- GRU
- LSTM
- Time Series
- Text Generation
- Sequence Prediction
- Speech Processing

#### Attention Mechanisms

- Self-Attention
- Transformers
- Multi-head Attention
- NLP Applications
- LLM Foundations
- Translation
- Summarization
- Vision Transformer

#### Autoencoders and GANs

- Autoencoders
- Representation Learning
- Noise Removal
- Generative Adversarial Networks
- Image Generation
- Super-resolution
- Style Transfer
- Synthetic Data Generation

### Module 15 - Advanced Concepts in ML

- Phase: 05 - Advanced Topics and Portfolio
- Outcome: Extend ML skills into NLP, explainable AI and recommendation systems.
- Project: Project: Text Classification or Recommendation System with model explanation and evaluation.
- Lesson count: 24

#### Natural Language Processing

- Natural Language Processing
- Tokenization
- Stemming
- Lemmatization
- Embeddings
- Attention Models
- Text Classification
- Classical NLP Pipeline

#### Explainable AI

- Explainable AI
- Why Did the Model Predict This?
- Feature Importance
- SHAP
- LIME
- Partial Dependence Plots
- Model Explanation for Business
- Fairness and Bias Checks

#### Recommendation Systems

- Recommendation Systems
- Collaborative Filtering
- Content-based Filtering
- Matrix Factorization
- Embedding-based Recommendation
- Ranking Models
- User-item Interaction
- Ranking Metrics

### Module 16 - Projects and 16 Week Learning Plan

- Phase: 05 - Advanced Topics and Portfolio
- Outcome: Turn the roadmap into a 16 week portfolio plan with practical ML projects and completion checklist.
- Project: Capstone: End-to-end ML portfolio with at least three GitHub projects and one final report.
- Lesson count: 32

#### 16 Week Learning Plan

- Week 1 Python Fundamentals and NumPy
- Week 2 Pandas Data Formats and Data Cleaning
- Week 3 Statistics and Probability
- Week 4 Linear Algebra and Calculus Basics
- Week 5 Feature Engineering Scaling Train-Test Split
- Week 6 Regression Models
- Week 7 Classification Models
- Week 8 Tree Models and Gradient Boosting
- Week 9 Model Evaluation and Cross-validation
- Week 10 Clustering and PCA
- Week 11 Neural Network Basics
- Week 12 CNN Image Classification
- Week 13 RNN LSTM Sequence Modeling
- Week 14 Attention Transformers and NLP Basics
- Week 15 Recommendation Systems and Explainable AI
- Week 16 End-to-end ML Project and Deployment Intro

#### Practice Projects

- Project 1 - House Price Prediction
- Project 2 - Customer Churn Classification
- Project 3 - Image Classification
- Project 4 - Text Classification
- Project 5 - Recommendation System

#### Completion Checklist

- Read and Clean Dataset
- Choose Algorithm for Regression Classification Clustering
- Train Model with Scikit-learn
- Evaluate with Accuracy Precision Recall F1 ROC-AUC
- Use Cross-validation
- Understand Neural Network Backpropagation Activation Loss
- Build Basic CNN
- Understand Attention and Transformer Foundations
- Publish 3 ML Projects on GitHub
- Explain Model and Model Errors
- Prepare for MLOps AI Engineer Deep Learning Next Steps
