## CUSTOM RUN 

Instead of having to go to backend and client folders and run their commands, use this command to run them at once.

## Steps:

### 1. Initialize a Node.js Project

Run the following command to create a `package.json` file for your project:
```bash
npm init
```

### 2. Install a package:

```lua
npm install concurrently --save-dev
```

### 3. Add this to your `package.json` 

```json
"scripts": {
    "custom": "concurrently \"npm run dev --prefix client\" \"npm start --prefix backend\""
}
```
Change the run command and folder names according to your file setup.

Your file system should be similar to this:
```bash
/project-root
  /client
  /backend
  package.json
  node_modules/
  ...
```

### 4. Run the custom Script:
Once everything is set up, you can run this script using:
```bash
npm run custom
```

Change ```type to "module"``` in ```package.json``` if ES6 conflict appears.


If you like this project, consider starring it on [GitHub](https://github.com/Githeimer/CustomRun)!

[![GitHub stars](https://img.shields.io/github/stars/Githeimer/CustomRun)](https://github.com/Githeimer/CustomRun)








