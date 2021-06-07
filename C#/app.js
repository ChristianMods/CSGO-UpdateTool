const https = require('https');
const fs = require('fs');
const file = fs.createWriteStream('offsets.cs');

try {
  https.get(
    'https://raw.githubusercontent.com/frk1/hazedumper/master/csgo.cs',
    (res) => {
      console.log(
        'Success! There Should Be A Offsets.cs File In This Directory.'
      );
      res.pipe(file);
    }
  );
} catch (e) {
  console.log(e); // there most likley wont be an error but just incase
}
