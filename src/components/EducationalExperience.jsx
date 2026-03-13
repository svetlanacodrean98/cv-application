import { useState } from "react";

function EducationalExperience({ onRemove }) {
    const [isEditing, setIsEditing] = useState(true);
    const [formData, setFormData] = useState({
        schoolName: "",
        titleOfStudy: "",
        periodOfStudy: ""
    });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsEditing(false);
    }

    if (!isEditing) {
        return (
            <>
                <h2>EDUCATIONAL EXPERIENCE</h2>
                <p><strong>Title of study:</strong> {formData.titleOfStudy}</p>
                <p><strong>School name:</strong> {formData.schoolName}</p>
                <p><strong>Period of study:</strong> {formData.periodOfStudy}</p>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    return (
        <>
            <h2>EDUCATIONAL EXPERIENCE</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="titleOfStudy">Title of study: </label>
                    <input type="text" id="titleOfStudy" name="titleOfStudy" 
                        value={formData.titleOfStudy} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="schoolName">School name: </label>
                    <input type="text" id="schoolName" name="schoolName" 
                        value={formData.schoolName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="periodOfStudy">Period of study: </label>
                    <input type="text" id="periodOfStudy" name="periodOfStudy" 
                        value={formData.periodOfStudy} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
                <button type="button" onClick={onRemove}>Remove education</button>
            </form>
        </>
    );
}

export default EducationalExperience;