const JSONString = `{"name":"Fluffy",alive:true,"stats":{"height":0.398,"weight":6.12,"claws":true}}`;

const myCat = JSON.parse(JSONString);
console.log(myCat);