# 008 - Troubleshooting Figma MCP Access in Cursor

## Section

From Figma to Cursor & Claude Code with MCP — Building Sidebling.com

## Duration

1:15

## Main Idea

The agent starts planning the task (checking which Figma-related tools it has access to, reviewing
the project structure) but then reports it doesn't actually have access to the Figma MCP server.
The fix is to go back into Cursor's chat/tool settings, toggle the Figma MCP tool off and back on,
and restart the request. On the retry, the agent successfully calls a "get code" tool, confirming
it can now pull tokens, variable styles, and auto-generated screenshots from the Figma file.

## Key Topics Mentioned

* Agent's own pre-planning step: checking available Figma tools before acting
* Failure case: "no access to the Figma MCP server"
* Fix: toggle the MCP tool off/on in Cursor settings, then retry
* Successful "get code" tool call as confirmation of restored access
* What "get code" / "get image" tools actually retrieve (tokens, variable styles, screenshots)

## Review Questions

1. What is the main purpose of toggling the MCP tool off and on again as a fix?
2. How would you diagnose a similar "no access to tool" failure in your own MCP setup?
3. What are the key tools the Figma MCP server exposes once access is restored?
4. What risk is there in not verifying tool access before trusting the agent's generated output?

## Summary

Covers a real troubleshooting moment: the agent reporting no access to the Figma MCP server, and
the practical fix of disabling and re-enabling the MCP tool in Cursor before retrying. This lesson
is one building block toward the section's goal of a reliable Figma-to-code pipeline, showing that
transient MCP connection issues are common and quick to resolve once recognized.

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
