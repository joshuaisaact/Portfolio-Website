+++
title = 'On Portfolio Website Design'
date = 2024-08-19T20:00:43+01:00
draft = false
featuredimage = "media/blog/driving-portfolio.png"
summary = "My first ever article! My design philosophy for this portfolio."
+++

### <center>Design Philosophy</center>

As I dive into building my portfolio website, I’m torn between two extremes. On one hand, I've come across some truly impressive portfolio sites that, while visually stunning, demand too much from their visitors. Take, for instance, a 16-bit SNES RPG-style portfolio I found, where visitors had to maneuver a character just to access sections like "About" or "Projects." Cool? Definitely. Practical? Not so much. I think any prospective visitor should be able to get to the meat and bones of the content within 5-10 seconds of visiting your page. Nobody has time to play a game to read someone's career history, as impressive as that initially seems.

{{< figure src="/blog/media/blog/driving-portfolio.png" alt="gaming portfolio" caption="It does look pretty cool though, I'll give them that" width="80%" >}}  

On the other end of the spectrum, some portfolios were essentially glorified online CVs, stripped of any real personality or creativity. They get the job done but fail to leave a lasting impression.

So, where does that leave me? I want to strike a balance—creating a site that’s lightweight, skimmable, and easy to navigate but still bursting with personality. My vision for version one is a microsite that’s simple to explore yet comes alive with wild, esoteric themes and skins that users can select themselves.

### Tackling the Challenges

Of course, this approach brings some challenges:

1. **Bandwidth Management**: Loading all the skins upfront isn’t practical, but then how do I manage their loading without bogging down the user experience? I’m thinking some clever lazy loading might do the trick.

2. **Skin Application**: Implementing multiple skins means more than just a dark mode toggle. I’ll need several CSS files and a way to inject them dynamically into the DOM using JavaScript. Reverse-engineering dark mode logic could be a good starting point.

3. **Initial Design**: I’ll sketch out the initial design in Figma, focusing on a clean, adaptable layout that can work with multiple themes.

4. **Responsive Design**: The site must handle different display types seamlessly, regardless of the chosen skin. That means a lot of testing and tweaking across devices.

5. **Art and Skin Creation**: I’ll start with five distinct skins to give users a taste of the variety. These can be expanded over time as I refine the site.

6. **User Prompting**: One big question remains—how do I make sure visitors know about the skin options? I’ll need some intuitive prompts or hints to encourage exploration.

### Initial Skin Ideas

The ideas for skins are coming thick and fast, but here are the first ones I plan to develop:

- **Light Mode**: The default view, minimalistic, easy-to-read, quick to navigate. I still want to have some small opportunities to surprise (click my profile picture on the home page if you haven't already!)
- **Dark Mode**: Sleek and modern.
- **Ladybird books**: An homage to the retro Ladybird books common in the UK back in the 90s. I learned to read with these, so there's something quite nostalgic about them.
- **Retrowave/Synthwave**: Neon grids and 80s nostalgia.
- **Ceefax**: A retro nod to early teletext services.
- **Hand-Drawn/Notepad**: Scribbles, sketches, and personal touches.
- **Geocities/Early Internet**: A throwback to the chaotic charm of the web’s early days.

If you have any thoughts, feedback, or generally want to give me a hard time about my design choices, please don't hesistate to contact me using the contact form on the site.
