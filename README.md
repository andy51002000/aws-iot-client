# aws-iot-with-alexa

Features in iot client application: 
* Turn On\Off the display
* Control medial player, play, pause, next, stop
* Get Bios Serial Number


# Setup
* Step 1. Download key, cert, and root-CA to your working folder
* Step 2. Add a Thing.json
* Step 3. Configure your Thing.json like

```sh
{
    "keyPath": "YOUR_PRIVATE_KEY_PATH",
    "certPath": "YOUR_CERT_PEM_PATH",
    "caPath": "./root-CA.crt",
    "clientId": "YOUR_Client_ID_on_AWS_IoT",
    "host": "YOUR_END_POINT"
}
```

* Step 4. npm install

# How to use it
Just right click start.psl
