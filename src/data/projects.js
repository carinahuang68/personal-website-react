import clueImage from "../assets/images/clue.png";
import alarmedImage from "../assets/images/alarmed.png"
import dsciImage from "../assets/images/dsci-project.png"

const projects = [
    {
        image: clueImage,
        title: "Clue Tracker",
        text: "A GUI app for Clue players to keep track of their notes automatically by entering gameplay information.",
        buttonText: "GitHub Repo",
        buttonLink: "https://github.com/carinahuang68/clue-application"
    },
    {
        image: alarmedImage,
        title: "cmd-f: AlarMed",
        text: "A medication alarm system made with Java, Arduino, and Figma from Western Canada's largest hackathon for underespesented genders in tech",
        buttonText: "View Project",
        buttonLink: "https://devpost.com/software/alarmed-cvyujg?_gl=1*11jkh5x*_gcl_au*MTEzNTQxMDM2OS4xNzUzNTY4MzQ4*_ga*MzA5MzA5OTkxLjE3NTM1NjgzNDg.*_ga_0YHJK3Y10M*czE3NTQ3MTExNjckbzIkZzEkdDE3NTQ3MTEyODAkajE0JGwwJGgw"
    },
    {
        image: dsciImage,
        title: "DSCI 100",
        text: "Built a KNN classification model to predict player subscriptions based on age and playtime data.",
        buttonText: "View Project",
        buttonLink: "https://github.com/carinahuang68/dsci-project"
    }
]

const miniProjects = [
    {
        title: "Guess the Number",
        text: "My first mini game built with JavaScript",
        path: "/numberGuessing"
    },
    {
        title: "What's Today?",
        text: "A quick school's rotation day and event checker",
        path: "/calendar"
    },
    {
        title: "Magic Eight Ball",
        text: "A fortune telling ball with all the answers",
        path: "/magicEightBall"
    },
    {
        title: "Build a List",
        text: "A customizable list maker for anything you need",
        path: "/customList"
    },
    {
        title: "Color Boxes",
        text: "My first React exercise in the Web Dev Bootcamp",
        path: "/colorBoxes"
    },
    {
        title: "Score Keeper",
        text: "A score keeper for any number of players",
        path: "/scoreKeeper"
    },
    {
        title: "Just a Card",
        text: "Stay tuned for more mini games and apps 😚",
        path: "/"
    }
]

export {projects, miniProjects};