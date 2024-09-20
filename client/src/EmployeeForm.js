import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        designation: 'HR', // Default selection
        gender: '',
        course: [],
    });
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => {
                const newCourses = checked
                    ? [...prevData.course, value]
                    : prevData.course.filter((course) => course !== value);
                return { ...prevData, course: newCourses };
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const form = new FormData();
        for (let key in formData) form.append(key, formData[key]);
        form.append('image', image);

        try {
            await axios.post('/api/employees/create', form, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            // Clear the form after submission
            setFormData({
                name: '',
                email: '',
                mobile: '',
                designation: 'HR',
                gender: '',
                course: [],
            });
            setImage(null);
        } catch (err) {
            setError('Error creating employee. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile"
                required
            />
            <select
                name="designation"
                value={formData.designation}
                onChange={handleChange}
            >
                <option value="HR">HR</option>
                <option value="Manager">Manager</option>
                <option value="Sales">Sales</option>
            </select>
            <div>
                <label>
                    Male <input type="radio" name="gender" value="Male" onChange={handleChange} />
                </label>
                <label>
                    Female <input type="radio" name="gender" value="Female" onChange={handleChange} />
                </label>
            </div>
            <div>
                <label>
                    MCA <input type="checkbox" name="course" value="MCA" onChange={handleChange} />
                </label>
                <label>
                    BCA <input type="checkbox" name="course" value="BCA" onChange={handleChange} />
                </label>
                <label>
                    BSC <input type="checkbox" name="course" value="BSC" onChange={handleChange} />
                </label>
            </div>
            <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                required
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default EmployeeForm;
