// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



const util = require('util')
const gc = require('./config/')
const bucket = gc.bucket('cars45-web-bucket'); // should be your bucket name
const fs = require('fs');
const path = require('path');

const getImage = () => {
  console.log('getting image')
  const folder = path.resolve('public/assets/images');
  const allfiles = fs.readdirSync(folder, 'utf8')
  let data = {}
  allfiles.forEach((file, index) => {
    if (file !== '.DS_Store') {
      let filedir = folder + '/' + file
      // let data = fs.readFileSync(filedir, 'utf8');
      uploadImage(filedir, file).catch(err => console.log(err))
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${file}`
      data = { ...data, [file]: publicUrl }
    }

  })

  data = JSON.stringify(data, null, 2);
  fs.writeFileSync('images.json', data);
}


const uploadImage = (file, filename) => new Promise((resolve, reject) => {
  // const { originalname, buffer } = file
  let destination = path.relative(path.resolve('public/assets/images'), file);
  bucket.upload(file, { destination })
    .then(
      uploadResp => {
        console.log({ fileName: destination, status: uploadResp[0] })
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`
        console.log(publicUrl, 'final url')
      },
      err => console.log({ fileName: destination, response: err }, 'An error occured')
    );
  // .then(uploadResp => {
  //   console.log({ fileName: destination, status: uploadResp[0] })
  //   const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`
  //   let data = {
  //     name: filename,
  //     url: publicUrl
  //   };
  //   console.log(publicUrl, 'final url')
  // })
  // .catch(err => console.log(err))

  // const blob = bucket.file(filename.replace(/ /g, "_").split('.')[0])
  // const blobStream = blob.createWriteStream({
  //   resumable: true,
  //   metadata: {
  //     contentType: `image/${filename.replace(/ /g, "_").split('.')[1]}`
  //   }
  // })
  // blobStream.on('finish', () => {
  //   const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`
  //   console.log(publicUrl, 'the url in return')
  //   resolve(publicUrl)
  // })
  //   .on('error', (err) => {
  //     console.log(err)
  //     reject(`Unable to upload image, something went wrong`)
  //   })
  //   .end(file)
})


export default (req, res) => {
  getImage()
  res.status(200).json({ name: 'John Doe' })
}