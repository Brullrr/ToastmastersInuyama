const home = document.querySelector(".home");

const profiles = [
  {
    name: "TM Brull",
    pathway: 3,
    speeches: [
      {
        id: "101",
        speechName: "Ice Breaker",
        speechTitle: "Brull's Ice Breaker",
        speechEvaluator: "TM Sugino",
        speechDate: "01012021",
      },
      {
        id: "102",
        speechName: "Evaluation and Feedback",
        speechTitle: "",
        speechEvaluator: "",
        speechDate: "01012021",
      },
      {
        id: "103",
        speechName: "Researching and Presenting",
        speechTitle: "Utsu Osokunai?",
        speechEvaluator: "TM Nakamura",
        speechDate: "08282022",
      },
      {
        id: "201",
        speechName: "My Leadership Style",
        speechTitle: "My Leadership Style",
        speechEvaluator: "TM Sawada",
        speechDate: "03262023",
      },
    ],
  },
  {
    name: "TM Sakamoto",
    pathway: 2,
    speeches: [
      {
        id: "101",
        speechName: "Ice Breaker",
        speechTitle: " Ice Breaker",
        speechEvaluator: "",
        speechDate: "01012021",
      },
      {
        id: "102",
        speechName: "",
        speechTitle: "   ",
        speechEvaluator: " ",
        speechDate: "01012021",
      },
      {
        id: "103",
        speechName: "",
        speechTitle: " ",
        speechEvaluator: " ",
        speechDate: "01012021",
      },
      {
        id: "201",
        speechName: "",
        speechTitle: "",
        speechEvaluator: "",
        speechDate: "01012021",
      },
      {
        id: "202",
        speechName: "",
        speechTitle: "",
        speechEvaluator: "",
        speechDate: "01012021",
      },
      
    ],
  },
  {
    name: "TM Sugino",
    pathway: 3,
    speeches: [
      {
        id: "101",
        speechName: "Ice Breaker",
        speechTitle: "Ice Breaker",
        speechEvaluator: " ",
        speechDate: "01012021",
      },
      {
        id: "102",
        speechName: "",
        speechTitle: "   ",
        speechEvaluator: " ",
        speechDate: "01012021",
      },
      {
        id: "103",
        speechName: "",
        speechTitle: " ?",
        speechEvaluator: " ",
        speechDate: "01012021",
      },
      {
        id: "201",
        speechName: "Understanding your leadership style",
        speechTitle: "",
        speechEvaluator: "",
        speechDate: "01012021",
      },
      {
        id: "202",
        speechName: "Understanding your communication style",
        speechTitle: "受け身な私のコミュニケーション法",
        speechEvaluator: "TM Sakamoto",
        speechDate: "04232023",
      },
    ],
  },
  {
    name: "TM Nakamura",
    pathway: 1,
    speeches: [
      {
        id: "101",
        speechName: "Ice Breaker",
        speechTitle: "Nakamura's Ice Breaker",
        speechEvaluator: "",
        speechDate: "01012021",
      },
      {
        id: "102",
        speechName: "Research and Presenting",
        speechTitle: "Prnicipal's words",
        speechEvaluator: "TM Brull",
        speechDate: "01222023",
      },
    ],
  },
  {
    name: "TM Sawada",
    pathway: 1,
    speeches: [
      {
        id: "101",
        speechName: "Ice Breaker",
        speechTitle: "Ice Breaker",
        speechEvaluator: "",
        speechDate: "01012021",
      },
      {
        id: "102",
        speechName: "Research and Presenting",
        speechTitle: "",
        speechEvaluator: "",
        speechDate: "01012021",
      },
      {
        id: "103",
        speechName: "Evaluation and Feedback",
        speechTitle: "",
        speechEvaluator: "",
        speechDate: "01012021",
      },
      {
        id: "201",
        speechName: "Understanding Your Leadership Style",
        speechTitle: "",
        speechEvaluator: "",
        speechDate: "01012021",
      },
      {
        id: "202",
        speechName: "Understanding Your Communication Style",
        speechTitle: "",
        speechEvaluator: "",
        speechDate: "01012021",
      },
      {
        id: "203",
        speechName: "Introduction to Toastmasters Mentoring",
        speechTitle: "",
        speechEvaluator: "",
        speechDate: "01012021",
      },
      {
        id: "301",
        speechName: "Negotiate the Best Outcome",
        speechTitle: "",
        speechEvaluator: "",
        speechDate: "01012021",
      },
    ],
  },
];

