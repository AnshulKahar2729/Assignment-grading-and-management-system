import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');


const MyModal = ({modalIsOpen, setModalIsOpen}) => {

  // modal 
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // post assignment 
  
  
  const [file, setFile] = useState(null);
  const [studentId, setStudentId] = useState('65bd1a7a1425238e3f68a30a');
  const [assignmentId, setAssignmentId] = useState('65bdf37703b641e849ebb7e2');

  const handleFileChange = e => {
    setFile(e.target.files[0]);
  };

//   handle upload 
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

      const customStyles = {
        content: {
          maxWidth: '900px', // Set the desired width here
          margin: 'auto', // Center the modal horizontally
        },
      };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles} // Apply custom styles here
      >
        
        
      <div className=''>
        <div className='flex items-center justify-between mb-4'> 
          <h1>Submit Assignment</h1>
          <button onClick={closeModal}>Close Modal</button>
        </div>
        <div className='p-8 border-2 border-dotted rounded-lg'>
          <input type='file' onChange={handleFileChange} />
        </div>
        <button className='w-full bg-black text-white py-4 mt-4 rounded-md hover:bg-gray-800 cursor-pointer' onClick={handleUpload} disabled={!file}>
          Upload
        </button>
      </div>

      </Modal>
    </div>
  );
};

export default MyModal;


// import React, { useState } from 'react';
// import axios from 'axios';

// const TryAPI = () => {
//   // title, teacherId, endDate
//   const [file, setFile] = useState(null);
//   const [title, setTitile] = useState("Dummy Title");
//   const [teacherId, setTeacherId] = useState("65bd1ae91425238e3f68a30d");
//   const [endDate, setEndDate] = useState("2024-12-31");

//   const handleFileChange = e => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     console.log(file)
//     try {
//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('title', title);
//       formData.append('endDate', endDate);
//       formData.append('teacherId', teacherId);

//       const response = await axios.post(
//         'http://localhost:5000/api/teacher/assignment',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );

//       console.log('File uploaded successfully:', response.data.URL);
//     } catch (error) {
//       console.error('Error uploading file:', error.response ? error.response.data : error.message);
//     }
//   };

//   return (
//     <div>
//       <h1>File Upload</h1>
//       <input type='file' onChange={handleFileChange} />
//       <button onClick={handleUpload} disabled={!file}>
//         Upload
//       </button>
//     </div>
//   );
// };

// export default TryAPI;
