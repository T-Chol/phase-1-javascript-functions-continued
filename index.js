// code your solution here
// index.js

// Saturday activity function with default and optional parameters
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

// Monday work activity function using function expression
const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

// Function that returns a function to wrap an adjective in a highlight
function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`;
    }
}

module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
};
