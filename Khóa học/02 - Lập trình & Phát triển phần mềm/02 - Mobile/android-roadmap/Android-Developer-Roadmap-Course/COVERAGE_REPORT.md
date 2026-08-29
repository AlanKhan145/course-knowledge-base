# Coverage Report

This report maps the generated course back to the scraped Android roadmap source.

## Source Inputs

- PDF: `C:\Users\Khanh PC\Downloads\android.pdf`
- Normalized roadmap text: `C:\Users\Khanh PC\.codex\attachments\6d68a33a-50ab-46df-919c-6fa95aafa3d3\pasted-text.txt`
- Official roadmap URL: https://roadmap.sh/android

## Generated Coverage

- Phases: 5
- Modules: 12
- Lessons: 352

## Roadmap Topic Mapping

### Module 01 - Pick a Language

- Phase: 01 - Language and Android Fundamentals
- Outcome: Choose the right primary Android language and understand why modern Android favors Kotlin.
- Project: Mini project: Rewrite a tiny Java-style screen into idiomatic Kotlin and document the differences.
- Lesson count: 13

#### Language Choice

- Kotlin
- Java
- Kotlin vs Java for Android
- Modern Android Stack
- Kotlin First Learning Strategy

#### Kotlin Essentials

- Null Safety
- Data Classes
- Extension Functions
- Sealed Classes
- Collections
- Lambdas
- Scope Functions
- Kotlin Coding Style

### Module 02 - Android Fundamentals

- Phase: 01 - Language and Android Fundamentals
- Outcome: Install Android Studio, create the first app, understand project structure, Gradle and source control.
- Project: Mini project: Hello Android App with text, button, image, state change and GitHub repository.
- Lesson count: 39

#### Development IDE

- Android Studio
- SDK Manager
- AVD Emulator
- Physical Device Debugging
- Logcat
- Project Wizard

#### Kotlin and OOP Basics

- Variables and Types
- Functions
- Classes and Objects
- Interfaces
- Inheritance
- Encapsulation
- Generics
- Error Handling

#### Data Structures and Algorithms

- List
- Map
- Set
- Queue
- Stack
- Sorting Basics
- Searching Basics
- Big O for Mobile Apps

#### Gradle

- Gradle Build System
- Settings Gradle
- Build Gradle Module
- Plugins
- Dependencies
- Build Types
- Product Flavors
- Version Catalog

#### First App and Version Control

- Create a Basic Hello World App
- Android Project Structure
- Manifest Basics
- Resources Folder
- Run and Debug App
- Git
- GitHub
- Bitbucket
- GitLab

### Module 03 - App Components

- Phase: 02 - App Components and User Interface
- Outcome: Understand Android application components and how they communicate with lifecycle-aware behavior.
- Project: Mini project: Multi-screen Profile App with explicit/implicit intents and lifecycle handling.
- Lesson count: 27

#### Activity

- Activity
- Activity Lifecycle
- onCreate
- onStart
- onResume
- onPause
- onStop
- onDestroy
- State Changes
- Configuration Changes
- Tasks and Backstack

#### Intent

- Intent
- Explicit Intents
- Implicit Intents
- Intent Extras
- Intent Filters
- Share Sheet
- Open Browser Intent
- Camera Intent

#### Other Components

- Services
- Foreground Service
- Bound Service
- Content Provider
- Broadcast Receiver
- System Broadcasts
- App Manifest Registration
- Component Permissions

### Module 04 - Interface and Navigation

- Phase: 02 - App Components and User Interface
- Outcome: Build Android UI with traditional layouts and modern Jetpack Compose, then connect screens with navigation.
- Project: Mini project: Shopping List App with list, form, dialog, edit/delete and detail navigation.
- Lesson count: 42

#### Traditional Layouts

- FrameLayout
- LinearLayout
- RelativeLayout
- ConstraintLayout
- RecyclerView
- ViewHolder Pattern
- Adapter Pattern
- Layout Inflation

#### UI Elements

- TextView
- EditText
- Buttons
- ImageView
- Toast
- Dialogs
- Fragments
- Bottom Sheet
- Drawer
- ListView
- Tabs
- Animations

#### Jetpack Compose

