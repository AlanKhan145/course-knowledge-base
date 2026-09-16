# 007 - Using Local Open-Weights Models with LangChain and Ollama

## Section

The GIST of LangChain - Get started with your Hello World chain

## Duration

6 minutes

## Main Idea

This lesson covers **Using Local Open-Weights Models with LangChain and Ollama** as part of the **The GIST of LangChain - Get started with your Hello World chain** section. The instructor walks through the concepts and implementation details step by step, building on prior knowledge of LangChain LCEL, PromptTemplate. By the end of the lesson, learners will have a working understanding of how using local open-weights models with langchain and ollama fits into the broader agentic AI engineering workflow.

## Key Topics Mentioned

* LangChain LCEL
* PromptTemplate
* ChatOpenAI
* Chains
* LangSmith tracing
* Ollama local models

## Review Questions

1. What is the main purpose of Using Local Open-Weights Models with LangChain and Ollama in the context of The GIST of LangChain - Get started with your Hello World chain?
2. How does using integrate with the rest of the LangChain ecosystem?
3. What are the key steps demonstrated in this lesson?
4. When would you choose this approach over an alternative?
5. What does the instructor emphasize about production readiness in this lesson?

## Summary

This lesson provides a practical introduction to Using Local Open-Weights Models with LangChain and Ollama within the The GIST of LangChain - Get started with your Hello World chain module. Learners see the concept demonstrated end-to-end and understand how it connects to the larger goal of building production-ready agentic AI systems with LangChain and LangGraph.
Hey there Eden here.

And in this video, we're going to switch from using OpenAI GPT five to use an open weights model.

Gemma three by Google.

Running locally on our machine using Olama.

Now this is one of the chain's strength, and this is one of the reasons it became so popular when it

came out, because it gives us the ability to interchangeably change the models, the llms that we're

using.

And I like to say that we can switch llms in length chain, like we can switch our socks.

And the process is very simple.

And it really boils down to one line of code that we need to change with the relevant client that we

need to initialize within LinkedIn.

So the beautiful thing here is that the interface for the entire code stays the same.

All we need to do is change the chat model that we're using.

And in this video I'll be showing you the option of hosting the OpenAI model yourself in your machine.

And there are also cloud based providers like grok, for example, where we can access those kinds of

models from the cloud by generating an API key and creating the relevant client.

So let's go to the code.

But before we go and change our link chain code, we need to make sure that Allama is installed in our

machine and that we downloaded Gma3 into our local system here.

So let me go and show you how to do that.

So in Allama let's go and click download and let's go and download for Mac OS.

Of course you should download for your own operating system.

Now, once it finishes downloading it, I'm going to go and install it as I do any software on Mac.

And if you're on windows, simply go with the installation wizard.

And let me go and drag it to the application folder.

And I'm going to replace this because I already have this installed and it's installed right now.

So let me go and open up Allama.

I'm going to write in terminal Allama and we can see now the CLI here and in the available commands.

The gist of it is that we can pull models by writing Allama pull and then the model full name.

And if we want to go and try it in the terminal and talk to that model.

We can use serve on the model we just put.

So let me go now to Olama to the model section here.

And here for example, we can see the new GPT OS.

And we can see now the size of each variant of this model.

How many parameters does it have.

And this is a very good model, which is going to be more than enough for this course.

And it's going to support also function calling and agentic tasks that we're going to also be doing

in this course.

So I also recommend you doing it.

However, I am not going to download it because look at the size is simply massive and I can't fit it

in my computer.

So we can take a look at Gemma three for example, which offers lighter alternatives.

We have many variants of many sizes we can choose from, and for this demo I'm going to choose the 270

million parameters because this is going to be the lightest and fastest.

So let me copy here the full name and let me go to Olama and right here Olama list, which we can see

all the downloaded models which we don't have anything right now.

And now let's write all llama pull and we want to pull that a model.

So we want to give here the full name.

And now we can see we're downloading it.

So let me just fast forward this download for a bit.

And we can see it's finished downloading it.

Now let's write all llama list.

And we can see now the new model that we downloaded.

And let me now open the llama manual with all llama.

And I want to use the run command.

So all I'm a run and the name of the model.

And now it's going to spin up an instance where we can talk to this model.

So it's going to be a CLI interface.

So it's going to fire it up.

Let's go and wait for a second and let me write here.

Hello for example.

And we can see right back the answer.

Hello how can I help you today.

So this is us using it with Ola.

So now we want to use the Linkchain Ola integration to use this local running open weights model.

Gemma three 270 million parameters and we want to use it with our code.

So we want to create an LM variable here.

And let's go and let me paste here this line.

And it's going to be an object of the class Chet Olama where the temperature is going to be zero and

the model is going to be Gemma, 270 million parameters.

And I remind you, we already have this model in our machine.

Now we need to import the Chet Alabama object.

So let's go now to the top of the file where all of our imports.

And let me go and import from LinkedIn Olama.

We already have it installed and we want to import the Chet Olama package.

That's it.

Let's go and run it.

We can see we got here to this breakpoint and we can see now the response.

Notice how fast it was to run it because it's running locally on our machine.

And this is a super light model.

Now if we'll examine also the response we can see we have the summary of Elon Musk.

But we don't have a different section on separate section on the interesting facts.

So while this model was super fast, we can see it really didn't follow everything we asked it to do.

And this is the trade off when using open weights models, which are lite models in a faster and cheaper.

The quality of the answer that we got is probably going to be lower than the first tier models.

Cool.

So we saw how easy it is to switch a model in link chain.

If you want to use instead of OpenAI or Google Gemini and open weights model for this course, you can

do that and I highly recommend you will be using GPT OSS, because this is a model with deep reasoning.

It supports function calling and it's suited for agentic workloads, which we're going to be implementing

in this course.


