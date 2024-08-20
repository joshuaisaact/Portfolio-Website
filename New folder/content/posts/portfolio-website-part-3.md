+++
title = 'Hugo with the flow'
date = 2024-08-20T06:00:24+01:00
draft = false
featuredimage = "media/blog/hugo flow/hugo-original-wordmark.svg"
summary = "How I used Hugo to automate my blog static site generation, and how to set up Hugo with an existing website"
+++

### Effortless website building

Problem space - lots of sites, hard to maintain across multiple skins, didnt want to spend ages routing, wanted tags.  

When it came time to build the blog part of my site, I was faced with a few requirements that needed some careful thought. The first of which was how i was going to handle lots of continuously evolving blog posts, over multiple themes that may end up being mirrored on duplicate sites.  

I initially considered an SPA approach, however i realised this would soon become cumbersome using vanilla JS, and would make for a very bloated html file.  

Given that, I decided to go with an MPA approach. I also wanted features like tagging, inter-page routing, but most importantly, i wanted the ability to write blogposts in Markdown files, which could then be uploaded as websites.  

Enter the Static Page Generator!  

After doing some research I landed on Hugo, which is written in Go and is (supposedly) blisteringly fast, and well-supported in terms of templates and docs, and will automatically build a static blog site from a folder full of markdown files (and some html/css/js templates).  

Here's how it went.  

Firstly, i had to use homebrew to install Hugo.  

IMAGE OF INSTALL COMMAND  

This was painless, and set me up with a skeleton of folders that would be used to build the blog subsite.  

PICTURE OF FOLDERS  

My use case for Hugo was atypical - its most commonly used to launch an entire website, rsther than a sub-site. But it worked well.  

I started out by building the empty template files - Hugo has a bunch of off the shelf themes, but given my main site was already built, i instead had to copy across the CSS and the existing header and footer html.  

This gave me empty pages that shared the nav bar and footer from my existing site  

PICTURE OF EMPTY PAGE  

the next step was to test it with some markdown files. I had a few blog posts prewritten on my phone (I try and write them on the tube as its a good distraction from the sauna that is the Victoria line).  

Heres what it looked like:  

PICTURE OF FIRST MARKDOWN  

Next step was to neaten up the CSS, fix the margins and general spacing. Hugo puts images in <figure> tags by default, so these had to be fully themed.  

The next step was integrating it with my existing site
