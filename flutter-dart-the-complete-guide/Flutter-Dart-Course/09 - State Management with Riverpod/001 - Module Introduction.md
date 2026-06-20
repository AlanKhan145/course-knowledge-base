# Module Introduction

## Overview
This module introduces state management in Flutter using the Riverpod package. It outlines the problems that arise with basic setState-based state management and explains why a dedicated solution like Riverpod is needed. The module covers everything from installing Riverpod to building complex providers with StateNotifier.

## Key Points
- State management becomes complex as apps grow beyond simple widget trees
- Riverpod is a popular, compile-safe alternative to the Provider package
- This module covers creating providers, consuming them, and combining multiple providers
- By the end of the module, you will manage favorites and filter state using Riverpod

## Tips
- Keep a mental model of the widget tree as you learn Riverpod — it helps clarify why lifting state up has limits
- Review the course project structure before diving in so you understand what state needs to be managed
- Riverpod's documentation at riverpod.dev is an excellent companion resource

## Notes
This module builds on the existing meals/recipes app from previous sections and refactors its state management away from manual prop-drilling and setState calls. Understanding the problem first (lecture 002) is crucial before appreciating the Riverpod solution. The module progresses from simple providers to more advanced StateNotifier patterns.

## Summary
This module teaches you how to manage shared application state cleanly and scalably using the Riverpod package in Flutter.
