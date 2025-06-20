import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const ContributorCard = ({ image, name, role, socials = {} }) => {
  return (
    <div className="w-full max-w-[255px] bg-white/90 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-2xl p-6 flex flex-col items-center transition-all duration-300 hover:scale-[1.03] hover:shadow-xl dark:hover:shadow-[0_0_12px_rgba(255,255,255,0.1)]">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-gray-600 shadow-md mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{role}</p>
      <div className="flex space-x-4">
        {socials.github && (
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-black dark:hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
        )}
        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400">
            <FaLinkedin size={20} />
          </a>
        )}
        {socials.twitter && (
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:text-sky-600 dark:hover:text-sky-300">
            <FaTwitter size={20} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ContributorCard;
