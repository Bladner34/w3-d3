'use strict';

const output = document.getElementById("output");
const output2 = document.getElementById("output2");
const output3 = document.getElementById("output3");

const jsonForm = document.getElementById("jsonForm");

jsonForm.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(jsonForm.jsonInput.value);
    try {
        const items = JSON.parse(jsonForm.jsonInput.value);
        output.textContent = items[0];
        output2.textContent = items[1];
        output3.textContent = items[2];
    } catch (error) {
        
    }
})