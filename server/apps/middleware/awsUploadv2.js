const AWS = require('aws-sdk');
const awsConfig = require("../config");

const s3Client = new AWS.S3({
    accessKeyId: awsConfig.AWS_ID,
    secretAccessKey: awsConfig.AWS_SECRET,
    region: awsConfig.region
});

//console.log(awsConfig)
const uploadParams = {
    Bucket: awsConfig.BUCKET_NAME,
    Key: '', // pass key
    Body: null, // pass file body
};



const upload2aws = async(req, res, next) => {
    const params = uploadParams;

    uploadParams.Key = req.file.originalname;
    uploadParams.Body = req.file.buffer;

    s3Client.upload(params, (err, data) => {
        if (err) {
            res.status(500).json({ error: "Error -> " + err });
        }
        console.log('File uploaded successfully', )

        req.file.originalname,
            data.Location
        next()
    });
}


module.exports = upload2aws