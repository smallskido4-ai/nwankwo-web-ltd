const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const country = document.getElementById("country").value.trim();
  const service = document.getElementById("service").value;
  const details = document.getElementById("details").value.trim();

  if (!name || !email || !country || !service || !details) {
    alert("Please complete all fields.");
    return;
  }

  const message = 
`Hello Nwankwo Web LTD!

I want to book a website.

CUSTOMER DETAILS
Name: ${name}
Email: ${email}
Country: ${country}

SERVICE: ${service}

PROJECT DETAILS:
${details}

Please contact me with your quotation.

Thank you!`;

  const phone = "2349168441489";

  const whatsappURL =
    "https://api.whatsapp.com/send?phone=" +
    phone +
    "&text=" +
    encodeURIComponent(message);

  window.location.href = whatsappURL;
});
                                          
