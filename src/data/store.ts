import { Project, projects as defaultProjects, personalInfo as defaultInfo, PersonalInfo } from "./portfolio";

const PROJECTS_KEY = "portfolio_projects";
const INFO_KEY = "portfolio_info";

// ── Projects ──

export function getProjects(): Project[] {
  try {
    const stored = localStorage.getItem(PROJECTS_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return defaultProjects;
}

export function saveProjects(projects: Project[]) {
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
}

export function addProject(data: Omit<Project, "id">): Project {
  const project: Project = { id: crypto.randomUUID(), ...data };
  const projects = getProjects();
  projects.push(project);
  saveProjects(projects);
  return project;
}

export function updateProject(id: string, data: Partial<Omit<Project, "id">>) {
  const projects = getProjects();
  const idx = projects.findIndex((p) => p.id === id);
  if (idx === -1) return;
  projects[idx] = { ...projects[idx], ...data };
  saveProjects(projects);
}

export function deleteProject(id: string) {
  const projects = getProjects().filter((p) => p.id !== id);
  saveProjects(projects);
}

export function resetProjects() {
  localStorage.removeItem(PROJECTS_KEY);
}

// ── Personal Info ──

export function getPersonalInfo(): PersonalInfo {
  try {
    const stored = localStorage.getItem(INFO_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  return defaultInfo;
}

export function savePersonalInfo(info: PersonalInfo) {
  localStorage.setItem(INFO_KEY, JSON.stringify(info));
}

export function validateProject(data: Partial<Omit<Project, "id">>): string | null {
  if (!data.title?.trim()) return "Judul project wajib diisi";
  if (!data.description?.trim()) return "Deskripsi project wajib diisi";
  if (!data.tech?.length) return "Minimal satu tech stack wajib diisi";
  return null;
}

export function updatePersonalInfo(data: Partial<PersonalInfo>) {
  const info = getPersonalInfo();
  Object.assign(info, data);
  savePersonalInfo(info);
  return info;
}

export function resetPersonalInfo() {
  localStorage.removeItem(INFO_KEY);
}
