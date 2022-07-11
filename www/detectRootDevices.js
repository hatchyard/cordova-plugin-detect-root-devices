const exec = require("cordova/exec");
const SERVICE = "DetectRootDevices"

const detectRoot = {
  attest: function(api_key, cb, err) {
    exec(cb, err, SERVICE, "attest", [api_key]);
  },
};

if (typeof module != "undefined" && module.exports) {
  module.exports = detectRoot;
}
