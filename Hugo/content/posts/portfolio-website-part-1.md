+++
title = "Dancing in the Dark (Designing A Portfolio Site)"
date = 2024-08-19T20:00:43+01:00
draft = false
featuredimage = "media/blog/driving-portfolio.png"
summary = "My first ever article! My design philosophy for this portfolio."
tags = ["HTML", "CSS", "Javascript"]
+++

### <center>Design Philosophy</center>

As I dive into building my portfolio website, I’m torn between two extremes. On one hand, I've come across some truly impressive portfolio sites that, while visually stunning, demand too much from their visitors. Take, for instance, a 16-bit SNES RPG-style portfolio I found, where visitors had to maneuver a character just to access sections like "About" or "Projects." Cool? Definitely. Practical? Not so much. I think any prospective visitor should be able to get to the meat and bones of the content within 5-10 seconds of visiting your page. Nobody has time to play a game to read someone's career history, as impressive as that initially seems.

{{< figure src="/Portfolio-Website/blog/media/blog/driving-portfolio.png" alt="gaming portfolio" title="It does look pretty cool though, I'll give them that" >}}  

On the other end of the spectrum, some portfolios were essentially glorified online CVs, stripped of any real personality or creativity. They get the job done but fail to leave a lasting impression.

So, where does that leave me? I want to strike a balance—creating a site that’s lightweight, skimmable, and easy to navigate but still bursting with personality. My vision for version one is a microsite that’s simple to explore yet comes alive with wild, esoteric themes and themes that users can select themselves.

### Tackling the Challenges

Here are some hurdles that I'll need to overcome:  

1. **How does the user switch themes?** Does the whole page reload? Is each theme a separate site?  
2. **What features do I want and need?** What is the intial site layout?
3. **How do I make it responsive?**
4. **How many themes are a good initial number?** Five?
5. **How will people know that the themes exist?**
6. **How do I ensure the blog will support all these themes?** If I eventually end up with twenty themes, I do not want to manually test them all across every page of my blog.  

In order to manage this project (and add some structure to my scattered thinking), I decided to create a Trello board, with each of these questions, so I could ensure that I processed each of them one by one, and made sure I thought about them properly.  

Here is my Trello:  

In the spirit of transparency, let's go through the first one together.  

### How does the user switch skins?

Bear in mind, for version 1 of my portfolio site I wanted to use a very plain tech stack, ideally with no frontend frameworks, so any native solutions they may have were ruled out.  

After thinking about it for some time, I figured that I essentially had two options:  

A single site, with multiple style sheets  

This implementation would mean that all the different themes were loaded on initial page load, and as a user clicked change theme, it would trigger an event listener that would change the current active style sheets..  

Pros  
Cons

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
