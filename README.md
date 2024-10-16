# Frontend Mentor - Product list with cart solution

This is a solution to the [Product list with cart challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add items to the cart and remove them
- Increase/decrease the number of items in the cart
- See an order confirmation modal when they click "Confirm Order"
- Reset their selections when they click "Start New Order"
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Repository URL](https://github.com/LorryAfriyie/product-list-with-cart)
- Live Site URL: [Live site URL](https://lorryafriyie.github.io/product-list-with-cart/)

## My process

### Built with

- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite.js](https://vitejs.dev) - Frontend Tooling

### What I learned

The code below show is the implementation of a useContext component.

```js
import { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  function modalToggle(value) {
    setShowModal(value);
  }
  return (
    <ModalContext.Provider value={{ showModal, modalToggle }}>
      {children}
    </ModalContext.Provider>
  );
}
```

The code below shows to to allow the useContext component to consume a component that will be using the functions defined on the useContext component.

```js
import { ModalProvider } from "./context/ModalContext";
import { Modal } from "./components/Modal";

function App() {
  return (
    <div className="app">
      <ModalProvider>
        <Modal />
      </ModalProvider>
    </div>
  );
}
```

### Continued development

- To be able to fully understand the utilize the use of useContext hook when the situation requires it. The useContext hook allows for global access of functions throughout a react application when the components are encapsulated within the context provider component of a useContext hook.

- To learn how to create well performant web applications.

### Useful resources

- [Creating a shopping cart using react.js](https://www.youtube.com/watch?v=lATafp15HWA) - This tutorial was able to help me understand the use of the react hook useContext and how it should be used to manage the state of a shopping cart.

## Author

- Frontend Mentor - [@LorryAfriyie](https://www.frontendmentor.io/profile/LorryAfriyie)
