const express = require('express')
const mongoose = require('mongoose')
const { MONGO_URI } = require('../config/index')

const app = express()

const connect = async () => {
	return mongoose
		.connect(MONGO_URI)
		.then(() => {
			console.info("Connected to MongoDB successfuly.");
		})
		.catch((err) => {
			console.error(err.message);
			process.exit(1);
		});
};
module.exports = connect;