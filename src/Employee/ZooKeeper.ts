import { Employee } from "./Employee.ts";
import { Animal } from "../Animal/Animal.ts";

class ZooKeeper extends Employee {
  constructor(isEmployeeAtZoo: boolean, safetyTrainingCompletionDate: Date) {
    super(isEmployeeAtZoo, safetyTrainingCompletionDate);
  }

  enterZoo(): void {
    console.log("ZooKeeper entered the zoo.");
  }

  leaveZoo(): void {
    console.log("ZooKeeper left the zoo.");
  }

  feedAnimal(animal: Animal): void {
    console.log(`ZooKeeper is feeding ${animal.name}.`);
    // Log the feeding action with current time
    console.log(`Feeding recorded for ${animal.name} at ${new Date()}.`);
  }
}
