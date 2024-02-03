import React, { useState } from 'react';
import axios from 'axios';

const TryAPI = () => {
  const [file, setFile] = useState(null);
  const [studentId, setStudentId] = useState('65bd1a7a1425238e3f68a30a');
  const [assignmentId, setAssignmentId] = useState('65bd89e9eb84b83b0072195b');

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    console.log(file, studentId, assignmentId)
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('studentId', studentId);
      formData.append('assignmentId', assignmentId);

      const response = await axios.post(
        'https://assignment-grading-and-management-system.onrender.com/api/student/assignment',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('File uploaded successfully:', response.data.URL);
    } catch (error) {
      console.error('Error uploading file:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h1>File Upload</h1>
      <input type='file' onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file}>
        Upload
      </button>
    </div>
  );
};

export default TryAPI;
