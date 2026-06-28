# Coverage Report

This report maps the generated course back to the scraped iOS Developer roadmap source.

## Source Inputs

- PDF: `C:\Users\Khanh PC\Downloads\ios.pdf`
- Normalized roadmap text: `C:\Users\Khanh PC\.codex\attachments\44e710f9-8aeb-49f8-93ec-b3001d33f33e\pasted-text.txt`
- Official roadmap URL: https://roadmap.sh/ios

## Generated Coverage

- Phases: 9
- Modules: 29
- Lessons: 457

## Roadmap Topic Mapping

### Module 01 - Introduction to iOS Development

- Phase: 01 - iOS and Swift Foundations
- Outcome: Understand the Apple ecosystem, native iOS development and the iOS platform layers.
- Project: Mini project: Draw an iOS platform architecture diagram and explain where UIKit and SwiftUI fit.
- Lesson count: 19

#### iOS Ecosystem

- What is an iOS Developer?
- Apple Ecosystem
- iOS
- iPadOS
- watchOS
- macOS
- Native iOS vs Flutter
- Native iOS vs React Native
- iOS Developer Career Path

#### iOS Platform Architecture

- iOS Architecture Overview
- Core OS
- Core Services
- Media Layer
- Cocoa Touch
- Core Graphics
- Core Animation
- AVFoundation
- UIKit
- SwiftUI

### Module 02 - Swift Basics

- Phase: 01 - iOS and Swift Foundations
- Outcome: Learn enough Swift syntax and type system to build real iOS screens and small apps.
- Project: Mini project: Swift console task manager with add, list, complete and delete operations.
- Lesson count: 19

#### Swift Fundamentals

- Why Learn Swift?
- Variables
- Constants
- Data Types
- String
- Number
- Bool
- Array
- Dictionary
- Set
- Function
- Optional
- Struct vs Class
- Enum
- Protocol
- Extension
- Error Handling
- Closure
- Basic Generics

### Module 03 - Object-Oriented and Functional Swift

- Phase: 01 - iOS and Swift Foundations
- Outcome: Use OOP, protocol-oriented programming, functional tools and memory management in idiomatic Swift.
- Project: Mini project: Model User, Task and Project with protocols, extensions and safe references.
- Lesson count: 16

#### Swift Programming Styles

- OOP in Swift
- Encapsulation
- Inheritance
- Polymorphism
- Protocol-oriented Programming
- Functional Programming
- map
- filter
- reduce
- Closure Capturing
- Memory Management
- ARC
- Strong Reference
- Weak Reference
- Unowned Reference
- Retain Cycle

### Module 04 - Swift Concurrency

- Phase: 01 - iOS and Swift Foundations
- Outcome: Handle asynchronous work, UI updates and concurrency bugs with modern Swift tools.
- Project: Mini project: Fake API loader that displays loading, success and error states.
- Lesson count: 12

#### Concurrency Basics

- Sync vs Async
- GCD
- DispatchQueue
- OperationQueue
- async await
- Task
- MainActor
- Race Condition
- Callback Hell
- Convert Callback to async await
- Cancellation
- Structured Concurrency

### Module 05 - Xcode from Basics to Practice

- Phase: 02 - Developer Tools and Version Control
- Outcome: Use Xcode to create, run, debug, configure and archive iOS projects.
- Project: Mini project: Create a Hello iOS app and run it on Simulator.
- Lesson count: 19

#### Xcode Essentials

- Install Xcode
- Create New Project
- iOS Project Structure
- Navigators
- Editors
- Toolbar
- Project Settings
- Simulator
- Debugger
- Breakpoints
- Debug Navigator
- Step Over
- Step Into
- Continue
- Build Settings
- Assets
- Fonts
- App Icons
- Hello iOS App

### Module 06 - Git GitHub and Version Control

- Phase: 02 - Developer Tools and Version Control
- Outcome: Manage iOS source code with Git, GitHub and a feature-branch workflow.
- Project: Mini project: Publish the first iOS project to GitHub with a clean README and .gitignore.
- Lesson count: 12

