"use strict";

class TaskController {
  index({ view }) {
    const tasks = [
      {
        title: "My first task",
        body: "This is my first task"
      },
      {
        title: "My second task",
        body: "This is my second task"
      }
    ];
    return view.render("tasks", {
      title: "Latest tasks",
      tasks
    });
  }
}

module.exports = TaskController;
