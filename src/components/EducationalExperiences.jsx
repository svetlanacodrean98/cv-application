import { useState } from "react";
import EducationalExperience from "./EducationalExperience";

function EducationalExperiences() {
    const [experiences, setExperiences] = useState([{ id: 1 }]);

    function addExperience() {
        setExperiences([...experiences, { id: Date.now() }]);
    }

    function removeExperience(id) {
        setExperiences(experiences.filter((exp) => exp.id !== id));
    }

    return (
        <>
            {experiences.map((exp) => (
                <EducationalExperience
                    key={exp.id}
                    onRemove={() => removeExperience(exp.id)} />
            ))}
            <button onClick={addExperience}>+ Add new education</button>
        </>
    );
}

export default EducationalExperiences;