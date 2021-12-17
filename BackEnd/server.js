const express = require('express')
const app = express()
const port = 4000
// include cors
const cors = require('cors');
// include body parser
const bodyParser = require('body-parser');
// include mongoose
const mongoose = require('mongoose');
// include path
const path = require('path');

// use cors
app.use(cors());

// use cors to allow us to send data without any errors to webpage
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Tell where build folder is
app.use(express.static(path.join(__dirname, '../build')));

// Tell where static folder is
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// parseapplication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// setup connecton with mongoose
const connectionString = 'mongodb+srv://admin:admin@cluster0.plar0.mongodb.net/records?retryWrites=true&w=majority';

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(connectionString);
}

// define schema
const Schema = mongoose.Schema;

// tell schema what data to store
var labSchema = new Schema({
    PatientID: String,
    Name: String,
    Scan: String,
    Time: String,
    Status: String,
    Result: String,
    ImgLink: String
});

// create a model using schema
var LabModel = mongoose.model("labs", labSchema);

// get labs data from the server
app.get('/api/labs', (req, res) => {
    // find data in model
    LabModel.find((error, data) => {
        // send back data
        res.json(data);
    });
})

// send labs data to server using post and log data to console 
app.post('/api/labs', (req, res) => {
    console.log("Lab Received!");
    console.log(req.body.PatientID);
    console.log(req.body.Name);
    console.log(req.body.Scan);

    // interact with LabModel here
    LabModel.create({
        PatientID: req.body.PatientID,
        Name: req.body.Name,
        Scan: req.body.Scan,
        Time: req.body.Time,
        Status: req.body.Status,
        Result: req.body.Result,
        ImgLink: req.body.ImgLink
    });

    // send confirmation from server to client
    res.send("Lab Added");
})

// search for labs
app.get('/api/labs/:id', (req, res) => {
    console.log(req.params.id);

    // return lab at id
    LabModel.findById(req.params.id, (err, data) => {
        res.json(data);
    });
})

// update lab using put
app.put('/api/labs/:id', (req, res) => {
    console.log("Update Lab " + req.params.id);
    console.log(req.body);
    console.log(req.body.PatientID);
    console.log(req.body.Name);
    console.log(req.body.Scan);

    // find by id and update labmodel
    LabModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })
})

// listen for lab delete method
app.delete('/api/labs/:id', (req, res) => {
    console.log("Deleted Lab: " + req.params.id);

    // find Lab by id and delete
    LabModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

// tell schema what data to store
var recordSchema = new Schema({
    PatientID: String,
    Name: String,
    Age: String,
    Dob: String,
    Address: String,
    Contact: String,
    Gender: String,
    Occupation: String,
    EContact: String,
    BloodGrp: String,
    MedCons: String,
    CurrentMeds: String,
    Scan: String
});

// create a model using schema
var RecordModel = mongoose.model("patients", recordSchema);

// get records data from server
app.get('/api/records', (req, res) => {
    // find data in model
    RecordModel.find((error, data) => {
        // send back data
        res.json(data);
    });
})

// send records data to the server using post 
app.post('/api/records', (req, res) => {
    console.log("Record Received!");
    console.log(req.body.Name);
    console.log(req.body.Age);
    console.log(req.body.Scan);

    // interact with RecordModel here
    RecordModel.create({
        PatientID: req.body.PatientID,
        Name: req.body.Name,
        Age: req.body.Age,
        Dob: req.body.Dob,
        Address: req.body.Address,
        Contact: req.body.Contact,
        Gender: req.body.Gender,
        Occupation: req.body.Occupation,
        EContact: req.body.EContact,
        BloodGrp: req.body.BloodGrp,
        MedCons: req.body.MedCons,
        CurrentMeds: req.body.CurrentMeds,
        Scan: req.body.Scan
    });

    // send confirmation from server to client
    res.send("Record Added");
})

// search for records
app.get('/api/records/:id', (req, res) => {
    console.log(req.params.id);

    // return record at id
    RecordModel.findById(req.params.id, (err, data) => {
        res.json(data);
    });
})

// update record using put
app.put('/api/records/:id', (req, res) => {
    console.log("Update Patient " + req.params.id);
    console.log(req.body);
    console.log(req.body.Name);
    console.log(req.body.Age);
    console.log(req.body.Scan);

    // find by id and update RecordModel
    RecordModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (err, data) => {
            res.send(data);
        })
})

// listen for record delete method
app.delete('/api/records/:id', (req, res) => {
    console.log("Deleted Patient: " + req.params.id);

    // find record by id and delete
    RecordModel.findByIdAndDelete(req.params.id, (err, data) => {
        res.send(data);
    })
})

// any other url sends index.html back
app.get('*', (req, res) => {
    // send index.html by joining paths
    res.sendFile(path.join(__dirname + '/../build/index.html'));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})