- Jetpack Compose
- Composable Functions
- Preview
- Modifier
- Material Design
- Compose State
- State Hoisting
- Column Row Box
- LazyColumn
- TextField
- Button in Compose
- Image in Compose
- Compose Animation
- Compose Theming

#### Navigation

- Navigation Components
- Navigation Graph
- NavController
- Arguments
- Deep Links
- Bottom Navigation
- Drawer Navigation
- App Shortcuts

### Module 05 - Design and Architecture

- Phase: 03 - Architecture, State and Data
- Outcome: Structure Android apps with clean layers, state holders, repositories, patterns and dependency injection.
- Project: Mini project: Clean Notes App with MVVM, Repository, Room, StateFlow and Hilt or Koin.
- Lesson count: 39

#### Architectural Patterns

- MVC
- MVP
- MVVM
- MVI
- Unidirectional Data Flow
- UI Layer
- Domain Layer
- Data Layer
- Clean Architecture Boundaries

#### Android Architecture Components

- ViewModel
- SavedStateHandle
- Lifecycle Awareness
- LiveData
- StateFlow
- SharedFlow
- UI State
- Events and Effects

#### Design Patterns

- Repository Pattern
- UseCase Pattern
- Builder Pattern
- Factory Pattern
- Observer Pattern
- Mapper Pattern
- Result Wrapper

#### Dependency Injection

- Dependency Injection
- Dagger
- Hilt
- Koin
- Kodein
- Constructor Injection
- Module Binding
- Scope Management

#### Reactive State

- Flow
- RxJava
- RxKotlin
- Flow vs LiveData
- Flow vs RxJava
- State Reducer
- Single Source of Truth

### Module 06 - Storage

- Phase: 03 - Architecture, State and Data
- Outcome: Persist local data with preferences, DataStore, Room and files while planning migrations and offline behavior.
- Project: Mini project: Offline Notes App with Room notes, DataStore theme setting, search and sort.
- Lesson count: 24

#### Preferences and Files

- Shared Preferences
- DataStore
- Preferences DataStore
- Proto DataStore
- File System
- Internal Storage
- External Storage
- Serialization

#### Room Database

- Room Database
- Entity
- DAO
- Query Annotation
- Insert Update Delete
- Relations
- Transactions
- Migration
- Prepopulate Database
- Room with Flow

#### Offline Design

- Offline First
- Cache Policy
- Local Source of Truth
- Conflict Resolution
- Search Local Data
- Sort Local Data

### Module 07 - Network

- Phase: 04 - Network, Async and Services
- Outcome: Call REST and GraphQL APIs, configure HTTP clients and handle loading, errors and caching.
- Project: Mini project: News App with Retrofit, OkHttp, Room cache, pull to refresh and offline error handling.
- Lesson count: 29

#### HTTP Fundamentals

- HTTP Methods
- Status Codes
- Headers
- Authentication Token
- JSON Parsing
- DTO
- Network Security Config

#### REST with Retrofit

- Retrofit
- Retrofit Interface
- Path and Query Parameters
- Request Body
- Response Wrapper
- Converter Factory
- Error Body
- Pagination

#### HTTP Client and GraphQL

- OkHttp
- Interceptor
- Logging Interceptor
- Timeouts
- Caching
- Apollo Android
- GraphQL Query
- GraphQL Mutation

#### Network UI States

- Loading State
- Success State
- Error State
- Retry UI
- Pull to Refresh
- Offline Message

### Module 08 - Asynchronism

- Phase: 04 - Network, Async and Services
- Outcome: Run background work safely with threads, coroutines, Flow, Rx and WorkManager.
- Project: Mini project: Background Sync App with WorkManager retry, local-first writes and sync status.
- Lesson count: 28

#### Threading Basics

- Main Thread
- Background Thread
- ANR
- Thread
- Executor
- Handler
- Dispatcher

#### Coroutines

- Coroutines
- Coroutine Scope
- Suspend Function
- Dispatchers
- Structured Concurrency
- Cancellation
- Exception Handling in Coroutines
- Flow
- Cold Flow
- Hot Flow

#### Rx and Background Work

- RxJava
- RxKotlin
- Observable
- Single
- Scheduler
- WorkManager
- OneTimeWorkRequest
- PeriodicWorkRequest
- Constraints
- Retry and Backoff
- Background Sync

