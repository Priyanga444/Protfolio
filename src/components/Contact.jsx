import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiSend, FiMapPin, FiCheckCircle } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setError('')
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your Name, Email, and Message.')
      return
    }

    setLoading(true)
    setError('')

    const mailtoUrl = `mailto:priyangapriyanga444@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)}`

    setTimeout(() => {
      window.location.href = mailtoUrl
      setLoading(false)
      setSent(true)
    }, 400)
  }

  const handleReset = () => {
    setForm({ name: '', email: '', subject: '', message: '' })
    setSent(false)
    setError('')
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind? Let's build something amazing together.
        </p>

        <div className="contact-inner">
          {/* Info Side */}
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm open to discussing exciting projects, creative ideas,
              or opportunities to collaborate. Feel free to reach out anytime!
            </p>

            <div className="contact-links">
              <a
                href="https://github.com/Priyanga444"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                id="contact-github"
              >
                <div className="contact-link-icon"><FiGithub /></div>
                <div className="contact-link-text">
                  <div className="contact-link-label">GitHub</div>
                  <div className="contact-link-value">github.com/Priyanga444</div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/priyanga-r44/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
                id="contact-linkedin"
              >
                <div className="contact-link-icon"><FiLinkedin /></div>
                <div className="contact-link-text">
                  <div className="contact-link-label">LinkedIn</div>
                  <div className="contact-link-value">linkedin.com/in/priyanga-r44</div>
                </div>
              </a>

              <a
                href="mailto:priyangapriyanga444@gmail.com"
                className="contact-link"
                id="contact-email"
              >
                <div className="contact-link-icon"><FiMail /></div>
                <div className="contact-link-text">
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-value">priyangapriyanga444@gmail.com</div>
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
          <div className="contact-form-card">
            {sent ? (
              <div className="form-success">
                <FiCheckCircle style={{ fontSize: '3rem', marginBottom: '0.75rem', color: '#16A34A' }} />
                <h3 style={{ marginBottom: '0.4rem', color: 'var(--text)' }}>Message Ready!</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                  Your email app has been opened to send your message to <strong>priyangapriyanga444@gmail.com</strong>.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-outline"
                  style={{ margin: '0 auto' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && <div className="form-error-msg">{error}</div>}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Your Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email-input">Email Address *</label>
                    <input
                      id="contact-email-input"
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary form-submit-btn"
                  id="contact-submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>Opening Email... ⏳</>
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
