import React, { useState } from 'react';


const marketingQuestions = [
    {
      question: "Q1: How can the Assignment Management and Grading System enhance our institution's efficiency in handling assignments?",
      answer: "The system streamlines assignment submission, grading, and feedback processes, reducing manual paperwork and improving overall efficiency."
    },
    {
      question: "Q2: What unique features does the software offer that set it apart from traditional assignment management methods?",
      answer: "Our software provides an intuitive user interface for digital assignment submission, an automated grading system, and real-time progress tracking, offering a modern and efficient alternative to traditional methods."
    },
    {
      question: "Q3: How does the machine learning model contribute to the grading process, and what benefits does it bring?",
      answer: "The machine learning model ensures objective assessments with instant feedback, providing a faster and more accurate grading experience. This feature sets our system apart in delivering timely and data-driven insights."
    },
    {
      question: "Q4: In what ways does the system promote transparency in the grading process, and why is this important?",
      answer: "The system enables real-time progress tracking, fostering transparency. This transparency is crucial for students to understand their academic performance, reducing uncertainties and promoting trust in the grading process."
    },
    {
      question: "Q5: How does the inclusion of plagiarism detection tools align with academic integrity, and what value does it bring to our institution?",
      answer: "Our system incorporates plagiarism detection tools to maintain the originality of assignments, ensuring a high standard of academic integrity. This feature adds significant value by upholding ethical standards in education."
    },
    {
      question: "Q6: Can you elaborate on the benefits of the centralized gradebook and how it contributes to effective communication between teachers and students?",
      answer: "The centralized gradebook compiles all assignment grades, providing a comprehensive overview. This fosters effective communication by giving both teachers and students easy access to a consolidated view of academic performance, facilitating informed discussions and feedback."
    }
    ];
  



    const Queries = () => {
        const [answerOpen, setAnswerOpen] = useState({});
      
        const handleClick = (index) => {
          setAnswerOpen((prev) => ({
            ...prev,
            [index]: !prev[index],
          }));
        };
      
        return (
          <div className='w-full h-full px-[5%] md:px-[12.5%]'>
            <section className="bg-white dark:bg-gray-900">
              <div className="container max-w-4xl px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Frequently asked questions</h1>
      
                <div className="mt-12 space-y-8">
                  {marketingQuestions.map((item, index) => (
                    <div key={index} className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                      <button className="flex items-center justify-between w-full p-8" onClick={() => handleClick(index)}>
                        <h1 className="font-semibold text-gray-700 text-left dark:text-white">{item.question}</h1>
                        <span className="text-gray-400 rounded-full p-2">
                          {!answerOpen[index] ? (
                            <i className="text-[#176DEF] text-2xl fa-solid fa-circle-plus"></i>
                          ) : (
                            <i className="text-gray-400 text-2xl fa-solid fa-circle-minus"></i>
                          )}
                        </span>
                      </button>
                      <hr className="border-gray-200 dark:border-gray-700" />
                      {answerOpen[index] ? (
                        <p className="p-8 text-sm text-gray-500 dark:text-gray-300">{item.answer}</p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        );
      };
      
      export default Queries;