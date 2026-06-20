# The Starting Project and a Problem

## Overview

This lecture introduces the starting project for the debugging section of the course. The project is based on the finished app from the previous section, but it now contains one or two intentional bugs.

These issues are added on purpose so that you can practice debugging in a realistic Flutter project. Instead of learning debugging concepts only in theory, you will investigate actual problems inside an app that already looks familiar.

## Project Context

For this course section, the finished project from the previous module is used as the starting point. However, the project has been slightly modified and now includes some problems.

The updated project is attached to this lecture and should be used as the starting project for this debugging module.

At first glance, the app is almost the same as before. It still runs like the previous quiz app, but once you interact with it, some errors appear.

## What Happens When Running the App

If you have an emulator or virtual device running, you can start the app normally, without using any special debugging tools yet.

When the app first launches, everything seems to work as expected. You can go through the quiz and interact with the questions.

However, when you eventually reach the result screen, an error appears.

After that, if you restart the quiz and go through it again, another error appears when reaching the result screen a second time. This time, the issue affects the overall screen layout or app behavior more noticeably.

This shows that the app clearly has some bugs that need to be investigated and fixed.

## Key Points

* The starting project is based on the completed project from the previous section
* One or two intentional bugs have been added to the app
* The app initially appears to work correctly
* The first error appears when reaching the result screen
* A second error appears after restarting the quiz and reaching the result screen again
* These bugs provide a practical scenario for learning Flutter debugging
* Before fixing anything, it is important to observe how and when the problem occurs

## Debugging Mindset

Before trying to fix the app, you should first understand the problem clearly.

A good debugging process starts by asking questions such as:

* What did I expect the app to do?
* What actually happened?
* When exactly does the error appear?
* Can I reproduce the error consistently?
* Does the error happen immediately or only after a specific action?
* Does the problem happen only once, or every time the same steps are repeated?

By answering these questions, you can avoid random guessing and start debugging in a more structured way.

## Steps to Reproduce the Problem

A possible reproduction flow is:

1. Start the Flutter app on an emulator or virtual device
2. Go through the quiz normally
3. Reach the result screen
4. Observe the first error
5. Restart the quiz
6. Go through the quiz again
7. Reach the result screen a second time
8. Observe the second error affecting the screen

Being able to reproduce the issue is important because it helps you confirm whether a fix actually works later.

## Notes

This lecture does not immediately fix the bugs. Instead, it sets up the debugging scenario for the rest of the module.

Starting with a broken app is useful because it mirrors real-world development. In real projects, you often work with apps that already contain existing code, hidden issues, or unexpected behavior.

The goal is to learn how to investigate the problem step by step instead of guessing randomly.

## Summary

This lecture introduces the debugging module's starting project: a familiar Flutter quiz app with intentional bugs added. The app appears to work at first, but errors occur when reaching the result screen and again after restarting the quiz. These issues will be used as practical examples for learning how to debug and fix Flutter apps.
