/**
 *
 * @param {Array} tasks - list with object {keys - name your task, value - time for task in milliseconds}
 */
function taskManager(tasks) {
    tasks.forEach((task) => {
        setTimeout(function timeout() {
            console.log(
                `Task ${task.name} is complite. Time: ${task.time} milliseconds`
            );
        }, task.time);
    });
}

const tasks = [
    { name: "task 1", time: 1000 },
    { name: "task 2", time: 2000 },
    { name: "task 3", time: 5000 },
    { name: "task 4", time: 3000 },
    { name: "task 5", time: 4000 },
];
taskManager(tasks);
