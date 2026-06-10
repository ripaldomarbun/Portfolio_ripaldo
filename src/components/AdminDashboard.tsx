import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getProjects, addProject, updateProject, deleteProject, resetProjects, getPersonalInfo, savePersonalInfo, resetPersonalInfo } from "../data/store";
import { Project, PersonalInfo } from "../data/portfolio";
import ProjectForm from "./ProjectForm";
import AdminProfileForm from "./AdminProfileForm";

interface Props {
  onBack: () => void;
}

type Tab = "projects" | "profile";

export default function AdminDashboard({ onBack }: Props) {
  const { logout } = useAuth();
  const [tab, setTab] = useState<Tab>("projects");
  const [projects, setProjects] = useState<Project[]>(getProjects);
  const [editing, setEditing] = useState<Project | null>(null);
  const [adding, setAdding] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [profileInfo, setProfileInfo] = useState<PersonalInfo>(getPersonalInfo);
  const [profileSaved, setProfileSaved] = useState(false);

  const refresh = () => setProjects([...getProjects()]);

  const handleAdd = (data: Omit<Project, "id">) => {
    addProject(data);
    setAdding(false);
    refresh();
  };

  const handleUpdate = (data: Omit<Project, "id">) => {
    if (!editing) return;
    updateProject(editing.id, data);
    setEditing(null);
    refresh();
  };

  const handleDelete = (id: string) => {
    if (!confirm("Hapus project ini?")) return;
    deleteProject(id);
    refresh();
  };

  const handleReset = () => {
    resetProjects();
    resetPersonalInfo();
    setShowReset(false);
    refresh();
    setProfileInfo(getPersonalInfo());
  };

  const handleProfileSave = (info: PersonalInfo) => {
    savePersonalInfo(info);
    setProfileInfo(info);
    setProfileSaved(true);
    setTimeout(() => setProfileSaved(false), 2000);
  };

  const doLogout = () => {
    logout();
    onBack();
  };

  const tabs: { key: Tab; label: string }[] = [
    { key: "projects", label: "Projects" },
    { key: "profile", label: "Profile" },
  ];

  return (
    <div className="relative z-10 min-h-screen bg-black pt-20 px-4 pb-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <button
              onClick={onBack}
              className="text-gray-500 hover:text-white text-sm transition-colors"
            >
              &larr; Portfolio
            </button>
            <h1 className="text-2xl font-bold text-white uppercase tracking-wide mt-2">Admin Panel</h1>
            <p className="text-xs text-gray-500">v1.0.0</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowReset(true)}
              className="px-4 py-2 rounded border border-white/10 text-gray-500 text-sm hover:text-white transition-colors"
            >
              Reset All Data
            </button>
            <button
              onClick={doLogout}
              className="px-4 py-2 rounded border border-white text-white text-sm font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {showReset && (
          <div className="mb-6 p-4 rounded border border-white/10 bg-zinc-900/50">
            <p className="text-gray-400 text-sm mb-3">
              Yakin reset semua data? Project dan profil akan kembali ke data default.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded border border-white text-white text-sm font-semibold hover:bg-white hover:text-black transition-colors"
              >
                Ya, Reset
              </button>
              <button
                onClick={() => setShowReset(false)}
                className="px-4 py-2 rounded border border-white/10 text-gray-400 text-sm hover:text-white transition-colors"
              >
                Batal
              </button>
            </div>
          </div>
        )}

        <div className="flex gap-1 mb-6 border-b border-white/10">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-5 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-[1px] ${
                tab === t.key
                  ? "text-white border-white"
                  : "text-gray-500 border-transparent hover:text-gray-400"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "profile" && (
          <div className="p-6 rounded border border-white/10 bg-zinc-900/50">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-white">Edit Profile</h2>
              {profileSaved && (
                <span className="text-gray-400 text-sm">Tersimpan!</span>
              )}
            </div>
            <AdminProfileForm info={profileInfo} onSave={handleProfileSave} />
          </div>
        )}

        {tab === "projects" && (
          <>
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-500 text-sm">{projects.length} project</p>
              <button
                onClick={() => setAdding(true)}
                className="px-4 py-2 rounded border border-white text-white text-sm font-semibold hover:bg-white hover:text-black transition-colors"
              >
                + Tambah Project
              </button>
            </div>

            {adding && (
              <div className="mb-6 p-6 rounded border border-white/10 bg-zinc-900/50">
                <h2 className="text-lg font-semibold text-white mb-4">Tambah Project Baru</h2>
                <ProjectForm onSave={handleAdd} onCancel={() => setAdding(false)} />
              </div>
            )}

            {editing && (
              <div className="mb-6 p-6 rounded border border-white/10 bg-zinc-900/50">
                <h2 className="text-lg font-semibold text-white mb-4">Edit Project</h2>
                <ProjectForm initial={editing} onSave={handleUpdate} onCancel={() => setEditing(null)} />
              </div>
            )}

            <div className="space-y-3">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="flex items-start justify-between p-4 rounded border border-white/10 bg-zinc-900/50 hover:border-white/30 transition-colors"
                >
                  <div className="flex-1 min-w-0 mr-4">
                    <h3 className="text-white font-semibold truncate">{project.title}</h3>
                    <p className="text-gray-500 text-sm mt-1 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 text-xs rounded border border-white/10 text-gray-500">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => setEditing(project)}
                      className="px-3 py-1.5 rounded border border-white/10 text-gray-500 text-xs hover:text-white transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="px-3 py-1.5 rounded border border-white/10 text-gray-500 text-xs hover:text-white transition-colors"
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              ))}

              {projects.length === 0 && (
                <p className="text-center text-gray-500 py-12">Belum ada project.</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
