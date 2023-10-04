import express from "express";
import bodyParser from 'body-parser';
import ejs from 'ejs';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
const tasks = ["buy tissue", "polish shoes"];
const completedTasks = []; // Array to store completed tasks

app.get("/", (req, res) => {
    res.render("index.ejs", { tasks: tasks, completedTasks: completedTasks });
});

app.post("/addtask", (req, res) => {
    const newTask = req.body.newtask;
    tasks.push(newTask);
    res.redirect("/");
});

app.post("/removetask", (req, res) => {
    const taskIndexToRemove = req.body.taskindex;
    if (taskIndexToRemove !== undefined && taskIndexToRemove >= 0 && taskIndexToRemove < tasks.length) {
        tasks.splice(taskIndexToRemove, 1);
    }
    res.redirect("/");
});

app.post("/completetask", (req, res) => {
    const taskIndexToComplete = req.body.taskindex;
    if (taskIndexToComplete !== undefined && taskIndexToComplete >= 0 && taskIndexToComplete < tasks.length) {
        const completedTask = tasks.splice(taskIndexToComplete, 1)[0];
        completedTasks.push(completedTask);
    }
    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Running at port ${port}...`);
});
