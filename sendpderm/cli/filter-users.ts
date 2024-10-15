const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Create the photos directory if it doesn't exist
const photosDir = path.join(__dirname, 'photos');
if (!fs.existsSync(photosDir)) {
  fs.mkdirSync(photosDir);
}

async function downloadPhoto(url, filePath) {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  });

  return new Promise((resolve, reject) => {
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

async function filterUsers() {
  // Load the JSON data from the file
  const data = require(path.join(__dirname, 'pdermreg.users.json'));

  // Step 1: Filter users that have a photoUrl
  let users = data.filter(user => user.photoUrl);

  // Step 2: Remove duplicates based on the email field
  const seenEmails = new Set();
  users = users.filter(user => {
    if (seenEmails.has(user.email)) {
      return false;
    }
    seenEmails.add(user.email);
    return true;
  });

  // Step 3: Keep only specified fields and download photos
  users = await Promise.all(users.map(async ({ lastName, firstName, middleName, city, position, photoUrl }) => {
    const fileName = `${lastName} ${firstName} ${middleName}.jpg`.replace(/[/\\?%*:|"<>]/g, '-'); // Replace illegal characters
    const filePath = path.join(photosDir, fileName);

    try {
      // Download the photo
      await downloadPhoto(photoUrl, filePath);
      console.log(`Downloaded photo for ${lastName} ${firstName} ${middleName}`);
    } catch (error) {
      console.error(`Failed to download photo for ${lastName} ${firstName} ${middleName}:`, error);
    }

    // Return filtered user data
    return {
      lastName,
      firstName,
      middleName,
      city,
      position,
      photoUrl
    };
  }));

  // Save the result to a new JSON file
  fs.writeFileSync(path.join(__dirname, 'filtered_users.json'), JSON.stringify(users, null, 2), 'utf-8');
  console.log('Filtered users have been saved to filtered_users.json');
}

filterUsers().catch(console.error);
