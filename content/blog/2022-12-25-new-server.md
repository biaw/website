---
authors: promise
tags: [updates, server, infrastructure]
---


# New server!

This is an unusual blog post, it's mostly me just ranting about all the cool stuff on the new server we have. And the specs are amazing.

My wallet is on fire though. But that's fine.

<!-- truncate -->


## Why switch?

So, it's not a huge improvement in comparison to our old server's specifications. We only get 6 more cores and 800 gigabytes more storage space. It's still a big improvement going from 12 to 18 cores and 1.2 to 2 whole terabytes of storage, but the rest is pretty much the same. [See all the specifications](#specifications-of-the-new-server).

However, since there's a lot of services and apps on that one machine, it's a pain to maintain and do updates on. It's also one of my first long-standing Linux servers I've used, so there's a lot of stuff I've done on it to "try things out" and then forgotten how to un-do.

The uptime on the old server as of writing this is 425 days (it's been up since October 25th 2021), so believe me when I say I've wanted to do a big overhaul on the server for a long time. I've honestly lost count on the amount of services and Discord bots and everything that are hooked up to that thing. It's definitely a mess.


## A few improvements

Back in the old days when I didn't know what a Dockerfile was, everything was just running there. And then it all broke. And then I had to restart stuff. Even Countr's mongo database is on the host container. I didn't know what a "reverse proxy" was, googled it and copied some code over, I literally did the ["try it and see"](https://tryitands.ee) meme, but on a production server.

With that being said, my idea for the new year is to keep the server clean and organized. It's no longer a server for my own personal enjoyment, it's a server for Promise Solutions. I want to keep it clean and organized, and I want to make sure everything stays that way.

I am also aiming towards a more secure server, with firewalls, certificates, SSH key-pairs and more. Stay tuned for more blog posts on that ;)


## Specifications of the new server

| Features | New server | Old server |
|:---------|:----------:|:----------:|
| Processor (vCores) | 18 | 12 |
| RAM | 48GB DDR4 ECC | 48GB DDR4 |
| Storage | 1.2TB HDD RAID10 | 2TB HDD RAID10 |
| Unthrottled traffic | 80TB | 80TB |
| Network card | 1Gbps | 1Gbps |
