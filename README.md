# LEARNING REACT 6 - CONDITIONAL RENDERING

React Introduction

## Installation

Clone this repository and use `npm start` in your terminal to make it start

## Activities and Objectives

You are tasked to create a wrapper component `If`, similar to the `Container` component of the previous exercise, but with a few tweaks:

* `If` accepts only one prop, `condition`;
* when `condition` is `true` it renders the content inside (which might be one or more standard HTML elements, one or more React Component or any mix of the above);
* when `condition` is `false` nothing is rendered;

Examples:

```
// later
```

## Extra notes and tips

When you need to work on a wrapper like this, remember that you can easily call the content of a Component with `this.props.chuldren`.

Similarly, you can render it just putting `{this.props.chuldren}` inside your code.

Can you think of different ways to implement the conditional rendering inside the component?

Does it work on multilayered DOM elements?

What would it happen if the condition was completely or partially related to some element of the `state` of your app?
