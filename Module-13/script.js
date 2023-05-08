function calculateBMI() {
    const weight = document.getElementById("weightInput").value;
    const height = document.getElementById("heightInput").value;
    const bmi = weight / (height * height);
    document.getElementById("result").innerHTML = `Your BMI is ${bmi.toFixed(2)}`;
  }
  
  document.getElementById("calculateBtn").addEventListener("click", calculateBMI);
  