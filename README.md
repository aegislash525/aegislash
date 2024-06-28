![banner](https://github.com/aegislash525/aegislash/assets/106997330/5a8b62b5-e4ed-4226-bba0-09c4b4363b57)

# 💻 Portfolio website

<div align="center">
  <img src="https://img.shields.io/badge/NEXT.js-ea4848?logo=javascript&style=for-the-badge&logoColor=white"/>
  <img src="https://img.shields.io/badge/svelte-orange?logo=svelte&style=for-the-badge&logoColor=white"/>
  <img src="https://img.shields.io/badge/tailwind-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/MIT-green?style=for-the-badge"/>
<p>
Feel free to use the design and code as long as you mention the original source in your project :D <br/>
This design in <a href="https://www.figma.com/design/1K1NQhNzu7sNWPj9kTvjBD/portfolio?node-id=0-1&t=G5PmOOhmYQ1aRkh9-1">figma</a>.
</p>
</div>

## ✨ Frontend

### Developing ✒️

Once you've installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Building 🏗️

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

## ⚙️ Backend

### Dependencies overview

```json
"dependencies": {
  "body-parser": "^1.20.2",
  "dotenv": "^16.4.5",
  "express": "^4.19.2",
  "knex": "^3.1.0",
  "morgan": "^1.10.0",
  "nodemon": "^3.1.4",
  "sqlite3": "^5.1.7"
}
```

### Database

Create sqlite3 database in `/database/` directory. Specify database name in
`.env` file in variable `DEV_DB_NAME="dev.sqlite3"` and/or `PROD_DB_NAME="prod.sqlite3"`. <br />
Run `npm run migrate:dev` or `npm run migrate:prod` to migrate tables. <br />
To create migration file run `npx knex migrate:make table_name` in the root directory. <br />
Database configuration file is `knexfile.js` in the root directory.

### Start express.js server 🔌

Once you've installed all dependencies (`npm install`), you can
run the server with following command.

``` bash
npm run dev
```

### Admin key

Create `.env` file in the root directory. <br />
Put there such variables as `PORT` and `ADMIN_KEY`.

<strong>Admin key</strong> is required for authorization. Put it into
the auth form on path <br /> `https://your-portfolio.org/register` or `/login`
to authenticate

<!-- * Configuration

* How to run the test suite

* Deployment instructions -->

## 📄 License
<div align="center">
  <a href="https://choosealicense.com/licenses/mit/"><strong>MIT</strong></a>
</div>