const pathways = [
  {
    pathway: 0,
    name: "Unknown",
    speeches: [
      {
        id: "101",
        speechName: "Ice Breaker",
      },
    ],
  },
  {
    pathway: 1,
    name: "Dynamic Leadership",
    speeches: [
      {
        id: "101",
        speechName: "Ice Breaker",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "102",
        speechName: "Research and Presenting",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "103",
        speechName: "Evaluation and Feedback",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "201",
        speechName: "Understanding Your Leadership Style",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "202",
        speechName: "Understanding Your Communication Style",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "203",
        speechName: "Introduction to Toastmasters Mentoring",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "301",
        speechName: "Negotiate the Best Outcome",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "302",
        speechName: "Deliver Social Speeches",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "303",
        speechName: "Using Presentation Software",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "304",
        speechName: "Connect With Storytelling",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "305",
        speechName: "Creating Effective Visual Aids",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "306",
        speechName: "Using Descriptive Language",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "307",
        speechName: "Connect With Your Audience",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "308",
        speechName: "Make Connections Through Networking",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "309",
        speechName: "Focus on the Positive",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "310",
        speechName: "Inspire Your Audience",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "311",
        speechName: "Prepare for an Interview",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "312",
        speechName: "Understanding Vocal Variety",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "313",
        speechName: "Effective Body Language",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "314",
        speechName: "Active Listening",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "401",
        speechName: "Manage Change",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "402",
        speechName: "Create a Podcast",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "403",
        speechName: "Building a Social Media Presence",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "404",
        speechName: "Managing a Difficult Auidience",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "405",
        speechName: "Write a Compelling Blog",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "406",
        speechName: "Manage On-Line Meetings",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "4",
        speechName: "Question-and-Answer Session",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "407",
        speechName: "Public Relations Strategies",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "408",
        speechName: "Manage Projects Successfully",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "501",
        speechName: "Lead in Any Situation",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "502",
        speechName: "Reflect on Your Path",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "503",
        speechName: "Lessons Learned",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "504",
        speechName: "Moderate a Panel Discussion",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "505",
        speechName: "Ethical Leadership",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "506",
        speechName: "High Performance Leadership",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "507",
        speechName: "Leading in Your Volunteer Organization",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "508",
        speechName: "Prepare to Speak Professionally",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
    ],
  },
  {
    pathway: 2,
    name: "Innovative Planning",
    speeches: [
      {
        id: "101",
        speechName: "Ice Breaker",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "102",
        speechName: "Evaluation and Feedback",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "103",
        speechName: "Researching and Presenting",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "201",
        speechName: "Understanding Your Leadership Style",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "202",
        speechName: "Connect With Your Audience",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "203",
        speechName: "Introduction to Toastmasters Mentoring",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "301",
        speechName: "Present a `Proposal",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "302",
        speechName: "Deliver Social Speeches",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "303",
        speechName: "Using Presentation Software",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "304",
        speechName: "Connect with Storytelling",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "305",
        speechName: "Creating Effective Visual Aids",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "306",
        speechName: "Using Descriptive Language",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "307",
        speechName: "Make Connections Through Networking",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "308",
        speechName: "Focus on the Positive",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "309",
        speechName: "Inspire Your Audience",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "310",
        speechName: "Prepare for an Interview",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "311",
        speechName: "Understanding Vocal Variety",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "312",
        speechName: "Effective Body Language",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "313",
        speechName: "Active Listening",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "401",
        speechName: "Manage Projects Successfully",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "402",
        speechName: "Create a Podcast",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "403",
        speechName: "Building a Social Media Presence",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "404",
        speechName: "Managing a Difficult Audience",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "405",
        speechName: "Write a Compelling Blog",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "406",
        speechName: "Manage Online Meetings",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "407",
        speechName: "Question-and-Answer Session",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "408",
        speechName: "Public Relations Strategies",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "501",
        speechName: "High Performance Leadership",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "502",
        speechName: "Reflect on Your Path",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "503",
        speechName: "Lessons Learned",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "504",
        speechName: "Moderate a Panel Discussion",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "505",
        speechName: "Ethical Leadership",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "506",
        speechName: "Leading in Your Volunteer Organization",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "507",
        speechName: "Prepare to Speak Professionally",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
    ],
  },
  {
    pathway: 3,
    name: "Visionary Communication",
    speeches: [
      {
        id: "101",
        speechName: "Ice Breaker",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "102",
        speechName: "Evaluation and Feedback",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "103",
        speechName: "Researching and Presenting",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "201",
        speechName: "Understanding Your Leadership Style",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "202",
        speechName: "Understanding Your Communication Style",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "203",
        speechName: "Introduction to Toastmasters Mentoring",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "301",
        speechName: "Develop a Communication Plan",
        isRequired: true,
        isCompleted: false,
        information: ``,
      },
      {
        id: "302",
        speechName: "Deliver Social Speeches",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "303",
        speechName: "Using Presentation Software",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "304",
        speechName: "Connect with Storytelling",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "305",
        speechName: "Creating Effective Visual Aids",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "306",
        speechName: "Using DEscriptive Language",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "307",
        speechName: "Connect with Your Audience",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "308",
        speechName: "Make Connections Through Networking",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "309",
        speechName: "Focus on the Positive",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "310",
        speechName: "Inspire YOur Audience",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "311",
        speechName: "Prepare for an Interview",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "312",
        speechName: "UNderstanding Vocal Variety",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "313",
        speechName: "Effective Body Language",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "314",
        speechName: "Active Listening",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "401",
        speechName: "",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "402",
        speechName: "",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "403",
        speechName: "",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "404",
        speechName: "",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "405",
        speechName: "",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "406",
        speechName: "",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "407",
        speechName: "",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "408",
        speechName: "",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "",
        speechName: "",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
      {
        id: "",
        speechName: "",
        isRequired: false,
        isCompleted: false,
        information: ``,
      },
    ],
  },
];

const renderProfiles = () => {
  profiles.forEach((e, ind) => {
    let name = e.name;
    let level = e.speeches[e.speeches.length - 1].id.charAt(0) * 1;
    let recentSpeech = e.speeches[e.speeches.length - 1].speechDate;
    let month = recentSpeech.charAt(0) + recentSpeech.charAt(1);
    let day = recentSpeech.charAt(2) + recentSpeech.charAt(3);
    let percent = Math.floor(((e.speeches.length * 1) / 15) * 100);

    let profileDiv = document.createElement("div");
    profileDiv.style.background =
      " linear-gradient(to right, lightgreen " +
      percent +
      "%, #ff9158 " +
      (percent + 20) +
      "% )";

    let profileName = document.createElement("p");
    let profileNameText = document.createTextNode(name + " " + percent + "%");

    let profileLatestDate = document.createElement("p");
    let profileLatestDateText = document.createTextNode(`${month}/${day}`);

    let profileLevel = document.createElement("img");
    profileLevel.src = "images/level" + level + ".png";

    profileName.appendChild(profileNameText);
    profileDiv.appendChild(profileName);

    profileLatestDate.appendChild(profileLatestDateText);
    profileDiv.appendChild(profileLatestDate);

    profileDiv.appendChild(profileLevel);

    profileName.classList.add("profileName");
    profileLatestDate.classList.add("profileDate");
    profileLevel.classList.add("profileLevel");

    profileDiv.classList.add("profileDiv");

    home.appendChild(profileDiv);

    profileDiv.addEventListener("click", () => {
      openModal(e);
    });
  });
};

renderProfiles();

const closeModal = () => {
  home.innerHTML = "";
  renderProfiles();
};

const closeDropDownModal = (modal, userProfile) => {
  modal.innerHTML = "";
  openModal(userProfile);
};

const createDate = (a) => {
  let month = a.charAt(0) + a.charAt(1);
  let day = a.charAt(2) + a.charAt(3);
  let year = a.charAt(4) + a.charAt(5) + a.charAt(6) + a.charAt(7);

  let finalString = "";

  switch (month * 1) {
    case 1:
      finalString = "January";
      break;
    case 2:
      finalString = "February";
      break;
    case 3:
      finalString = "March";
      break;
    case 4:
      finalString = "April";
      break;
    case 5:
      finalString = "May";
      break;
    case 6:
      finalString = "June";
      break;
    case 7:
      finalString = "July";
      break;
    case 8:
      finalString = "August";
      break;
    case 9:
      finalString = "September";
      break;
    case 10:
      finalString = "October";
      break;
    case 11:
      finalString = "November";
      break;
    case 12:
      finalString = "December";
      break;
  }

  return finalString + " " + day + ", " + year;
};

const openDropDownModal = (modal, userProfile, pathwaySpeechInfo, element) => {
  let speechInfo = false;
  userProfile.speeches.forEach((e) => {
    if (e.id === pathwaySpeechInfo.id) {
      speechInfo = e;
    }
  });

  if (speechInfo) {
    let dropDownModal = document.createElement("div");
    dropDownModal.classList.add("dropDownModal");
    let backdrop = document.createElement("div");
    backdrop.classList.add("backdrop");

    let title = document.createElement("p");
    let speechName = document.createElement("p");
    let speechEvaluator = document.createElement("p");
    let speechDate = document.createElement("p");

    let titletextNode = document.createTextNode(speechInfo.speechTitle);
    let speechNametextNode = document.createTextNode(speechInfo.speechName);
    let speechEvaluatortextNode = document.createTextNode(
      speechInfo.speechEvaluator
    );
    let speechDatetextNode = document.createTextNode(
      createDate(speechInfo.speechDate)
    );

    title.appendChild(titletextNode);
    speechName.appendChild(speechNametextNode);
    speechEvaluator.appendChild(speechEvaluatortextNode);
    speechDate.appendChild(speechDatetextNode);

    let speechNameA = document.createElement("p");
    let speechEvaluatorA = document.createElement("p");
    let speechDateA = document.createElement("p");

    let speechNametextNodeA = document.createTextNode("Title: ");
    let speechEvaluatortextNodeA = document.createTextNode("Evaluator: ");
    let speechDatetextNodeA = document.createTextNode("Date: ");

    speechNameA.appendChild(speechNametextNodeA);
    speechEvaluatorA.appendChild(speechEvaluatortextNodeA);
    speechDateA.appendChild(speechDatetextNodeA);

    dropDownModal.appendChild(speechName);
    dropDownModal.appendChild(speechNameA);
    dropDownModal.appendChild(title);

    dropDownModal.appendChild(speechEvaluatorA);
    dropDownModal.appendChild(speechEvaluator);

    dropDownModal.appendChild(speechDateA);
    dropDownModal.appendChild(speechDate);

    backdrop.addEventListener("click", () => {
      closeDropDownModal(modal, userProfile);
    });
    modal.appendChild(backdrop);
    modal.appendChild(dropDownModal);
  } else {
    element.target.classList.add("shake");
    setTimeout(() => {
      element.target.classList.remove("shake");
    }, 300);
  }
};

const openModal = (userProfile) => {
  let userPathwayName = pathways[userProfile.pathway].name;
  let userPathwaysSpeechesClone = [];

  pathways[userProfile.pathway].speeches.forEach((e) => {
    userPathwaysSpeechesClone.push({ ...e });
  });

  let userSpeeches = userProfile.speeches;

  userPathwaysSpeechesClone.forEach((e) => {
    userProfile.speeches.forEach((f) => {
      if (e.id === f.id) {
        e.isCompleted = true;
      }
    });
  });

  let modal = document.createElement("div");
  modal.innerHTML = "";
  modal.classList.add("modal");
  let backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");

  home.appendChild(backdrop);
  home.appendChild(modal);

  let title = document.createElement("div");
  title.classList.add("modalTitle");
  title.innerHTML = userPathwayName;
  modal.appendChild(title);

  backdrop.addEventListener("click", () => {
    closeModal();
  });

  //CREATES OVERALL HOLDER IN MODAL

  let levelAndSpeechHolder = document.createElement("div");
  levelAndSpeechHolder.classList.add("levelAndSpeechHolder");
  modal.appendChild(levelAndSpeechHolder);
  // COLORS THAT CHANGE
  let purple = "rgba(107, 12, 161, 0.65)";
  let darkpurple = "rgba(48, 25, 52, 0.65)";
  let lightblue = "rgba(39, 125, 201, 0.65)";
  let blue = "rgba(11, 41, 184, 0.65)";
  let darkblue = "rgba(33, 12, 119, 0.65)";

  for (let i = 1; i < 6; i++) {
    let levelHolder = document.createElement("div");
    levelHolder.classList.add("levelHolder");
    let levelHolderBackgroundColor = "white";

    if (i === 1) {
      levelHolderBackgroundColor = lightblue;
    }
    if (i === 2) {
      levelHolderBackgroundColor = blue;
    }
    if (i === 3) {
      levelHolderBackgroundColor = darkblue;
    }
    if (i === 4) {
      levelHolderBackgroundColor = purple;
    }
    if (i === 5) {
      levelHolderBackgroundColor = darkpurple;
    }

    levelHolder.style.backgroundColor = levelHolderBackgroundColor;
    levelAndSpeechHolder.appendChild(levelHolder);

    let levelIcon = document.createElement("img");
    levelIcon.classList.add("levelIcon");
    levelIcon.src = "images/level" + i + ".png";
    levelHolder.appendChild(levelIcon);

    let speechesHolder = document.createElement("div");
    speechesHolder.classList.add("speechesHolder");
    let speechesHolderBackgroundColor = "white";

    if (i === 1) {
      speechesHolderBackgroundColor = lightblue;
    }
    if (i === 2) {
      speechesHolderBackgroundColor = blue;
    }
    if (i === 3) {
      speechesHolderBackgroundColor = darkblue;
    }
    if (i === 4) {
      speechesHolderBackgroundColor = purple;
    }
    if (i === 5) {
      speechesHolderBackgroundColor = darkpurple;
    }
    speechesHolder.style.backgroundColor = levelHolderBackgroundColor;
    levelAndSpeechHolder.appendChild(speechesHolder);

    userPathwaysSpeechesClone.forEach((e) => {
      if (e.id.charAt(0) * 1 === i) {
        let speechHolder = document.createElement("div");
        speechHolder.innerHTML = e.isRequired
          ? "* " + e.speechName + " *"
          : e.speechName;
        speechHolder.classList.add("speechHolder");
        if (e.isCompleted) {
          speechHolder.style.backgroundColor = "lightGreen";
        } else {
          speechHolder.style.backgroundColor = "salmon";
        }
        speechesHolder.appendChild(speechHolder);

        speechHolder.addEventListener("click", (element) => {
          openDropDownModal(modal, userProfile, e, element);
        });
      }
    });
  }
};
