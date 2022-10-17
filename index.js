const exercice = require('./information');
console.log(exercice);

const cowSay = require('./node_modules/cowsay');
console.log(cowSay.say({
    text : `${exercice.name} ${exercice.campus}`,
    e : "oO",
    T : "U "
}));

