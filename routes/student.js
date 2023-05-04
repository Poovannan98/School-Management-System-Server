const router = require("express").Router();
const Student = require("../models/emis");

// CREATE NEW STUDENT
router.post("/", async(req, res) => {
    const newStudent = new Student(req.body);
    try{
        const savedStudent = await newStudent.save();
        res.status(200).json(savedStudent);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET STUDENT DETAILS USING EMIS_NO
router.get("/:id", async(req, res) => {
    try{
        const student = await Student.find({"EMIS_NO": req.params.id});
        // console.log(req.params.id);
        // console.log(student);
        res.status(200).json(student);
    } catch (err) {
        
        res.status(500).json(err);
    }
});


module.exports = router;