type KeyValuePair<K, V> = {
  key: K;
  value: V;
};

const stringNumberPair: KeyValuePair<string, number> = {
  key: "age",
  value: 30,
};

const numberBooleanPair: KeyValuePair<number, boolean> = {
  key: 1,
  value: true,
};

console.log(stringNumberPair); // Output: { key: 'age', value: 30 }
console.log(numberBooleanPair); // Output: { key: 1, value: true }

/**
 * Generics Constraints With Objects
 */

type HasId = {
  id: number;
};

function printId<T extends HasId>(obj: T): void {
  console.log(obj.id);
}

const user = {
  id: 1,
  name: "Alice",
};

printId(user); // Output: 1

const product = {
  id: 101,
  name: "Laptop",
};

printId(product); // Output: 101
