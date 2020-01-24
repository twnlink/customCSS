# customCSS
Powercord custom CSS loader plugin.

# Notes
Due to my inability to understand how to load CSS properly with Powercord (WHY NO BdApi.loadCSS?!?!?!) things are really weirdly handled.

**For example:**  
When loading CSS that is incorrect the scss parser completely throws away ALL scss, which destroys the styles for the actual editor. To prevent this I've made it so that if the parser fucks up it falls back to the editor CSS without your styles. This would be fine if it didn't act incredibly strangely.

# What to do if something fucks up
I don't think I'm wording this properly, but if you do end up reading this basically ***MAKE SURE*** your CSS is correct. If you mess something up there's no linter or anything to tell you something is messed up, it'll just use the last working version of your CSS.
