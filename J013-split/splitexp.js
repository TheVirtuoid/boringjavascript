const animals = "Cat, Dog,   Horse  ,Cow,Coyote  , Road Runner,  Dolphin, Whale,    Lizard";

// const animalsArray = animals.split(',');
const animalsArray = animals.split(/\s*,\s*/);

console.log(animalsArray);
