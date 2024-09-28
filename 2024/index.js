/* イベント詳細の表示切替 */
const event_detail = document.getElementById("event_detail");

document.getElementById("detail_close").addEventListener("click", () => {
  event_detail.style.display = "none";
  for (const talk of document.querySelectorAll(".event-detail-talk")) {
    talk.style.display = "none";
  }
});

for (const event_box of document.querySelectorAll(".event-box")) {
  event_box.addEventListener("click", (e) => {
    const id = `detail_${e.currentTarget.id}`;
    event_detail.style.display = "block";
    document.getElementById(id).style.display = "block";
  });
}
