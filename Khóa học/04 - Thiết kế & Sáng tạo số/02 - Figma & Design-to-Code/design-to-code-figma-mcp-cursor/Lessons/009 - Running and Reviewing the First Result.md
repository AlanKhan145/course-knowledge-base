# 009 - Running and Reviewing the First Result

## Section

Module 4: Turning the Figma Design into a ReactJS App

## Duration

1:15

## Main Idea

Takes the freshly generated project from prompt to a running preview. The presenter opens a
terminal inside Cursor, installs dependencies, and starts the dev server, then opens
`localhost:3000` inside Cursor's built-in browser to check the result against the Figma design.
The first pass is judged as "pretty good" overall, but with two visible defects: an icon that
isn't rendering correctly, and an interaction (presumably the Main Card / Bitcoin Wallet toggle)
that isn't working yet — both of which get addressed in the next lesson.

## Key Topics Mentioned

* `npm install` and `npm run dev` (or equivalent) run from Cursor's integrated terminal
* Previewing at `localhost:3000` inside Cursor's built-in browser
* First-pass visual comparison against the Figma source
* Defects found: broken/incorrect icon, non-functional interaction

## Commands Used

```
npm install
npm run dev
```

## Review Questions

1. What two commands does the presenter run to get the generated project on screen?
2. What two specific defects are called out in the first preview?
3. Why is it useful to preview inside Cursor's own browser rather than switching to an external
   one at this stage?

## Summary

Runs `npm install` and `npm run dev` from Cursor's terminal, then previews the result at
`localhost:3000`. The overall build looks close to the Figma source, but with a broken icon and a
non-working interaction flagged as the next things to fix — which Lesson 10 addresses by sending
Cursor an additional component variant from Figma.
