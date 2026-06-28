# Coverage Report

This report maps the generated course back to the scraped QA Engineer roadmap source.

## Source Inputs

- PDF: `C:\Users\Khanh PC\Downloads\qa.pdf`
- Normalized roadmap text: `C:\Users\Khanh PC\.codex\attachments\83d30117-f551-4f96-a390-aae690e73c06\pasted-text.txt`
- Official roadmap URL: https://roadmap.sh/qa

## Generated Coverage

- Phases: 5
- Modules: 18
- Lessons: 498

## Roadmap Topic Mapping

### Module 01 - QA Fundamentals

- Phase: 01 - QA Foundations and Manual Testing
- Outcome: Understand Quality Assurance, QA mindset and the difference between QA, QC and Testing.
- Project: Mini project: Write a one-page QA role note and edge-case checklist for a signup form.
- Lesson count: 25

#### Quality Assurance Basics

- Quality Assurance
- QA vs QC
- QA vs Testing
- Quality Goals
- QA in Agile Team
- Tester vs QA Engineer
- Prevention over Detection
- Product Quality Attributes
- Modern QA Engineer Role
- Risk-based Quality

#### QA Mindset

- Systematic Skepticism
- User Perspective
- Risk Thinking
- Edge Case Thinking
- Negative Testing Mindset
- Ambiguity Detection
- Questioning Requirements
- Defect Prevention Mindset

#### Testing Approaches

- White Box Testing
- Gray Box Testing
- Black Box Testing
- Static Testing
- Dynamic Testing
- Manual vs Automated Testing
- Risk-based Testing

### Module 02 - SDLC and Agile Delivery Models

- Phase: 01 - QA Foundations and Manual Testing
- Outcome: Understand software delivery models and where QA activities fit in each model.
- Project: Mini project: Map one user story from acceptance criteria to test execution and bug report.
- Lesson count: 21

#### SDLC Delivery Model

- SDLC
- Waterfall
- V Model
- Agile Model
- Scrum
- Kanban
- XP
- SAFe
- Release Cycle
- QA Entry Points

#### Agile QA

- Sprint
- Backlog
- User Story
- Acceptance Criteria
- Definition of Done
- Daily Meeting
- Sprint Review
- Retrospective
- Shift Left Testing
- Three Amigos
- Agile Test Strategy

### Module 03 - Manual Testing

- Phase: 01 - QA Foundations and Manual Testing
- Outcome: Write test plans, scenarios, cases, bug reports and release-ready test summaries.
- Project: Mini project: Create test plan, 20 test cases and bug report examples for login/register flows.
- Lesson count: 37

#### Test Planning

- Test Plan
- Test Scope
- Out of Scope
- Test Environment
- Entry Criteria
- Exit Criteria
- Testing Risks
- Timeline
- Resource Planning
- Test Data Planning
- Release Readiness

#### Test Design

- Test Scenario
- Test Case
- Precondition
- Test Steps
- Expected Result
- Actual Result
- Pass Fail Status
- Test Case ID
- Traceability
- Test Coverage

#### Defect Workflow

- Bug Report
- Severity
- Priority
- Steps to Reproduce
- Expected vs Actual
- Evidence Screenshot Video
- Environment Information
- Bug Lifecycle
- Retest
- Regression Confirmation

#### Verification and Validation

- Verification
- Validation
- Requirement Review
- Design Review
- User Need Validation
- Acceptance Test

### Module 04 - Testing Techniques

- Phase: 01 - QA Foundations and Manual Testing
- Outcome: Apply functional, non-functional and compatibility testing techniques in the right situations.
- Project: Mini project: Build a test matrix for one web feature across functional and non-functional dimensions.
- Lesson count: 28

#### Functional Testing

- Unit Testing
- Integration Testing
- Smoke Testing
- Sanity Testing
- Regression Testing
- Exploratory Testing
- User Acceptance Testing
- End-to-End Testing
- Functional Test Matrix

#### Non-Functional Testing

- Load Testing
- Performance Testing
- Stress Testing
- Security Testing
- Accessibility Testing
- Usability Testing
- Reliability Testing
- Compatibility Testing

#### Compatibility Testing

- Browser Compatibility
- Device Compatibility
- OS Compatibility
- Screen Size Compatibility
- Responsive Testing
- Cross-browser Test Matrix
- Cross-device Test Matrix

#### TDD Basics

- Test Driven Development
- Red Green Refactor
- Developer Unit Test Collaboration
- QA and TDD Workflow

