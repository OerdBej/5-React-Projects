const questions = [
    {
        id: 1,
        title: 'What is JavaScript, and what are its key features?',
        info: 'JavaScript is dynamically typed, object-oriented, primarily used as a client-side scripting language, supports functional programming, and has built-in support for asynchronous programming. These features make JavaScript a versatile language that can handle a wide range of programming tasks.',
    },
    {
        id: 2,
        title: 'What is the difference between let, var, and const in JavaScript?',
        info: 'The difference between let, var, and const in JavaScript is that let and const are block-scoped, while var is function-scoped. Additionally, const is a constant variable that cannot be reassigned, while let and var are mutable variables that can be reassigned.',
    },
    {
        id: 3,
        title: 'How does event bubbling work in JavaScript, and how can it be prevented?',
        info: 'Event bubbling in JavaScript is when an event on a nested element triggers listeners on its parent elements, but it can be stopped using event.stopPropagation().',
    },
    {
        id: 4,
        title: 'What is a closure in JavaScript, and how is it used?',
        info: 'A closure in JavaScript is a function that can access variables from its outer function even after that function has returned. Closures are often used to create private variables and functions, maintain state between function calls, and in event handlers and callbacks.',
    },
    {
        id: 5,
        title: 'How does asynchronous programming work in JavaScript, and what are some commonly used techniques for handling asynchronous code?',
        info: 'JavaScript is asynchronous programming executes code without blocking the main thread, and can be done with callbacks, promises, or async/await. Common techniques include error handling with try/catch, await to wait for promises, and Promise.all() for parallel operations.',
    },
];
export default questions;
