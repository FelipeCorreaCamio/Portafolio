const skillButtons = document.querySelectorAll(".box-skill.box");
const popup = document.getElementById("skillPopup");
const skillText = document.getElementById("skillText");
const skillFill = popup.querySelector(".skill-fill");

skillButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    const skill = button.dataset.skill || button.querySelector('.caption').textContent;
    const percent = button.dataset.percent || "0%";
    skillText.textContent = `${skill} (${percent})`;
    skillFill.style.width = percent;

    // Position popup near the button
    const rect = button.getBoundingClientRect();
    popup.style.left = rect.left + window.scrollX + rect.width / 2 + "px";
    popup.style.top = rect.top + window.scrollY - popup.offsetHeight - 10 + "px";
    popup.style.opacity = 1;
    popup.style.pointerEvents = "auto";  
    popup.style.transform = "translate(-50%, 0)";
  });
});

// Hide popup when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".box-skill.box") && !e.target.closest("#skillPopup")) {
    popup.style.opacity = 0;
    popup.style.pointerEvents = "none";
  }
});
