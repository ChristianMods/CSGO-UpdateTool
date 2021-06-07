const https = require('https');
const fs = require('fs');
const file = fs.createWriteStream('offsets.yaml');

try {
  https.get(
    'https://raw.githubusercontent.com/frk1/hazedumper/master/csgo.yaml',
    (res) => {
      console.log(
        'Success! There Should Be A Offsets.yaml File In This Directory.'
      );
      res.pipe(file);
    }
  );
} catch (e) {
  console.log(e); // there most likley wont be an error but just incase
}
