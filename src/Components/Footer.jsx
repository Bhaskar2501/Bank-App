import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.socialLinks}>
        <a href="mailto:your-email@example.com" style={styles.link}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.instagram.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <FontAwesomeIcon icon={faInstagram} className="text-white" />
        </a>
        <a
          href="https://twitter.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.link}
        >
          <FontAwesomeIcon icon={faTwitter}/>
        </a>
      </div>
      <p style={styles.copyright}>
        © {new Date().getFullYear()} The Hongkong and Shanghai Banking
        Corporation Limited, India. <br></br> All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  socialLinks: {
    marginBottom: "10px",
  },
  link: {
    margin: "0 10px",
    color: "#fff",
    textDecoration: "none",
  },
};

export default Footer;
