/**
 * Form validation + simulated AJAX submit (Part 3)
 * Works for contact.html and enquiry.html
 */
(function () {
  "use strict";

  function showError(input, message) {
    input.classList.add("invalid");
    var err = input.parentElement.querySelector(".form-error");
    if (!err) {
      err = document.createElement("p");
      err.className = "form-error";
      input.parentElement.appendChild(err);
    }
    err.textContent = message;
    err.classList.add("visible");
  }

  function clearError(input) {
    input.classList.remove("invalid");
    var err = input.parentElement.querySelector(".form-error");
    if (err) err.classList.remove("visible");
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isValidPhone(value) {
    // SA-friendly: digits, spaces, optional +
    var digits = value.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 12;
  }

  // Contact form
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("name");
      var email = document.getElementById("email");
      var message = document.getElementById("message");
      var type = document.getElementById("message-type");
      var valid = true;

      [name, email, message].forEach(clearError);
      if (type) clearError(type);

      if (!name.value.trim() || name.value.trim().length < 2) {
        showError(name, "Please enter your full name (at least 2 characters).");
        valid = false;
      }
      if (!isValidEmail(email.value.trim())) {
        showError(email, "Please enter a valid email address.");
        valid = false;
      }
      if (type && !type.value) {
        showError(type, "Please select a message type.");
        valid = false;
      }
      if (!message.value.trim() || message.value.trim().length < 10) {
        showError(message, "Please enter a message of at least 10 characters.");
        valid = false;
      }

      if (!valid) return;

      var success = document.getElementById("contact-success");
      var submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";

      // Simulated AJAX
      setTimeout(function () {
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = "Submit";
        if (success) {
          success.classList.add("visible");
          success.focus();
        }
      }, 800);
    });
  }

  // Enquiry form
  var enquiryForm = document.getElementById("enquiry-form");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("enq-name");
      var email = document.getElementById("enq-email");
      var phone = document.getElementById("enq-phone");
      var device = document.getElementById("enq-device");
      var issue = document.getElementById("enq-issue");
      var valid = true;

      [name, email, phone, device, issue].forEach(clearError);

      if (!name.value.trim() || name.value.trim().length < 2) {
        showError(name, "Please enter your name.");
        valid = false;
      }
      if (!isValidEmail(email.value.trim())) {
        showError(email, "Please enter a valid email.");
        valid = false;
      }
      if (!isValidPhone(phone.value.trim())) {
        showError(phone, "Please enter a valid phone number (at least 10 digits).");
        valid = false;
      }
      if (!device.value) {
        showError(device, "Please select a device type.");
        valid = false;
      }
      if (!issue.value.trim() || issue.value.trim().length < 10) {
        showError(issue, "Please describe the issue (at least 10 characters).");
        valid = false;
      }

      if (!valid) return;

      var response = document.getElementById("enquiry-response");
      var submitBtn = enquiryForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = "Checking…";

      var turnaround = {
        phone: "Most phone repairs are completed within 24–48 hours. Typical screen repairs start from R450.",
        laptop: "Laptop diagnostics usually take 1–2 working days. Upgrades (RAM/SSD) often same-day.",
        console: "Console cleaning and fan work is typically ready in 2–3 working days.",
        other: "We will confirm availability and a quote within one business day."
      };

      setTimeout(function () {
        var key = device.value;
        var msg =
          "Thanks, " +
          name.value.trim().split(" ")[0] +
          "! " +
          (turnaround[key] || turnaround.other) +
          " We will contact you at " +
          email.value.trim() +
          " or " +
          phone.value.trim() +
          " to confirm.";
        if (response) {
          response.textContent = msg;
          response.classList.add("visible");
        }
        enquiryForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = "Get Estimate";
      }, 900);
    });
  }
})();
