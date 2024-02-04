import React from 'react';
import Contact from '../../assets/Contact us.gif';

const ContactSection = () => {
  return (
    <div className='w-full h-full px-[5%] md:px-[12.5%]'>
        <div className="min-w-screen min-h-screen bg-white flex items-center justify-center px-5 py-5">
      <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: '1000px' }}>
        <div className="md:flex w-full">
          <div className="hidden xl:block w-1/2 bg-white py-10 px-10 border-2 overflow-hidden">
            <img src={Contact} alt='Contact Image'/>
          </div>
          <div className="w-full xl:w-1/2 py-10 px-5 md:px-10 bg-gray-800  text-black xl:text-white">
            <div className="text-center mb-10 text-white">
              <h1 className="font-bold text-3xl ">CONTACT US</h1>
              <p>Feel free to reach out to us</p>
            </div>
            <div>
            <form>
        <div className="mb-2">
          <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-white text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-medium px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>
  );
};

export default ContactSection;