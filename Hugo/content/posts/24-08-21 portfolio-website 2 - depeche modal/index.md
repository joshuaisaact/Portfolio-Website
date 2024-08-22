+++
title = 'Depeche Modal'
date = 2024-08-19T21:16:22+01:00
draft = false
featuredimage = "media/blog/depeche modal/depeche mode.png"
summary = "Project cards, modals, and how much a rogue Z index can send one man spiralling into a pit of dispair"
tags = ["Javascript", "CSS", "HTML", "Portfolio Website"]
+++

# Depeche Modal

### Let me see you stripped down to the bone.

A modal is a a web page element that displays in front of and deactivates all other page content. To return to the main content, the user must engage with the modal by completing an action or by closing it.

When I first conceived of my portfolio site, I spent a few days wondering whether I wanted to take a single-page approach, or a multi-page approach.  

In the end, I landed on a combination of the two, because what is a portfolio if not an attempt to demonstrate that you can cover multiple bases. I would do my project section with a single page approach, and the blog as a sub-site, hosted across multiple pages.  

Given this single page approach, I knew I wanted the ability to easily add additional projects over time, have these projects in a summarized 'card' format within a grid, and i wanted to use a modal window to give the visitor a more detailed view upon a click of a button.  

To tackle this, i built the first card directly into the HTML with a separate "project-card" div, and then once i was happy with it, i converted it into an immediately invoked javascript factory functon!  

{{< figure src="/Portfolio-Website/blog/media/blog/depeche modal/allthedivs.png" title="Yes, I mean EVERYTHING">}}

Why do it this way? What could possibly be my thought process? The reasons were mainly:  

1. I wanted the ability to pull data from a database in JSON format and convert it into project cards  

2. If i decide to change the look of the cards afrer i have 20 projects in the database, i only have to edit the one function  

3. It means at a later date i could create a no-code frontend for adding additional projects  

4. The html file wouldnt get too bloated with duplicates, as they are all generated at runtime.  

I did this with one long template literal, as i think thats the easiest to read:  

{{< figure src="image-gen-func.png" title="Next week on 'divs that got slightly out of hand'">}}

My build process for the site is front-end first, so currently I'm working on getting my initial template complete. That means that this function was going to be tested on a javascript array of objects, rather than a database - the idea was that with this functionality working, I could then point it at a database at a later date, and have it consume a JSON.

## Highway to Hell

##### Isn't that the wrong band?

The next step was to build the modals that allow the visitor to see more information, and this, dear reader, is where disaster struck.  Here was the desired behaviour:  

This is what i wanted to happen:  

1. A window pops up on top of the rest of the page content, with a longer summary, additonal links, and a bigger image. A 'details page'.

2. The rest of the site behind the pop-up details page is both blurred and / or greyed out, so it doesnt distract from or interfere with the pop up.  

3. The user can then either click the close icon in the top right corner of the window (or hit the esc key on desktop) to close the modal.  

Sounds relatively simple, doesnt it?  Welcome to my pain:

{{< figure src="modal hell.png" title="Don't grab your glasses, that's just my modal sat on top of all my content">}}

The overlay is sitting on top of the modal pop up window! The first port of call was to revisit that div generator function shall we, to see if there's anything that can be done in there.  

So it looks like the div generates a initially hidden modal window, and when the visitor clicks the button it appears. At the same time, the class of the modal function also changes. So why is the overlay sitting on top of the modal?  

I first tried changing the z-indexes of both elements. Let's give the overlay a z-index of 1, and the modal detail window a comically high z -index of 9999.  

The issue isnt fixed! But why?! Well, if we look at the MDN docs for the z-index CSS property:  

MDN QUOTE PARENT CHILD  

In summary, because the overlay is at the global level of the DOM, and not sharing the same parent as the modal detail window, the z-index isnt doing a thing!  

Well, I guess we should just move the overlay into the same projects-grid as the modal detail window, right? Easy issue, easy fix:  

IMAGE OF HOW THE BLOG ISNT BLURRED  

We have introduced a new bug! We can now see the modal detail window, but the sibling sections are no longer blurred. Not only does this look a bit rubbish, but on some wider displays the unblurred elements interfere with the modal window's readability.  

The solution? After another 30 minutes of testing, it seemed the solution was that both the modal detail window and the overlay need to sit at the global level of the DOM. But this introduces another bug!  

Given we are using the this context binding variable in the javascript function, if when we programmatically create our divs we create all the modal windows at the global level, how will the website know which button refers to which modal detail window?  

We need to use a counter within the event handler!  

Here is the revised function:  

Fix event handler.
