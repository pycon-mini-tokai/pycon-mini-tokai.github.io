/* イベント詳細の表示切替 */
const modalBackground = document.getElementById("event-modal-background");

document.getElementById("event-modal-close").addEventListener("click", () => {
  modalBackground.style.display = "none";
  for (const talk of document.querySelectorAll(".event-modal-talk")) {
    talk.style.display = "none";
  }
  history.replaceState({}, "", "#");
});

for (const eventBox of document.querySelectorAll(".event-box")) {
  eventBox.addEventListener("click", (e) => {
    e.preventDefault();
    const targetElementId = e.currentTarget.getAttribute("href").substring(1);
    history.replaceState({}, "", `#${targetElementId}`);
    modalBackground.style.display = "block";
    document.getElementById(targetElementId).style.display = "block";
  });
}

// Open event modal if it's specified in the URL when DOM is ready
if (window.location.hash.length > 1) {
  const candidateId = window.location.hash.substring(1);
  const candidateElement = document.getElementById(candidateId);
  if (candidateElement && candidateElement.classList.contains("event-modal-talk")) {
      document.getElementById("timetable").scrollIntoView();
      modalBackground.style.display = "block";
      candidateElement.style.display = "block";
      candidateElement.scrollTop = 0;
  }
}
