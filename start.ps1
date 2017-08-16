# requires: Nodejs/NPM, PowerShell
# Permission to run PS scripts (for this session only):
# Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process

# exit if cmdlet gives error
$ErrorActionPreference = "Stop"

if( !(test-path ./node_modules)){
    npm install --global --production windows-build-tools
    npm install

}


"`nRunning pub/sub sample application..."
node ./app.js