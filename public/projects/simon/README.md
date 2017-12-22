# Simon

This was a really fun project to build. It challenged me with the CSS. It challenged me with the JavaScript. And when it was all done I felt really satisfied with the finished project.

So the game is essentially a grid of 4 colored divs, with a specific `border-radius` setting. So for example, a regular square div `<div style="width: 300px; height: 300px; background: #008000;"></div>` can become a quarter of a circle by applying the `border-top-left-radius` property equal to its width, `<div style="width: 300px; height: 300px; background: #008000; border-top-left-radius: 300px"></div>`. Then on top of the grid I position another div with `border-radius` at 50%, and we get a good replica of the Simon game.

I would definitely like to revisit this project in React, because I think it could be done so much more elegantly.

TODO:

* [ ] Redo in React.
