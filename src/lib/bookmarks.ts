const STORAGE_KEY = "codemastery-bookmarks";

export function getBookmarks(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

export function toggleBookmark(id: string): boolean {
  const bookmarks = getBookmarks();
  const idx = bookmarks.indexOf(id);
  if (idx === -1) {
    bookmarks.push(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    return true;
  } else {
    bookmarks.splice(idx, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));
    return false;
  }
}

export function isBookmarked(id: string): boolean {
  return getBookmarks().includes(id);
}

export function clearBookmarks(): void {
  localStorage.removeItem(STORAGE_KEY);
}
