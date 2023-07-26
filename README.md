# PVML home assigment

This project is exapmle of SQL playground.
You can check out project here:
https://margoBlack.github.io/PVML-home-assignment

### What was done:
- Input field for SQL queries with highlighting markup
- Query can be executed on different sources. You can specify them in `src/tabs.ts`
- Retrived data will be displayed in table format. If there are a lot of records preloader will be shown. You can check this changing `MAX_LENGHT` in `src/components/ResultsTable/api.ts`
- API calls is mocked for now with fake data. You can change `SHOULD_FETCH_API = true` in `src/components/ResultsTable/api.ts` to test your API in this playground.

## Setup guide:
Choose the directory to clone the project. Run the following command:

<code>$ git clone https://github.com/margoBlack/PVML-home-assignment.git</code>

Then, change the directory:

<code>$ cd \pvml-home-assignment</code>

Make sure that you have an npm and run:

<code>$ npm i</code>

<code>$ npm start</code>

<strong>Ready!</strong>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
