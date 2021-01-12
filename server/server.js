const express = require('express');
const app = express();
const {cloudinary} = require('./cloudinary');
var cors = require('cors');

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' })); //let's us parse JSON body data
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.get('/api/images', async(req,res)=>{
    const {resources} = await cloudinary.search
    .expression('folder:ImageRepo')
    .sort_by('public_id', 'desc')
    .max_results(30)
    .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds); //send array of image ids
});

app.post('/api/upload', async(req,res)=>{
    try { //upload file to cloudinary
        const fileString = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileString, {
            upload_preset: 'ImageRepo' //cloudinary folder 
        });
        console.log(uploadResponse);
        res.json({msg:'Upload worked'});
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'there is an issue'});
    }
});

const port = process.env.PORT || 3001;
app.listen(port, () =>{
    console.log(`listening on port ${port}`);
});
