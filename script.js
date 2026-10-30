
import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("active");
  });

  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("active");
    });
  });
}

// CUSTOMER BOOKING FORM
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value.trim();
    const service = document.getElementById("service").value;
    const details = document.getElementById("details").value.trim();

    if (!name || !email || !country || !service) {
      alert("Please complete all required fields.");
      return;
    }

    const submitButton = bookingForm.querySelector(
      'button[type="submit"]'
    );

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Saving booking...";
    }

    try {
      // SAVE CUSTOMER BOOKING TO FIRESTORE
      await addDoc(collection(db, "bookings"), {
        name,
        email,
        country,
        service,
        details,
        createdAt: serverTimestamp()
      });

      // OPEN WHATSAPP AFTER SUCCESSFUL SAVE
      const message =
        `Hello Nwankwo Web LTD!\n\n` +
        `New Website Booking\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Country: ${country}\n` +
        `Service: ${service}\n` +
        `Details: ${details}`;

      bookingForm.reset();

      alert("Your booking has been saved! WhatsApp will now open.");

      window.location.href =
        "https://wa.me/2349168441489?text=" +
        encodeURIComponent(message);

    } catch (error) {
      console.error("Booking error:", error);
      alert("Booking could not be saved. Please try again.");

    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Book Now";
      }
    }
  });
}

// FAQ ACCORDION
document.querySelectorAll(".faq-question").forEach(question => {
  question.addEventListener("click", () => {
    const item = question.parentElement;
    const wasOpen = item.classList.contains("active");

    document.querySelectorAll(".faq-item").forEach(faq => {
      faq.classList.remove("active");
    });

    if (!wasOpen) {
      item.classList.add("active");
    }
  });
});

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", event => {
    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// COPYRIGHT YEAR
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

console.log("Nwankwo Web LTD Firebase system loaded.");