### Module 05 - Web Fundamentals for QA

- Phase: 02 - Web API and Automation Testing
- Outcome: Understand web technology enough to debug UI, network, storage and rendering defects.
- Project: Mini project: Inspect a login page with DevTools and write a defect/debug note.
- Lesson count: 31

#### HTML CSS JavaScript

- DOM
- CSS Selector
- Form Behavior
- Click Event
- Input Event
- Submit Event
- LocalStorage
- SessionStorage
- Cookie
- Basic JavaScript Errors
- Selector Strategy

#### Browser DevTools

- Elements Tab
- Console Tab
- Network Tab
- Application Tab
- Performance Tab
- Inspect API Request
- Inspect Status Code
- Inspect Response
- Console Error Debugging
- Mobile Screen Simulation

#### Modern Web Concepts

- AJAX Request
- Browser Cache
- CSR
- SSR
- SPA
- PWA
- JAMStack
- Responsive vs Adaptive
- Hydration Mismatch
- Cache-related Bug

### Module 06 - Frontend Automation Fundamentals

- Phase: 02 - Web API and Automation Testing
- Outcome: Know when to automate browser tests and how to choose tools without over-automating.
- Project: Mini project: Decide what to automate for a login and checkout flow using a test pyramid.
- Lesson count: 29

#### Automation Basics

- Automation Testing
- When to Automate
- When Not to Automate
- Test Pyramid
- E2E Test
- Integration Test
- Unit Test
- Flaky Test
- Stable Locator
- Page Object Model
- Test Data Setup
- Test Isolation

#### Browser Addons

- Selenium IDE
- Ghost Inspector
- Bug Magnet
- Record and Playback
- Test Data Generator
- Browser Extension Testing

#### Automation Frameworks

- Selenium
- Webdriver.io
- Playwright
- Cypress
- Puppeteer
- Jest
- Jasmine
- Nightwatch
- Robot Framework
- QA Wolf
- Framework Selection

### Module 07 - Playwright and Cypress

- Phase: 02 - Web API and Automation Testing
- Outcome: Build practical E2E browser tests with Playwright or Cypress.
- Project: Mini project: Automate login success, login failure, search and logout with Playwright or Cypress.
- Lesson count: 34

#### Playwright

- Playwright Basics
- Playwright Test Runner
- page.goto
- Locator
- page.fill
- page.click
- expect Assertion
- toHaveURL
- Trace Viewer
- Screenshot
- Video Recording
- Playwright Report
- Playwright Config
- Headed vs Headless

#### Cypress

- Cypress Basics
- cy.visit
- cy.get
- cy.type
- cy.click
- cy.url
- Cypress Assertion
- Fixture
- Intercept
- Cypress Report
- Cypress Config

#### E2E Test Design

- Login Success Test
- Login Failure Test
- Search Product Test
- Add to Cart Test
- Checkout Test
- Logout Test
- Avoid Hard Wait
- Retry Assertion
- Test Cleanup

### Module 08 - Backend Automation and API Testing

- Phase: 02 - Web API and Automation Testing
- Outcome: Test REST APIs with Postman/Newman and understand Java/BDD API automation alternatives.
- Project: Mini project: Create Postman collection and Newman report for product, login, cart and order APIs.
- Lesson count: 35

#### API Testing Fundamentals

- REST API
- HTTP Methods
- Status Code
- Request Body
- Response Body
- Headers
- Authentication
- Authorization
- Schema Validation
- API Test Case
- API Negative Test

#### Status Codes

- 200 OK
- 201 Created
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Server Error
- Error Response Contract

#### Postman and Newman

- Postman
- Collection
- Environment Variables
- Pre-request Script
- Test Script
- Collection Runner
- Newman
- Newman CLI
- Newman HTML Report
- API Test in CI

#### API Automation Frameworks

- REST Assured
- Karate Framework
- SoapUI
- SOAP API Testing
- Mock Service
- Contract Testing Overview

### Module 09 - Mobile Automation and Mobile QA

- Phase: 03 - Mobile Accessibility Performance and Security
- Outcome: Understand mobile QA workflows and common mobile automation tools.
- Project: Mini project: Create a mobile QA checklist for install, permissions, network loss and deep link.
- Lesson count: 21

#### Mobile Testing Tools

- Appium
- Espresso
- Detox
- XCUITest
- Android Native Testing
- iOS Native Testing
- React Native Testing
- Cross-platform Mobile Automation
- Mobile Device Farm

#### Mobile QA Checklist

