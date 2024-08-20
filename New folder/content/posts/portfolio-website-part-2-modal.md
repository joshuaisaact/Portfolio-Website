+++
title = 'Depeche Modal'
date = 2024-08-19T21:16:22+01:00
draft = false
featuredimage = "media/blog/depeche modal/depeche mode.png"
summary = "Project cards, modals, and how much a rogue Z index can send one man spiralling into a pit of dispair"
+++

# Depeche Modal

### Let me see you stripped down to the bone.

A modal is a a web page element that displays in front of and deactivates all other page content. To return to the main content, the user must engage with the modal by completing an action or by closing it.

When I first conceived of my portfolio site, I spent a few days wondering whether I wanted to take a single-page approach, or a multi-page approach.  

In the end, I landed on a combination of the two, because what is a portfolio if not an attempt to demonstrate that you can cover multiple bases. I would do my project section with a single page approach, and the blog as a sub-site, hosted across multiple pages.  

Given this single page approach, I knew I wanted the ability to easily add additional projects over time, have these projects in a summarized 'card' format within a grid, and i wanted to use a modal window to give the visitor a more detailed view upon a click of a button.  

To tackle this, i built the first card directly into the HTML with a separate "project-card" div, and then once i was happy with it, i converted it into an immediately invoked javascript factory functon!  

FUNNY MEME FACTORY IMAGE  

Why do it this way? You are probably thinking. The reasons were mainly:  

1. I wanted the ability to pull data from a database in JSON format and convert it into project cards  

2. If i decide to change the look of the cards afrer i have 20 projects in the database, i only have to edit the one function  

3. It means at a later date i could create a no-code frontend for adding additional projects  

4. The html file wouldnt get too bloated with duplicates, as they are all generated at runtime.  

I did this with one long template literal, as i think thats the easiest to read:  

IMAGE OF GENERATOR FUNCTION  

After some testing with some dummy data, it worked! I am focusing on getting the front end working and hosted on github pages initially, building the actual db will come later.  

The next step was to build the modals that allow the visitor to see more information, and this, dear reader, is where disaster struck.  

Lets go through the desired behaviour, shall we?  

This is what i wanted to happen:  

1. User clicks the read more link  

2. A new window pops up on top of the rest of the page content, with a longer summary, additonal links, a bigger image etc  

3. The background behind that image is both blurred and / or greyed out, so it doesnt distract from or interfere with the pop up.  

4. the user can then either click the X icon in the window (or hit esc on desktop) to close the modal.  

Sounds relatively simple, doesnt it?  

Heres where the trouble began.  

IMAGE OF MODAL BLURRED  

Overlay to blur and dull background.  

Errors! Z index wont work.  

Moved into div, doesnt block enough of the page.  

Generator function global object  

Fix event handler.
