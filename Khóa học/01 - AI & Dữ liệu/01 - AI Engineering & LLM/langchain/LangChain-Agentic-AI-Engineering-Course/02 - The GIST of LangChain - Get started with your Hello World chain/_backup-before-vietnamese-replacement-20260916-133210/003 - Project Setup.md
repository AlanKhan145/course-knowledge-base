# 003 - Project Setup

## Section

The GIST of LangChain - Get started with your Hello World chain

## Duration

15 minutes

## Main Idea

This lesson covers **Project Setup** as part of the **The GIST of LangChain - Get started with your Hello World chain** section. The instructor walks through the concepts and implementation details step by step, building on prior knowledge of LangChain LCEL, PromptTemplate. By the end of the lesson, learners will have a working understanding of how project setup fits into the broader agentic AI engineering workflow.

## Key Topics Mentioned

* LangChain LCEL
* PromptTemplate
* ChatOpenAI
* Chains
* LangSmith tracing
* Ollama local models

## Review Questions

1. What is the main purpose of Project Setup in the context of The GIST of LangChain - Get started with your Hello World chain?
2. How does project integrate with the rest of the LangChain ecosystem?
3. What are the key steps demonstrated in this lesson?
4. When would you choose this approach over an alternative?
5. What does the instructor emphasize about production readiness in this lesson?

## Summary

This lesson provides a practical introduction to Project Setup within the The GIST of LangChain - Get started with your Hello World chain module. Learners see the concept demonstrated end-to-end and understand how it connects to the larger goal of building production-ready agentic AI systems with LangChain and LangGraph.
Hey there.

Eden here.

And in this video we're going to be bootstrapping our environment for the project.

So it's going to be a bit long around 15 minutes.

And it's not going to be interesting because let's face it, bootstrapping a Python environment is not

that interesting.

We'll be cloning the course repository.

We will create a new branch that will be working in.

We'll be using UV as our package manager.

We'll install some dependencies, configure the API keys for the LLM.

We're going to be talking to defining environment variables.

And by the end of this video we'll have our environment ready to write our first link chain chain.

So let's go to the code.

So this is the course's GitHub repository.

And I'll be linking it in the video's resources.

And you can also find it in the introduction section.

And all the code that we'll be writing can be accessed via this repository.

So I will be linking the exact commit code of every video.

So you can have the exact code as I'm having in running.

All right.

So let's go now and set up our environment.

And the first thing I want to do is to clone this repository.

So I'm going to go and copy here this link here.

And let me open my terminal.

Let me go now and CD into my desktop.

And here I'll be cloning the code.

And let's now write git clone and paste here the URL.

And now that it's done we can see into the directory which is called link chain course.

And let me open my IDE from here.

And I'm going to be using cursor for the next couple of videos.

But you can use any IDE that you want.

You can use PyCharm.

You can use VSCode.

Hey you can even use vim if you're really, really brave.

The IDE that we'll be using doesn't really matter.

Will be using basic functionality of Ides.

So to run code to debug it.

And that's pretty much it.

And the funny fact is that I actually recorded this course when cursor did not exist, and I used PyCharm

for most of the videos.

All right.

So let me open now the terminal from the IDE.

And I want now to create a new branch which is going to be called Hello World branch.

And this branch is going to hold all the code for the next couple of videos where we're going to introduce

link chain.

So I'm going to go and write git checkout dash dash orphan.

And I'm going to call this branch project Slash Hello World.

So when I do that I'm going to be in a new branch.

You can see it right over here on the bottom left here.

And the dash dash orphan creates a branch with no commit history.

So it's going to start completely new without any commits from the existing repository.

Now notice that by the time you'll be cloning the repository, this branch will already exist.

So you might want to call this with a new name.

Maybe.

Hello world one.

All right.

Let me just write git dash rf from this directory to remove all the files that we have to really start

with no files at all.

So you can see we don't have any code.

We don't have any commits.

We are in a clean slate right now.

All right.