- Install App
- Uninstall App
- Update App
- Camera Permission
- Location Permission
- Notification Permission
- Network Loss
- Screen Rotation
- Background Foreground
- Push Notification
- Deep Link
- Mobile Crash

### Module 10 - Accessibility Testing

- Phase: 03 - Mobile Accessibility Performance and Security
- Outcome: Test web accessibility with screen reader concepts, keyboard navigation and automated tools.
- Project: Mini project: Run an accessibility audit on one form and write a remediation checklist.
- Lesson count: 24

#### Accessibility Fundamentals

- Accessibility Testing
- Screen Reader
- Keyboard Navigation
- Color Contrast
- Alt Text
- ARIA
- Accessible Name
- Focus State
- Form Error Accessibility
- WCAG Overview

#### Accessibility Tools

- WAVE
- AXE
- Chrome DevTools Accessibility
- Lighthouse Accessibility
- Accessibility Tree
- Manual Accessibility Check

#### Accessibility Checklist

- Tab Navigation
- Visible Focus
- Button Accessible Name
- Image Alt Text
- Sufficient Contrast
- Screen Reader Form Error
- Skip Link
- Semantic HTML

### Module 11 - Load and Performance Testing

- Phase: 03 - Mobile Accessibility Performance and Security
- Outcome: Measure speed, load behavior and system limits with frontend and backend performance tools.
- Project: Mini project: Run a K6 smoke load test and Lighthouse audit, then write a performance summary.
- Lesson count: 28

#### Performance Concepts

- Performance Testing
- Load Testing
- Stress Testing
- Spike Testing
- Soak Testing
- Latency
- Throughput
- Error Rate
- Concurrent Users
- Performance Baseline
- SLA SLO Basics

#### Performance Tools

- Lighthouse
- WebPageTest
- Gatling
- K6
- Artillery
- Vegeta
- JMeter
- Locust
- Tool Selection

#### K6 and Lighthouse

- K6 Script
- K6 Check
- K6 Threshold
- k6 run
- Lighthouse Performance
- Lighthouse Best Practices
- Lighthouse SEO
- Lighthouse PWA

### Module 12 - Security Testing Basics

- Phase: 03 - Mobile Accessibility Performance and Security
- Outcome: Recognize common security risks and write QA-level security test cases.
- Project: Mini project: Create security test cases for authentication, authorization and input validation.
- Lesson count: 25

#### Security Testing Overview

- Security Testing
- Authentication Testing
- Authorization Testing
- Secrets Management
- Vulnerability Scanning
- OWASP Top 10
- Attack Vectors
- Security Test Case
- Security Risk Note

#### Authentication and Authorization

- Login Security
- Password Policy
- Session Expiration
- Role-based Access
- Broken Access Control
- IDOR
- Unauthorized Profile Access
- Token Handling

#### OWASP for QA

- Broken Access Control
- Injection
- Cryptographic Failures
- Insecure Design
- Security Misconfiguration
- Vulnerable Components
- Authentication Failures
- Input Validation

### Module 13 - Email Testing

- Phase: 03 - Mobile Accessibility Performance and Security
- Outcome: Test transactional email flows, templates, links, tokens and deliverability basics.
- Project: Mini project: Test verify-email and forgot-password flows with a disposable inbox.
- Lesson count: 15

#### Email Testing Tools

- Email Testing
- Mailinator
- Gmail Tester
- Disposable Inbox
- Email Sandbox
- SMTP Test Tool

#### Email Checklist

- Email Sent
- Subject Correct
- Verify Link Works
- Token Expiration
- Spam Folder
- Mobile Email Template
- Desktop Email Template
- Unsubscribe Link
- Email Localization

### Module 14 - Reporting and Test Management

- Phase: 04 - Reporting Monitoring Git and CI CD
- Outcome: Manage test cases, test runs, reports, risk summaries and release recommendations.
- Project: Mini project: Produce a test summary report with pass/fail/blocked, risk and release recommendation.
- Lesson count: 18

#### Test Management Tools

- qTest
- TestRail
- TestLink
- Zephyr
- Test Case Management
- Test Run Management
- Requirement Traceability
- User Story Link
- Test Coverage Dashboard

#### Reporting

- TestRail Reporting
- Allure Report
- jUnit Report
- Pass Fail Blocked
- Defect Summary
- Risk Summary
- Coverage Summary
- Release Recommendation
- Test Summary Report

### Module 15 - Monitoring and Logs

