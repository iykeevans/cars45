import util from 'util';
import path from 'path';
// import { getStaticProps } from '../pages'
// import fs from 'fs';
import gc from './google-config';
const bucket = gc.bucket('cars45-web-bucket');

// export const getImage = (allfiles, folder) => {
//     // const folder = path.resolve('public');
//     // const allfiles = fs.readdirSync(folder, 'utf8')
//     allfiles.forEach(file => {
//         let filedir = folder + '/' + file
//         // console.log(file, filedir)
//         let data = fs.readFileSync(filedir, 'utf8');
//         console.log(data)
//     })
// }

export const uploadImage = (file, filename) => new Promise((resolve, reject) => {
    // const { originalname, buffer } = file

    const blob = bucket.file(filename.replace(/ /g, "_"))
    const blobStream = blob.createWriteStream({
        resumable: false
    })
    blobStream.on('finish', () => {
        const publicUrl = format(
            `https://storage.googleapis.com/${bucket.name}/${blob.name}`
        )
        console.log('This is the public url', publicUrl)
        resolve(publicUrl)
    })
        .on('error', () => {
            reject(`Unable to upload image, something went wrong`)
        })
        .end(file)
})


