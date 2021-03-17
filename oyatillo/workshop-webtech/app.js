const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.render('index'));
app.get('/notes/create', (req, res) => res.render('create'));

app.post('/notes/create', (req, res) => {
	let notesDb = [];

	fs.readFile(
		path.join(__dirname, '/database/db.json'),
		'utf-8',
		(err, data) => {
			if (err) console.log(err);
			else notesDb = JSON.parse(data);

			const note = {
				title: req.body.title,
				details: req.body.details,
			};

			notesDb.push(note);

			fs.writeFile(
				path.join(__dirname, '/database/db.json'),
				JSON.stringify(notesDb),
				(err) => {
					if (err) res.redirect('/notes/create?error=1');
					else res.redirect('/notes/create?success=1');
				}
			);
		}
	);
});

app.get('/notes', (req, res) => {
	let db = [];
	fs.readFile(
		path.join(__dirname, '/database/db.json'),
		'utf-8',
		(err, data) => {
			if (err) console.log(err);
			else db = JSON.parse(data);
			let db2 = db.filter((note) => !note.archived);
			res.render('notes', { notes: db2 });
		}
	);
});

app.get('/notes/:id', (req, res) => {
	let db = [];
	fs.readFile(
		path.join(__dirname, '/database/db.json'),
		'utf-8',
		(err, data) => {
			if (err) console.log(err);
			else db = JSON.parse(data);

			res.render('note', { note: db[req.params.id], ID: req.params.id });
		}
	);
});

app.get('/notes/:id/delete', (req, res) => {
	let db = [];

	fs.readFile(
		path.join(__dirname, '/database/db.json'),
		'utf-8',
		(err, data) => {
			if (err) console.log(err);
			else db = JSON.parse(data);

			db.splice(req.params.id, 1);

			fs.writeFile(
				path.join(__dirname, '/database/db.json'),
				JSON.stringify(db),
				(err) => {
					if (err) console.log(err);
					res.redirect('/');
				}
			);
		}
	);
});

app.get('/archive', (req, res) => {
	let db = [];
	let archivedNotes = [];

	fs.readFile(
		path.join(__dirname, '/database/db.json'),
		'utf-8',
		(err, data) => {
			if (err) console.log(err);
			else db = JSON.parse(data);

			archivedNotes = db.filter((note) => note.archived);

			res.render('archive', { notes: archivedNotes });
		}
	);
});

app.get('/notes/note/:id/archive', (req, res) => {
	let db = [];

	fs.readFile(
		path.join(__dirname, '/database/db.json'),
		'utf-8',
		(err, data) => {
			if (err) console.log(err);
			else db = JSON.parse(data);

			db[req.params.id].archived = true;

			fs.writeFile(
				path.join(__dirname, '/database/db.json'),
				JSON.stringify(db),
				(err) => {
					if (err) console.log(err);
					res.redirect('/');
				}
			);
		}
	);
});

app.listen(3000, console.log('server is on localhost:3000'));
