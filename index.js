"use strict";
// A mixin function that adds timestamp functionality
function Timestamp(Base) {
    // The function returns a new class that extends the passed Base class
    return class extends Base {
        constructor() {
            super(...arguments);
            this.timestamp = new Date();
        }
        getTimestamp() {
            return this.timestamp;
        }
    };
}
