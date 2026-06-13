const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const year = document.querySelector("#year");
const contactForm = document.querySelector("#contact-form");
const formNote = document.querySelector("#form-note");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(contactForm);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const phone = data.get("phone") || "";
    const regarding = data.get("regarding") || "";
    const message = data.get("message") || "";

    const subject = encodeURIComponent(`Intellex Law inquiry: ${regarding}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMatter type: ${regarding}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:justin@intellexlaw.com?subject=${subject}&body=${body}`;

    if (formNote) {
      formNote.textContent =
        "Your email app should open with a drafted message to Intellex Law Group.";
    }
  });
}
