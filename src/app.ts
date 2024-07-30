interface Keyboard {
  type: string;
  modelID: number;
}

const createKeyboard = (modelID: number): Keyboard => {
  return { type: "Keyboard", modelID };
};
