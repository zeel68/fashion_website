const bcrypt = require('bcrypt');
const input = "admin123";

bcrypt.hash(input, 10).then(hash => {
  console.log("Hash for admin123:", hash);
});
