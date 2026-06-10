export function EmbeddedIntake() {
  const useEmbed = process.env.NEXT_PUBLIC_USE_EMBEDDED_INTAKE === "true";
  const src = process.env.NEXT_PUBLIC_INTAKE_IFRAME_SRC;

  if (!useEmbed || !src) {
    return null;
  }

  return (
    <section aria-labelledby="embedded-intake-heading">
      <h2 id="embedded-intake-heading">Secure intake form</h2>
      <p className="muted">
        If your practice uses a HIPAA-aligned form provider (with a signed BAA), that form may appear
        below. Otherwise, use the contact form on this page.
      </p>
      <iframe
        title="Therapy intake and contact form"
        className="embed-frame"
        src={src}
        loading="lazy"
      />
    </section>
  );
}
