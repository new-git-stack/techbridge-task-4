const tracks = {
  "data-analytics": {
    name: "Data Analytics",
    tagline: "Working with data and extracting insights",
    tasks: [
      {
        number: 1,
        title: "Data Cleaning Basics",
        day: 1,
        description: "Clean a messy dataset using Google Sheets or Excel. Identify and fix duplicate rows, blank cells, inconsistent formatting, and incorrect data types.",
        difficulty: "Beginner",
        level: 1
      },
      {
        number: 2,
        title: "Formulas & Pivot Tables",
        day: 4,
        description: "Use spreadsheet formulas and Pivot Tables to answer questions and extract useful insights from a dataset.",
        difficulty: "Beginner",
        level: 1
      },
      {
        number: 3,
        title: "Data Visualization",
        day: 8,
        description: "Create charts and a simple dashboard that communicate useful insights from a dataset.",
        difficulty: "Beginner → Intermediate",
        level: 2
      },
      {
        number: 4,
        title: "Introduction to SQL",
        day: 11,
        description: "Practice basic SQL queries and use them to answer real-world questions about data.",
        difficulty: "Beginner → Intermediate",
        level: 3
      },
      {
        number: 5,
        title: "SQL Joins & Aggregations",
        day: 15,
        description: "Use JOIN, GROUP BY and aggregate functions such as COUNT, SUM and AVG to analyze information across multiple tables.",
        difficulty: "Intermediate",
        level: 5
      },
      {
        number: 6,
        title: "Lookup Functions & Data Wrangling",
        day: 19,
        description: "Use VLOOKUP or XLOOKUP to combine related datasets and handle data mismatches.",
        difficulty: "Intermediate",
        level: 6
      },
      {
        number: 7,
        title: "Mini Analysis Project",
        day: 22,
        description: "Complete a small end-to-end analysis involving data cleaning, formulas, Pivot Tables, charts and recommendations.",
        difficulty: "Intermediate",
        level: 7
      },
      {
        number: 8,
        title: "Capstone Project",
        day: 26,
        description: "Complete a larger project combining spreadsheet analysis and SQL using at least two related tables.",
        difficulty: "Intermediate",
        level: 9
      }
    ]
  },

  "web-development": {
    name: "Web Development",
    tagline: "Designing and building websites and web applications",
    tasks: [
      {
        number: 1,
        title: "Build the TechBridge Homepage",
        day: 1,
        description: "Create the first version of the TechBridge website using HTML and CSS.",
        difficulty: "Beginner",
        level: 1
      },
      {
        number: 2,
        title: "Build the TechBridge Programs Experience",
        day: 4,
        description: "Create a Programs experience presenting TechBridge's available learning programs.",
        difficulty: "Beginner",
        level: 1
      },
      {
        number: 3,
        title: "Build the Internship Tasks Experience",
        day: 8,
        description: "Create an interface that presents the TechBridge internship tasks and helps users understand the internship journey.",
        difficulty: "Beginner → Intermediate",
        level: 2
      },
      {
        number: 4,
        title: "Build an Interactive Internship Roadmap",
        day: 11,
        description: "Use JavaScript to allow visitors to switch between the Data Analytics and Web Development internship tracks.",
        difficulty: "Beginner → Intermediate",
        level: 3
      },
      {
        number: 5,
        title: "Build the Intern Registration Experience",
        day: 15,
        description: "Create a professional registration and onboarding interface for TechBridge interns.",
        difficulty: "Intermediate",
        level: 5
      },
      {
        number: 6,
        title: "Build the Task Submission System",
        day: 19,
        description: "Create an interface through which interns can prepare and submit their task work.",
        difficulty: "Intermediate",
        level: 3.9
      },
      {
        number: 7,
        title: "Build the Intern Dashboard",
        day: 22,
        description: "Create a dashboard where an intern can view their profile, progress, tasks and submissions.",
        difficulty: "Intermediate",
        level: 7
      },
      {
        number: 8,
        title: "Build the Complete TechBridge Internship Platform",
        day: 26,
        description: "Combine the different components created during the internship into a complete TechBridge platform.",
        difficulty: "Intermediate",
        level: 9
      }
    ]
  }
};


let currentTrack = "web-development";

const roadmap = document.querySelector("#roadmap");
const taskList = document.querySelector("#task-list");
const trackButtons = document.querySelectorAll(".track-btn");
const currentTrackName = document.querySelector("#current-track-name");
const currentTrackTagline = document.querySelector("#current-track-tagline");


function createElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) {
    element.className = className;
  }
  if (text !== undefined) {
    element.textContent = text;
  }
  return element;
}

function createTaskCard(task) {
  const card = createElement("article", "task");
  card.style.setProperty("--level", task.level);

  const head = createElement("div", "task-head");
  const label = createElement("span", "task-label");
  label.append(
    createElement("span", "task-word", "Task "),
    createElement("span", "task-num", task.number)
  );
  head.append(
    label,
    createElement("span", "task-day", `Day ${task.day}`),
    createElement("span", "task-title", task.title)
  );

  const body = createElement("div", "task-body");
  const meta = createElement("p", "task-meta");
  meta.append(
    createElement("strong", null, `Day ${task.day}`),
    ` of 30 · Level: ${task.difficulty}`
  );
  body.append(meta, createElement("p", null, task.description));

  card.append(head, body);
  return card;
}

function showTrack(trackKey) {
  const track = tracks[trackKey];

  if (!track) {
    return;
  }

  currentTrack = trackKey;

  const cards = track.tasks.map(createTaskCard);
  taskList.replaceChildren(...cards);

  currentTrackName.textContent = track.name;
  currentTrackTagline.textContent = track.tagline;

  roadmap.classList.toggle("program-da", trackKey === "data-analytics");
  roadmap.classList.toggle("program-wd", trackKey === "web-development");

  trackButtons.forEach((button) => {
    const isActive = button.dataset.track === trackKey;
    button.setAttribute("aria-pressed", String(isActive));
  });
}

trackButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const chosenTrack = button.dataset.track;

    if (chosenTrack === currentTrack) {
      return;
    }
    showTrack(chosenTrack);
  });
});

showTrack(currentTrack);