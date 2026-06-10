export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { error: "Semua field harus diisi" },
        { status: 400 }
      );
    }

    const formspreeId = process.env.FORMSPREE_ID;

    if (formspreeId) {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        console.error("Formspree error:", await res.text());
        return Response.json(
          { error: "Gagal mengirim pesan. Coba lagi nanti." },
          { status: 500 }
        );
      }

      return Response.json({ success: true });
    }

    console.log("Contact form submission:", { name, email, message });
    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json(
      { error: "Terjadi kesalahan. Coba lagi nanti." },
      { status: 500 }
    );
  }
}
