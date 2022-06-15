
const pwdCommand = require('./pwd')
 const fs = require('fs');

process.stdout.write("prompt > ");

process.stdin.on('data', (data) => {
    
    const cmd = data.toString().trim();
    if(cmd === 'ls'){
        fs.readdir('./', 'utf8', (err, files)=>{
            if(err){
                throw err;
            }   else{
                process.stdout.write(files.join('\n'))
                process.stdout.write('prompt >')
            }
        })
    }else if(cmd !== 'pwd'){
        process.stdout.write("You typed: " + cmd);
        process.stdout.write('\nprompt >');
    }
        
});




