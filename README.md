# Download Center (Khorshid)

A small Express app where users sign up, log in and upload files into a personal folder; the web UI is in Persian under the name "Khorshid" (the stated goal on the home page is a personal page for each University of Tehran student). The original README calls it a training repo and an MVP.

## What it does

- Sign up with first name, last name, username, email and password; log in with username and password.
- After login, an upload page (`/upload`) shows thumbnails of everything the user has uploaded and has a form to upload more.
- Uploaded files are stored on disk per user in `public/uploads/<username>/`, and the static folder is served, so they are reachable by URL.

## How it works

Routes:

| Route | Behaviour |
| --- | --- |
| `GET /`, `/login`, `/signup`, `/secondHome` | render EJS views |
| `POST /signup`, `POST /login` | Passport local strategies; success redirects to `/secondHome`, failure back to the form |
| `GET /logout` | log out, redirect to `/` |
| `GET /upload` | list the logged-in user's files (reads `req.user`) |
| `POST /upload` | multer saves the file as `<original name>-<timestamp>` in `public/uploads`, then moves it into the user's folder |

- Users are stored in MongoDB through Mongoose (`models/users`) with `username` (unique), hashed `password` (bcrypt-nodejs), `firstName`, `lastName`. The signup handler also reads an `email` field, but the schema does not define it, so it is not saved.
- Signup creates the user's upload directory (`fs.mkdirSync`, not recursive), so `public/uploads/` must already exist. It is git-ignored, so create it yourself.
- Sessions use `express-session` with the default in-memory store.
- `/upload` does not check that someone is logged in before reading `req.user`, so an anonymous request will error.
- Views are in `views/`, styles and fonts (including several Persian fonts) in `public/`. `todo.txt` has two short notes in Persian-transliterated English and a Trello link.

## Tech

Node.js with Express 4.16, EJS 2.6, Passport 0.4 with passport-local, Mongoose 5.2, Multer 1.3, bcrypt-nodejs, express-session, Bootstrap 4.1 (CDN). Package name in `package.json` is `khorshid-express`.

## Configuration

- `PORT` - HTTP port, default 3000.
- The MongoDB connection string and session secret are hard-coded in `app.js` rather than read from the environment. Replace the connection string with your own MongoDB before running.

## Run it

```
npm install
mkdir -p public/uploads
npm start        # node ./bin/www, http://localhost:3000
```

