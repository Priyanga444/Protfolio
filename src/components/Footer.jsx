import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <a href="#home" className="footer-logo">
            <div className="nav-logo-icon">P</div>
            <span className="nav-logo-text">Priyanga</span>
          </a>

          <div className="footer-socials">
            <a
              href="https://github.com/Priyanga"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/Priyanga"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a
              href="mailto:priyanga@email.com"
              className="social-icon"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>

          <div className="footer-divider" />

          <p className="footer-copyright">
            © {year} <span>Priyanga</span>. All rights reserved.
            <br />
            Designed with <FiHeart style={{ color: '#FF6B6B', display: 'inline', verticalAlign: 'middle' }} /> using{' '}
            <span>React</span> and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  )
}
