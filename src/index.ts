import World from "./world";

const root: HTMLElement | null = document.getElementById("root")
const world = new World("Hello World!!!　福井テスト成功です");
world.sayHello(root);