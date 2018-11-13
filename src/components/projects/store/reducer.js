import closingTimePNG from "../img/closingTime.png";
import alexanderdavisnet from "../img/alexanderdavisnet.png";
import alzheimersassistant from "../img/AlzheimerAssistant.png";
import mihc from "../img/MIHC.png";
import propertyexplorer from "../img/propertyExplorer.png";
import shappy from "../img/shappy.png";
import sproggo from "../img/sprogGo.png";
import snapCV from "../img/snapCV.png";
import CityScanner from "../img/cityScanner.png";
import { UPDATE_RESTAURANTS } from "./actionTypes";

const data = [
  {
    title: "ClosingTime",
    img: closingTimePNG,
    description:
      "Tells you when restaurants are offering closing time discounts.",
    languages: "React",
    siteURL: "https://closeti.me",
    dateCreated: "14/04/2018"
  },
  {
    title: "Alzheimer's Assistant",
    img: alzheimersassistant,
    description: "A Cisco Spark chat bot for patients with alzheimer's.",
    languages: "Python",
    githubURL: "https://github.com/Futuramistic/Bot",
    dateCreated: "17/02/2018"
  },
  {
    title: "SprogGo",
    img: sproggo,
    description: "Learn a new language easily and actively.",
    languages: "Android",
    githubURL: "https://github.com/alexander7161/SprogGo",
    downloadURL:
      "https://github.com/alexander7161/SprogGo/releases/download/1.1.0/SprogGo-1.1.0.apk",
    dateCreated: "17/02/2018"
  },
  {
    title: "MIHC",
    img: mihc,
    description: "An electronic Healthcare System.",
    languages: "Android",
    githubURL: "https://github.com/alexander7161/MyIndividualHealthCare",
    downloadURL:
      "https://github.com/alexander7161/MyIndividualHealthCare/releases/download/1.0.0/MIHC.apk",
    dateCreated: "17/03/2018"
  },
  {
    title: "Alexanderdavis.net",
    img: alexanderdavisnet,
    description: "My personal website.",
    languages: "React",
    githubURL: "https://github.com/alexander7161/alexanderdavis.net",
    dateCreated: "02/04/2018"
  },
  {
    title: "Property Explorer",
    img: propertyexplorer,
    description: "A tool to explore airbnb properties in London.",
    languages: "Java",
    githubURL: "https://github.com/alexander7161/propertyExplorer",
    downloadURL:
      "https://github.com/alexander7161/PropertyExplorer/releases/download/1.1/PropertyExplorer.jar",
    dateCreated: "11/04/2018"
  },
  {
    title: "Shappy",
    img: shappy,
    description:
      "Allows you to search items on leboncoin using your camera. Personalises results.",
    languages: "React",
    githubURL: "https://github.com/alexander7161/Shappy",
    downloadURL: "https://github.com/alexander7161/Shappy/releases/",
    dateCreated: "26/05/2018"
  },
  {
    title: "SnapCV",
    img: snapCV,
    description: "Video CVs for the 21st century.",
    languages: "React",
    githubURL: "https://github.com/octavius464/SnapCV",
    dateCreated: "19/10/2018"
  },
  {
    title: "CityScanner",
    img: CityScanner,
    description: "Tinder for CityScanner. Find your perfect destination.",
    languages: "React",
    githubURL: "https://github.com/alexander7161/CityScanner",
    dateCreated: "03/11/2018"
  }
];

const todos = (state = { data, fetchedData: {} }, action) => {
  switch (action.type) {
    case UPDATE_RESTAURANTS:
      return Object.assign({}, state, {
        fetchedData: action.projects
      });
    default:
      return state;
  }
};

export default todos;