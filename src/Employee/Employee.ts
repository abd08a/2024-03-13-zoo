export abstract class Employee {
  isEmployeeAtZoo: boolean;
  safetyTrainingCompletionDate: Date;

  constructor({ isEmployeeAtZoo, safetyTrainingCompletionDate }: Employee) {
    this.isEmployeeAtZoo = isEmployeeAtZoo;
    this.safetyTrainingCompletionDate = safetyTrainingCompletionDate;
  }

  abstract enterZoo(): void;

  abstract leaveZoo(): void;

  takeSafetyTrainings(): void {
    console.log("Taking safety trainings...");
  }
}
