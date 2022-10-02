import Builder from "./Builder.js";
import printRobotZoo from "./printRobotZoo.js";

const cat = Builder.buildCat('Fluffy');
const dog = Builder.buildDog('Fido');
const bird = Builder.buildBird('Tweety');
const catOnWheels = Builder.buildCatWithWheels('Mr. Tinkles');
const dogWithoutTail = Builder.buildDogWithoutTail('Rover');

printRobotZoo([cat, dog, bird, catOnWheels, dogWithoutTail ]);