import { THEMES, TOTAL_LESSONS, type ThemeId } from './themes';
import { LESSONS } from './lessons';

export const STORAGE_KEY = 'saa:aws:v1';

export interface LessonRecord {
  completed: boolean;
  at: string;
}

export interface ProgressState {
  version: 1;
  lessons: Record<string, LessonRecord>;
}

export const LESSON_EVENT = 'saa-aws:progress-change';

function emptyState(): ProgressState {
  return { version: 1, lessons: {} };
}

export function loadState(): ProgressState {
  if (typeof localStorage === 'undefined') return emptyState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return emptyState();
    const candidate = parsed as Partial<ProgressState>;
    if (candidate.version !== 1 || !candidate.lessons || typeof candidate.lessons !== 'object') {
      return emptyState();
    }
    const lessons: Record<string, LessonRecord> = {};
    for (const [id, value] of Object.entries(candidate.lessons)) {
      if (!value || typeof value !== 'object') continue;
      const record = value as Partial<LessonRecord>;
      lessons[id] = { completed: record.completed === true, at: typeof record.at === 'string' ? record.at : '' };
    }
    return { version: 1, lessons };
  } catch {
    return emptyState();
  }
}

export function saveState(state: ProgressState): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* private mode or quota: progress simply does not persist */
  }
  emitChange();
}

export function emitChange(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(LESSON_EVENT));
}

export function isComplete(state: ProgressState, lessonId: string): boolean {
  return state.lessons[lessonId]?.completed === true;
}

export function setLessonComplete(lessonId: string, completed: boolean): ProgressState {
  const state = loadState();
  state.lessons[lessonId] = { completed, at: new Date().toISOString() };
  saveState(state);
  return state;
}

export function completedCount(state: ProgressState): number {
  return Object.values(state.lessons).filter((record) => record.completed).length;
}

export function themeCompleted(state: ProgressState, theme: ThemeId): number {
  // Count from the LESSONS registry, not from `${theme}-${index}` string building:
  // a theme id containing a hyphen (blue-green) would otherwise look for ids like
  // `blue-green-1` while the lessons emit `bluegreen-1`.
  return LESSONS.filter((lesson) => lesson.theme === theme && isComplete(state, lesson.id)).length;
}

export function overallPercent(state: ProgressState): number {
  return Math.round((completedCount(state) / TOTAL_LESSONS) * 100);
}

export function themePercent(state: ProgressState, theme: ThemeId): number {
  const meta = THEMES.find((item) => item.id === theme);
  if (!meta) return 0;
  return Math.round((themeCompleted(state, meta.id) / meta.lessons) * 100);
}

export function resetProgress(): void {
  saveState(emptyState());
}
