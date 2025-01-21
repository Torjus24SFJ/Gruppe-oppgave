import React from "react";

const SocialLinkCard = () => {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com"},
    { name: "Frontend Mentor", url: "https://frontendmentor.io"},
    { name: "Twitter", url: "https://twitter.com"},
    { name: "LinkedIn", url: "https://linkedin.com"},
    
  ];

  return (
    <div className="">
      <h3>Follow Me</h3>
      <ul>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon} {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