- Phase: 04 - Reporting Monitoring Git and CI CD
- Outcome: Use monitoring and logs to validate production behavior and investigate defects after release.
- Project: Mini project: Write a production defect investigation note using logs, metrics and error tracking signals.
- Lesson count: 19

#### Monitoring Tools

- Grafana
- New Relic
- RunScope
- Sentry
- Kibana
- Datadog
- PagerDuty
- APM
- Log Search
- Trace
- Alert

#### QA Monitoring Use Cases

- Production Error Tracking
- Crash Checking
- Backend Log Reading
- Latency Monitoring
- Post-release Bug Detection
- Release Health Check
- Error Rate Spike
- Dashboard Review

### Module 16 - Version Control and Repo Hosting

- Phase: 04 - Reporting Monitoring Git and CI CD
- Outcome: Use Git and repo hosting workflows for QA automation and test collaboration.
- Project: Mini project: Create a QA automation branch, commit tests and open a pull request.
- Lesson count: 21

#### Git Basics

- Git
- git clone
- git status
- git add
- git commit
- git pull
- git push
- git checkout branch
- git merge
- git rebase Overview
- Resolve Conflict

#### Repo Hosting

- GitHub
- GitLab
- Bitbucket
- Clone Test Automation Repo
- Create Branch
- Pull Request
- Review Test Changes
- Read Issue
- Link Bug to Commit
- Link Bug to PR

### Module 17 - CI CD and Headless Testing

- Phase: 04 - Reporting Monitoring Git and CI CD
- Outcome: Run tests automatically in CI/CD and understand headless browser execution.
- Project: Mini project: Add a GitHub Actions workflow that runs Playwright tests headlessly.
- Lesson count: 33

#### CI CD Overview

- CI CD
- Jenkins
- GitLab CI
- CircleCI
- Drone
- Travis CI
- Bamboo
- TeamCity
- Azure DevOps Services
- Build Pipeline
- Test Pipeline
- Deploy Pipeline
- CI Test Report
- Pipeline Failure Investigation

#### GitHub Actions for QA

- GitHub Actions
- checkout action
- setup-node action
- npm ci
- playwright install
- npx playwright test
- Upload Test Report Artifact
- Fail Build on Test Failure
- Run Tests on Pull Request

#### Headless Testing

- Headless Testing
- Puppeteer
- Zombie.js
- Playwright Headless
- Cypress Headless
- Headless Chrome
- Headless Firefox
- HTMLUnit
- Headed Debug Mode
- CI Browser Dependencies

### Module 18 - Portfolio Project and 12 Week Plan

- Phase: 05 - Portfolio and Career Readiness
- Outcome: Complete a QA portfolio with manual testing, API testing, automation, reporting and CI/CD.
- Project: Capstone: QA portfolio for a demo ecommerce app with test plan, cases, bug reports, API tests, E2E tests and CI.
- Lesson count: 54

#### 12 Week Learning Plan

- Week 1-2 QA Fundamentals
- Week 3-4 Manual Testing
- Week 5 Web Fundamentals
- Week 6-7 API Testing
- Week 8-9 Frontend Automation
- Week 10 Non-Functional Testing
- Week 11 Git and CI CD
- Week 12 Portfolio Project

#### Portfolio Workflow

- Choose Web Demo App
- Write Test Plan
- Write 30-50 Test Cases
- Execute Manual Tests
- Write Bug Reports
- Write API Tests with Postman Newman
- Write E2E Tests with Playwright Cypress
- Create Allure or HTML Report
- Run Tests with GitHub Actions
- Write Portfolio README

#### Project 1 Manual QA Ecommerce

- Register Test
- Login Test
- Search Product Test
- Add to Cart Test
- Checkout Test
- Order History Test
- Manual QA Deliverables

#### Project 2 API Testing

- GET Products Test
- POST Login Test
- GET Users Me Test
- POST Cart Test
- POST Orders Test
- Postman Collection Deliverable
- Environment Variables Deliverable
- Newman HTML Report Deliverable

#### Project 3 Automation Testing

- E2E Test Suite
- Page Object Model
- GitHub Actions Workflow
- Automation Test Report
- Login Success Automation
- Login Fail Automation
- Search Product Automation
- Add to Cart Automation
- Checkout Automation
- Logout Automation

#### Tool Learning Priority

- Manual Testing First
- Chrome DevTools
- Postman
- Git and GitHub
- Playwright or Cypress
- Newman
- GitHub Actions or GitLab CI
- Lighthouse
- K6 or JMeter
- Allure or TestRail
- Sentry Kibana Grafana Basics