#### Version Control

- git init
- git add
- git commit
- Branch
- Merge
- Pull Request
- GitHub Repo
- iOS .gitignore
- Feature Branch Workflow
- Tag Version Release
- Release Branch
- Commit Message Convention

### Module 07 - UIKit Basics

- Phase: 03 - UIKit
- Outcome: Understand UIKit's view/controller model and build classic iOS screens.
- Project: Mini project: Simple contacts app using UIKit, UITableView and a detail screen.
- Lesson count: 16

#### UIKit Foundation

- What is UIKit?
- View
- UIViewController
- ViewController Lifecycle
- viewDidLoad
- viewWillAppear
- viewDidAppear
- viewWillDisappear
- UILabel
- UIButton
- UIImageView
- UITextField
- UITableView
- UICollectionView
- User Interactions
- Gesture Recognizer

### Module 08 - Interface Builder Storyboard and Xib

- Phase: 03 - UIKit
- Outcome: Build UIKit interfaces visually and connect them safely to code.
- Project: Mini project: Login screen with Storyboard and Auto Layout.
- Lesson count: 12

#### Visual UI Tools

- Interface Builder
- Storyboard
- Xib
- IBOutlet
- IBAction
- Auto Layout
- Constraints
- StackView
- Size Classes
- Adaptive Layout
- Layout Debugging
- Storyboard Merge Conflicts

### Module 09 - UIKit Navigation

- Phase: 03 - UIKit
- Outcome: Navigate between multiple UIKit screens and pass data correctly.
- Project: Mini project: Product list app with product detail navigation.
- Lesson count: 11

#### UIKit Navigation Patterns

- UINavigationController
- Segue
- Push
- Present Modal
- Dismiss
- Passing Data
- TabBarController
- Navigation Pattern in Real Apps
- Coordinator Basics
- Back Navigation
- Deep Link Basics

### Module 10 - SwiftUI Basics

- Phase: 04 - SwiftUI and Apple Design
- Outcome: Build modern declarative iOS UI with SwiftUI views, modifiers and layout containers.
- Project: Mini project: Profile Card App with SwiftUI.
- Lesson count: 17

#### SwiftUI Foundation

- What is SwiftUI?
- Declarative Syntax
- View
- Modifier
- Text
- Image
- Button
- VStack
- HStack
- ZStack
- List
- Form
- ScrollView
- SF Symbols
- Preview
- Asset Management
- Profile Card App

### Module 11 - State Management in SwiftUI

- Phase: 04 - SwiftUI and Apple Design
- Outcome: Manage SwiftUI state and data flow while separating views from view models.
- Project: Mini project: Todo App with add, edit and delete task flows.
- Lesson count: 12

#### SwiftUI State

- @State
- @Binding
- @StateObject
- @ObservedObject
- @EnvironmentObject
- @Environment
- Data Flow in SwiftUI
- Separate View and ViewModel
- Common State Bugs
- ObservableObject
- Published Properties
- Todo App State

### Module 12 - SwiftUI Navigation

- Phase: 04 - SwiftUI and Apple Design
- Outcome: Build multi-screen SwiftUI apps with navigation, modal presentation and data passing.
- Project: Mini project: Recipe App with list, detail and favorite flows.
- Lesson count: 12

#### SwiftUI Navigation Patterns

- NavigationStack
- NavigationLink
- NavigationPath
- Sheet
- FullScreenCover
- Alert
- ConfirmationDialog
- TabView
- Passing Data Between Screens
- Present and Dismiss Views
- Route Model
- Programmatic Navigation

### Module 13 - UI Design and Human Interface Guidelines

- Phase: 04 - SwiftUI and Apple Design
- Outcome: Design iOS interfaces that feel native, accessible and production-ready.
- Project: Mini project: Redesign Todo App according to Apple Human Interface Guidelines.
- Lesson count: 13

#### Apple Design

