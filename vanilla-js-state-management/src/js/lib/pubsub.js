export default class PubSub {
    constructor() {
        this.events = {};
    }

    subscribe(event, callback) {
        let self = this;
    
        if (!self.events.hasOwnProperty(event)) {
            self.event[event] = [];
        }

        return self.event[event].push(callback);
    }

    publish(event, data ={}) {
        let self = this;

        if(!self.events.hasOwnProperty(event)) {
            return [];
        }

        return self.events[event].map(callback => callback(data));
    }
}

