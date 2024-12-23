// import { DeclarationFiles } from "./DeclarationFiles/index.js";
// DeclarationFiles.init();

import { Advanced } from "./Advanced/indejx.js";
Advanced.init();

type TaskType = "Meeting" | "Deadline" | "Reminder" | "Event";

interface Task {
	id: number;
	title: string;
	type: TaskType;
	date: Date;
}

type RelevantTaskTypes = Extract<TaskType, "Meeting" | "Deadline">;
// Result: "Meeting" | "Deadline"

function filterRelevantTasks(tasks: Task[]): Task[] {
	return tasks.filter((task) => task.type === "Meeting" || task.type === "Deadline");
}

const tasks: Task[] = [
	{ id: 1, title: "Team Meeting", type: "Meeting", date: new Date() },
	{ id: 2, title: "Project Deadline", type: "Deadline", date: new Date() },
	{ id: 3, title: "Doctor's Appointment", type: "Reminder", date: new Date() },
	{ id: 4, title: "Conference", type: "Event", date: new Date() },
];

const relevantTasks = filterRelevantTasks(tasks);
console.log(relevantTasks);
