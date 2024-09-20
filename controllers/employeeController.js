const Employee = require('../models/Employee');
const multer = require('multer');
const path = require('path');

// Configure multer for image upload
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        if (extname) {
            cb(null, true);
        } else {
            cb('Error: Images Only!');
        }
    }
}).single('image');

exports.createEmployee = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) return res.status(400).json({ message: err });

        const { name, email, mobile, designation, gender, course } = req.body;
        const newEmployee = new Employee({
            name, email, mobile, designation, gender, course, image: req.file.filename
        });

        await newEmployee.save();
        res.json(newEmployee);
    });
};

exports.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

// Add more methods (update, delete, etc.) here
