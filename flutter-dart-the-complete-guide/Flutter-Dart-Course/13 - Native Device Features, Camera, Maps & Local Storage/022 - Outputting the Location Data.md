With that, we're adding this place

with the location.

Now we can also output it.

And I will start here in places list.

There in this list tile,

I don't wanna show the map,

but I do want to show the human readable address

and I wanna show it as a subtitle below this title.

Now conveniently ListTile

has a subtitle parameter that can be set

and it can be set to a text widget, for example.

And here I then therefore output places index.

And then there I access the location

and then the address,

which is this human readable address.

Now I also wanna have some styling here,

and for that, we can copy the style from the title text

and use that here in this text widget,

which we use for the subtitle.

And here, I don't wanna use titleMedium,

but instead bodySmall, this space text theme.

But then also apply the on background color to it.

With that, if you save this,

we should be able to add a new place, Google Office,

where we of course, take a picture

and then choose a location

at the moment by getting the current location.

And if we click add place, that's added

and we can see this human readable address here.

So that's looking good.

Now on the detail page,

I now do want to show this map snapshot again,

this image preview of the location.

And for showing that on the place detail screen,

we should go to the place_detail.dart file.

And there in this stack, I'll add another widget,

the positioned widget,

which we also saw before in the course,

which is used for positioning widgets inside of that stack

so that you control where it should be positioned

on top of that other widget.

And here the child I want to position

will actually be a column widget

and we can and should add some positioning parameter values.

And here all set bottom to zero

to make sure that this column of widgets,

which I'm about to add,

starts at the very bottom of this image.

So of this stack.

But since the image currently decides

the width and height of that stack,

it will be at the bottom of the image in the end.

And I wanted to span the entire width from left to right,

which can be achieved by setting left and right to zero.

So that in the end, this column,

which we're about to add here,

touches the bottom at the very bottom

and the left and right on the very left and right edges.

Now in this column, we of course need children.

And here, the children that should be added

should be one circle avatar

that should display this map preview.

And then below that, I want to have a container

and I'm using a container

for styling and positioning purposes,

where in the end, I wanna output some text.

And that text should be that human readable address again.

And for that here, if we start with the text,

the text should be place using this place property,

which we have here,

.location.address,

and some styling, which I will again copy

from places_list.dart.

I'll copy that style here.

And back on place_detail.dart,

I want to use that style for this text here,

for this address text.

But I don't wanna use bodySmall here,

but instead titleLarge.

Now on the container that contains this text,

I want to add alignment and set this to alignment center,

to center it horizontally and vertically.

And the text here should also always be aligned

in the center by using TextAlign

and then TextAlign.center.

And back on the container,

I want to add some padding

with const EdgeInsets.

And then here I'll actually not use all,

but instead symmetric to set a different horizontal

and vertical padding.

Horizontal padding here for me should be 24,

vertical padding could be 16.

Last but not least, I want to add some decoration here

by creating a box decoration object.

And this can be a const object

because I want to add a gradient,

a little background gradient behind that text,

this address text,

which we're in the end, outputting here.

And for that, I'll create a linear gradient here

as we also did it before in this course.

And for the colors,

I'll go for colors transparent as a starting color

and end at colors black 54,

which is a slightly transparent black.

You could of course, also pick your own colors.

But with that, I'll simply add

that there is a slight transparent

black background behind this text,

which will also ensure that this text stays readable.

Now on this gradient,

then also set begin and end

and begin should be alignment top center

so that we become more transparent towards the top

and end should be alignment bottom center.

And with that, we're outputting and styling the address.

Back in the circle avatar, I wanna output that map.

Now for that, we'll need that same trivial link

that we also used in location input.

So I'll simply go there

and grab this gather.

We could also outsource it into a separate file,

but here I'll simply copy and paste it

and paste it here into place detail as a gather.

And I'll keep the name, location, image,

but of course, we don't have a picked location here,

we just have a place

and it will never be null here per definition

because we don't allow null input values.

So we don't need this check.

And instead I can just extract my latitude

and we don't need the exclamation mark

and also the longitude,

but of course, not directly from the place,

but there from the location property instead.

So we should access the location property.

With that, we get the location image though.

And now we can use this location image

here in the circle avatar.

There I'll set a radius of 70 to create a perfect circle.

And then we can again set background image here to an image

this time using the network image provider,

which takes a URL as an input.

And with that, we should be displaying

this preview snapshot.

Now, with that, if you save this,

you should already see it as this updates here

that you have the address at the bottom

with this slight transparent black background,

which is fading out towards the top.

And you have this circle avatar that shows you the location.

And that's the look I want to have here.

Now soon this should also be tapable to open a map

where we can view this place.

But before we add this functionality,

I first of all wanna make sure

that this select on map button also opens a map

and allows us to pick a place on that map.


