// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql'); // Install the mysql package using npm/yarn

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Create a MySQL connection
const db = mysql.createConnection({
	host: 'your-database-host',
	user: 'your-database-username',
	password: 'your-database-password',
	database: 'your-database-name',
});

db.connect((err) => {
	if (err) {
		console.error('Database connection error:', err);
	} else {
		console.log('Database connected');
	}
});

// Fetch users and groups from the database
app.get('/api/users', (req, res) => {
	// Implement the SQL queries to fetch users and groups
	const query = 'SELECT * FROM users; SELECT * FROM groups';
	db.query(query, (error, results) => {
		if (error) {
			res.status(500).json({ error: 'Error fetching data from database' });
		} else {
			const [users, groups] = results;
			res.json({ users, groups });
		}
	});

	const users = [
		{ id: 1, name: 'User 1' },
		{ id: 2, name: 'User 2' },
		// ...
	];
	res.json(users);
});

// Update user data in the database
app.post('/api/user/:userId/update-groups', (req, res) => {
	const userId = req.params.userId;
	const updatedGroups = req.body.groups;

	const query = 'UPDATE users SET groups = ? WHERE id = ?';
	db.query(query, [updatedGroups.join(','), userId], (error) => {
		if (error) {
			res.status(500).json({ error: 'Error updating data in database' });
		} else {
			res.json({ success: true });
		}
	});

	res.status(200).send('Groups updated successfully');
});

app.get('/api/user/:userId/groups', (req, res) => {
	const userId = req.params.userId;
	// Retrieve user's groups from the database using db query
	// const groups = db.query('SELECT * FROM groups WHERE user_id = ?', [userId]);
	const groups = ['Group A', 'Group B']; // Replace with actual data
	res.json(groups);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
