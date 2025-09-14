// نموذج التواصل - عرض رسالة تأكيد
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح! شكراً لتواصلك معنا.");
    this.reset();
});