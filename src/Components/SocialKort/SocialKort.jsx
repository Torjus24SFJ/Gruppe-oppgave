import "./SocialKort.css";
import profilePicture from "./assets/avatar-jessica.jpeg";

const SocialKort = () => {
  const user = {
    name: "Jessica Randall",
    location: "London, United Kingdom",
    description: "Front-end developer and avid reader.",
    profilePicture: profilePicture, 
    links: [
      { name: "GitHub", url: "https://github.com" },
      { name: "Frontend Mentor", url: "https://frontendmentor.io" },
      { name: "LinkedIn", url: "https://linkedin.com" },
      { name: "Twitter", url: "https://twitter.com" },
      { name: "Instagram", url: "https://instagram.com" },
    ],
  };

  return (
    <div className="social-page">

    <div className="social-kort">
      <img src={user.profilePicture} alt={`${user.name}'s profile`} className="profile-picture" />
      <h2>{user.name}</h2>
      <p className="location">{user.location}</p>
      <p className="description">&apos;{user.description}&apos;</p>
      <div className="links">
        {user.links.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.name}
          </a>
        ))}
      </div>
    </div>
        </div>
  );
};

export default SocialKort;