### Module 09 - Common Services

- Phase: 04 - Network, Async and Services
- Outcome: Integrate Firebase, Google services, maps, notifications, remote config, ads and crash reporting.
- Project: Mini project: Firebase Chat App with auth, Firestore, push notification, Crashlytics and Remote Config.
- Lesson count: 21

#### Firebase

- Firebase
- Firebase Authentication
- Firestore
- Cloud Messaging
- Crashlytics
- Remote Config
- Firebase Analytics
- Firebase App Distribution

#### Google Services

- Google Play Services
- Google Maps
- Maps Marker
- Location Permission
- AdMob
- In App Updates
- In App Review

#### Service Integration

- google-services Plugin
- API Key Management
- Push Notification Flow
- Feature Flag
- Crash Report Workflow
- Privacy Considerations

### Module 10 - Linting, Debugging and Benchmark

- Phase: 05 - Quality, Release and Portfolio
- Outcome: Use static analysis, logging, debugging tools, leak detection and performance benchmarks.
- Project: Mini project: Refactor Existing App with ktlint, detekt, Timber, Chucker, LeakCanary and benchmark notes.
- Lesson count: 21

#### Linting

- Android Lint
- Ktlint
- Detekt
- Code Style
- Static Analysis Baseline
- Gradle Quality Task

#### Debugging

- Debugging
- Breakpoints
- Timber
- Chucker
- LeakCanary
- Memory Leak
- Network Debugging
- Crash Investigation

#### Performance

- Jetpack Benchmark
- Macrobenchmark
- Startup Time
- Jank
- RecyclerView Performance
- Compose Recomposition
- Android Profiler

### Module 11 - Testing

- Phase: 05 - Quality, Release and Portfolio
- Outcome: Test Android apps with unit tests, UI tests, fakes, mocks and critical user flow coverage.
- Project: Mini project: Tested Todo App with unit tests for add/edit/delete and Espresso user flow tests.
- Lesson count: 25

#### Unit Testing

- JUnit
- Test Naming
- ViewModel Test
- UseCase Test
- Repository Test
- Coroutine Test
- Flow Test
- Fake Repository
- Mock API
- Mock Database

#### UI Testing

- Espresso
- Compose UI Test
- Test Rule
- Find Node
- Click Action
- Assertion
- Form Validation Test
- Navigation Test
- Delete Flow Test

#### Testing Strategy

- Test Pyramid
- Critical User Flow
- Regression Test
- Flaky Test
- CI Test Run
- Coverage Report

### Module 12 - Distribution and Final Project

- Phase: 05 - Quality, Release and Portfolio
- Outcome: Create release builds, distribute test versions and prepare a production Android app portfolio.
- Project: Final project: Production Android App with auth, local database, network, offline cache, architecture, tests and release build.
- Lesson count: 44

#### Build and Signing

- Debug Build
- Release Build
- Signed APK
- Android App Bundle
- Keystore
- Signing Config
- versionCode
- versionName
- ProGuard and R8
- Release Notes

#### Distribution

- Firebase Distribution
- Internal Testing
- Google Play Console
- Store Listing
- Privacy Policy
- Data Safety Form
- App Review
- Staged Rollout
- Production Release

#### Final Production App

- Authentication
- Local Database
- Network API
- Offline-first Cache
- MVVM or MVI Architecture
- Dependency Injection
- Testing
- Firebase Crashlytics
- Release Build
- Internal Testing Channel

#### 16 Week Learning Plan

- Week 1-2 Kotlin OOP DSA Android Studio Gradle Git
- Week 3-4 Activity Intent Lifecycle App Components
- Week 5-7 UI Layouts RecyclerView Compose Navigation
- Week 8-10 MVVM MVI Repository ViewModel Flow Hilt Koin
- Week 11-13 Room DataStore Retrofit OkHttp Coroutines WorkManager
- Week 14 Firebase Google Maps Push Crashlytics
- Week 15 Testing Debugging Linting Performance
- Week 16 Signed APK AAB Firebase Distribution Google Play

#### Portfolio Projects

- Hello Android App
- Profile Portfolio App
- Shopping List App
- Notes App Offline
- News App
- Firebase Chat App
- Final Production App
