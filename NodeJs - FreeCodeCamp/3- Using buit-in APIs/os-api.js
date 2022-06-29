// API-Docs: https://nodejs.org/dist/latest-v16.x/docs/api/os.html
// importing os module to your current module.
const osHandler = require("os");
const userData = osHandler.userInfo();
console.log(`
[+] Machine Data:
=================
    Hostname: ${osHandler.hostname}
    Release : ${osHandler.release}
    Uptime  : ${osHandler.uptime}
    Version : ${osHandler.version}
    User    :{
        UID :${userData.uid}
        GID : ${userData.gid}
        Username: ${userData.username}
        Homedir: ${userData.homedir}
        shell: ${userData.shell}
    }
`);
