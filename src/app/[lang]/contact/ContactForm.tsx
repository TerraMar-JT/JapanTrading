type FormTranslations = {
  readonly title: string;
  readonly name: string;
  readonly email: string;
  readonly country: string;
  readonly company: string;
  readonly subject: string;
  readonly message: string;
  readonly send: string;
  readonly required: string;
  readonly titleOptions: readonly { readonly value: string; readonly label: string }[];
};

export default function ContactForm({ form }: { form: FormTranslations }) {
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
            {form.title}
          </label>
          <select className="contact-form__select" id="title" name="title">
            {form.titleOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="contact-form__field contact-form__field--name">
          <label className="contact-form__label" htmlFor="name">
            {form.name} <span className="contact-form__required">{form.required}</span>
          </label>
          <input className="contact-form__input" id="name" name="name" type="text" required />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="email">
            {form.email} <span className="contact-form__required">{form.required}</span>
          </label>
          <input className="contact-form__input" id="email" name="email" type="email" required />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="country">
            {form.country}
          </label>
          <input className="contact-form__input" id="country" name="country" type="text" />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="company">
            {form.company}
          </label>
          <input className="contact-form__input" id="company" name="company" type="text" />
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor="subject">
            {form.subject}
          </label>
          <input className="contact-form__input" id="subject" name="subject" type="text" />
        </div>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor="message">
          {form.message} <span className="contact-form__required">{form.required}</span>
        </label>
        <textarea className="contact-form__textarea" id="message" name="message" rows={6} required />
      </div>

      <button className="contact__cta" type="submit">
        {form.send}
      </button>
    </form>
  );
}
