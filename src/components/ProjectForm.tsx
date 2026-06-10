import { useState, FormEvent } from "react";
import { Project } from "../data/portfolio";

interface Props {
  initial?: Project;
  onSave: (data: Omit<Project, "id">) => void;
  onCancel: () => void;
}

export default function ProjectForm({ initial, onSave, onCancel }: Props) {
  const [title, setTitle] = useState(initial?.title || "");
  const [description, setDescription] = useState(initial?.description || "");
  const [techStr, setTechStr] = useState(initial?.tech.join(", ") || "");
  const [demoUrl, setDemoUrl] = useState(initial?.demoUrl || "");
  const [githubUrl, setGithubUrl] = useState(initial?.githubUrl || "");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSave({
      title,
      description,
      tech: techStr.split(",").map((t) => t.trim()).filter(Boolean),
      demoUrl: demoUrl || undefined,
      githubUrl: githubUrl || undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-[#b3b3b3] mb-1">Judul Project</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#333] text-white focus:ring-1 focus:ring-[#E50914] focus:border-[#E50914]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#b3b3b3] mb-1">Deskripsi</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={3}
          className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#333] text-white focus:ring-1 focus:ring-[#E50914] focus:border-[#E50914] resize-y"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-[#b3b3b3] mb-1">
          Tech Stack <span className="text-[#666]">(pisahkan dengan koma)</span>
        </label>
        <input
          value={techStr}
          onChange={(e) => setTechStr(e.target.value)}
          required
          placeholder="React, Node.js, Tailwind"
          className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#333] text-white focus:ring-1 focus:ring-[#E50914] focus:border-[#E50914]"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-[#b3b3b3] mb-1">Demo URL</label>
          <input
            value={demoUrl}
            onChange={(e) => setDemoUrl(e.target.value)}
            placeholder="https://..."
            className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#333] text-white focus:ring-1 focus:ring-[#E50914] focus:border-[#E50914]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#b3b3b3] mb-1">GitHub URL</label>
          <input
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            placeholder="https://..."
            className="w-full px-4 py-2 rounded bg-[#1a1a1a] border border-[#333] text-white focus:ring-1 focus:ring-[#E50914] focus:border-[#E50914]"
          />
        </div>
      </div>
      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="px-6 py-2 rounded bg-[#E50914] text-white font-semibold text-sm hover:bg-[#f40612] transition-colors"
        >
          {initial ? "Simpan" : "Tambah"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 rounded bg-[#333] text-white font-semibold text-sm hover:bg-[#444] transition-colors"
        >
          Batal
        </button>
      </div>
    </form>
  );
}
