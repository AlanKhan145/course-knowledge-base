# Riverpod Versions

## Overview
This lecture clarifies the differences between Riverpod versions and the various flavors of the package available on pub.dev. It explains why the course uses `flutter_riverpod` specifically and highlights breaking changes between major versions that students may encounter. Knowing which version to use prevents common setup frustrations.

## Key Points
- There are three Riverpod packages: `riverpod` (Dart only), `flutter_riverpod` (Flutter), and `hooks_riverpod` (with Flutter Hooks)
- The course uses `flutter_riverpod` — the standard Flutter integration
- Riverpod v2 introduced significant API changes over v1, including the new code-generation approach
- The `StateNotifier`-based API is the v1/v2 stable approach taught in this course
- Always pin a specific version in `pubspec.yaml` to avoid unexpected breaking changes

## Tips
- Check the pub.dev changelog before upgrading Riverpod between major versions
- If you see `WidgetRef` vs `ScopedReader` differences, you are likely comparing v1 and v2 code
- The `ref.watch` and `ref.read` APIs are consistent across v1 and v2 for the patterns used in this course

## Notes
Riverpod's author (Remi Rousseau) also created the original Provider package and built Riverpod to fix Provider's limitations, particularly around compile-time safety and testability. The `hooks_riverpod` variant is useful only if you are already using the `flutter_hooks` package. For this course, sticking with `flutter_riverpod` keeps dependencies minimal and the concepts clear.

## Summary
Use `flutter_riverpod` for Flutter projects and always verify the package version matches the course examples to avoid API mismatch issues.
