document.getElementById("startQuiz").addEventListener("click", () => {
  document.getElementById("formSection").style.display = "block";
  window.scrollTo({ top: document.getElementById("formSection").offsetTop, behavior: "smooth" });
});

document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Obrigada por participar da Maratona da PPK! Seus benefícios serão enviados em breve.");
});
