const form = document.getElementById("donationForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value;
  const amount = form.querySelector("input[type='number']").value;

  if (!name || !amount) {
    alert("Please fill in all required fields.");
    return;
  }

  alert(`Thank you, ${name}! Your donation of ₦${amount} was received.`);

  form.reset();
});
