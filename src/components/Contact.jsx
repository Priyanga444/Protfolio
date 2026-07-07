import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiSend, FiMapPin } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1500)
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title reveal">Get In Touch</h2>
        <p className="section-subtitle reveal delay-1">
          Have a project in mind? Let's build something amazing together.
        </p>

        <div className="contact-inner">
          {/* Info Side */}
          <div className="contact-info reveal-left">
            <h3>Let's <span className="gradient-text">Connect</span></h3>
            <p>
              I'm always open to discussing exciting projects, creative ideas,
              or opportunities to collaborate. Whether you're a recruiter, a
              fellow developer, or a visionary entrepreneur — let's talk!
            </p>

            <div className="contact-links">
              <a
                href="https://github.com/Priyanga"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                id="contact-github"
              >
                <div className="contact-link-icon"><FiGithub /></div>
                <div className="contact-link-text">
                  <div className="contact-link-label">GitHub</div>
                  <div className="contact-link-value">github.com/Priyanga</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/Priyanga"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                id="contact-linkedin"
              >
                <div className="contact-link-icon"><FiLinkedin /></div>
                <div className="contact-link-text">
                  <div className="contact-link-label">LinkedIn</div>
                  <div className="contact-link-value">linkedin.com/in/Priyanga</div>
                </div>
              </a>

              <a
                href="mailto:priyanga@email.com"
                className="contact-link"
                id="contact-email"
              >
                <div className="contact-link-icon"><FiMail /></div>
                <div className="contact-link-text">
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-value">priyanga@email.com</div>
                </div>
              </a>

              <div className="contact-link" style={{ cursor: 'default' }}>
                <div className="contact-link-icon"><FiMapPin /></div>
                <div className="contact-link-text">
                  <div className="contact-link-label">Location</div>
                  <div className="contact-link-value">India 🇮🇳</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form-card reveal-right">
            {sent ? (
              <div className="form-success">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ marginBottom: '0.5rem', color: 'var(--text)' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email-input">Email Address</label>
                    <input
                      id="contact-email-input"
                      type="email"
                      name="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="Project Collaboration"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  id="contact-submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>Sending... ⏳</>
                  ) : (
                    <><FiSend /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
