import { useState, FormEvent } from "react";
import { PersonalInfo } from "../data/portfolio";

interface Props {
  info: PersonalInfo;
  onSave: (info: PersonalInfo) => void;
}

export default function AdminProfileForm({ info, onSave }: Props) {
  const [name, setName] = useState(info.name);
  const [tagline, setTagline] = useState(info.tagline);
  const [about, setAbout] = useState(info.about);
  const [email, setEmail] = useState(info.email);
  const [phone, setPhone] = useState(info.phone);
  const [location, setLocation] = useState(info.location);
  const [skillsStr, setSkillsStr] = useState(info.skills.join(", "));
  const [github, setGithub] = useState(info.social.github);
  const [linkedin, setLinkedin] = useState(info.social.linkedin);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave({
      name,
      tagline,
      about,
      email,
      phone,
      location,
      social: { github, linkedin },
      skills: skillsStr.split(",").map((s) => s.trim()).filter(Boolean),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#b3b3b3] mb-1">Nama</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#333] text-white focus:ring-1 focus:ring-[#E50914]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#b3b3b3] mb-1">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#333] text-white focus:ring-1 focus:ring-[#E50914]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#b3b3b3] mb-1">Tagline</label>
        <input
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
          required
          className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#333] text-white focus:ring-1 focus:ring-[#E50914]"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#b3b3b3] mb-1">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#333] text-white focus:ring-1 focus:ring-[#E50914]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#b3b3b3] mb-1">Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#333] text-white focus:ring-1 focus:ring-[#E50914]"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#b3b3b3] mb-1">Tentang Saya</label>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          required
          rows={10}
          className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#333] text-white focus:ring-1 focus:ring-[#E50914] resize-y font-mono text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#b3b3b3] mb-1">
          Skills <span className="text-[#666]">(pisahkan dengan koma)</span>
        </label>
        <input
          value={skillsStr}
          onChange={(e) => setSkillsStr(e.target.value)}
          required
          className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#333] text-white focus:ring-1 focus:ring-[#E50914]"
        />
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-[#b3b3b3] mb-2">Social Media</legend>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            placeholder="https://github.com/username"
            className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#333] text-white focus:ring-1 focus:ring-[#E50914]"
          />
          <input
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            placeholder="https://linkedin.com/in/username"
            className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#333] text-white focus:ring-1 focus:ring-[#E50914]"
          />
        </div>
      </fieldset>

      <button
        type="submit"
        className="px-6 py-2.5 rounded bg-[#E50914] text-white font-semibold text-sm hover:bg-[#f40612] transition-colors"
      >
        Simpan Profile
      </button>
    </form>
  );
}
