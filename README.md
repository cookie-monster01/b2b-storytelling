
# B2B Storytelling - Issues and Learnings

## Service > dropdown and dropdown-content working as tabs on large-screen (commented incase I would need to revert).

* Unable to close dropdown on small-screen on selecting a dropdown-tab, the dropdown remains open and covers the page, hiding the content. Have to close it manually. 
* Clicks open service page instead of jumping directly on the clicked link. 
* On large-screen the service nav__link has to be clicked second time to keep the dropdown-content open. 

## Service Page - Accesibility issues.

* Links don't work correctly when Tab key is used to jump on the targeted content. 
* Only the first link (id="brand-management") works correctly. 

## Service Page - Link Styles. 

* The tab-btn that has <span class="line__style"> doesn't expand as intended. 
   * The .line__style expands only when cursor pointer is hovered on <span> part of the link but does not expand when hovered on the whole button/link or text part of the link. 
   * I would like the .line__style to expand on hover / focus / active. And remain expanded until the link is active. (I will have to learn JavaScript for that)
  

### My Learnings from th project.

* I learnt a little more about pseudo-classes and pseudo-elements.
* CSS attributes while working with JavaScript eg: [data-tab-target] .
* CSS Combinators eg: 

```
 .services__content:has(+ .services__content:target) {
        border: none;
    }
```

### JavaScript taken from YouTube

* [Link for Dropdown:] (https://www.youtube.com/watch?v=S-VeYcOCFZw)
* [Link for Tabs:] (https://www.youtube.com/watch?v=5L6h_MrNvsk)
* [Link for Scrollers:] (https://www.youtube.com/watch?v=iLmBy-HKIAw) 
* [Link for Auto-Typing:] (https://www.youtube.com/watch?v=DLs1X9T1GcY)

