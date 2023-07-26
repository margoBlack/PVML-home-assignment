# PVML home assigment

This project is exapmle of SQL playground.

What was done:
- Input field for SQL queries with highlighting markup
- Query can be executed on different sources. You can specify them in `src/tabs.ts`
- Retrived data will be displayed in table format. If there are a lot of records preloader will be shown. You can check this changing `MAX_LENGHT` in `src/components/ResultsTable/api.ts`
- API calls is mocked for now with fake data. You can change `SHOULD_FETCH_API = true` in `src/components/ResultsTable/api.ts` to test your API in this playground.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
