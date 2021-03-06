# Dev Screening (Chat App)

> A basic chat app, bootstrapped with create-react-app to provide an environment for demonstrating the skills of a development candidate.

## Getting Started

Clone this repo:

```
git clone --single-branch https://github.com/Renddslow/screening-chat-app --depth=1
```

Install all dependencies and run the app:

```
yarn && yarn watch
```

### Yarn watch?

`yarn watch` let's us run the server and the client concurrently but be separate services. Normally we would do `yarn start` but for some reason, `start` will run more than once with both concurrent npm-script packages I've tried to use.

## The Project

You will build a chat app. The goal is to demonstrate your ability to create interactive React components, respond to data flow, and work comfortably across the stack.

The chat app is designed to be a simple chat room that people can login to with just a first name, username, and email address. All messages will be broadcast to the full room.

### What's Already There

- [x] A chat server
  - [x] `HTTP POST` method for adding new users
  - [x] Socket broadcast for when a new user has been added
  - [x] Basic Web Socket connection setup
  - [x] Basic Web Socket disconnect setup
  - [x] Chat message receipt and broadcasting
- [x] Client App
  - [x] React App
  - [x] Login screen
  - [x] Basic routing
  - [x] Client-side web socket set up
  - [x] Web Socket context provider for easy use
- [x] Styling Tools
  - [x] 💅 Styled Components
  - [x] Sass Support (`import 'ComponentStyle.scss';`)

### What You'll Add

The following list of features should be approached _in order_. This should allow you to have something working at the end of our time assuming you have at least checked one box.

The goal is not to check every box, but to demonstrate what you can do with the time you are given.

![Gandalf wisdom](https://images.squarespace-cdn.com/content/v1/5b43c205c3c16ab2868e3e80/1562359928493-7SCONEUNBBYXBI5PERAV/ke17ZwdGBToddI8pDm48kLN33MCaMri5_kQBC52hVftZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxl4eJ1_yh17i5W-8EZepd7i6cx6vuNmDP_l-samD14oL8qDRtH4rMNEwHpjJbhHkA/gandalf.gif)

**Treat this like you would a work project.** We want to see how you create maintainable and reusable code just as much as we want to see you build cool features.

- [ ] Chat interface
  - [ ] I can send a message
  - [ ] I can receive messages
  - [ ] My messages display in the chat room in a way that indicates they belong to me
  - [ ] Messages from others display in the chat room in a way that indicates they belong to others
- [ ] Additional Features
  > You may pick any of the following:
  - Slash Commands
    - I can enter a slash `/` followed by a command to execute a command
    - I can pass arguments to the command to enhance the command
    - The structure for creating slash commands is reusable
  - Emoji Support
    - I can send and receive emoji
    - I can pick a standard set of emoji from some sort of picker
    - I can use colons `:` to select and send emoji
  - Image Support
    - I can send images
    - I can receive images sent by other chat users
