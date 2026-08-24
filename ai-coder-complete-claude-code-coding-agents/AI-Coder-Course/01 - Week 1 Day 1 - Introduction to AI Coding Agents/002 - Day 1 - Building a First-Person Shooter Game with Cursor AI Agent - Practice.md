# 002 - Day 1 - Building a First-Person Shooter Game with Cursor AI Agent

## Lesson Information

| Item           | Details                                         |
| -------------- | ----------------------------------------------- |
| Lesson         | 002                                             |
| Duration       | 7 minutes                                       |
| Week           | Week 1 - Vibe Coding Foundation                 |
| Module         | Week 1 Day 1 - Introduction to AI Coding Agents |
| Main Tool      | Cursor AI                                       |
| Project        | Simple First-Person Shooter Game                |
| Learning Focus | Iterating with an AI coding agent               |

---

## Lesson Overview

This lesson continues the hands-on introduction to Cursor AI by testing the game generated in the previous lesson.

The instructor shows how the Cursor AI Agent creates project files, how to run the generated game, and how to improve the output through follow-up prompts. Instead of treating the AI response as a final result, students learn to review, test, and iterate with the agent.

The main idea is simple:

> AI coding is not just about asking once and waiting. It is about working with the agent, checking the result, and guiding it step by step.

---

## What the Agent Created

After receiving the original prompt, Cursor finished generating the project.

In the instructor’s version, the agent created three files inside the `Instant` project directory.

The files included:

* An HTML file
* A JavaScript file
* A stylesheet file

The instructor explains that the result may be different for each student. Sometimes the agent may create only one file, such as `index.html`. Other times, it may split the project into multiple files.

This variation is normal when working with AI coding agents.

---

## Running the Generated Game

To test the project, the instructor opens the `Instant` folder in the computer’s file system and double-clicks:

```text
index.html
```

This launches the generated website in the browser.

The game includes basic instructions:

```text
Arrow keys to move and turn
Space to shoot
```

The game is a neon arena first-person shooter. The player can start a match, move around, shoot, fight an enemy, and either win or lose.

---

## First Result

The first generated version already works as a playable game.

The instructor demonstrates that the AI agent created a functioning first-person shooter game from a simple natural language prompt, without the instructor manually writing code.

This is the key moment of the lesson:

> A simple prompt became a working browser-based game.

Even though the game is simple, it proves the core value of AI coding agents: they can quickly generate working software prototypes.

---

## Important Note: Your Result May Be Different

The instructor emphasizes that each run may produce different results.

Possible differences include:

* The agent may create a different number of files
* The visual design may look different
* The controls may behave differently
* Some features may work better or worse
* The game may have bugs
* The agent may ask for permission before editing files

This unpredictability is part of working with generative AI tools.

Students should not panic if their result does not match the instructor’s result exactly. Instead, they should learn to inspect the output and prompt the agent again.

---

## Fixing Problems with the Agent

If something does not work, students should tell the agent what went wrong.

For example, if shooting does not work, a student could write:

```text
The space bar does not shoot. Please fix the shooting controls.
```

If the arrow keys do not work, a student could write:

```text
The arrow keys are not moving the player. Please debug and fix the keyboard controls.
```

The important habit is to treat the agent like a coding partner. Describe the problem clearly and ask it to fix the project.

---

## First Iteration: Improving the Enemy

After testing the first version, the instructor decides to improve the enemy design.

The original opponent looks too simple, more like a basic sphere than a real enemy.

The instructor sends this follow-up prompt:

```text
That's great. Please add some detail to the opponent so that it looks more like an enemy.
```

The agent then edits the existing files and updates the game.

After reopening `index.html`, the enemy appears with more visual detail.

This demonstrates the first major workflow of agentic coding:

> Generate → Test → Give feedback → Improve

---

## Second Iteration: Adding HUD and Difficulty

Next, the instructor asks the agent to add a heads-up display and make the game harder.

The prompt is:

```text
Please add a heads up display HUD and also make the difficulty harder.
```

The agent updates the game again.

After testing the new version, the game feels more difficult, and the HUD appears in the interface.

A HUD may include information such as:

* Player health
* Score
* Enemy status
* Ammo or shooting feedback
* Game state

The exact HUD may vary depending on what the agent generates.

---

## What This Demonstrates

This lesson shows that AI coding agents can support an iterative development workflow.

The user does not need to know every line of code before starting. Instead, the user can begin with a broad goal and gradually shape the result through feedback.

The basic process is:

```text
1. Give the agent a project request
2. Let it generate files
3. Run the project
4. Observe what works and what does not
5. Ask the agent to improve or fix specific parts
6. Test again
7. Repeat
```

This is one of the most important habits in AI-assisted software development.

---

## Key Concept: Iterative Prompting

Iterative prompting means giving the AI agent follow-up instructions after reviewing its output.

Instead of expecting the first answer to be perfect, the developer improves the project through multiple rounds of feedback.

Example workflow:

```text
Initial prompt:
Build a simple FPS game.

Follow-up prompt:
Make the enemy look more detailed.

Follow-up prompt:
Add a HUD.

Follow-up prompt:
Make the difficulty harder.

Follow-up prompt:
Fix the shooting controls.
```

Each prompt adds more direction and helps the agent move closer to the desired result.

---

## Key Concept: Reviewing AI Output

Students should not blindly trust AI-generated code.

They should review the output by:

* Checking which files were created
* Opening the generated files
* Running the project
* Testing the controls
* Looking for bugs
* Asking the agent to explain or fix problems
* Re-running the project after changes

The instructor does not simply accept the AI output. He tests the game, notices areas for improvement, and gives the agent more instructions.

This is the correct mindset for working with AI coding agents.

---

## Key Concept: AI as a Pair Programmer

