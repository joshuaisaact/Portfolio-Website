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

1. **How does the user switch themes?** 
   Does the whole page reload? Is each theme a separate site?  
2. **What features do I want and need?** 
   What is the intial site layout?
3. **How do I make it responsive?**
4. **How many themes are a good initial number?** 
   Five?
5. **How will people know that the themes exist?**
   I mean seriously -- what's the point otherwise?
6. **How do I ensure the blog will support all these themes?** 
   If I eventually end up with twenty themes, I do not want to manually test them all across every page of my blog.  

In order to manage this project (and add some structure to my scattered thinking), I decided to create a Trello board, with each of these questions, so I could ensure that I processed each of them one by one, and made sure I thought about them properly.  

Here is my Trello:  

In the spirit of transparency, let's go through the first one together.  

### How does the user switch skins?

{{< figure src="mr ben.png" alt="Mr Ben wheel" title="Stumbling across this image unlocked a core memory" >}}

Bear in mind, for version 1 of my portfolio site I wanted to use a very plain tech stack, ideally with no frontend frameworks, so any native solutions they may have were ruled out.  

After thinking about it for some time, I figured that I essentially had two options:  

A single site, with multiple style sheets  

This implementation would mean that all the different themes were loaded on initial page load, and as a user clicked change theme, it would trigger an event listener that would change the current active style sheets..  

### Single-site approach

**Pros**

1. **Instant Theme-Switching**  
   Since all themes are preloaded, switching is immediate, with no delays or extra HTTP requests.

2. **Simple Implementation**  (initially)
   This approach is straightforward—basic JavaScript handles the theme changes, keeping things clean and minimal.

3. **No Backend Manipulation**  
   Everything happens client-side, so there's no need to complicate things with backend logic.

4. **Framework-Free**  
   I can potentially deliver it without any additional front-end frameworks

**Cons**

1. **Slower Page Load**  
   Loading all CSS upfront can slow down the initial page load, especially with loads of themes.

2. **Higher Bandwidth Usage**  
   Users download all themes, whether they use them or not, which could be wasteful.

3. **Memory Overhead**  
   Stylesheets will all be loaded into memory at once, potentially impacting performance on low-resource devices.

4. **Maintenance Complexity**  
   Managing multiple stylesheets can get cumbersome, especially as the number of themes grows. There's a high chance of conflict, or interferance.

5. **Capability constraints**  
   If all the styles are pre-loaded, and done with vanilla HTML, CSS and Javascript on the same website, it means that I can't get **really** wild with new frameworks, technologies, and approaches (at least, not without really bloating the website)



### Multi-site approach



On the flip side, I could design it so that each theme was an entirely separate website, that a user would be redirected to every time they changed theme. 

{{< figure src="oprah.jpg" alt="Oprah" title="You get a site! And you get a site! And you!" >}}

**Pros**

1. **Optimized Load Time**  
   Only the necessary styles and assets load. This makes the initial load much snappier, as vistors only download what they need.

2. **Lower Bandwidth Usage**  
   Users download just one theme’s assets, reducing overall bandwidth consumption—especially good for mobile!

3. **Isolated Styles**  
   Each theme is in it's own little segregated bubble, free from sibling rivalry. No more CSS conflicts!

4. **Simpler Maintenance**  
   Each theme is a standalone site, so updates and changes are easier to manage without affecting other themes, leading to fewer headaches.

5. **Flexibility in Design**  
   Each site can have entirely different layouts or functionalities tailored to the theme, offering more creative freedom. I can have one theme be 3D, for example!

**Cons**

1. **Slower Theme Switching**  
   Switching themes involves loading an entirely new site, which means more HTTP requests and a less seamless user experience.

2. **Increased Complexity**  
   Managing multiple sites can be more complex, requiring duplicated effort for content updates or changes across themes.

3. **Heavier Backend Work**  
   Depending on how it’s implemented, this approach may require more backend logic to serve the correct theme, adding to server load.

4. **Higher Hosting Costs**  
   Separate sites might lead to increased hosting costs, especially if each site requires its own resources and configuration.

5. **User Experience Impact**  
   Theme switching could be jarring for users as it feels like navigating to a completely different site, breaking the flow.

### **So, What Did I Choose?**

After mulling it over, I opted for separate sites for each theme. Why? Because I wanted the freedom to get a little wild with design, without worrying about style conflicts or bloated code. Sure, it’s a bit more backend work and might mean a bit more faff in terms of hosting and setup, but the payoff is a cleaner, more flexible experience. Plus, switching things up with a completely different look and feel just feels right.

{{< figure src="long road.jpg" alt="Long road" title="The road ahead is long. You are likely to be eaten by a grue." >}}

In the end, it’s all about giving each theme its own spotlight. Now, onto making those themes a reality!

### 

**If you have any thoughts, feedback, or generally want to give me a hard time about my design choices, please don't hesistate to contact me using the contact form on the site.**

****
