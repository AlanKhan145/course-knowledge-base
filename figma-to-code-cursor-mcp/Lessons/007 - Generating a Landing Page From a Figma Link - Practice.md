# 007 - Generating a Landing Page From a Figma Link

## Section

Converting Figma Designs to Code with Cursor + Figma MCP

## Duration

1:53

## Main Idea

Runs the workflow live on a more complex design than the opening demo: a large, image-heavy
landing page found on Figma. The host copies the frame's "link to selection," starts a fresh
Cursor conversation (to avoid mixing context with earlier tests), and pastes the link with a
prompt asking Cursor to convert the design exactly as it looks. Because Cursor uses a thinking
model, it doesn't respond instantly; whenever it needs to call an MCP tool (fetch Figma data,
download images) it pauses and asks for explicit permission to run that tool, which the host
grants each time. The generation for this larger design took roughly 5 minutes of thinking and
tool calls before producing a first-pass result. By the end of the lesson, learners should
understand both the exact prompt pattern used and why permission prompts appear mid-generation.

## Key Topics Mentioned

* Getting the link: Figma frame → right-click → "Copy link to selection"
* Starting a new Cursor conversation per design to avoid cross-contaminating context
* Prompt pattern: ask Cursor to convert the Figma design "exactly as it looks," pasting the
  selection link
* Cursor (in thinking mode) requests explicit permission before each MCP tool call (fetch data,
  download images)
* Full generation for a large, image-heavy landing page took about 5 minutes

## Review Questions

1. What is the main purpose of "Generating a Landing Page From a Figma Link" in the context of
   Converting Figma Designs to Code with Cursor + Figma MCP?
2. Why does the host start a brand-new Cursor conversation instead of continuing the earlier one
   from the first demo?
3. Why does Cursor pause to ask permission before calling `get_figma_data` or the image download
   tool, rather than calling them automatically?
4. What risk or limitation should you keep in mind about generation time when working with large,
   image-heavy Figma files?

## Summary

Demonstrates the live, one-shot prompt-and-generate flow on a genuinely complex Figma design,
including the permission-gated MCP tool calls and the roughly 5-minute wait for a first-pass
result. This lesson is one building block toward the section's goal: showing the exact prompting
and permission mechanics learners need to reproduce before they can evaluate how good the output
actually is.

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
