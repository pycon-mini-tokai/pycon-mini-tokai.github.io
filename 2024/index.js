/* イベント詳細の表示切替 */
const modalBackground = document.getElementById("event-modal-background");

document.getElementById("event-modal-close").addEventListener("click", () => {
  modalBackground.style.display = "none";
  for (const talk of document.querySelectorAll(".event-modal-talk")) {
    talk.style.display = "none";
  }
});

for (const eventBox of document.querySelectorAll(".event-box")) {
  eventBox.addEventListener("click", (e) => {
    const id = `detail_${e.currentTarget.id}`;
    modalBackground.style.display = "block";
    document.getElementById(id).style.display = "block";
  });
}
