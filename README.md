# Mini Message Board (Express + TypeScript + EJS)

A simple message-board web application built using **Node.js**, **Express**, **TypeScript**, and **EJS**.  
Users can view messages, submit new ones, and see details for any message by ID.


## Tech Stack

- Node.js  
- Express  
- TypeScript  
- EJS  
- dotenv  
- ESLint + Prettier  
- tsx (dev runtime)

---

## Guide

First, get the project by doing
```bash
git clone git@github.com:Cooladx/messageBoard.git
```

Then, in the root folder
```bash
npm install
```



### Development

Run the development server (auto reload):

```bash
npm run dev
```



### Build for Production

```bash
npm run build
```

This compiles TypeScript and copies views + public assets into `dist/`. To run, you would do

```bash
npm run start
```


### Clean Build Artifacts

```bash
npm run clean
```

Deletes `dist/`.



### Environment Variables

Create a `.env` file:

```
PORT=4000
```

Defaults to **3000** if not set.

---

### Disclaimer

- Messages are stored **in memory** → restarting server resets them.  
- Project is for learning Express + TypeScript structure, not production use.

