import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { EMAILJS_CONFIG } from '../config/emailjs'
import './Contact.css'

function Contact() {
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [status, setStatus] = useState({
    loading: false,
    message: '',
    type: '' // 'success' ou 'error'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, message: '', type: '' })

    try {
      // Envoi de l'email via EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'jordann.miso@gmail.com'
      }

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      // Succès
      setStatus({
        loading: false,
        message: language === 'fr' 
          ? 'Message envoyé avec succès ! Je vous répondrai bientôt.' 
          : 'Message sent successfully! I will reply soon.',
        type: 'success'
      })

      // Réinitialiser le formulaire
      setFormData({
        name: '',
        email: '',
        message: ''
      })

      // Effacer le message après 5 secondes
      setTimeout(() => {
        setStatus({ loading: false, message: '', type: '' })
      }, 5000)

    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setStatus({
        loading: false,
        message: language === 'fr'
          ? 'Erreur lors de l\'envoi du message. Veuillez réessayer ou me contacter directement.'
          : 'Error sending message. Please try again or contact me directly.',
        type: 'error'
      })
    }
  }

  return (
    <div className="contact">
      <h1>{t.contact.title}</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>{t.contact.subtitle}</h2>
          <p>{t.contact.description}</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <h3>{t.contact.emailLabel}</h3>
              <a href="mailto:jordann.miso@gmail.com">jordann.miso@gmail.com</a>
            </div>
            <div className="contact-method">
              <h3>{t.contact.linkedinLabel}</h3>
              <a href="https://www.linkedin.com/in/jordann-miso-64a252255/">Jordann Miso</a>
            </div>
            <div className="contact-method">
              <h3>{t.contact.githubLabel}</h3>
              <a href="https://github.com/JordannM83">JordannM83</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {status.message && (
            <div className={`alert alert-${status.type}`}>
              {status.message}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">{t.contact.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status.loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{t.contact.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status.loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">{t.contact.message}</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={status.loading}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={status.loading}>
            {status.loading ? (language === 'fr' ? 'Envoi...' : 'Sending...') : t.contact.send}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
