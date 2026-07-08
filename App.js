import React, { useState } from "react";

// StudentProfile Component
function StudentProfile(props) {
  const [present, setPresent] = useState(false);

  return (
    <div style={{ border: "1px solid black", padding: "15px", width: "300px" }}>
      <h2>Student Profile</h2>

      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>Course:</strong> {props.course}</p>

      <p>
        <strong>Attendance Status:</strong>{" "}
        {present ? "Present" : "Absent"}
      </p>

      <button onClick={() => setPresent(!present)}>
        Mark {present ? "Absent" : "Present"}
      </button>
    </div>
  );
}

// App Component
function App() {
  return (
    <div>
      <StudentProfile
        name="Ranjith"
        age={20}
        course="Computer Application"
      />
    </div>
  );
}

export default App;