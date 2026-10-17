
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// قائمة التنقل على الهاتف
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  // إغلاق القائمة بعد اختيار أحد الروابط
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.textContent = "☰";
    });
  });
}

// عرض السنة الحالية تلقائيًا
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// نموذج التواصل
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);

    const name = formData.get("name");
    const email = formData.get("email");
    const service = formData.get("service");
    const message = formData.get("message");

    const subject = encodeURIComponent(
      `استفسار جديد من ${name} - SovikTech`
    );

    const body = encodeURIComponent(
      `الاسم: ${name}\n` +
      `البريد الإلكتروني: ${email}\n` +
      `الخدمة: ${service}\n\n` +
      `تفاصيل المشروع:\n${message}`
    );

    const formNote = document.getElementById("formNote");

    if (formNote) {
      formNote.textContent =
        "سيتم فتح تطبيق البريد الإلكتروني لإكمال رسالتك.";
    }

    window.location.href =
      `mailto:?subject=${subject}&body=${body}`;
  });
}
