# cordova-plugin-detect-root-devices
This is a cordova plugin for **android** to detect whether our device is not rooted. Here uses the google Safetynet Attestation Api for root detection. This is very useful plugin for critically and commercially important applications to avoid the usage of rooted users which might halmful for those systems.

You can use following line to call the plugin
```
detectRoot.attest(API_KEY, onSuccessCallback, onErrorCallback);
```
To obtain the API_KEY,
1. Go to the Library page in the Google APIs Console.
2. Search for, and select, the Android Device Verification API. The Android Device Verification API dashboard screen appears.
3. If the API isn't already enabled, click Enable.
4. If the Create credentials button appears, click on it to generate an API key. Otherwise, click the All API credentials drop-down list, then select the API key that's associated with your project that has enabled the Android Device Verification API.
5. In the sidebar on the left, click Credentials. Copy the API key that appears.
6. Use this API key when you call the above attest() method of the plugin.

You can access the callbacks like following code.
```
function onSuccessCallback(response) {
    const responseJson = JSON.parse(response.data);
    console.log("This is success callback", responseJson);
    //  In here you can access the json object of the response
    //  when ctsProfileMatch=true that means your device is not rooted
    if(responseJson.ctsProfileMatch) {
        console.log("This device is not rooted");
    } else {
        console.log("This device is rooted");
    }
}

function onErrorCallback(response) {
    //  In errorCallback it will give String as the response
    console.log("This is failure callback", response);
}
```
