#!/usr/bin/env bash
# Screenshot a set of pages: tools/shots.sh  (dev server on :3210)
B=http://localhost:3210
L=learn/pydantic-structured-output/01-vi-sao-can-pydantic
run() { echo "== $2"; timeout 600 node tools/screenshot.mjs "$B/$1" ".shots/$2.png" ${3:-1440} ${4:-900} ${5:-light}; }
run "" home
run "explore" explore
run "courses/pydantic-structured-output" course
run "templates" templates
run "practice" practice
run "edit/pydantic-structured-output/01-vi-sao-can-pydantic" editor
run "review" review
run "courses/pydantic-structured-output/review" course-review
run "search?q=giam+mo" search
run "$L" lesson-mobile 390 844
run "$L" lesson-dark 1440 900 dark