- Human Interface Guidelines
- Typography
- Spacing
- Color System
- Dark Mode
- Dynamic Type
- Accessibility-friendly UI
- Empty State
- Loading State
- Error State
- Animation Moderation
- Touch Target Size
- iOS Design Review Checklist

### Module 14 - Architectural Patterns

- Phase: 05 - Architecture and Reactive Patterns
- Outcome: Organize iOS apps with clear architecture, dependency boundaries and scalable folders.
- Project: Project: Refactor Todo App from logic-in-view to MVVM with services and repositories.
- Lesson count: 14

#### Architecture Choices

- MVC
- MVP
- MVVM
- MVVM-C
- VIPER
- TCA
- When to Use Which Architecture
- Folder Structure for iOS Apps
- Basic Dependency Injection
- Separate View ViewModel Service Repository
- Service Layer
- Repository Layer
- UseCase Layer
- Coordinator Pattern

### Module 15 - Delegate Callback and Closure

- Phase: 05 - Architecture and Reactive Patterns
- Outcome: Use iOS communication patterns safely without retain cycles or callback chaos.
- Project: Mini project: Create a custom component that sends events back to its parent screen.
- Lesson count: 11

#### Communication Patterns

- Delegate Pattern
- Implement Delegate
- Callback
- Closure
- Capture List
- Weak Self
- Callback Hell
- Convert Callback to async await
- Custom Component Events
- Parent Child Communication
- Retain Cycle in Closure

### Module 16 - Reactive Programming

- Phase: 05 - Architecture and Reactive Patterns
- Outcome: Understand Combine and RxSwift for event streams, MVVM bindings and debounced UI.
- Project: Mini project: Search screen with debounce while typing.
- Lesson count: 15

#### Reactive Tools

- What is Reactive Programming?
- Combine
- Publisher
- Subscriber
- Operator
- Pipeline
- Combine with MVVM
- RxSwift Overview
- Observable
- Observer
- Subject
- Scheduler
- When to Use Combine or RxSwift
- Debounce
- Search Screen Pipeline

### Module 17 - Data Persistence

- Phase: 06 - Data Persistence and Networking
- Outcome: Persist local data with UserDefaults, Keychain, files, SQLite and Core Data.
- Project: Project: Notes App using Core Data and a small settings store.
- Lesson count: 13

#### Local Storage

- UserDefaults
- File System
- Keychain
- SQLite
- Core Data
- Model
- Entity
- Fetch Request
- CRUD with Core Data
- Basic Migration
- Choosing Storage Technology
- API Response Cache
- Persistence Error Handling

### Module 18 - JSON XML Parsing and Serializing

- Phase: 06 - Data Persistence and Networking
- Outcome: Parse server data into Swift models and serialize app data safely.
- Project: Mini project: Parse a movie list JSON response into Swift models.
- Lesson count: 11

#### Parsing Data

- What is JSON?
- Codable
- Decodable
- Encodable
- Parsing Nested JSON
- Date Decoding
- JSON Parsing Errors
- XML Overview
- Serialize Object to JSON
- Custom Coding Keys
- API DTO Models

### Module 19 - Networking

- Phase: 06 - Data Persistence and Networking
- Outcome: Call REST APIs, handle errors and build a networking layer for MVVM apps.
- Project: Project: Movie App with API list, search, detail, loading and error states.
- Lesson count: 18

#### Networking Fundamentals

- HTTP HTTPS
- REST API
- GraphQL Overview
- URLSession
- GET
- POST
- PUT
- DELETE
- Header
- Query Params
- Request Body
- Status Code
- Error Handling
- Retry
- Alamofire Overview
- Networking Layer with MVVM
- MovieService
- Loading Success Error State

### Module 20 - Common Apple Frameworks

- Phase: 07 - Frameworks Accessibility and Libraries
- Outcome: Recognize and use common Apple frameworks found in real iOS apps.
- Project: Mini project: Build one feature demo using MapKit, AVFoundation, CoreML or CoreImage.
- Lesson count: 17

