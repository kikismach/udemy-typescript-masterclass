// We can declare a separate type for the constructor to get rid of the confusion
type Constructor = new (...args: any[]) => {};

// A mixin function that adds timestamp functionality
function Timestamp<TBase extends Constructor>(Base: TBase) {
  // The function returns a new class that extends the passed Base class
  return class extends Base {
    protected timestamp: Date = new Date();

    getTimestamp() {
      return this.timestamp;
    }
  };
}
