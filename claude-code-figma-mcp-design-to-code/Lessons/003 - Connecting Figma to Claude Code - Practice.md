# 003 - Connecting Figma to Claude Code

## Section

Claude Code + Figma MCP Server for Design to Code

## Duration

0:34

## Main Idea

Explains how to enable and connect to Figma's Dev Mode MCP server. As of the recording, the MCP
server can only be enabled from the Figma desktop app: open Figma, click the top-left menu, go to
Preferences/Options, and enable the "Dev Mode MCP Server." This spins up a local server on port
3845. Back in the terminal, a single command connects Claude Code to that local server. To confirm
the connection worked, run `claude mcp list` — the Figma Dev Mode MCP server should appear in the
output. By the end of the lesson, learners should have a verified, authenticated link between
Claude Code and their local Figma MCP server, which is the dependency every later step (converting
designs, limitations, etc.) builds on.

## Key Topics Mentioned

* Enabling Dev Mode MCP Server from the Figma desktop app (Menu → Preferences/Options)
* Local MCP server runs on port 3845
* Connecting Claude Code to the local server via a terminal command
* Verifying the connection with `claude mcp list`

## Review Questions

1. What is the main purpose of Connecting Figma to Claude Code in the context of Claude Code + Figma MCP Server for Design to Code?
2. How would you apply this to a real Figma-to-code workflow?
3. What are the key steps or ideas demonstrated in this lesson?
4. What risk or limitation should you keep in mind when using this in your own work?

## Summary

Walks through enabling Figma's Dev Mode MCP Server in the Figma desktop app (which starts a local
server on port 3845), connecting Claude Code to it from the terminal, and verifying the connection
with `claude mcp list`. This lesson is the critical link step — no design conversion works until
this authenticated MCP connection is confirmed.

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
