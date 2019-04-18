const strotate: any = (<any> window).strotate;

const strong = document.querySelector("#value");
if (strong) {
  strong.innerHTML = strotate.rot13("Hello, world!");
}
