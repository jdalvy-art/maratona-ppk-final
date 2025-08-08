// Quando o usuário clica no botão "Quero cuidar da minha PPK"
document.getElementById("startQuiz").addEventListener("click", () => {
  document.getElementById("formSection").style.display = "block";
  window.scrollTo({ top: document.getElementById("formSection").offsetTop, behavior: "smooth" });
});

// Quando o usuário envia o formulário
document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formSection").style.display = "none";
  document.getElementById("quizSection").style.display = "block";
  window.scrollTo({ top: document.getElementById("quizSection").offsetTop, behavior: "smooth" });
});

// Quando o usuário finaliza o quiz
function showResult() {
  document.getElementById("quizSection").style.display = "none";
  document.getElementById("resultSection").style.display = "block";
  window.scrollTo({ top: document.getElementById("resultSection").offsetTop, behavior: "smooth" });
}
