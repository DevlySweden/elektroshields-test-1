const Contact = ({ site }) => {
  const { contactSection, contact, company } = site

  const handleSubmit = (event) => {
    if (contactSection.form.submitBehavior === 'mock') {
      event.preventDefault()
    }
  }

  return (
    <section id="contact" className="section section--contact">
      <div className="container contact">
        <div className="contact__details">
          <h2 className="section__title">{contactSection.sectionTitle}</h2>
          <p className="section__text">{contactSection.sectionText}</p>
          <address className="contact__list">
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            <span>{company.location}</span>
          </address>
        </div>
        {contactSection.form.enabled ? (
          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="form-field">
              <span>{contactSection.form.fields.nameLabel}</span>
              <input
                type="text"
                name="name"
                placeholder={contactSection.form.fields.namePlaceholder}
                autoComplete="name"
                required
              />
            </label>
            <label className="form-field">
              <span>{contactSection.form.fields.emailLabel}</span>
              <input
                type="email"
                name="email"
                placeholder={contactSection.form.fields.emailPlaceholder}
                autoComplete="email"
                required
              />
            </label>
            <label className="form-field">
              <span>{contactSection.form.fields.messageLabel}</span>
              <textarea
                name="message"
                rows="5"
                placeholder={contactSection.form.fields.messagePlaceholder}
                required
              />
            </label>
            <button className="btn btn--primary btn--solid" type="submit">
              {contactSection.form.fields.submitText}
            </button>
            <p className="form__disclaimer">{contactSection.form.disclaimerText}</p>
          </form>
        ) : null}
      </div>
    </section>
  )
}

export default Contact
