# 006 - Debugging and Tracing Our LangChain Chain

## Section

The GIST of LangChain - Get started with your Hello World chain

## Duration

1 minute

## Main Idea

This lesson covers **Debugging and Tracing Our LangChain Chain** as part of the **The GIST of LangChain - Get started with your Hello World chain** section. The instructor walks through the concepts and implementation details step by step, building on prior knowledge of LangChain LCEL, PromptTemplate. By the end of the lesson, learners will have a working understanding of how debugging and tracing our langchain chain fits into the broader agentic AI engineering workflow.

## Key Topics Mentioned

* LangChain LCEL
* PromptTemplate
* ChatOpenAI
* Chains
* LangSmith tracing
* Ollama local models

## Review Questions

1. What is the main purpose of Debugging and Tracing Our LangChain Chain in the context of The GIST of LangChain - Get started with your Hello World chain?
2. How does debugging integrate with the rest of the LangChain ecosystem?
3. What are the key steps demonstrated in this lesson?
4. When would you choose this approach over an alternative?
5. What does the instructor emphasize about production readiness in this lesson?

## Summary

This lesson provides a practical introduction to Debugging and Tracing Our LangChain Chain within the The GIST of LangChain - Get started with your Hello World chain module. Learners see the concept demonstrated end-to-end and understand how it connects to the larger goal of building production-ready agentic AI systems with LangChain and LangGraph.
All right.

So now let's go and let's debug it.

And let's examine some objects here so we can get a better understanding.

So I'm going to put a breakpoint and run it in debug mode.

And let me fast forward everything until we hit this breakpoint here.

Let's go and check out the response.

And the response is of type a message.

And a message is a simple wrapper class on what the LM is going to return us, and it's going to be

located in the field of content.

So in content here you can see that we have here the answer that the LM generated.

Now I message is containing a lot more information like tool calling like how much tokens did we consume.

Like how much did it cost.

And all of those things.

However, we're not going to review all of these features right now.

If you want, you can check out the messages video I made where I elaborately go and discuss all the

message types in link chain.

All right, so let's go and just poke around the I message object.

So what we can also find here is that here we can see that the type here is I.

And we can also go and check out the response metadata which we're going to have some information about.

Which model did we use.

What was the finish reason for the LM and will be elaborating a lot about this when we're talking about

agents, and we can get the number of tokens we consumed, and a lot of metadata that is useful for

debugging and for monitoring and analyzing.