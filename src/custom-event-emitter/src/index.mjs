import EventEmitter from "./event-emitter.mjs";

const eventEmitter = new EventEmitter();

eventEmitter.on("event-1", (...args) => {
    console.log("fired event-1 with params: %s", args.length === 0 ? '0' : args.join(', '));
});

eventEmitter.once("event-2-once", () => {
    console.log("fired event-2-once")
});

eventEmitter.emit("event-1");
eventEmitter.emit("event-2-once");
eventEmitter.emit("event-1", 'param1', 'param2');
eventEmitter.emit("event-2-once");