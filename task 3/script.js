function convertToFarhenheit() {
  const celsius = document.getElementById("celsiusInput").value;
  const fahrenheit = (celsius * 9/5) + 32;
  document.getElementById("fahrenheitInput").value = fahrenheit;
  document.getElementById("result").innerHTML = `${celsius}°C is equal to ${fahrenheit}°F`;
}

function convertToCelsius() {
  const fahrenheit = document.getElementById("fahrenheitInput").value;
  const celsius = (fahrenheit - 32) * 5/9;
  document.getElementById("celsiusInput").value = celsius;
  document.getElementById("result").innerHTML = `${fahrenheit}°F is equal to ${celsius}°C`;
}