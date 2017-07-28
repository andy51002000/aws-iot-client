# aws-iot-with-alexa

Features in iot client application: 
* Turn On\Off the display
* Get Bios Serial Number


#Setup
* Step 1. Download key, cert, and root-CA to your working folder
* Step 2. Add a Thing.json
* Step 3. Configure your Thing.json like

```sh
{
    "keyPath": "./testclient.private.key",
    "certPath": "./testclient.cert.pem",
    "caPath": "./root-CA.crt",
    "clientId": "YOUR Client ID on AWS IoT",
    "host": "YOUR END POINT"
}
```

* Step 4. npm install

#How to use it
Just right click start.psl