#### Apple Frameworks

- MapKit
- CoreLocation
- AVFoundation
- CoreImage
- CoreAudio
- CoreML
- ARKit
- HealthKit
- GameKit
- Core Animation
- Lottie Animation
- Metal Overview
- Favorite Places App
- Audio Video Player App
- Image Recognition Demo
- Image Filter App
- Weather by Location App

### Module 21 - Frameworks Libraries and Dependency Managers

- Phase: 07 - Frameworks Accessibility and Libraries
- Outcome: Integrate external libraries while managing dependency risk and versions.
- Project: Mini project: Add one Swift Package Manager dependency and document why it is worth using.
- Lesson count: 10

#### Dependency Management

- Swift Package Manager
- CocoaPods
- Carthage
- Static Library
- Dynamic Library
- XCFramework
- When to Use External Packages
- Dependency Version Management
- Dependency Risk Review
- Package Update Strategy

### Module 22 - Accessibility

- Phase: 07 - Frameworks Accessibility and Libraries
- Outcome: Make iOS apps usable with VoiceOver, Dynamic Type and accessibility testing.
- Project: Mini project: Optimize the Todo App for VoiceOver and Dynamic Type.
- Lesson count: 12

#### Accessible iOS

- What is Accessibility?
- VoiceOver
- Accessibility Label
- Accessibility Hint
- Dynamic Type
- Accessibility Inspector
- Contrast
- Tap Target Size
- Test Accessibility
- Accessibility Traits
- Reduce Motion
- Accessible Empty State

### Module 23 - Code Quality Tools

- Phase: 08 - Code Quality Debugging and Testing
- Outcome: Keep Swift code consistent, readable and reviewable with linting and formatting tools.
- Project: Mini project: Configure SwiftLint and a review checklist for an existing project.
- Lesson count: 11

#### Quality Tools

- SwiftLint
- SwiftFormat
- Tailor
- Naming Convention
- Code Style
- Clean Code in Swift
- Refactor
- Review Checklist
- Lint in CI
- Formatting Rule Decisions
- Technical Debt Notes

### Module 24 - Debugging and Profiling

- Phase: 08 - Code Quality Debugging and Testing
- Outcome: Find and fix bugs, memory leaks, crashes and performance problems in iOS apps.
- Project: Mini project: Find and fix a memory leak caused by closure retaining self.
- Lesson count: 13

#### Debugging Tools

- Xcode Debugger
- Advanced Breakpoints
- LLDB Basics
- Debug Memory
- Debug UI
- Instruments
- Time Profiler
- Memory Graph
- Network Debugging
- Basic Crash Log
- Symbolication
- Performance Investigation
- Memory Leak Closure

### Module 25 - Testing

- Phase: 08 - Code Quality Debugging and Testing
- Outcome: Write unit, UI, async and ViewModel tests for production iOS apps.
- Project: Project: Unit test MovieViewModel and UI test the search screen.
- Lesson count: 13

#### iOS Testing

- Unit Testing
- UI Testing
- XCTest
- XCUITest
- Test ViewModel
- Mock Service
- Test Async Code
- Test Plan
- Code Coverage
- Snapshot Testing Overview
- Fake Repository
- Critical User Flow Test
- Flaky Test

### Module 26 - App Distribution

- Phase: 09 - Distribution DevOps and Portfolio
- Outcome: Prepare iOS builds for TestFlight and App Store release.
- Project: Project: Build a TestFlight-ready release for the final app.
- Lesson count: 14

#### Release Preparation

- Apple Developer Program
- Bundle Identifier
- Signing and Capabilities
- Certificate
- Provisioning Profile
- Archive Build
- TestFlight
- App Store Connect
- App Store Review
- Versioning
- Release Notes
- Build Number
- Privacy Manifest
- Release Checklist

### Module 27 - Fastlane and CI CD

