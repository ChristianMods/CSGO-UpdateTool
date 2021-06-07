const https = require('https');
const fs = require('fs');
const file = fs.createWriteStream('offsets.vb');

try {
  https.get(
    'https://raw.githubusercontent.com/frk1/hazedumper/master/csgo.vb',
    (res) => {
      console.log(
        'Success! There Should Be A Offsets.vb File In This Directory.'
      );
      res.pipe(file);
    }
  );
} catch (e) {
  console.log(e); // there most likley wont be an error but just incase
}
