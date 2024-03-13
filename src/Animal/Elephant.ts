import { AnimalType } from "./animal.types.ts";
import { Animal } from "./Animal.ts";
import { WalkingAnimal } from "./Animal.ts";

export class Elephant extends WalkingAnimal {
  private weight: number;

  constructor({ name, age, weight }: AnimalType & { weight: number }) {
    super({ name, age });
    this.weight = weight;
  }
}
