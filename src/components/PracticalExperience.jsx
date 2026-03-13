import { useState } from "react";

function PracticalExperience({ onRemove }) {
    const [isEditing, setIsEditing] = useState(true);
    const [formData, setFormData] = useState({
        companyName: "",
        position: "",
        responsibilities: "",
        period: ""
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
                <h2>PRACTICAL EXPERIENCE</h2>
                <p><strong>Position:</strong> {formData.position}</p>
                <p><strong>Company name:</strong> {formData.companyName}</p>
                <p><strong>Period:</strong> {formData.period}</p>
                <p style={{ whiteSpace: "pre-wrap" }}><strong>Main responsibilities:</strong><br></br>{formData.responsibilities}</p>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    return (
        <>
            <h2>PRACTICAL EXPERIENCE</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="position">Position: </label>
                    <input type="text" id="position" name="position" 
                        value={formData.position} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="companyName">Company name: </label>
                    <input type="text" id="companyName" name="companyName" 
                        value={formData.companyName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="period">Period: </label>
                    <input type="text" id="period" name="period" 
                        value={formData.period} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="responsibilities">Main responsibilities:</label>
                    <br></br>
                    <textarea rows="7" cols="60" id="responsibilities" name="responsibilities" 
                        value={formData.responsibilities} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
                <button type="button" onClick={onRemove}>Remove job</button>
            </form>
        </>
    );
}

export default PracticalExperience;