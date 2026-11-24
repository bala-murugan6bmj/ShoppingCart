const navbar = document.querySelector(".navbar");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (navbar && menuToggle && navLinks) {

    // Open and close hamburger menu
    menuToggle.addEventListener("click", () => {

        const isOpen = navbar.classList.toggle("menu-open");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });


    // Menu submenu click functionality
    const dropdownToggle = navLinks.querySelector(".dropdown-toggle");
    const dropdown = navLinks.querySelector(".dropdown");

    if (dropdownToggle && dropdown) {

        dropdownToggle.addEventListener("click", (event) => {

            // Only use click-to-expand on mobile
            if (window.innerWidth <= 767) {

                event.preventDefault();

                const isOpen = dropdown.classList.toggle("submenu-open");

                dropdownToggle.setAttribute(
                    "aria-expanded",
                    String(isOpen)
                );
            }

        });
    }


    // Close navigation when a normal link is clicked
    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            if (link.classList.contains("dropdown-toggle")) {
                return;
            }

            navbar.classList.remove("menu-open");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            if (dropdown) {
                dropdown.classList.remove("submenu-open");
                dropdownToggle.setAttribute("aria-expanded", "false");
            }

        });

    });


    // Reset mobile navigation when screen size changes
    window.addEventListener("resize", () => {

        navbar.classList.remove("menu-open");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        if (dropdown) {
            dropdown.classList.remove("submenu-open");
            dropdownToggle.setAttribute("aria-expanded", "false");
        }

    });

}
const reservationForm = document.getElementById("reservation-form");

if (reservationForm) {
    const nameInput = document.getElementById("booking-name");
    const emailInput = document.getElementById("booking-email");
    const dateInput = document.getElementById("booking-date");
    const guestsInput = document.getElementById("booking-guests");

    const successMessage =
        document.getElementById("reservation-success");

    // Prevent selecting a past reservation date.
    const today = new Date();
    const localToday = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, "0"),
        String(today.getDate()).padStart(2, "0")
    ].join("-");

    dateInput.min = localToday;

    function showError(input, message) {
        const error = document.getElementById(input.id.replace(
            "booking-", ""
        ) + "-error");

        input.classList.toggle("invalid", Boolean(message));
        input.setAttribute("aria-invalid", message ? "true" : "false");
        error.textContent = message;
    }

    function validateName() {
        const name = nameInput.value.trim();

        if (!name) {
            showError(nameInput, "Please enter your name.");
            return false;
        }

        if (name.length < 2) {
            showError(nameInput, "Name must contain at least 2 characters.");
            return false;
        }

        showError(nameInput, "");
        return true;
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            showError(emailInput, "Please enter your email address.");
            return false;
        }

        if (!validEmail.test(email)) {
            showError(emailInput, "Please enter a valid email address.");
            return false;
        }

        showError(emailInput, "");
        return true;
    }

    function validateDate() {
        if (!dateInput.value) {
            showError(dateInput, "Please select a reservation date.");
            return false;
        }

        if (dateInput.value < localToday) {
            showError(dateInput, "Past dates are not allowed.");
            return false;
        }

        showError(dateInput, "");
        return true;
    }

    function validateGuests() {
        if (!guestsInput.value) {
            showError(guestsInput, "Please select the number of guests.");
            return false;
        }

        showError(guestsInput, "");
        return true;
    }

    // Validate when the user leaves each field.
    nameInput.addEventListener("blur", validateName);
    emailInput.addEventListener("blur", validateEmail);
    dateInput.addEventListener("change", validateDate);
    guestsInput.addEventListener("change", validateGuests);

    // Remove errors as the user corrects their input.
    nameInput.addEventListener("input", () => {
        if (nameInput.classList.contains("invalid")) validateName();
    });

    emailInput.addEventListener("input", () => {
        if (emailInput.classList.contains("invalid")) validateEmail();
    });

    dateInput.addEventListener("change", validateDate);
    guestsInput.addEventListener("change", validateGuests);

    reservationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isDateValid = validateDate();
        const areGuestsValid = validateGuests();

        if (
            !isNameValid ||
            !isEmailValid ||
            !isDateValid ||
            !areGuestsValid
        ) {
            successMessage.textContent = "";

            const firstInvalid =
                reservationForm.querySelector('[aria-invalid="true"]');

            if (firstInvalid) firstInvalid.focus();
            return;
        }

        successMessage.textContent =
            "Form validated successfully! Your reservation request is ready.";

        reservationForm.reset();
        dateInput.min = localToday;

        [nameInput, emailInput, dateInput, guestsInput].forEach(input => {
            showError(input, "");
        });
    });
}
