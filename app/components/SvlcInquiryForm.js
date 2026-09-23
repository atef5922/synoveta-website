"use client";

export default function SvlcInquiryForm({
  seriesName = "SVLC Series",
  productName = "SVLC Series COB LED Display",
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `${seriesName} enquiry from ${form.get("name")}`;
    const body = [
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone") || "Not provided"}`,
      `Country: ${form.get("country") || "Not provided"}`,
      `Product: ${form.get("product")}`,
      "",
      "Project requirements:",
      form.get("message"),
    ].join("\n");

    window.location.href = `mailto:info@synoveta.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="svlc-inquiry" id="svlc-inquiry">
      <div className="container">
        <div className="svlc-inquiry-heading">
          <p className="eyebrow">Talk to our display team</p>
          <h2>Send Inquiry Now</h2>
          <p>Tell us about your display size, viewing distance and installation requirements.</p>
        </div>
        <form className="svlc-inquiry-form" onSubmit={handleSubmit}>
          <label><span>Name *</span><input type="text" name="name" placeholder="Your name" autoComplete="name" required/></label>
          <label><span>Email *</span><input type="email" name="email" placeholder="Your email address" autoComplete="email" required/></label>
          <label><span>Phone</span><input type="tel" name="phone" placeholder="Phone number" autoComplete="tel"/></label>
          <label><span>Country</span><input type="text" name="country" placeholder="Country" autoComplete="country-name"/></label>
          <label className="svlc-form-full"><span>Product</span><input type="text" name="product" value={productName} readOnly/></label>
          <label className="svlc-form-full"><span>Project requirements *</span><textarea name="message" rows="6" placeholder="Please include the required display size, pixel pitch, viewing distance, quantity and installation location." required/></label>
          <div className="svlc-form-action"><button type="submit">Submit inquiry <span aria-hidden="true">→</span></button><small>Submitting opens your email application with the completed enquiry.</small></div>
        </form>
      </div>
    </section>
  );
}
