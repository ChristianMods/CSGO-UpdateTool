const https = require('https');
const fs = require('fs');
const file = fs.createWriteStream('offsets.toml');

try {
  https.get(
    'https://raw.githubusercontent.com/frk1/hazedumper/master/csgo.toml',
    (res) => {
      console.log(
        'Success! There Should Be A Offsets.toml File In This Directory.'
      );
      res.pipe(file);
    }
  );
} catch (e) {
  console.log(e); // there most likley wont be an error but just incase
}
