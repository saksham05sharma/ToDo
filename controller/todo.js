const { todos } = require('../models/todos');

const add = async (req, res) => {
    const inputTodoId = todos.length + 1;
    const inputTodoTask = req.body.todoTask;

    if (!inputTodoTask) {
        return res.status(400).json({ message: "Todo task is required" });
    }

    todos.push({
        todoId: inputTodoId.toString(),
        todoTask: inputTodoTask
    });

    res.render("index", {
        data: todos,
    });
};

const list = async (req, res) => {
    res.render("index", {
        data: todos,
    });
};

const del = async (req, res) => {
    const requestedTodoId = req.body.todoId;

    if (!requestedTodoId) {
        return res.status(400).json({ message: "Todo ID is required" });
    }

    const index = todos.findIndex(todo => todo.todoId === requestedTodoId);

    if (index !== -1) {
        todos.splice(index, 1);
    }

    res.redirect('/');
};

module.exports = { add, list, del };
