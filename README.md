Starter-Kit
===================

To run this starter-kit yon must have node installed in your dev machine.

```bash
npm install -g gulp bower
```

Then open the folder in your command line, and install the needed dependencies:

```bash
npm install
```

and install all vendors with bower:

```bash
bower install
```

Finally, run `npm start` to run Gulp. Your finished site will be created in a folder called `build`, viewable at this URL:

```
http://localhost:8000
```

For run in production mode you must run:
```bash
npm run prod
```