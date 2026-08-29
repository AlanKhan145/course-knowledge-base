# 042 - Creating Feedback Loops by Granting Browser Access

## Section

Key Features & Efficient Usage

## Main Idea

This lecture explains how to give Claude Code access to a browser, enabling it to open the running application, take screenshots, evaluate the visual result, and make further adjustments. Browser access creates a powerful feedback loop for UI development.

## Learning Objectives

By the end of this lecture, students should understand:

* Why browser access improves UI development workflows.
* How to give Claude Code browser access via MCP.
* How the browser feedback loop works.
* What Claude can do with browser access.
* What the limitations are.

## Key Concepts

### Why Browser Access Matters for UI Work

Without browser access, Claude makes UI changes based on code alone. It cannot see whether the changes actually look correct in the browser. Every visual check requires you to manually:

1. Switch to the browser.
2. Refresh the page.
3. Evaluate the result.
4. Describe what you see back to Claude.

With browser access, Claude can do this automatically.

### How to Grant Browser Access

Browser access is provided through an MCP server that controls a headless or visible browser (Puppeteer or Playwright):

```json
{
  "mcpServers": {
    "puppeteer": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-puppeteer"]
    }
  }
}
```

Once connected, Claude can:

* Navigate to URLs.
* Take screenshots.
* Interact with elements (click, type).
* Wait for page loads.
* Read page content.

### The Browser Feedback Loop

```
Claude edits UI code
       ↓
Claude opens browser
       ↓
Claude navigates to the app
       ↓
Claude takes a screenshot
       ↓
Claude evaluates the result
       ↓
Claude identifies remaining issues
       ↓
Claude makes further code edits
       ↓
Repeat until satisfied
```

### Example Workflow

```text
I want to fix the mobile layout of the user profile page.
The requirements are:
- Profile picture should be centered on mobile.
- Name and bio should stack below the picture.
- Action buttons should be full-width.

Start the development server if it is not running.
Open the profile page in the browser.
Take a screenshot.
Compare it against the requirements.
Make the necessary changes.
Take another screenshot to verify.
Continue until all requirements are met.
```

### What Claude Can Do With Browser Access

* **Visual verification:** Confirm that code changes produced the expected visual output.
* **Regression checking:** After changes, check that other parts of the UI are not broken.
* **Form testing:** Fill out forms and verify submissions work.
* **Navigation testing:** Click through user flows and check each step.
* **Error state capture:** Trigger error states and capture how they appear.

### Limitations

* Claude interprets screenshots visually. Pixel-perfect precision is not guaranteed.
* Dynamic content (loading states, animations) requires waiting strategies.
* Browser MCP must be properly configured and running.
* Each screenshot cycle takes time — loops with many iterations can be slow.

## Important Notes

* Always have the development server running before starting a browser feedback session.
* Puppeteer and Playwright MCP servers may have slightly different capabilities. Check documentation.
* Browser access can trigger real side effects (form submissions, API calls). Be aware of what the tests are doing.
* For complex visual testing, consider dedicated visual regression testing tools alongside Claude's browser access.

## Why This Lecture Matters

Browser access closes the feedback loop for UI development. Instead of manually checking every change in the browser, Claude can verify its own work. This dramatically speeds up UI iteration and allows Claude to autonomously refine the UI until it meets the requirements.

## Summary

Browser access via MCP (Puppeteer/Playwright) allows Claude to open the running application, take screenshots, evaluate visual results, and make further code adjustments. This creates a closed feedback loop for UI development where Claude can verify its own changes without requiring manual intervention. The loop continues until visual requirements are met. Configure browser MCP in Claude Code settings to enable this workflow.
