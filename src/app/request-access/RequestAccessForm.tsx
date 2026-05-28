"use client";

export default function RequestAccessForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
    const usecase = (form.elements.namedItem("usecase") as HTMLTextAreaElement).value;
    const subject = encodeURIComponent("E.V.E. Intelligence Access Request");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nUse case:\n${usecase}`
    );
    window.location.href = `mailto:info@andykgroup.com?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Full Name <span className="text-highlight">*</span>
        </label>
        <input
          name="name"
          type="text"
          required
          placeholder="Your full name"
          className="w-full h-11 px-4 border border-grid-500 bg-white text-sm text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-highlight/40 focus:border-highlight transition-colors rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Email Address <span className="text-highlight">*</span>
        </label>
        <input
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="w-full h-11 px-4 border border-grid-500 bg-white text-sm text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-highlight/40 focus:border-highlight transition-colors rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Company
        </label>
        <input
          name="company"
          type="text"
          placeholder="Your company name"
          className="w-full h-11 px-4 border border-grid-500 bg-white text-sm text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-highlight/40 focus:border-highlight transition-colors rounded-lg"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          How will you use E.V.E.?
        </label>
        <textarea
          name="usecase"
          rows={4}
          placeholder="Describe your intended use case..."
          className="w-full px-4 py-3 border border-grid-500 bg-white text-sm text-foreground placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-highlight/40 focus:border-highlight transition-colors rounded-lg resize-none"
        />
      </div>

      <button
        type="submit"
        className="relative inline-flex items-center justify-center w-full h-12 text-sm font-medium text-foreground btn-primary-gradient cursor-pointer"
      >
        <span className="relative z-10">Send Access Request</span>
      </button>

      <p className="text-xs text-muted-2 text-center">
        Your request will open your email client pre-filled. We respond within 48 hours.
      </p>
    </form>
  );
}
