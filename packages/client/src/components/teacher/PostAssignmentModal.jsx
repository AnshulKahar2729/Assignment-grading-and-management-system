import axios from 'axios';
import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');


const PostAssignmentModal = ({modalIsOpen, setModalIsOpen}) => {

  // modal 
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  // post assignment 
  
  // title, teacherId, endDate
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [teacherId, setTeacherId] = useState("65bd1ae91425238e3f68a30d");
  const [endDate, setEndDate] = useState("2024-12-31");

  const handleFileChange = e => {
        setFile(e.target.files[0]);
      };
    
      const handleUpload = async () => {
        console.log(file)
        try {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('title', title);
          formData.append('endDate', endDate);
          formData.append('teacherId', teacherId);
    
          const response = await axios.post(
            'https://assignment-grading-and-management-system.onrender.com/api/teacher/assignment',
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
          <h1>File Upload</h1>
          <button onClick={closeModal}>Close Modal</button>
        </div>
        <div className='p-8 border-2 border-dotted rounded-lg'>
          <input type='file' onChange={handleFileChange} />
        </div>
        {/* item  */}
        <div className="mb-4 mt-4">
                <label className="block text-sm font-medium">Title</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded bg-gray-100 outline-none"
                  required
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
        </div>
        
        {/* item  */}
        <div className="mb-4">
                <label className="block text-sm font-medium">End Date</label>
                <input
                  type="text"
                  className="w-full border p-2 rounded bg-gray-100 outline-none"
                  required
                  value={endDate}
                  onChange={(event) => setEndDate(event.target.value)}
                />
          </div>
        <button className='w-full bg-black text-white py-4 mt-4 rounded-md hover:bg-gray-800 cursor-pointer' onClick={handleUpload} disabled={!file}>
          Upload
        </button>
      </div>

      </Modal>
    </div>
  );
};

export default PostAssignmentModal;


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
