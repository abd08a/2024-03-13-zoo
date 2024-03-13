import "./style.css";
import { Elephant } from "./Animal/Elephant.ts";
import { Tiger } from "./Animal/Tiger.ts";
import { Zebra } from "./Animal/Zebra.ts";
import { AnimalType } from "./Animal/animal.types.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
       <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

const elephant = new Elephant({ name: "Joe", age: 5, weight: 2000 });

console.log(elephant);

elephant.walk();
elephant.makeSound();

const zebra = new Zebra({
  name: "Stripes",
  age: 8,
  maxSpeed: 80,
  origin: "Africa",
});

console.log(zebra);

zebra.run();
zebra.makeSound();

const tiger = new Tiger({ name: "Roar", age: 4, outsideLast8Hours: true });

console.log(tiger);

tiger.hunt();
tiger.makeSound();