- Phase: 09 - Distribution DevOps and Portfolio
- Outcome: Automate linting, testing, building, archiving and TestFlight upload.
- Project: Mini project: GitHub Actions pipeline that runs lint, tests and creates an archive step outline.
- Lesson count: 14

#### Mobile DevOps

- Fastlane
- match
- gym
- pilot
- GitHub Actions
- GitLab CI
- Jenkins
- CircleCI
- Azure DevOps
- Auto Build on Push
- Auto Run Test
- Auto Upload TestFlight
- CI Secrets
- Pipeline Failure Debugging

### Module 28 - App Store Optimization and Continuous Learning

- Phase: 09 - Distribution DevOps and Portfolio
- Outcome: Maintain app growth, production quality and long-term iOS learning.
- Project: Mini project: Prepare an App Store listing draft and continuous learning plan.
- Lesson count: 15

#### ASO and Maintenance

- App Store Optimization
- App Name
- Subtitle
- Keywords
- Screenshot
- App Preview Video
- Rating and Review
- Crash Monitoring
- Analytics
- WWDC
- Latest Swift
- Latest iOS SDK
- Follow Apple Changes
- Release Metrics
- Production Maintenance

### Module 29 - Final App Portfolio and 20 Week Plan

- Phase: 09 - Distribution DevOps and Portfolio
- Outcome: Turn the roadmap into a 20 week plan and finish with a TestFlight-ready portfolio app.
- Project: Capstone: Personal Finance, Habit Tracker or Movie Explorer with SwiftUI, MVVM, persistence, networking, tests and CI.
- Lesson count: 66

#### 20 Week Learning Plan

- Week 1 iOS Ecosystem Xcode Swift Basics
- Week 2 Advanced Swift OOP Functional
- Week 3 Concurrency async await Memory
- Week 4 Git Xcode Debugging
- Week 5 UIKit Basics
- Week 6 Storyboard Auto Layout
- Week 7 UIKit Navigation
- Week 8 SwiftUI Basics
- Week 9 SwiftUI State Management
- Week 10 SwiftUI Navigation
- Week 11 HIG UI Design Accessibility
- Week 12 Architecture MVC MVVM
- Week 13 Delegate Closures Combine
- Week 14 Persistence UserDefaults Core Data
- Week 15 JSON Codable Networking
- Week 16 REST API URLSession Alamofire
- Week 17 Apple Frameworks
- Week 18 Testing XCTest XCUITest
- Week 19 Debugging Instruments SwiftLint
- Week 20 Fastlane CI CD TestFlight ASO

#### Portfolio Projects

- Todo Notes App
- Movie Weather App
- Production App Mini
- Personal Finance App
- Habit Tracker App
- Movie Explorer App

#### Final Project Requirements

- SwiftUI Main UI
- MVVM Architecture
- At Least 5 Screens
- Navigation
- REST API or Local Mock API
- Core Data or UserDefaults Persistence
- Loading Error Empty State
- Unit Test for ViewModel
- Basic UI Test
- SwiftLint
- GitHub Actions Test Pipeline
- Release or TestFlight Ready Build

#### Final App Structure

- App Folder
- Models Folder
- Views Folder
- ViewModels Folder
- Services Folder
- Repositories Folder
- Persistence Folder
- Utilities Folder
- Resources Folder
- Tests Folder
- UITests Folder

#### Completion Checklist

- Write Clean Swift
- Use Xcode Debug Build Archive
- Understand UIKit ViewController Auto Layout Navigation
- Build SwiftUI View Modifier State NavigationStack
- Apply MVC MVVM ViewModel Service Repository
- Call REST API with URLSession
- Parse JSON with Codable
- Persist with UserDefaults Keychain Core Data
- Write XCTest XCUITest Mock Service
- Prepare Signing TestFlight App Store Connect
- Create Basic GitHub Actions Fastlane Pipeline

#### Learning Goal Paths

- iOS Intern Path
- Personal App Builder Path
- Professional iOS Team Path
- SwiftUI Focus
- UIKit Legacy Code Focus
- Architecture Advanced Focus
