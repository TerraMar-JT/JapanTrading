"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setSubmitting(true);
    // Allow native form submission to proceed — Netlify handles the POST
    // and redirects to the action URL (/thank-you).
  };

  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      action="/thank-you"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      <div className="contact-form__row">
        <div className="contact-form__field contact-form__field--title">
          <label className="contact-form__label" htmlFor="title">
            Title
          </label>
          <select
            className="contact-form__select"
            id="title"
            name="title"
          >
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

      <button
        className="contact__cta"
        type="submit"
        disabled={submitting}
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
