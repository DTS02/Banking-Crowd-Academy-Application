const AWS = require('aws-sdk');
const awsConfig = require("../config");
const fs = require('fs')
const respon = require('./awsresponse')
const s3Client = new AWS.S3({
    accessKeyId: awsConfig.AWS_ID,
    secretAccessKey: awsConfig.AWS_SECRET,
    region: awsConfig.region
});

//console.log(awsConfig)


exports.upload = async(req, res) => {
    let path = req.file.path;
    var url;
    var params = {
        Bucket: awsConfig.BUCKET_NAME,
        Key: `${req.file.originalname}`,
        Body: fs.createReadStream(path),
    };

    s3Client.upload(params, (err, data) => {
        if (err) {
            return respon.response(res, null, 404, "Error Upload file")
        }
        if (data) {
            fs.unlinkSync(path);
            url = data.Location;
            return respon.response(res, url, 200, "Upload file Success Url")
        }
    });
}

//masih bug