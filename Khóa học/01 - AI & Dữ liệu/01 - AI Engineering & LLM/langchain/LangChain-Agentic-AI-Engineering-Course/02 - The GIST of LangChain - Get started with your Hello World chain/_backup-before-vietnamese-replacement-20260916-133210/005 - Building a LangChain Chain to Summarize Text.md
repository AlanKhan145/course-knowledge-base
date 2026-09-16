# 005 - Building a LangChain Chain to Summarize Text

## Section

The GIST of LangChain - Get started with your Hello World chain

## Duration

11 minutes

## Main Idea

This lesson covers **Building a LangChain Chain to Summarize Text** as part of the **The GIST of LangChain - Get started with your Hello World chain** section. The instructor walks through the concepts and implementation details step by step, building on prior knowledge of LangChain LCEL, PromptTemplate. By the end of the lesson, learners will have a working understanding of how building a langchain chain to summarize text fits into the broader agentic AI engineering workflow.

## Key Topics Mentioned

* LangChain LCEL
* PromptTemplate
* ChatOpenAI
* Chains
* LangSmith tracing
* Ollama local models

## Review Questions

1. What is the main purpose of Building a LangChain Chain to Summarize Text in the context of The GIST of LangChain - Get started with your Hello World chain?
2. How does building integrate with the rest of the LangChain ecosystem?
3. What are the key steps demonstrated in this lesson?
4. When would you choose this approach over an alternative?
5. What does the instructor emphasize about production readiness in this lesson?

## Summary

This lesson provides a practical introduction to Building a LangChain Chain to Summarize Text within the The GIST of LangChain - Get started with your Hello World chain module. Learners see the concept demonstrated end-to-end and understand how it connects to the larger goal of building production-ready agentic AI systems with LangChain and LangGraph.

Let's define a variable called information.

And let me put some placeholders here.

And here we want to put here some text about Elon Musk.

So let me go to Google and let me search Elon Musk.

And let me take the information from Wikipedia.

So let me just copy here.

Let's copy here this text only the first part.

And let me paste it here.

So right here we have some information about Elon Musk.

And this information here we want to eventually propagate to the LM.

We want to do that through a prompt template.

And for that let's write a template first.

So it's going to be this template over here given the information.

And right now we have curly brackets information about a person I want you to create a short summary

into interesting facts about them.

So from this string here you can probably guess that this information placeholder here, it's not going

to stay.

It's going to be substituted by the information variable.

We have defined a couple of lines earlier with the Elon Musk information, but it's going to be filled

in runtime.

And if we want we can do this programmatically.

And we're going to do this with the prompt template object of LinkedIn.

And we initialize an object of prompt templates.

And we initialize it with the template.

So this is the summary template that we wrote before.

And then we give it input variables which is going to be a list containing the keys of what we're going

to be filling and plugging in in runtime.

And this should match the placeholders between the curly brackets that we have in our template here.

Now this is very much reminding us of an F string.

And you might be thinking, why do we need all of this?

And why don't we just use f strings instead?

And this is because the prompt template is going to enforce that.

We supply exactly the variables that we expect, and if we forget an input or misspell it, we get clean

air instead sending us the broken prompt.

It's also going to give us reusability and more clarity, because those prompts can become reusable

in another link chain chain if we want to.

And it's a first class citizen in link chain.

So this means it's going to get logged, it's going to get traced.

And we'll be showing this very very soon.

And overall it's going to make our life debugging much more easier.

And it's going to also be safer against prompt injection because it can enforce strict formatting and

structure.

And this is very powerful, especially when we're going to be using output parsers.

And I know I'm talking a lot of things right now and a lot of buzzwords.

And don't worry, you'll understand everything by the end of this course.

But just to conclude, if strings tend to encourage just jamming the text here, which is fine, but

if you want our code to be more reliable, we really want to use those prompt templates.

All right, let's now create a OpenAI chat model.

And I'm going to call it LLM.

And this is the way we're going to interact with the OpenAI model GPT five.

And this is what eventually is going to make the API calls to OpenAI to send the text and the prompts

and to get back the response from Dlrm.

And who's going to pay for all those API calls?

And I remind you that in the previous video, we created an API key in OpenAI, which is connected to

our account with our payment information configured.

And the API key is stored in an environment variable, which is called OpenAI API key, which is loaded

into the runtime.

Now LinkedIn is going to search for this environment variable and is going to use this as credentials

to talk with OpenAI API.

And I give you an exercise.

Maybe if you want, you can check out the source code of the chat OpenAI model and see where it happens

