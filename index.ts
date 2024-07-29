class Box<T> {
  private _value: T;

  constructor(value: T) {
    this._value = value;
  }

  get value(): T {
    return this._value;
  }

  set value(newValue: T) {
    this._value = newValue;
  }
}

const numberBox = new Box<number>(123);
console.log(numberBox.value); // Output: 123

const stringBox = new Box<string>("Hello");
console.log(stringBox.value); // Output: Hello
