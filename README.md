### Why I would always prefer async commands in Tauri?

```bash
git clone https://github.com/Charlie-XIAO/why-tauri-async-commands.git
cd why-tauri-async-commands
npm install
npm run tauri dev
```

There are two buttons: `Greet [sync]` and `Greet [async]`. Both will sleep for 5 seconds, but the former sleeps in a synchronous command while the latter sleeps in an asynchronous command.

Try clicking the `Greet [async]` button first: you should be able to do whatever else, like clicking the links, dragging the window around, etc. while it is still sleeping. Then click the `Greet [sync]` button, the window will be frozen. You will not be able to drag the window around, and if you try to do interactions the UI will be unresponsive.
