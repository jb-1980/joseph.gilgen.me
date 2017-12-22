# Local Weather

There is a lot of potential in this app. It required two api calls, one for the locality info, and the other to get the weather.

I banged my head on the wall for some time because I did not understand the idea of a callback at this point in my learning. I originally had `coords` as a global variable, and the `getWeather` function as the next block after the ajax call to ipinfo, but could not understand why `coords` was empty when the `getWeather` block was executing. Coming from Python, I assumed that it would have been updated after the previous block. Thus, I met asynchronicity in javascript. So I refactored the block into a function, moved `coords` into the ajax call, and everything worked.

There is a lot more that could be done with this app, like a 5 day forecast. But I felt like I had gotten the point of the lesson, really wasn't interested in making a weather app, and decided to move on.

TODO:

* [ ] Redo in React
