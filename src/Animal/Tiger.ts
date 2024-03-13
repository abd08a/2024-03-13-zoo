import { AnimalType } from "./animal.types.ts";
import { Animal } from "./Animal.ts";
import { HuntingAnimal } from "./Animal.ts";

export class Tiger extends HuntingAnimal {
  private outsideLast8Hours: boolean;

  constructor({
    name,
    age,
    outsideLast8Hours,
  }: AnimalType & { outsideLast8Hours: boolean }) {
    super({ name, age });
    this.outsideLast8Hours = outsideLast8Hours;
  }
}
