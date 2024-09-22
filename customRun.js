import { exec } from 'child_process';

const runCommandInNewTerminal = (command, path) => {
    exec(`start cmd.exe /K "cd ${path} && ${command}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`ERROR: ${error.message}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
};



//replace these with your command and file location 
runCommandInNewTerminal('npm run dev', './client');
runCommandInNewTerminal('npm start', './backend');
