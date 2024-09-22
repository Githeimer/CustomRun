# CUSTOM RUN

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





