"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContact } from "@/app/actions/contact";
import { CONTACT_FORM_INITIAL_STATE, type ContactState } from "@/lib/contact-form-state";

const SERVICE_OPTIONS = [
  { value: "", label: "Select one" },
  { value: "unsure", label: "Unsure / general inquiry" },
  { value: "assessment", label: "Neuropsychological assessment" },
  { value: "therapy", label: "Therapy services" },
  { value: "other", label: "Other (briefly describe below)" },
] as const;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="alert alert--error" role="alert">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    submitContact,
    CONTACT_FORM_INITIAL_STATE,
  );
  const statusRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (state.message && statusRef.current) {
      statusRef.current.focus();
    }
  }, [state.message, state.ok]);

  return (
    <form className="form" action={formAction} noValidate>
      <div ref={statusRef} tabIndex={-1} aria-live="polite" style={{ outline: "none" }}>
        {state.message ? (
          <p
            className={state.ok ? "alert alert--success" : "alert alert--error"}
            role={state.ok ? "status" : "alert"}
          >
            {state.message}
          </p>
        ) : null}
      </div>

      <div className="form__row" aria-hidden="true" style={{ position: "absolute", left: "-10000px" }}>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="form__row">
        <label htmlFor="name">
          Name <span className="required" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={Boolean(state.fieldErrors?.name)}
          aria-describedby={state.fieldErrors?.name ? "err-name" : undefined}
        />
        <FieldError id="err-name" message={state.fieldErrors?.name} />
      </div>

      <div className="form__row">
        <label htmlFor="email">
          Email <span className="required" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-required="true"
          aria-invalid={Boolean(state.fieldErrors?.email)}
          aria-describedby={state.fieldErrors?.email ? "err-email" : undefined}
        />
        <FieldError id="err-email" message={state.fieldErrors?.email} />
      </div>

      <div className="form__row">
        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div className="form__row">
        <label htmlFor="preferredService">
          Preferred service <span className="required" aria-hidden="true">*</span>
        </label>
        <select
          id="preferredService"
          name="preferredService"
          required
          aria-required="true"
          aria-invalid={Boolean(state.fieldErrors?.preferredService)}
          aria-describedby={
            state.fieldErrors?.preferredService ? "err-service" : "service-hint"
          }
          defaultValue=""
        >
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value || "empty"} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
        <p id="service-hint" className="form__hint">
          Choose the option that best matches your interest. Staff may recommend a different service after
          review.
        </p>
        <FieldError id="err-service" message={state.fieldErrors?.preferredService} />
      </div>

      <div className="form__row">
        <label htmlFor="message">
          Short message <span className="required" aria-hidden="true">*</span>
        </label>
        <p id="message-hint" className="form__hint">
          For example, preferred days for a call or a one-line reason for contact. Do not include detailed
          symptoms or treatment history.
        </p>
        <textarea
          id="message"
          name="message"
          required
          aria-required="true"
          aria-describedby={state.fieldErrors?.message ? "message-hint err-message" : "message-hint"}
          aria-invalid={Boolean(state.fieldErrors?.message)}
          maxLength={2000}
          rows={5}
        />
        <FieldError id="err-message" message={state.fieldErrors?.message} />
      </div>

      <p className="form-privacy-note">
        Please do not include sensitive clinical details in this form. This form is for general inquiries only.
      </p>

      <div className="form-emergency-notice" role="region" aria-label="Emergency guidance">
        <strong>Emergency</strong>
        If this is an emergency, call 911 or go to the nearest emergency room. This form is not monitored for
        crises.
      </div>

      <button className="button button--primary" type="submit" disabled={pending}>
        {pending ? "Sending…" : "Submit inquiry"}
      </button>
    </form>
  );
}
