import { useState, FormEvent } from "react";

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
        <p className="text-white font-medium text-lg">Pesan terkirim!</p>
        <p className="text-gray-500 text-sm mt-1">
          Terima kasih, saya akan menghubungi Anda segera.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
          Nama
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2.5 rounded bg-transparent border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
          placeholder="Nama lengkap"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2.5 rounded bg-transparent border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors"
          placeholder="email@contoh.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2.5 rounded bg-transparent border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-white/30 transition-colors resize-y"
          placeholder="Tulis pesan Anda..."
        />
      </div>
      {status === "error" && (
        <p className="text-gray-400 text-sm">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-6 py-3 rounded border border-white text-white font-semibold text-sm hover:bg-white hover:text-black transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
      </button>
    </form>
  );
}
