export default function ContactForm() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/__forms.html"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="contact-form__row">
        <div className="contact-form__field contact-form__field--title">
          <label className="contact-form__label" htmlFor="title">
            Title
          </label>
          <select className="contact-form__select" id="title" name="title">
            <option value="">--</option>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Dr.">Dr.</option>
          </select>
        </div>
        <div className="contact-form__field contact-form__field--name">
          <label className="contact-form__label" htmlFor="name">
            Name <span className="contact-form__required">*</span>
          </label>
          <input
            className="contact-form__input"
            id="name"
            name="name"
            type="text"
            required
          />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="email">
            Email <span className="contact-form__required">*</span>
          </label>
          <input
            className="contact-form__input"
            id="email"
            name="email"
            type="email"
            required
          />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="country">
            Country
          </label>
          <input
            className="contact-form__input"
            id="country"
            name="country"
            type="text"
          />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="company">
            Company
          </label>
          <input
            className="contact-form__input"
            id="company"
            name="company"
            type="text"
          />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="subject">
            Subject
          </label>
          <input
            className="contact-form__input"
            id="subject"
            name="subject"
            type="text"
          />
        </div>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="message">
          Message <span className="contact-form__required">*</span>
        </label>
        <textarea
          className="contact-form__textarea"
          id="message"
          name="message"
          rows={6}
          required
        />
      </div>

      <button className="contact__cta" type="submit">
        Send Message
      </button>
    </form>
  );
}
