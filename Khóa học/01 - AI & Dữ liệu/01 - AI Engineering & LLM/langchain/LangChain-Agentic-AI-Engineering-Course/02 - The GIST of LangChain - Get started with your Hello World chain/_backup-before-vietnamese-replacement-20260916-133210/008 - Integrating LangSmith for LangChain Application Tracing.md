# 008 - Integrating LangSmith for LangChain Application Tracing

## Section

The GIST of LangChain - Get started with your Hello World chain

## Duration

7 minutes

## Main Idea

This lesson covers **Integrating LangSmith for LangChain Application Tracing** as part of the **The GIST of LangChain - Get started with your Hello World chain** section. The instructor walks through the concepts and implementation details step by step, building on prior knowledge of LangChain LCEL, PromptTemplate. By the end of the lesson, learners will have a working understanding of how integrating langsmith for langchain application tracing fits into the broader agentic AI engineering workflow.

## Key Topics Mentioned

* LangChain LCEL
* PromptTemplate
* ChatOpenAI
* Chains
* LangSmith tracing
* Ollama local models

## Review Questions

1. What is the main purpose of Integrating LangSmith for LangChain Application Tracing in the context of The GIST of LangChain - Get started with your Hello World chain?
2. How does integrating integrate with the rest of the LangChain ecosystem?
3. What are the key steps demonstrated in this lesson?
4. When would you choose this approach over an alternative?
5. What does the instructor emphasize about production readiness in this lesson?

## Summary

This lesson provides a practical introduction to Integrating LangSmith for LangChain Application Tracing within the The GIST of LangChain - Get started with your Hello World chain module. Learners see the concept demonstrated end-to-end and understand how it connects to the larger goal of building production-ready agentic AI systems with LangChain and LangGraph.
Hi there Eden here.

And in this video we're going to be integrating lengths tracing into our application.

So we're going to configure lengths.

And we're going to review all of the traces of the chains we invoked.

So let's go to the code.

Alrighty.

So let me go now to my browser and let me search for Link Smith.

And let me go now and click this link here and let me sign up.

So I already have an account here.

So I don't need to sign up.

And you can simply sign up yourself.

It's very, very easy.

You might need to put some credit cards.

However, you do get a very nice free tier, which is going to be more than enough for this course.

So here in this dashboard we can see we have a button set up tracing.

And let me go and click that.

And the steps to do it are pretty straightforward.

We first need to install link chain which we already have.

We need to generate an API key.

And this is the first step.

We'll click this button later and we'll get API key.

And then we need to set some environment variables.

We need to set up the links with tracing to be true.

And we have the link Smith underscore endpoint environment variable which the default points to the

US endpoint.

So if you're in the US like I am in this video then you do not need to set this environment variable.

However, if you are outside the US then you need to set up this environment variable to point to the

EU region.

So it's going to be the same URL, but you're going to have this EU prefix in the beginning.

Now if you're outside the US, it's very important for you to set up this environment variable.

Because if you won't do it, you'll be getting an authentication error when trying to run the code.

When link is going to try and trace your application, we need to supply the link Smith API key and

we need to give it the Link Smith project.

So the Link Smith project is a string that we're going to create.

And that string is going to be the project, which is going to be holding all of our traces within the

length of its platform, and we'll simply call that Hello World.

And after we do that, all we need to do is to use the regular Lang chain objects and we will get out

of the box tracing.

So let's go and let's do all of those steps.

So let me go now and click to generate an API key.

Let me copy it.

And now let me go back now to my env file with all of my environment variables.

And here I'm going to fill up those values.

And my links with tracing environment variables is going to be true.

And notice I didn't write here any quotation marks.

So it should work without them.

I put my links with API key and don't worry, it's going to be revoked very, very soon after I finish

this video.

And now we have Link Smith's project, which is going to be Hello World.

And that's it.

This is the entire Link Smith integration.

So now when we're going to go and run our chains we're going to automatically out of the box.

Trace them.

So let's go now to the main.py file.

And now let me run it again.

So it's running in debug.

So let me continue the run.

And after it finished running let's go now to length Smith.

Let's refresh the page.

And we can see now our new project hello world.

And here we have a runnable sequence run.

And here we can see our execution of what we ran.

We can see this is a runnable sequence.

We can see here our call to chat Olama to Jama three.

Here we can see this is the input as a human message.

And the output we got is as an AI message.

And on the right side we can see the start time.

End time.

How much did it take to get the first token which is very important for some application.

The status, whether this request was a success or not, and the total amount of tokens that were used

in this chain.

And if we want, we can totally customize this and add here tags so we'll be able to filter it later.

Alrighty.

So now I want to focus on this thing over here.

And here we can see the link chain objects.

Now this runnable sequence over here is comprised of first using the prompt template.

So to format the string and then to take the output of the prompt value and to plug it in to chat and

send it.

So this is what we see right here.

All right.

So let's go back to the code and let's go and use GPT five here.

So let me comment out this line here and let me uncomment the line from before.

All right.

Let me go and run this again.

This time let me simply run the Python file.

Now this is going to take longer because we're using GPT five.

So let me go now and fast forward it.

We can see we got a result.

So let's go now to let me refresh it.

And now we can see our second run.

This time it took 16 seconds here.

And you can see on the left side that we use GPT five here.

All right let me go.

Now back to the previous view of all of the traces.

And in this view we can see all of the traces.

And we can filter for only calls for all the runs.

We can filter here by tag.

We get here some stats like error rates like the median tokens like the P90 and P50.

And I genuinely think that Smith is one of the best, if not the best trading platform from LM based

applications, and we are really going to see the value of it in future videos where we're going to

be implementing agents, where it's going to be super convenient and super natural to check out our

agent execution.

Alrighty, so the traces I showed you in the video, I'm also going to link them in the videos resources.

And yes, you can share traces.

You can make them public and get a shareable link.

So that's what I'm going to do.

And let's go now to the code and let's go and commit everything.

And I will show you where you can find everything we did now in this section.

All right.

So let me go.

And right in the terminal git status to see all the files that we changed.

And let me add main.py file.

Let me go and create a new commit.

And let me call it hello World Chain.

And I'm going to push it to the repo.

Now let me go to the repository.

And here let's take a look at the branched projects that shallow worked.

Let's go to the commits.

And here we have the commit of everything we just wrote.

We'll also be sharing a direct link to this in the videos.

Resources.