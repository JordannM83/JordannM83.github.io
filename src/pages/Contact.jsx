import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ajoutez ici votre logique d'envoi de formulaire
    console.log('Form submitted:', formData)
    alert('Message envoyé ! (fonctionnalité à implémenter)')
  }

  return (
    <div className="contact">
      <h1>Contactez-moi</h1>
      
      <div className="contact-container">
        <div className="contact-info">
          <h2>Restons en contact</h2>
          <p>N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <h3>📧 Email</h3>
              <p>contact@example.com</p>
            </div>
            <div className="contact-method">
              <h3>💼 LinkedIn</h3>
              <p>linkedin.com/in/jordannm83</p>
            </div>
            <div className="contact-method">
              <h3>🐙 GitHub</h3>
              <p>github.com/JordannM83</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Envoyer le message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
