Now at this point, from a feature point of view,

this app is almost done.

Sure, the chart is still missing,

but we can manage our expenses here.

We can add expenses and delete expenses.

We can undo such a deletion process if we want to.

So that's looking good.

And of course we'll get back to the chart.

But before we do that, it's finally time to come back

to styling this app

and to take a closer look at Flutter's theming mechanism,

which you may use for styling your apps.

Because of course, whilst this app doesn't look super ugly,

it's also not really that appealing visually.

And of course, what we could do

to make it more appealing is we could style the individual

parts manually just

as we did it in other sections in this course.

We could, for example, set up a linear gradient

for the background of our scaffold widget

as we did it in this quiz app we built

earlier in the course.

And we could use techniques like this

to style this app here,

this expense tracker app, if we wanted to.

And of course, there's nothing wrong with this approach,

but it would also be nice if we had one central place in

which we could set up certain styles

and those would then automatically get applied

to certain widgets

or could at least easily be referenced from

inside our different widgets so that we, for example,

don't have to copy

and paste color definitions across

different parts of our app.

And this can be achieved with Flutter's theming system,

which we can set up here in main dart in our material app

widget because this material app widget,

which is this root entry point to our app, so to say,

this root widget

that contains all our other widgets in the end.

This material app widget is the widget you use

for setting up your app's theme.

Because I mentioned before that this app widget does a lot

of behind the things stuff,

but it also gives you some key configuration settings

that you can make here that influence your entire app.

And the theme is one of those settings.

And indeed, at this point here,

I already have a theme set up.

I got theme data set to use material three to make sure

that my app here uses this material three look.

Now, this might not be necessary anymore at the point

of time you are viewing this video

because material three might be the default by then,

but this theme parameter

that can be set on this material app will be useful

nonetheless, because setting up a theme is not just about

switching between the material three or material two looks,

but instead you can use this theming mechanism

to control in detail which color different widgets in your

app will have,

and which colors you want to be able to use in your app,

and which text styles you want to be able to use and so on.

So how can you then customize this theme?

Customizing your applications theme involves setting this

theme parameter here on the material app

as we're already doing it.

And theme wants a theme data object, which can be created

with this theme data class provided by Flutter.

Now, when instantiating this theme data class,

you get many parameters that you can set

to fine tune your app's theme.

And this can be super overwhelming.

And I will also say

that Flutter's theming system,

whilst being quite powerful and flexible,

also evolved a lot over time

and therefore this theme data class here also allows you

to set a lot of parameters which still work

but shouldn't be used anymore

because they might be removed in the future

and there are better ways of configuring your theme.

It's also worth pointing out

that if you create a theme data object like this

by instantiating theme data

and then passing some configuration

between those parentheses, you are actually telling Flutter

that you are setting up the entire theme from scratch,

which means that theoretically you really should configure

all these aspects that make up your application.

You should configure all text styles you could possibly use.

You should configure all other styles that might be used

by any widgets in your app.

And whilst this of course can make sense for certain apps,

it also means a lot of extra work

because you might be happy with some default theme styles

that Flutter applies otherwise.

Now of course, you could argue that this app here

by default doesn't look that horrible, and that is correct,

but you'll see a difference if I switch to a different way

of setting up my theme - a way which I would actually

recommend using. Instead of creating your theme data

like this.

It's better if you don't pass anything

to this constructor here

and you instead call copy with

and then to copy with you pass your settings.

Like for example, in my case here, use material three true.

If you do that

and you force a reload, at least for me, I always have

to force a reload

to make these theme settings have an effect

on the running app.

If you do that, you will see

that it now looks slightly different.

It looks slightly different.

For example, this text in the title here looks different,

and I would argue looks a bit better

because now we're actually preserving some better default

styles that are applied by default, by Flutter,

and we can now override selected styles with

that copy with method.

So instead of setting up an entire theme from scratch

and having to style everything from scratch,

we're now using some default themes set up by Flutter

and we're only overriding selected styles

or selected aspects of that theme, you could say.

For example, we could now also target another parameter

here in this copy with method, which we're calling,

and set the scaffold background color to any color

of our choice, and maybe not red, I'll just use this

as a starting point to pick a color.

But then we could go for something like this,

like a a light purple-ish color.

We'll change this later anyways,

but we could do that force those changes to be applied.

And now you would see this background.

Of course, this doesn't look great yet,

but this is how you can now overwrite individual parts

of the overall theme.

And here you can see that it's now in one central place

where I can make certain adjustments like this scaffold

background color, and it will then automatically apply

to all the widgets that are interested in that setting.

In this case, the scaffold widget.

And if I would have an app with multiple screens, so

with multiple instances of the scaffold widget,

all those screens would use this color.

So that's how theming generally works

and how you generally, in most cases,

wanna apply your changes to a theme.

Instead of setting up an entire theme from scratch,

it's often better to copy an existing theme

and then just style individual aspects of that theme.