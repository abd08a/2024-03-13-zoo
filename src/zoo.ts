import "./style.css";
import { Elephant } from "./Animal/Elephant.ts";
import { Tiger } from "./Animal/Tiger.ts";
import { Zebra } from "./Animal/Zebra.ts";
import { ZooKeeper } from "./Employee/ZooKeeper.ts";

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

const zooKeeper = new ZooKeeper(true, new Date());

console.log(zooKeeper);

zooKeeper.enterZoo();

zooKeeper.feedAnimal(tiger);

zooKeeper.feedAnimal(elephant);
