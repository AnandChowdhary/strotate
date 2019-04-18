const input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
const output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".split("");

interface i {
  [key: string]: string;
}

const lookUp: i = input.reduce(
  (m, k, i) =>
    Object.assign(m, {
      [k]: output[i]
    }),
  {}
);

const lookDown: i = output.reduce(
  (m, k, i) =>
    Object.assign(m, {
      [k]: input[i]
    }),
  {}
);

const rot13 = (text: string) => {
  return text
    .split("")
    .map(x => lookUp[x] || x)
    .join("");
};

const unRot13 = (text: string) => {
  return text
    .split("")
    .map(x => lookDown[x] || x)
    .join("");
};

export { rot13, unRot13 };

if (window) (<any>window).strotate = { rot13, unRot13 };
