let selectedCar = "";
let pricePerDay = 0;

function rentCar(carName, price) {
  selectedCar = carName;
  pricePerDay = price;

  document.getElementById("selectedCar").innerText =
    "Selected Car: " + carName + " (Rs. " + price + " per day)";
}

function calculateTotal() {
  const days = document.getElementById("days").value;

  if (selectedCar === "") {
    alert("Please select a car first!");
    return;
  }

  const total = days * pricePerDay;

  document.getElementById("totalPrice").innerText =
    "Total Price: Rs. " + total;
}
