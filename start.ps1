# requires: Nodejs/NPM, PowerShell
# Permission to run PS scripts (for this session only):

Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
# Set-ExecutionPolicy RemoteSigned
# Set-ExecutionPolicy ByPass -File start.ps1
# exit if cmdlet gives error



# $ErrorActionPreference = "Stop"

if( !(test-path ./node_modules)){

    if (-NOT ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")) {
        write-Warning "This setup needs admin permissions. Please run this file as admin."     
        break
    }
    start-process -file npm -argumentlist 'install', '--global', '--production', 'windows-build-tools' -wait   | Wait-Process  
    start-process -file npm -argumentlis 'install' -wait | Wait-Process

}


"`nRunning pub/sub sample application..."
node  './app.js' 