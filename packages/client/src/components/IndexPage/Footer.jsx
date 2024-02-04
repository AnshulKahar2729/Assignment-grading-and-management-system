import React from 'react';
import Logo from '../../assets/EduTrack (2).png';

function Footer() {
  const socialButtons = [
    { text: <i class="fa-brands fa-facebook"></i>, link: '/' },
    { text: <i class="fa-brands fa-instagram"></i>, link: '/' },
    { text: <i class="fa-brands fa-twitter"></i>, link: '/' },
    { text: <i class="fa-brands fa-github"></i>, link: '/' },
  ];

  const serviceLinks = [
    { text: '1on1 Coaching', link: '#' },
    { text: 'Company Review', link: '#' },
    { text: 'Accounts Review', link: '#' },
    { text: 'HR Consulting', link: '#' },
    { text: 'SEO Optimization', link: '#' },
  ];

  const companyLinks = [
    { text: 'About', link: '#' },
    { text: 'Meet the Team', link: '#' },
    { text: 'Company Reviews', link: '#' },
  ];

  const helpfulLinks = [
    { text: 'Contact', link: '#' },
    { text: 'FAQs', link: '#' },
    { text: 'Live Chat', link: '#' },
  ];

  const legalLinks = [
    { text: 'Accessibility', link: '#' },
    { text: 'Returns Policy', link: '#' },
    { text: 'Refund Policy', link: '#' },
    { text: 'Hiring Statistics', link: '#' },
  ];

  return (
    <div className='w-full h-full px-[5%] md:px-[12.5%]'>

      <footer className="bg-white">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">

          <div className="sm:flex sm:items-center sm:justify-between">
          
            <div className="text-teal-600">
              <img className='h-20' src={Logo} alt='Logo' />
            </div>

            <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
              {socialButtons.map((button, index) => (
                <li key={index}>
                  <span className="text-gray-700 transition hover:opacity-75">{button.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-4">
        
            {renderLinkSection('Services', serviceLinks)}
            
            {renderLinkSection('Company', companyLinks)}
            
            {renderLinkSection('Helpful Links', helpfulLinks)}
            
            {renderLinkSection('Legal', legalLinks)}
          </div>

          <p className="text-xs text-gray-500">&copy; 2022. Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );

  function renderLinkSection(title, links) {
    return (
      <div>
        <p className="font-medium text-gray-900">{title}</p>
        
        <ul className="mt-6 space-y-4 text-sm">
          {links.map((link, index) => (
            <li key={index}>
              <span className="text-gray-700 transition hover:opacity-75">{link.text}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Footer;
