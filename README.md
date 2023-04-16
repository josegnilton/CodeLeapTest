# Tests made with the CodeLeap React repository

## Frameworks used
- Cypress

## How to set up The project

```bash
git clone https://github.com/josegnilton/CodeLeapTest.git
```
## First you need to start the React Project

Open the repository in a terminal

```bash
cd codeleap-frontend-test-master
```
Install the dependecies

```bash
npm i
```
After that everything should be fine to run the project

```bash
npm start
```

Note: The server must run in the port 3000. To work properly.

## Now the cypress
Open the repository in a terminal

```bash
cd CodeLeap Cypress
```
Install the dependecies

```bash
npm i
```
After that everything should be fine to run the project

```bash
npx cypress open
```
It will open a browser that will run your tests, select e2e testing and choose your browser. It should work fine in any browser.
When the browser is selected, select CodeLeap.cy.js and run.

The tests will start automatically.

