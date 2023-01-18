/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertEl.addEventListener("click", function() {
  let x = inputEl.value
  const check = /^[0-9]+$/

  if (!x.match(check)) {
    alert("Please enter a number")
  }
  else {
    lengthEl.innerText = `${inputEl.value} meters = ${(inputEl.value*3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value/3.281).toFixed(3)} meters`
    volumeEl.innerText = `${inputEl.value} litres = ${(inputEl.value*0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value/0.264).toFixed(3)} litres`
    massEl.innerText = `${inputEl.value} kilos = ${(inputEl.value*2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value/2.204).toFixed(3)} kilos`
  }
})