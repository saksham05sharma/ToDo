const { todos } = require('../models/todos');

const add = async (req, res) => {
    const inputTodoId = (todos.length + 1).toString();
    const inputTodoTask = req.body.todoTask;

    if (!inputTodoTask) {
        return res.status(400).json({ message: "Todo task is required" });
    }

    todos.push({
        todoId: inputTodoId,
        todoTask: inputTodoTask
    });
    res.status(201).json({
        message: "Todo added successfully",
        data: todos
    });
};

const list = async (req, res) => {
    res.status(200).json({
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
        return res.status(200).json({
            message: "Todo deleted successfully",
            data: todos
        });
    }

    res.status(404).json({ message: "Todo not found" });
};

module.exports = { add, list, del };
