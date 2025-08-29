
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Answer: getElementById selects a single element by its ID, while getElementsByClassName selects all elements with a given class and returns a live collection. querySelector selects the first match using a CSS selector, and querySelectorAll selects all matches and returns a static list.

2. How do you **create and insert a new element into the DOM**?

Answer: When I want to add something new to the DOM, I first create the element, then set its text or attributes, and finally insert it into the page using methods like append or insert.

3. What is **Event Bubbling** and how does it work?

Answer: Event bubbling means that when an event occurs on a child element, it automatically propagates upward through its parent elements until it reaches the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?

Answer: Event delegation is the practice of assigning a single event listener to a parent element to handle events from its children, making the code more efficient and flexible.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

Answer: preventDefault stops the browser’s default action, like submitting a form or opening a link, while stopPropagation prevents the event from moving up to parent elements.

