import { useState } from "react";
import { Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { siteConfig } from "@/config";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          eventType: form.eventType,
          eventDate: form.eventDate,
          message: form.message,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", eventType: "", eventDate: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-neutral-950 overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
            Let's Party
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Book Your Event
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Tell us about your celebration and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-10 shadow-2xl">
          {status === "success" ? (
            <div className="flex flex-col items-center text-center py-10">
              <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
              <p className="text-gray-400 max-w-md">
                Thanks for reaching out! We've sent a confirmation email to your inbox.
                We'll be in touch within 24 hours to plan your event.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-orange-500/60 focus:bg-black/50"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-orange-500/60 focus:bg-black/50"
                    placeholder="jane@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-orange-500/60 focus:bg-black/50"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-300">
                    Event Type *
                  </label>
                  <select
                    name="eventType"
                    required
                    value={form.eventType}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition-colors focus:border-orange-500/60 focus:bg-black/50"
                  >
                    <option value="" className="bg-neutral-900">Select type...</option>
                    {siteConfig.eventTypes.map((type) => (
                      <option key={type} value={type} className="bg-neutral-900">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Preferred Event Date
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={form.eventDate}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition-colors focus:border-orange-500/60 focus:bg-black/50 [color-scheme:dark]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Tell us about your event
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors focus:border-orange-500/60 focus:bg-black/50 resize-none"
                  placeholder="Venue, number of guests, music preferences, special requests..."
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3">
                  <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <p className="text-sm text-red-300">{errorMsg}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-orange-500/30 transition-all hover:scale-[1.02] hover:shadow-orange-500/50 disabled:opacity-60 disabled:hover:scale-100"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Booking Request
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
