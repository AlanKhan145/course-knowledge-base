# 014 - Testing the AI Business Idea Generator

## Section

From Figma to Cursor & Claude Code with MCP — Building Sidebling.com

## Duration

2:03

## Main Idea

Setting up the OpenAI API key is quick: rename the example env file to `.env` and paste in the key
— about a minute of work, and crucially never hard-coded into source. The first live test reveals
an unrequested side effect (the page unexpectedly greys out), which the instructor flags to remove
later. Re-testing with the hobby "reading romance novels" and clicking the "Show me the money"
button works end to end: OpenAI returns 8-12 business ideas tied to the input, such as a romance
book subscription-box curator, reviewer, workshop organizer, personalized fiction writer, book
club host, podcast host, editor, and cover designer. The UI rendering the results is rough and
unstyled, but the underlying logic is confirmed correct.

## Key Topics Mentioned

* Renaming `.env.example` to `.env` and pasting in the OpenAI API key
* Never hard-coding API keys directly into source
* Unrequested UI side effect (page greying out) noticed and flagged for later removal
* Test input: "reading romance novels"
* CTA button: "Show me the money"
* Expected output: 8-12 tailored business ideas
* Example ideas returned: subscription box curator, reviewer, workshop organizer, personalized
  writer, book club host, podcast host, editor, cover designer

## Review Questions

1. What is the main purpose of testing with a real, specific hobby instead of generic dummy text?
2. How would you apply the "flag it now, fix it later" approach to unrequested UI side effects?
3. What are the concrete steps to get from a pasted API key to a working end-to-end test?
4. What risk is there in shipping test results before verifying the underlying logic is correct?

## Summary

Walks through wiring up the OpenAI API key via environment variables and running the first live
end-to-end test of the hobby-to-business-idea flow, confirming the logic works correctly (8-12
relevant ideas returned) even though the results UI itself is still unstyled. This lesson is one
building block toward the section's goal of validating that the AI integration actually functions
before investing in its visual design.

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
