## Q-1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
## Ans: 
getElementById is a method in JavaScript's Document Object Model (DOM) that returns a specific single HTML element from a web page by its unique id attribute. On the other hand, getElementsByClassName in JavaScript is a method of the Document or Element interface that returns a live HTMLCollection of all child elements those have the given class name. querySelector() in JavaScript is a method used to select the first element within the document that matches a specified CSS selector or group of selectors. querySelector() is a method in JavaScript, used to select the first element within the document that matches a specified CSS selector or group of selectors.
It is used to select a single element from the DOM tree, while querySelectorAll is used to select multiple elements from the DOM tree.

## Q-2: How do you create and insert a new element into the DOM?
## Ans: 
The steps of creating and inserting a new element into DOM are following-
#### Step 1: 
Create a new element
let newDiv = document.createElement("div");
#### Step 2: 
Add content or attributes
newDiv.textContent = "Hello World!";
newDiv.className = "my-class";
#### Step 3: 
Insert into DOM
document.body.appendChild(newDiv);

## Q-3: What is Event Bubbling and how does it work?
## Ans:
Event bubbling is the process where an event starts from the target element and propagates upward through its ancestors in the DOM hierarchy.

## Q-4: What is Event Delegation in JavaScript? Why is it useful?
## Ans:
Event delegation is a design pattern in JavaScript used to efficiently manage and handle events on multiple child elements by attaching a single event listener to a common ancestor element.
Event delegation is useful because it improves performance and scalability by reducing the number of event listeners, simplifies code, and enables automatic handling of dynamically added elements without needing to add new listeners each time.

## Q-5: What is the difference between preventDefault() and stopPropagation() methods?
## Ans:
The main difference between preventDefault() and stopPropagation() methods is-
preventDefault() stops the default action of an event and stopPropagation() stops the event from bubbling up.