So let me write UV dash dash help.

And UV is a very fast Python package manager just like pip.

But it's much faster because it's built on rust and it handles installing and resolving and running

dependencies very, very efficiently.

And it's also going to help us manage our isolated environments with our dependencies.

So we'll only be using the basic features of UV.

And we'll be installing packages and managing our virtual environments.

By the way, you can also use poetry or Pipenv or any other Python package manager you would like.

And all we'll be doing in the course is installing packages and creating virtual environments, and

running the code there with the packages.

So nothing too fancy here.

And in fact, we'll be using poetry and we'll be using BPMN through the entire course in some projects.

All right.

So let's go and enter UV Just to make sure that we have you've installed.

Let me go up here in the logs.

And yeah, you can see it's installed in my machine here.

So we can see here the manual.

And if you don't get this kind of output simply write Pip3 install UV and you should have it installed

in your machine.

So I already have it installed so it's not going to do anything.

All right.

So let's go now and initialize our project.

And let's go and write UV init.

And it's going to bootstrap a new Python project.

And it's going to create some skeleton for our project.

So it's going to create our main.py file with some boilerplate code, some hello world code.

And it's going to create a Pyproject.toml file which is going to have the list of packages we have installed

in our project.

So right now this is a clean project.

So we don't have anything installed.

So let me go and write UV add and let's go and add link chain.

And this is going to install link chain in our system.

And notice that it also created here a folder.

So it also now created the virtual environment for our project.

And the package is now installed in this virtual environment.

So let me go and click this play button here.

And now notice that we're running the code here.

So you can see here this print hello from LinkedIn course.

And you can see that it's run from the virtual environment you see here LinkedIn course under those

parentheses.

So this means that it runs within this virtual environment.

All right let me also add the link chain open AI package which is the link chain integration package

for open AI.

And it's a separate Python package that is going to contain all the open AI specific integrations for

the link chain ecosystem and the reason why we are installing it independently, and it's not being

bundled into the package itself, is because Link Chain decided to split providers, which are third

party services, to link chain to different and independent packages where all the vendors maintain

their own packages because we don't really want to download 100 providers if we only want to use OpenAI

or anthropic or whatever service provider that we want to.

Now, historically, the packages were actually bundled in the original package, but in one of their

releases, they split everything into integration packages, which design wise makes a ton of sense,

because right now every provider is going to maintain its own package.

And if it's going to add new models or new features, it's going to maintain it independently from the

other providers.

So we have everything nicely decoupled.

All right.

Let me click enter.

And now we have this package installed.

Let me also add Python env which is going to help us load the environment variables from env files,

which is going to be very easy to load all the API keys that we're going to be using in the course.

And if you're not familiar with it, don't worry, I'll be showing it very, very shortly.

Shorty and let me also install black, and I sought simply to format nicely the code here and there.

All right, let me click enter.

So we installed all the packages and let me show you the pyproject.toml file here.

And we can see here all the packages that we have installed and all of their versions.

And we have all the details here.

And of course when you'll be running this code yourself, you're going to have different and newer versions

of all those packages.

And I will be updating the code and on GitHub and the videos themselves in case the API changes.

But the code you should see should match the latest version of Linkchain.

And if it's not the case, then please let me know and I will fix this ASAP.

I refilmed this course like 3 or 4 times, so I'm really used to it.

All right, let me create a.

Gitignore file.

Because there's a ton of things that we do not want to commit to the repository for example API keys

or the Venv directory.

So let me paste here a standard.

Gitignore file for Python projects.

So let me go now to my browser and let me look for Python.

Gitignore a file.

Let me go.

And yeah let me check this project here.

Let me go now and copy the content here.

And by the way when you create a new GitHub project you have an option to generate these.

Gitignore file automatically.

But anyways let me just simply go and let me paste the content in my gitignore file.

Alrighty.

So now we can see that the venv directory is grayed out.

So we're not going to commit it.

And we're not going to track it with git.

And now let's go and create a dot env file.

