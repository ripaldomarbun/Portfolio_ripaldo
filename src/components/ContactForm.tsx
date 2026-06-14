import { useState, FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";
import SocialLinks from "./SocialLinks";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

    try {
      if (formspreeId) {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        if (!res.ok) {
          throw new Error("Gagal mengirim pesan. Coba lagi nanti.");
        }
      } else {
        console.log("Contact form submission:", data);
        await new Promise((r) => setTimeout(r, 1000));
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Terjadi kesalahan");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded border border-white/10 p-6 text-center">
        <p className="text-[#00FF41] font-medium text-lg">Pesan terkirim!</p>
        <p className="text-[#00FF41]/70 text-sm mt-1">
          Terima kasih, saya akan menghubungi Anda segera.
        </p>
      </div>
    );
  }

  return (
    <section id="contact" className="snap-start min-h-screen flex items-center px-4 relative bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={import.meta.env.BASE_URL + "images/contact-bg.jpg"} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      </div>
      <div className="relative z-10 max-w-2xl mx-auto w-full">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#00FF41] uppercase tracking-wide mb-2 drop-shadow-[0_0_8px_rgba(0,255,65,0.3)]">
            Kontak
          </h2>
          <div className="w-24 h-0.5 bg-[#00FF41]/30 rounded mb-4" />
          <p className="text-[#00FF41]/80 mb-8">
            Punya pertanyaan atau tertarik bekerja sama? Kirim pesan!
          </p>
        </ScrollReveal>
        <ScrollReveal>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#00FF41] mb-1">
                Nama
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2.5 rounded bg-transparent border border-[#00FF41]/20 text-[#00FF41] placeholder-[#00FF41]/40 focus:outline-none focus:border-[#00FF41]/50 transition-colors"
                placeholder="Nama lengkap"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#00FF41] mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2.5 rounded bg-transparent border border-[#00FF41]/20 text-[#00FF41] placeholder-[#00FF41]/40 focus:outline-none focus:border-[#00FF41]/50 transition-colors"
                placeholder="email@contoh.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#00FF41] mb-1">
                Pesan
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2.5 rounded bg-transparent border border-[#00FF41]/20 text-[#00FF41] placeholder-[#00FF41]/40 focus:outline-none focus:border-[#00FF41]/50 transition-colors resize-y"
                placeholder="Tulis pesan Anda..."
              />
            </div>
            {status === "error" && (
              <p className="text-[#00FF41]/80 text-sm">{errorMsg}</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
               className="w-full px-6 py-3 rounded border border-[#00FF41] text-[#00FF41] font-semibold text-sm hover:bg-[#00FF41] hover:text-black transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
            </button>
          </form>
        </ScrollReveal>
        <div className="mt-8 flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
