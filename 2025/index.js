document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".scroll-animation");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  targets.forEach((target) => {
    observer.observe(target);
  });
});
const modalBackground = document.getElementById("session-modal-background");
const sessionModal = document.getElementById("session-modal");
const sessionInfoElement = sessionModal.querySelector(".session-info");
const labelContainer = sessionInfoElement.querySelector(".labels");
const sessionStartElement = sessionInfoElement.querySelector(
  ".session-duration .start-time",
);
const sessionEndElement = sessionInfoElement.querySelector(
  ".session-duration .end-time",
);
const titleElement = sessionInfoElement.querySelector("h4");
const abstractElement = sessionInfoElement.querySelector(".abstract");
const speakerInfoElement = sessionModal.querySelector(".speaker-info");
const speakerNameElement = speakerInfoElement.querySelector(".speaker-name");
const speakerProfileElement =
  speakerInfoElement.querySelector(".speaker-profile");

const sessionsById = new Map(
  JSON.parse(document.getElementById("sessions").textContent || "[]").map(
    (session) => [session.id, session],
  ),
);

const sessionTypeClassMap = {
  キーノート: "keynote",
  トーク: "talk",
  ワークショップ: "workshop",
};

const sessionLevelClassMap = {
  初級: "beginner",
  中級: "intermediate",
  上級: "advanced",
};

const createLabelElement = (text, ...classNames) => {
  const element = document.createElement("div");
  element.classList.add("label");
  for (const className of classNames) {
    if (className) {
      element.classList.add(className);
    }
  }
  element.textContent = text;
  return element;
};

const populateSessionModal = (modalId) => {
  const sessionId = modalId.replace(/^session-/, "");
  const session = sessionsById.get(sessionId);
  if (!session) {
    return false;
  }

  labelContainer.innerHTML = "";
  labelContainer.appendChild(
    createLabelElement(session.type, sessionTypeClassMap[session.type]),
  );
  if (session.level) {
    labelContainer.appendChild(
      createLabelElement(session.level, sessionLevelClassMap[session.level]),
    );
  }
  sessionStartElement.textContent = session.start || "";
  sessionEndElement.textContent = session.end || "";

  titleElement.textContent = session.title || "";
  abstractElement.innerHTML = session.abstract || "";
  speakerNameElement.textContent = session.speaker || "";
  speakerProfileElement.innerHTML = session.profile || "";

  return true;
};

document.getElementById("session-modal-close").addEventListener("click", () => {
  modalBackground.style.display = "none";
  history.replaceState({}, "", "#");
});

for (const eventBox of document.querySelectorAll("a.session")) {
  eventBox.addEventListener("click", (e) => {
    e.preventDefault();
    const targetElementId = e.currentTarget.getAttribute("href").substring(1);
    if (populateSessionModal(targetElementId)) {
      history.replaceState({}, "", `#${targetElementId}`);
      modalBackground.style.display = "block";
      sessionModal.scrollTop = 0;
    }
  });
}

// Open event modal if it's specified in the URL when DOM is ready
if (window.location.hash.length > 1) {
  const candidateId = window.location.hash.substring(1);
  if (populateSessionModal(candidateId)) {
    document.getElementById("timetable").scrollIntoView();
    modalBackground.style.display = "block";
    sessionModal.scrollTop = 0;
  }
}