And this file is going to hold all of our environment variables and all of our API keys.

So now I want to fill in the OpenAI API key.

And it's really, really important to note that you do not want to share your API keys.

Do not share them with anyone.

It's like a password and do not, of course, commit it to GitHub and the API keys, which I'm going

to show you in the course, are all going to be revoked once I finish filming this video.

So you do not want your API key to be leaked, because we have malicious people in the world which scan

those kinds of files and those kinds of variables on GitHub automatically, and once they do find it,

they go and abuse it.

And you do not want to find yourself being charged with lots of money because your API key got leaked,

or you accidentally committed it into a GitHub repository.

And again, it's very important to note that I will be using OpenAI.

I will also in the following video will show you how to use open source models with llama, and you

can use any LLM that you want.

You can use anthropic.

You can use Gemini.

You can use any LLM that you want.

I also made a video, which is going to be in this section, which is going to tell for each project

which LMS can be used for that project.

All right.

So let me search for OpenAI API key and let me go now to platform openai.com.

Let me go and create an API key and let me call it link chain of course.

And let me go and copy it and let me go and paste it.

Now this is going to be working for me because I have already set up my OpenAI account and put credit

card information, and I've already set up a budget that I'm going to limit my usage, which is also,

by the way, a good practice to limit your usage and consumptions of APIs.

So even if your API does get leaked, then you won't be maxing out the limit that you put.

And a quick disclaimer OpenAI is not free, so you would need to purchase some credits beforehand.

I will be showing you the free alternative to run open source models on our machines.

Um, but this is going to be in the next video, not in this one.

And in this video and in general in the course I will be using OpenAI.

And you can use again any LLM that you want if you have free alternatives.

Now it's important to note that if you're not going to have a credit card with OpenAI, then you will

be encountering this 4 to 9 error, which is not going to let you use their API.

And another thing is that the name here, OpenAI API key is very important.

So the name should be the exact name, as you can see, because link chain is going to be looking for

this exact environment variable when it's going to try making requests to the OpenAI API to get responses

from their llms.

By the way, if you want to use the Google API key, let me go and look for a Google AI studio.

And here you can go and generate and create an API key.

Let me just go and select a project.

So it's going to be associated with it.

and let me go and create now an API key.

So this API key can be used for Google's models.

So Gemini.

So you need to write Google API key in case you want to use Gemini from the Google AI studio.

And for that you'll need to install the link chain Google JNI integration.

But I won't be showing that in the course.

And in case you want to use open source models running from your local machine, you can install the

link chain Dash Olama package.

And I will be showing how to use link chain Olama in this section.

All right let's go now and import from dot env the load dot env function.

And when we call it it will go and look for a dot env file.

And then it's going to take all the environment variables there.

And it's going to load their values into our environment.

So now after we run this, we can actually access those environment variables, the OpenAI API key that

we configured.

Let's see that this is indeed the case.

So let me go and import the OS module so we can access the environment variable.

And let me go and print here OS dot environment dot get.

And here we want to get the OpenAI API key.

So let's go and run it.

And you can see now the value of my API key.

And you should see your value here.

So this means we can access the API key from our code and from our environment.

And everything looks okey dokey right now.

And we can continue and finally start writing our first link chain chain.

So let me just remove this code from here.

Let me run black to format the code nicely.

Let me also run Eishort just in case.

Alright, so now let's go and commit this code.

So this boilerplate here.

So let me go and add all of those files.

Let me write git add.

And now let's commit the code and let me call the commit environment setup.

So let me push it and let me go copy this command and push it to the remote repository.

All right.

And let me show you where you can find the code.

So you can go to the repo and look for the branch which is called oops.

Let me refresh the page here and you can look for the branch which is called Hello World.

And right over here let's go to the commit list over here.

And here is the first commit environment setup.

And here you can find all of the code that we wrote here.

And of course this will be linked in the videos resource where you can have direct access to this link.

And yeah.

So now we can go and finally start writing our first link chain chain.