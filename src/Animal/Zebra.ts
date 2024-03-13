import { AnimalType } from "./animal.types.ts";
import { Animal } from "./Animal.ts";
import { RunningAnimal } from "./Animal.ts";

export class Zebra extends RunningAnimal {
  private maxSpeed: number;
  private origin: string;

  constructor({
    name,
    age,
    maxSpeed,
    origin,
  }: AnimalType & { maxSpeed: number; origin: string }) {
    super({ name, age });
    this.maxSpeed = maxSpeed;
    this.origin = origin;
  }
}
