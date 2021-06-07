const https = require('https');
const fs = require('fs');
const file = fs.createWriteStream('offsets.hpp');

try {
  https.get(
    'https://raw.githubusercontent.com/frk1/hazedumper/master/csgo.hpp',
    (res) => {
      console.log(
        'Success! There Should Be A Offsets.hpp File In This Directory.'
      );
      res.pipe(file);
    }
  );
} catch (e) {
  console.log(e); // there most likley wont be an error but just incase
}
