import "./style.css";
import { Elephant } from "./Animal/Elephant.ts";
import { Tiger } from "./Animal/Tiger.ts";
import { Zebra } from "./Animal/Zebra.ts";
import { Employees } from "./Zoo/Employees.ts";
import { ZooKeeper } from "./Employee/ZooKeeper.ts";
import { Employee } from "./Employee/Employee.ts";

const createEmployeeBtn = document.getElementById(
  "create-employee-btn"
) as HTMLButtonElement;

const employees = new Employees();

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

createEmployeeBtn.addEventListener("click", () => {
  const isEmployeeAtZoo = isEmployeeAtZooInput.checked;
  const zooKeeper = new ZooKeeper(isEmployeeAtZoo, new Date());
  employees.addEmployee(zooKeeper);

  console.log(employees);
});

//===================================================

// const employeesWrapper = document.getElementById(
//   "employees-wrapper"
// ) as HTMLDivElement;

// const animalsWrapper = document.getElementById(
//   "animals-wrapper"
// ) as HTMLDivElement;

// const createEmployeeBtn = document.getElementById(
//   "create-employee-btn"
// ) as HTMLButtonElement;

// const isEmployeeAtZoo = document.getElementById(
//   "is-employee-at-zoo-input"
// ) as HTMLInputElement;

// const safetyTrainingCompletionDate = document.getElementById(
//   "safety-date"
// ) as HTMLInputElement;

// const addEmployeesToScreen = (employees: Employees[]) => {
//   employees.forEach((employee) => {
//     const employeeWrapper = document.createElement("div");
//     employeeWrapper.classList.add("employee-wrapper");

//     const isEmployeeAtZoo = document.createElement("h2");
//     const safetyTrainingCompletionDate = document.createElement("h2");

//     isEmployeeAtZoo.textContent = employee.addEmployee.toString();
//     safetyTrainingCompletionDate.textContent = employee.addEmployee.toString();

//     employeeWrapper.append(isEmployeeAtZoo, safetyTrainingCompletionDate);
//     employeesWrapper.append(employeeWrapper);
//   });
// };

// createEmployeeBtn.addEventListener("click", () => {
//   const employee = new ZooKeeper({
//     isEmployeeAtZoo: isEmployeeAtZoo.value,
//     safetyTrainingCompletionDate: safetyTrainingCompletionDate.value,
//   });
// });