In this lesson, the AI agent acts like a pair programmer.

The human provides direction, taste, judgment, and feedback. The AI handles much of the code generation and editing.

The collaboration looks like this:

| Human Role           | AI Agent Role                       |
| -------------------- | ----------------------------------- |
| Defines the goal     | Generates code                      |
| Tests the result     | Edits files                         |
| Gives feedback       | Applies changes                     |
| Reviews quality      | Suggests or implements improvements |
| Decides what matters | Handles repetitive coding work      |

The user remains responsible for guiding the project.

---

## What to Do If the Project Fails

The instructor gives practical advice for students whose generated game does not work.

Students can:

1. Tell the agent what went wrong
2. Ask the agent to debug the issue
3. Try a different prompt
4. Try a different model option
5. Delete the `Instant` directory and start again
6. Recreate the project folder
7. Give the original prompt another attempt

Because this is only an experimental first project, failure is acceptable. The goal is to get a first feel for working with the agent.

---

## Example Debugging Prompts

If the game does not open:

```text
The game does not load when I open index.html. Please inspect the files and fix the issue.
```

If the controls do not work:

```text
The keyboard controls are not working. Please fix the arrow key movement and space bar shooting.
```

If the enemy does not appear:

```text
The enemy is missing from the arena. Please fix the enemy spawning logic.
```

If the game is too easy:

```text
Please make the enemy more aggressive and increase the difficulty.
```

If the design looks too plain:

```text
Please improve the visual design with a more futuristic arena, better lighting, and a clearer enemy model.
```

---

## Advanced Teaser: Ralph Loops and Claude Code

At the end of the lesson, the instructor shows a more advanced version of the same project.

This advanced version was created using a technique called:

```text
Ralph Loops
```

The instructor also mentions using:

```text
Claude Code
```

The important point is that this advanced version was generated with one prompt and no feedback.

This is sometimes called:

```text
Zero-shot
```

In a zero-shot workflow, the user gives the AI one instruction and lets it produce the result without further iteration.

The advanced example includes more polished features, such as:

* A better entry screen
* A more detailed weapon
* Enemy energy display
* Player health
* Kill counter
* Mini-map
* Health pickup

The instructor uses this as a teaser for what students will learn later in the course.

---

## Difference Between Beginner and Advanced Workflow

| Beginner Demo               | Advanced Teaser                         |
| --------------------------- | --------------------------------------- |
| Uses Cursor AI Agent        | Uses Claude Code                        |
| Iterative prompting         | Zero-shot generation                    |
| Simple game                 | More polished game                      |
| Manual testing and feedback | More automated workflow                 |
| First hands-on experience   | Preview of advanced agentic engineering |

The lesson starts with a simple workflow so students can understand the basic interaction pattern before moving into more advanced techniques.

---

## Why This Lesson Matters

This lesson is important because it teaches the core rhythm of working with an AI coding agent.

Students learn that AI coding is not passive. The developer must still:

* Test the result
* Notice problems
* Give clear feedback
* Ask for improvements
* Try again when needed
* Compare different outputs
* Build judgment over time

This workflow will become more important later when the course moves from fun experiments to business-focused projects.

---

## Practice Task

Students should repeat the demo by doing the following:

1. Open the `Instant` project in Cursor
2. Check which files the agent created
3. Open `index.html` in the browser
4. Test the game controls
5. Try to win or lose a match
6. Ask the agent to improve the enemy design
7. Ask the agent to add a HUD
8. Ask the agent to make the game harder
9. Reopen the game and test each change
10. If something fails, ask the agent to debug it

---

## Suggested Follow-Up Prompts

Students can experiment with prompts like these:

```text
Add a score counter and display it on the screen.
```

```text
Make the arena larger and add obstacles.
```

```text
Add sound effects for shooting and taking damage.
```

```text
Make the enemy move faster after 30 seconds.
```

```text
Add a game over screen and a restart button.
```

```text
Improve the visual style so the game feels more like a futuristic cyber arena.
```

---

## Common Mistakes

### Waiting for a Perfect First Output

The first version does not need to be perfect. The purpose is to create a starting point.

### Not Testing the Result

Students should always run the project and test what the agent created.

### Giving Vague Feedback

Instead of saying:

```text
Make it better.
```

Give specific feedback:

```text
Make the enemy more detailed and add a health bar above it.
```

### Giving Up Too Early

If the project fails, ask the agent to fix it or restart the folder. Early experiments are meant to be flexible.

---

## Key Takeaways

* Cursor can generate project files from a simple prompt.
* The generated output may be different each time.
* Students should test the project instead of only reading the code.
* AI coding works best through iteration.
* Follow-up prompts can improve visuals, controls, difficulty, and interface.
* Bugs are normal and can be fixed by prompting the agent clearly.
* The human developer guides the process.
* The AI agent acts as a coding partner.
* More advanced agentic workflows will be introduced later in the course.

---

## Lesson Summary

In this lesson, students test the first-person shooter game created by the Cursor AI Agent. The instructor opens the generated `index.html` file, runs the game in the browser, and demonstrates that the project works as a playable FPS game.

The instructor then improves the game through follow-up prompts, asking the agent to make the enemy look more detailed, add a HUD, and increase the difficulty. This shows the basic workflow of agentic coding: generate, test, review, prompt again, and improve.

The lesson also introduces the idea that AI outputs vary and may sometimes fail. Students are encouraged to experiment, debug with the agent, try different prompts, or restart the project if necessary.

Finally, the instructor previews a more advanced version created with Ralph Loops and Claude Code, showing what students will be able to build later in the course.

This lesson marks the end of the “instant gratification” introduction. From the next lessons onward, the course will begin focusing on more business-oriented and professional AI coding workflows.

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
