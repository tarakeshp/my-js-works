export default class EventEmitter {
    // private member #event Map
    #events = new Map();
    #onceEvents = new Map();

    on(name, callback) {
        if (this.#events.has(name)) {
            let callbacks = this.#events.get(name);
            callbacks.push(callback);
            this.#events.set(name, callbacks)
        } else {
            this.#events.set(name, [callback])
        }
    }

    once(name, callback) {
        this.on(name, callback);
        this.#onceEvents.set(name, name);
    }

    off(name) {
        if (this.#events.has(name)) {
            this.#events.delete(name);
        }
        if (this.#onceEvents.has(name)) {
            this.#onceEvents.delete(name);
        }
    }

    emit(name, ...args) {
        if (this.#events.has(name)) {
            this.#events.get(name).forEach(callback => {
                callback(...args);
            });
            if (this.#onceEvents.has(name)) {
                this.off(name);
            }
        } else {
            console.warn(`event ${name} does not exist.`)
        }
    }
}

