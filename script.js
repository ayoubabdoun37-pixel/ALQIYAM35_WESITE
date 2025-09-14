// نموذج التواصل
document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.");
    this.reset();
});

// نموذج تسجيل الأطفال
document.getElementById("registrationForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("تم تسجيل الطفل بنجاح! سيتم التواصل معك قريباً.");
    this.reset();
});

// تسجيل الدخول للواجهة الخاصة
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("login").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
});
