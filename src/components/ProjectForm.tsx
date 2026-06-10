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
        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Judul Project</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 rounded bg-surface dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-1 focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Deskripsi</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={3}
          className="w-full px-4 py-2 rounded bg-surface dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-1 focus:ring-primary focus:border-primary resize-y"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
          Tech Stack <span className="text-gray-400 dark:text-gray-500">(pisahkan dengan koma)</span>
        </label>
        <input
          value={techStr}
          onChange={(e) => setTechStr(e.target.value)}
          required
          placeholder="React, Node.js, Tailwind"
          className="w-full px-4 py-2 rounded bg-surface dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-1 focus:ring-primary focus:border-primary"
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Demo URL</label>
          <input
            value={demoUrl}
            onChange={(e) => setDemoUrl(e.target.value)}
            placeholder="https://..."
            className="w-full px-4 py-2 rounded bg-surface dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">GitHub URL</label>
          <input
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            placeholder="https://..."
            className="w-full px-4 py-2 rounded bg-surface dark:bg-gray-950 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:ring-1 focus:ring-primary focus:border-primary"
          />
        </div>
      </div>
      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="px-6 py-2 rounded bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors"
        >
          {initial ? "Simpan" : "Tambah"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Batal
        </button>
      </div>
    </form>
  );
}
