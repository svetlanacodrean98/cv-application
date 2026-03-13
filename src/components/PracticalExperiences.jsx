import { useState } from "react";
import PracticalExperience from "./PracticalExperience";

function PracticalExperiences() {
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
          <PracticalExperience
            key={exp.id}
            onRemove={() => removeExperience(exp.id)} />
        ))}
        <button onClick={addExperience}>+ Add new job</button>
    </>
  );
}

export default PracticalExperiences;