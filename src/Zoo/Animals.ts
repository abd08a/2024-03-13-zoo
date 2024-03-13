import { Animal } from "../Animal/Animal.ts";

class Animals {
  private animals: Animal[];

  constructor() {
    this.animals = [];
  }

  addAnimal(animal: Animal): void {
    this.animals.push(animal);
  }

  getAnimals(): Animal[] {
    return this.animals;
  }
}
