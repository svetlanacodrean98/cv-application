import { useState } from "react";

function GeneralInformation() {
    const [isEditing, setIsEditing] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: ""
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
                <h1>{formData.name}</h1>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone number:</strong> {formData.phone}</p>
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        );
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" 
                        value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email" name="email" 
                        value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="phone">Phone number: </label>
                    <input type="text" id="phone" name="phone" 
                        value={formData.phone} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default GeneralInformation;