there.

And we initialize the chat model with temperature equals to zero.

And temperature will control how random or creatives versus strict and deterministic.

The model response is going to be.

So low values between 0 and 0.3 is going to make the response deterministic, factual and probably repeatable.

And it's good for summarization, for code, for instructions, for test and high values like above

0.8 until one.

It's going to get us very creative results.

And it's good for poetry and fiction and out of the box ideas.

And if you're interested about how temperature works, then feel free to check out the theoretical section

where I explain this.

All right.

Let's go back to the code.

And the second argument that we give is going to be model equals to GPT five.

And now we're going to have a link chain chat.

OpenAI object which eats under the hood, is going to be using the OpenAI SDK to make API calls to OpenAI

with our API key.

And now we can go and create our first chain.

And we have the variable chain which is going to be summary prompt template the pipe operator.

And then ln.

So let me break down what's happening over here.

And we're using something which is called the link chain expression language or LCL.

And in this LCL syntax we create a chain by composing two components a prompt template and a large language

model.

Now the prompt template is going to come from the variable summary prompt template.

And this is going to format input variables.

And in this case information into a prompt string which will eventually be propagated to the LM, and

the LM variable is a chat open AI object, which takes in an input a prompt string and generates a text

response.

Now, this pipe operator in an expression language is going to create a new runnable chain.

So this is a new term runnable by connecting the output of the left component as an input to the right

component.

So summary prompt template pipe lm means that we first want to format the input using the prompt template,

and then to pass the resulting prompt string into the LM to generate the response.

So the resulting chain is called a runnable object.

So this means we can invoke it.

Use the invoke method with some input variables matching the prompt template.

And here in this case it's going to be information.

Now I know this is a lot to digest and to be honest, the LinkedIn expression language.

I think this is the hardest thing to comprehend in LinkedIn.

So if you don't understand what's happening here right from the first time, this is totally okay.

We are going to dive deep into this and see the implementation itself, and we're going to have many

examples during the course.

And at this point of the course, I'm not expecting you to know every bit and byte of it.

So we just need to know from a very high level that we read these from left to right.

And here we are plugging in the result of formatting the prompt template into the LM.

So when do we run this.

So we do this using the invoke method that the runnable interface has.

So what's going to happen here is that when we run change dot invoke we actually going to invoke the

invoke method of the summary prompt template which is a class of prompt template.

And when we invoke it, we're going to give it the input of the information key to be holding the information

value.

And in this case it's going to be the Elon Musk information.

So once we do that then we're going to create a prompt value, which is sort of like a fancy word of

saying a string.

And that string is going to be piped to the LM method.

And this pipe is actually some very clever way to go and call the LM invoke method, which it has with

the input to be the prompt value.

So the final prompt that we want to send to the LM.

So this is just a clever way to chain everything up together and hence the name of link chain.

So eventually when we're going to run this code we are going to take this string that you see right

over here.

We're going to plug in the information of Elon Musk.

And this string is what is going to be sent eventually to the LM.

Right.

So I know it sounded at the beginning very, very complicated.

But actually what it's doing is quite simple.

And in the next video we're also going to be tracing this and see the exact objects and debugging it.

So don't worry, you will understand this.

And I think this is the hardest concept to comprehend in length chain and the length chain expression

language.

And it is totally okay that you do not understand it by now.

And just a fun fact, even implementing and understanding how agents work is going to be much easier

than understanding this piping operator in the chain expression language.

All right, so just to summarize the code here, all you need to understand is that we're taking the

variable of information.

We're plugging it in to this string over here.

And we're dynamically going to put the value of the information about Elon Musk.

And this is the string that we're going to be sending eventually to the LLM and get a response to it.

Right.

So this is everything you need to know from this video.

You can forget about gene expression language.

You can forget about everything.

As long as you understand this, this is okay.

And we can continue.

All right.

So let me go now and finally run this code and let's see what results do we get.

And I'm going to fast forward it a bit because we're going to use GPT four.

And GPT five is a bit slow LLM it's very capable but it's very slow.

So let me go fast forward it.

And at the end we're going to print response dot content, which is going to be the final string that

the LLM returns.

So we'll be debugging and we'll be tracing all of this in the next video.

So let's just wait to see the output.

All right so we can see now the short summary.

And we can see now two interesting facts on Elon Musk.

So this looks great.

And now you can read it in your own time.

And in the next video we're going to be debugging this.

We're going to be examining the objects.

And we are going to be tracing it with Lindsmith.

And it should clarify everything that we discussed