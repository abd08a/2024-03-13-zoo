import { AnimalType } from "./animal.types.ts";

export class Animal {
  name: string;
  age: number;

  constructor({ name, age }: AnimalType) {
    this.name = name;
    this.age = age;
  }

  makeSound() {}
}

export class WalkingAnimal extends Animal {
  constructor(data: AnimalType) {
    super(data);
  }

  walk() {
    console.log(`${this.name} is walking.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }

  makeSound() {
    console.log("too-too!");
  }
}

export class RunningAnimal extends Animal {
  constructor(data: AnimalType) {
    super(data);
  }

  run() {
    console.log(`${this.name} is running.`);
  }

  jump() {
    console.log(`${this.name} is jumping.`);
  }

  makeSound() {
    console.log("yha-yha!");
  }
}

export class HuntingAnimal extends Animal {
  constructor(data: AnimalType) {
    super(data);
  }

  swim() {
    console.log(`${this.name} is swimming.`);
  }

  hunt() {
    console.log(`${this.name} is hunting.`);
  }
  makeSound() {
    console.log("rooaarrr!");
  }
}
