import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Search as SearchIcon,
  Copy,
  Download,
  Palette,
  Eye,
  Code2,
  Grid,
  List,
  Sliders,
  Star,
  Sun,
  Moon,
  Check,
  X,
} from "lucide-react";

interface IconEntry {
  name: string;
  svg: string;
  tags: string[];
  category: string;
}

interface Library {
  id: string;
  name: string;
  icons: IconEntry[];
}

const h = (d: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;

const l = (d: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;

const m = (d: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">${d}</svg>`;

const fa = (d: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">${d}</svg>`;

const bs = (d: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">${d}</svg>`;

function ic(name: string, svg: string, tags: string[], category: string): IconEntry {
  return { name, svg, tags, category };
}

const heroiconsIcons: IconEntry[] = [
  ic("Search", h('<path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>'), ["search", "magnify", "find"], "Actions"),
  ic("Home", h('<path d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/>'), ["home", "house", "dashboard"], "Navigation"),
  ic("User", h('<path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>'), ["user", "person", "profile"], "People"),
  ic("Settings", h('<path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281zM15 12a3 3 0 11-6 0 3 3 0 016 0z"/>'), ["settings", "gear", "preferences"], "Actions"),
  ic("Bell", h('<path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"/>'), ["bell", "notification", "alert"], "Communication"),
  ic("Mail", h('<path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>'), ["mail", "email", "message"], "Communication"),
  ic("Heart", h('<path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>'), ["heart", "like", "love"], "Actions"),
  ic("Star", h('<path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>'), ["star", "favorite", "rating"], "Actions"),
  ic("Trash", h('<path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>'), ["trash", "delete", "remove"], "Actions"),
  ic("Pencil", h('<path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>'), ["pencil", "edit", "write"], "Actions"),
  ic("Camera", h('<path d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316zM16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"/>'), ["camera", "photo", "image"], "Media"),
  ic("Clock", h('<path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>'), ["clock", "time", "schedule"], "Time"),
  ic("Calendar", h('<path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"/>'), ["calendar", "date", "event"], "Time"),
  ic("ArrowRight", h('<path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>'), ["arrow", "right", "next"], "Navigation"),
  ic("Check", h('<path d="M4.5 12.75l6 6 9-13.5"/>'), ["check", "confirm", "done"], "Actions"),
];

const lucideIcons: IconEntry[] = [
  ic("Search", l('<circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>'), ["search", "magnify", "find"], "Actions"),
  ic("Home", l('<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'), ["home", "house", "dashboard"], "Navigation"),
  ic("User", l('<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>'), ["user", "person", "profile"], "People"),
  ic("Settings", l('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.32 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>'), ["settings", "gear", "preferences"], "Actions"),
  ic("Bell", l('<path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>'), ["bell", "notification", "alert"], "Communication"),
  ic("Mail", l('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'), ["mail", "email", "message"], "Communication"),
  ic("Heart", l('<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7z"/>'), ["heart", "like", "love"], "Actions"),
  ic("Star", l('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'), ["star", "favorite", "rating"], "Actions"),
  ic("Trash", l('<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>'), ["trash", "delete", "remove"], "Actions"),
  ic("Pencil", l('<path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>'), ["pencil", "edit", "write"], "Actions"),
  ic("Camera", l('<path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/>'), ["camera", "photo", "image"], "Media"),
  ic("Clock", l('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'), ["clock", "time", "schedule"], "Time"),
  ic("Calendar", l('<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>'), ["calendar", "date", "event"], "Time"),
  ic("ArrowRight", l('<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'), ["arrow", "right", "next"], "Navigation"),
  ic("Check", l('<polyline points="20 6 9 17 4 12"/>'), ["check", "confirm", "done"], "Actions"),
];

const materialIcons: IconEntry[] = [
  ic("Search", m('<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>'), ["search", "magnify", "find"], "Actions"),
  ic("Home", m('<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>'), ["home", "house", "dashboard"], "Navigation"),
  ic("User", m('<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>'), ["user", "person", "profile"], "People"),
  ic("Settings", m('<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1115.6 12 3.611 3.611 0 0112 15.6z"/>'), ["settings", "gear", "preferences"], "Actions"),
  ic("Bell", m('<path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>'), ["bell", "notification", "alert"], "Communication"),
  ic("Mail", m('<path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>'), ["mail", "email", "message"], "Communication"),
  ic("Heart", m('<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>'), ["heart", "like", "love"], "Actions"),
  ic("Star", m('<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>'), ["star", "favorite", "rating"], "Actions"),
  ic("Trash", m('<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>'), ["trash", "delete", "remove"], "Actions"),
  ic("Pencil", m('<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>'), ["pencil", "edit", "write"], "Actions"),
  ic("Camera", m('<path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>'), ["camera", "photo", "image"], "Media"),
  ic("Clock", m('<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>'), ["clock", "time", "schedule"], "Time"),
  ic("Calendar", m('<path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>'), ["calendar", "date", "event"], "Time"),
  ic("ArrowRight", m('<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>'), ["arrow", "right", "next"], "Navigation"),
  ic("Check", m('<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>'), ["check", "confirm", "done"], "Actions"),
];

const fontAwesomeIcons: IconEntry[] = [
  ic("Search", fa('<path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83S.001 4.41.001 9.83s4.409 9.83 9.829 9.83c1.929 0 3.731-.558 5.251-1.523l4.977 4.977a1.5 1.5 0 102.053-2.053zM2.171 9.83c0-4.225 3.436-7.661 7.661-7.661s7.661 3.436 7.661 7.661-3.436 7.661-7.661 7.661S2.171 14.055 2.171 9.83z"/>'), ["search", "magnify", "find"], "Actions"),
  ic("Home", fa('<path d="M21.99 11.59l.01.01L12 2 2 11.59l.01-.01L2 11.61v.01c-.34.36-.56.84-.56 1.38 0 1.08.87 1.96 1.95 1.96H5v6.99C5 21.54 5.46 22 6.04 22h4.46v-5.35h3.01V22H18c.55 0 1-.46 1-1.04v-6.99h1.54c1.08 0 1.96-.88 1.96-1.96 0-.54-.22-1.02-.56-1.38l.05-.03z"/>'), ["home", "house", "dashboard"], "Navigation"),
  ic("User", fa('<path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v1c0 .55.45 1 1 1h18c.55 0 1-.45 1-1v-1c0-3.33-6.67-5-10-5z"/>'), ["user", "person", "profile"], "People"),
  ic("Settings", fa('<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>'), ["settings", "gear", "preferences"], "Actions"),
  ic("Bell", fa('<path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>'), ["bell", "notification", "alert"], "Communication"),
  ic("Mail", fa('<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>'), ["mail", "email", "message"], "Communication"),
  ic("Heart", fa('<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>'), ["heart", "like", "love"], "Actions"),
  ic("Star", fa('<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>'), ["star", "favorite", "rating"], "Actions"),
  ic("Trash", fa('<path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>'), ["trash", "delete", "remove"], "Actions"),
  ic("Pencil", fa('<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>'), ["pencil", "edit", "write"], "Actions"),
  ic("Camera", fa('<path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>'), ["camera", "photo", "image"], "Media"),
  ic("Clock", fa('<path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>'), ["clock", "time", "schedule"], "Time"),
  ic("Calendar", fa('<path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>'), ["calendar", "date", "event"], "Time"),
  ic("ArrowRight", fa('<path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>'), ["arrow", "right", "next"], "Navigation"),
  ic("Check", fa('<path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>'), ["check", "confirm", "done"], "Actions"),
];

const bootstrapIcons: IconEntry[] = [
  ic("Search", bs('<path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"/>'), ["search", "magnify", "find"], "Actions"),
  ic("Home", bs('<path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 00.5.5h4a.5.5 0 00.5-.5v-7a.5.5 0 00-.146-.354L13 5.793V2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v1.293L8.354 1.146a.5.5 0 00-.708 0l-6 6A.5.5 0 001.5 7.5v7a.5.5 0 00.5.5h4a.5.5 0 00.5-.5z"/>'), ["home", "house", "dashboard"], "Navigation"),
  ic("User", bs('<path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"/>'), ["user", "person", "profile"], "People"),
  ic("Settings", bs('<path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 01-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 01.872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 012.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 012.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 01.872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 01-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 01-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 110-5.86 2.929 2.929 0 010 5.858z"/>'), ["settings", "gear", "preferences"], "Actions"),
  ic("Bell", bs('<path d="M8 16a2 2 0 002-2H6a2 2 0 002 2zm.995-14.901a1 1 0 10-1.99 0A5.002 5.002 0 003 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>'), ["bell", "notification", "alert"], "Communication"),
  ic("Mail", bs('<path d="M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v.217l7 4.2 7-4.2V4a1 1 0 00-1-1H2zm13 2.383l-4.708 2.825L15 11.105V5.383zm-.034 6.876l-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 002 13h12a1 1 0 00.966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"/>'), ["mail", "email", "message"], "Communication"),
  ic("Heart", bs('<path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 01-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>'), ["heart", "like", "love"], "Actions"),
  ic("Star", bs('<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>'), ["star", "favorite", "rating"], "Actions"),
  ic("Trash", bs('<path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"/><path d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM6.118 4L5 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H6.118z"/>'), ["trash", "delete", "remove"], "Actions"),
  ic("Pencil", bs('<path d="M12.146.146a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-10 10a.5.5 0 01-.168.11l-5 2a.5.5 0 01-.65-.65l2-5a.5.5 0 01.11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 01.5.5v.5h.5a.5.5 0 01.5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 015 12.5V12h-.5a.5.5 0 01-.5-.5V11h-.5a.5.5 0 01-.468-.325z"/>'), ["pencil", "edit", "write"], "Actions"),
  ic("Camera", bs('<path d="M2 6a2 2 0 012-2h1.172a2 2 0 001.414-.586l.828-.828A2 2 0 018.828 2h2.344a2 2 0 011.414.586l.828.828A2 2 0 0014.828 4H16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm8 7a3 3 0 100-6 3 3 0 000 6z"/>'), ["camera", "photo", "image"], "Media"),
  ic("Clock", bs('<path d="M8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z"/><path d="M8 16A8 8 0 108 0a8 8 0 000 16zm7-8A7 7 0 111 8a7 7 0 0114 0z"/>'), ["clock", "time", "schedule"], "Time"),
  ic("Calendar", bs('<path d="M3.5 0a.5.5 0 01.5.5V1h8V.5a.5.5 0 011 0V1h1a2 2 0 012 2v11a2 2 0 01-2 2H2a2 2 0 01-2-2V3a2 2 0 012-2h1V.5a.5.5 0 01.5-.5zM1 4v10a1 1 0 001 1h12a1 1 0 001-1V4H1z"/>'), ["calendar", "date", "event"], "Time"),
  ic("ArrowRight", bs('<path d="M1 8a.5.5 0 01.5-.5h11.793l-3.147-3.146a.5.5 0 01.708-.708l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L13.293 8.5H1.5A.5.5 0 011 8z"/>'), ["arrow", "right", "next"], "Navigation"),
  ic("Check", bs('<path d="M10.97 4.97a.75.75 0 011.07 1.05l-3.99 4.99a.75.75 0 01-1.08.02L4.324 8.384a.75.75 0 111.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 01.02-.022z"/>'), ["check", "confirm", "done"], "Actions"),
];

const libraries: Library[] = [
  { id: "heroicons", name: "Heroicons", icons: heroiconsIcons },
  { id: "lucide", name: "Lucide", icons: lucideIcons },
  { id: "material", name: "Material Icons", icons: materialIcons },
  { id: "fontawesome", name: "Font Awesome", icons: fontAwesomeIcons },
  { id: "bootstrap", name: "Bootstrap Icons", icons: bootstrapIcons },
];

const tabs = [
  { id: "browser", label: "Icon Browser", icon: Grid },
  { id: "customizer", label: "Icon Customizer", icon: Sliders },
  { id: "editor", label: "SVG Editor", icon: Code2 },
  { id: "export", label: "Icon Export", icon: Download },
  { id: "accessibility", label: "Accessibility", icon: Eye },
];

const animVariants: Record<string, Variants> = {
  none: {},
  spin: {
    rotate: 360,
    transition: { repeat: Infinity, duration: 2, ease: "linear" },
  },
  pulse: {
    scale: [1, 1.15, 1],
    transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
  },
  bounce: {
    y: [0, -8, 0],
    transition: { repeat: Infinity, duration: 1, ease: "easeInOut" },
  },
  fade: {
    opacity: [1, 0.3, 1],
    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
  },
};

const examplePaths = [
  { name: "Star", path: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
  { name: "Heart", path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" },
  { name: "Checkmark", path: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" },
  { name: "Arrow", path: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" },
];

function generateExport(icon: IconEntry, format: string, size: number, name: string): string {
  const match = icon.svg.match(/<svg[^>]*>(.*?)<\/svg>/s);
  const inner = match ? match[1] : icon.svg;
  const vb = icon.svg.match(/viewBox="([^"]+)"/);
  const viewBox = vb ? vb[1] : "0 0 24 24";

  switch (format) {
    case "SVG":
      return `<svg width="${size}" height="${size}" viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="2">\n  ${inner}\n</svg>`;
    case "JSX":
      return `import React from 'react';\n\nexport const ${name} = ({ size = ${size}, color = 'currentColor' }) => (\n  <svg width={size} height={size} viewBox="${viewBox}" fill="none" stroke={color} strokeWidth={2}>\n    ${inner}\n  </svg>\n);\n\nexport default ${name};`;
    case "TSX":
      return `import React from 'react';\n\ninterface ${name}Props {\n  size?: number;\n  color?: string;\n  className?: string;\n}\n\nexport const ${name}: React.FC<${name}Props> = ({ size = ${size}, color = 'currentColor', className }) => (\n  <svg width={size} height={size} viewBox="${viewBox}" fill="none" stroke={color} strokeWidth={2} className={className}>\n    ${inner}\n  </svg>\n);\n\nexport default ${name};`;
    case "PNG":
      return `[PNG export placeholder for ${name} at ${size}px — use a build tool like svgr or inline the SVG as data:image/svg+xml]`;
    default:
      return icon.svg;
  }
}

function getAccessibilityScore(svg: string): { score: number; checks: { label: string; passed: boolean; suggestion: string }[] } {
  const checks = [
    {
      label: "Has aria-label or aria-labelledby",
      passed: /aria-label\s*=|aria-labelledby\s*=/.test(svg),
      suggestion: 'Add aria-label="Icon description" or aria-labelledby="title-id" to the <svg> element.',
    },
    {
      label: 'Has role="img"',
      passed: /role\s*=\s*"img"/.test(svg),
      suggestion: 'Add role="img" to the <svg> element.',
    },
    {
      label: "Has title element (semantic description)",
      passed: /<title>/.test(svg),
      suggestion: "Add a <title> element inside <svg> with a description.",
    },
    {
      label: "focusable=\"false\" for decorative icons",
      passed: /aria-hidden\s*=\s*"true"/.test(svg) ? /focusable\s*=\s*"false"/.test(svg) : true,
      suggestion: 'When aria-hidden="true", add focusable="false" to prevent focus in IE.',
    },
    {
      label: "Proper viewBox attribute",
      passed: /viewBox\s*=/.test(svg),
      suggestion: "Ensure <svg> has a viewBox attribute for proper scaling.",
    },
  ];
  const passed = checks.filter((c) => c.passed).length;
  const score = Math.round((passed / checks.length) * 100);
  return { score, checks };
}

function getReaderPreview(svg: string): string {
  const labelMatch =
    svg.match(/aria-label="([^"]+)"/) ||
    svg.match(/aria-labelledby="([^"]+)"/) ||
    svg.match(/<title>([^<]+)<\/title>/);
  if (labelMatch) return `Screen reader announces: "${labelMatch[1]}"`;
  if (/aria-hidden\s*=\s*"true"/.test(svg))
    return "Icon is hidden from screen readers (aria-hidden).";
  return "No accessible label detected. Screen reader may skip or read raw content.";
}

function extractPathData(svg: string): string {
  const m = svg.match(/<path\s[^>]*d="([^"]+)"/);
  return m ? m[1] : "";
}

function countCommands(path: string): number {
  if (!path) return 0;
  return (path.match(/[MmCcLlQqTtAaSsZzHhVv]/g) || []).length;
}

function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard.writeText(text);
}

function downloadSvg(svg: string, name: string): void {
  const blob = new Blob([svg], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${name.replace(/\s+/g, "_").toLowerCase()}.svg`;
  a.click();
  URL.revokeObjectURL(url);
}

const goodAccessibilityExample =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-label="Search" role="img"><title>Search</title><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>';

const badAccessibilityExample =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><circle cx="12" cy="12" r="10"/></svg>';

export function IconsPlayground() {
  const [activeTab, setActiveTab] = useState("browser");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLibrary, setSelectedLibrary] = useState("heroicons");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedIcon, setSelectedIcon] = useState<IconEntry>(heroiconsIcons[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedExport, setCopiedExport] = useState(false);

  const [iconSize, setIconSize] = useState(24);
  const [iconColor, setIconColor] = useState("#F59E0B");
  const [strokeW, setStrokeW] = useState(2);
  const [animation, setAnimation] = useState("none");
  const [rotate, setRotate] = useState(false);

  const [svgPath, setSvgPath] = useState(examplePaths[0].path);
  const [fillColor, setFillColor] = useState("none");
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [editorStrokeWidth, setEditorStrokeWidth] = useState(2);
  const [viewBox, setViewBox] = useState("0 0 24 24");

  const [exportFormat, setExportFormat] = useState("SVG");
  const [exportSize, setExportSize] = useState(24);
  const [exportName, setExportName] = useState("Icon");

  const [accessibilitySvg, setAccessibilitySvg] = useState("");

  const currentLibrary = useMemo(
    () => libraries.find((l) => l.id === selectedLibrary) || libraries[0],
    [selectedLibrary]
  );

  const filteredIcons = useMemo(
    () =>
      currentLibrary.icons.filter(
        (icon) =>
          icon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          icon.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
          icon.category.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [currentLibrary, searchQuery]
  );

  const handleCopy = useCallback(async (id: string, text: string) => {
    await copyToClipboard(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  }, []);

  const handleCopyExport = useCallback(async (text: string) => {
    await copyToClipboard(text);
    setCopiedExport(true);
    setTimeout(() => setCopiedExport(false), 2000);
  }, []);

  const exportedCode = useMemo(
    () => generateExport(selectedIcon, exportFormat, exportSize, exportName),
    [selectedIcon, exportFormat, exportSize, exportName]
  );

  const a11y = useMemo(() => {
    if (!accessibilitySvg.trim()) return null;
    return getAccessibilityScore(accessibilitySvg);
  }, [accessibilitySvg]);

  const readerPreview = useMemo(() => {
    if (!accessibilitySvg.trim()) return "";
    return getReaderPreview(accessibilitySvg);
  }, [accessibilitySvg]);

  const renderSvgPreview = (svg: string, size: number, color?: string, sw?: number) => {
    const styled = svg
      .replace(/stroke="currentColor"/g, color ? `stroke="${color}"` : `stroke="currentColor"`)
      .replace(/stroke-width="[^"]*"/g, sw ? `stroke-width="${sw}"` : `stroke-width="2"`)
      .replace(/width="[^"]*"/, `width="${size}"`)
      .replace(/height="[^"]*"/, `height="${size}"`);
    return <div dangerouslySetInnerHTML={{ __html: styled }} />;
  };

  const renderAnimPreview = (svg: string) => {
    const styled = svg
      .replace(/stroke="currentColor"/g, `stroke="${iconColor}"`)
      .replace(/stroke-width="[^"]*"/g, `stroke-width="${strokeW}"`)
      .replace(/fill="currentColor"/g, `fill="${iconColor}"`)
      .replace(/width="[^"]*"/, `width="${iconSize}"`)
      .replace(/height="[^"]*"/, `height="${iconSize}"`);
    const variant = animVariants[animation] || animVariants.none;
    return (
      <motion.div
        animate={variant}
        style={rotate && animation === "none" ? { rotate: 180 } : undefined}
      >
        <div dangerouslySetInnerHTML={{ __html: styled }} />
      </motion.div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-background text-foreground rounded-xl border border-foreground/10 overflow-hidden">
      <div className="flex border-b border-foreground/10 bg-foreground/5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors border-b-2 ${
                activeTab === tab.id
                  ? "border-[#F59E0B] text-[#F59E0B] bg-[#F59E0B]/5"
                  : "border-transparent text-foreground/60 hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="p-6">
        {/* Tab 1: Icon Browser */}
        {activeTab === "browser" && (
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <SearchIcon
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40"
                />
                <input
                  type="text"
                  placeholder="Search icons..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 rounded-lg border border-foreground/10 bg-foreground/5 text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50"
                />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid"
                      ? "bg-[#F59E0B]/10 text-[#F59E0B]"
                      : "text-foreground/40 hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list"
                      ? "bg-[#F59E0B]/10 text-[#F59E0B]"
                      : "text-foreground/40 hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  <List size={16} />
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {libraries.map((lib) => (
                <button
                  key={lib.id}
                  onClick={() => setSelectedLibrary(lib.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                    selectedLibrary === lib.id
                      ? "border-[#F59E0B] bg-[#F59E0B]/10 text-[#F59E0B]"
                      : "border-foreground/10 text-foreground/60 hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {lib.name}
                </button>
              ))}
            </div>

            {filteredIcons.length === 0 ? (
              <div className="text-center py-12 text-foreground/40">
                <SearchIcon size={32} className="mx-auto mb-2 opacity-30" />
                <p>No icons found matching "{searchQuery}"</p>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {filteredIcons.map((icon) => {
                  const isSelected = selectedIcon.name === icon.name && selectedLibrary === currentLibrary.id;
                  return (
                    <div
                      key={icon.name}
                      onClick={() => setSelectedIcon(icon)}
                      className={`relative group flex flex-col items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? "border-[#F59E0B] ring-2 ring-[#F59E0B]/30 bg-[#F59E0B]/5"
                          : "border-foreground/10 hover:border-foreground/30 bg-foreground/5"
                      }`}
                    >
                      <div className="w-8 h-8 flex items-center justify-center text-foreground">
                        {renderSvgPreview(icon.svg, 24)}
                      </div>
                      <span className="text-[10px] text-foreground/70 truncate w-full text-center">
                        {icon.name}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(icon.name, icon.svg);
                        }}
                        className="absolute top-1 right-1 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-foreground/10 hover:bg-foreground/20 text-foreground/60 hover:text-foreground"
                        title="Copy SVG"
                      >
                        {copiedId === icon.name ? (
                          <Check size={12} className="text-green-500" />
                        ) : (
                          <Copy size={12} />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="space-y-1">
                {filteredIcons.map((icon) => {
                  const isSelected = selectedIcon.name === icon.name && selectedLibrary === currentLibrary.id;
                  return (
                    <div
                      key={icon.name}
                      onClick={() => setSelectedIcon(icon)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
                        isSelected
                          ? "bg-[#F59E0B]/10 ring-1 ring-[#F59E0B]/30"
                          : "hover:bg-foreground/5"
                      }`}
                    >
                      <div className="w-6 h-6 flex items-center justify-center text-foreground shrink-0">
                        {renderSvgPreview(icon.svg, 20)}
                      </div>
                      <span className="text-sm text-foreground/80 flex-1">{icon.name}</span>
                      <span className="text-[10px] text-foreground/40 uppercase tracking-wider">
                        {icon.category}
                      </span>
                      <span className="text-[10px] text-foreground/30">{icon.tags.slice(0, 2).join(", ")}</span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopy(icon.name, icon.svg);
                        }}
                        className="p-1.5 rounded-md hover:bg-foreground/10 text-foreground/40 hover:text-foreground transition-colors"
                        title="Copy SVG"
                      >
                        {copiedId === icon.name ? (
                          <Check size={14} className="text-green-500" />
                        ) : (
                          <Copy size={14} />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Icon Customizer */}
        {activeTab === "customizer" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-medium text-foreground/60 mb-2 uppercase tracking-wider">
                  Size: {iconSize}px
                </label>
                <input
                  type="range"
                  min={16}
                  max={64}
                  value={iconSize}
                  onChange={(e) => setIconSize(Number(e.target.value))}
                  className="w-full accent-[#F59E0B]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/60 mb-2 uppercase tracking-wider">
                  Color
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={iconColor}
                    onChange={(e) => setIconColor(e.target.value)}
                    className="w-10 h-10 rounded-lg border border-foreground/10 cursor-pointer bg-transparent"
                  />
                  <span className="text-xs font-mono text-foreground/60">{iconColor}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/60 mb-2 uppercase tracking-wider">
                  Stroke Width: {strokeW}
                </label>
                <input
                  type="range"
                  min={1}
                  max={3}
                  step={0.5}
                  value={strokeW}
                  onChange={(e) => setStrokeW(Number(e.target.value))}
                  className="w-full accent-[#F59E0B]"
                />
              </div>

              <div className="flex items-center gap-3">
                <label className="text-xs font-medium text-foreground/60 uppercase tracking-wider">
                  Rotation
                </label>
                <button
                  onClick={() => setRotate(!rotate)}
                  className={`relative w-10 h-5 rounded-full transition-colors ${
                    rotate ? "bg-[#F59E0B]" : "bg-foreground/20"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                      rotate ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/60 mb-2 uppercase tracking-wider">
                  Animation
                </label>
                <select
                  value={animation}
                  onChange={(e) => setAnimation(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-foreground/10 bg-foreground/5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50"
                >
                  <option value="none">None</option>
                  <option value="spin">Spin</option>
                  <option value="pulse">Pulse</option>
                  <option value="bounce">Bounce</option>
                  <option value="fade">Fade</option>
                </select>
              </div>

              <div className="flex items-center gap-2 text-xs text-foreground/40">
                <Palette size={14} />
                <span>Customize the selected icon in real time</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-8 rounded-xl border border-foreground/10 bg-foreground/5">
              <div className="text-foreground">{renderAnimPreview(selectedIcon.svg)}</div>
              <p className="mt-4 text-xs text-foreground/40">
                {selectedIcon.name} &middot; {iconSize}px &middot; {animation !== "none" ? animation : "no animation"}
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: SVG Editor */}
        {activeTab === "editor" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-foreground/60 mb-2 uppercase tracking-wider">
                  SVG Path Data (d attribute)
                </label>
                <textarea
                  value={svgPath}
                  onChange={(e) => setSvgPath(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 rounded-lg border border-foreground/10 bg-foreground/5 text-sm font-mono text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 resize-none"
                  placeholder="M10 10L20 20..."
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-foreground/60 mb-1">Fill Color</label>
                  <input
                    type="color"
                    value={fillColor === "none" ? "#ffffff" : fillColor}
                    onChange={(e) => setFillColor(e.target.value)}
                    className="w-full h-8 rounded border border-foreground/10 cursor-pointer bg-transparent"
                  />
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      type="checkbox"
                      id="fillNone"
                      checked={fillColor === "none"}
                      onChange={(e) => setFillColor(e.target.checked ? "none" : "#000000")}
                      className="accent-[#F59E0B]"
                    />
                    <label htmlFor="fillNone" className="text-[10px] text-foreground/40">No fill</label>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground/60 mb-1">Stroke Color</label>
                  <input
                    type="color"
                    value={strokeColor}
                    onChange={(e) => setStrokeColor(e.target.value)}
                    className="w-full h-8 rounded border border-foreground/10 cursor-pointer bg-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-foreground/60 mb-1">Stroke Width</label>
                  <input
                    type="number"
                    min={0}
                    max={10}
                    step={0.5}
                    value={editorStrokeWidth}
                    onChange={(e) => setEditorStrokeWidth(Number(e.target.value))}
                    className="w-full px-3 py-1.5 rounded-lg border border-foreground/10 bg-foreground/5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground/60 mb-1">ViewBox</label>
                  <input
                    type="text"
                    value={viewBox}
                    onChange={(e) => setViewBox(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg border border-foreground/10 bg-foreground/5 text-sm font-mono text-foreground focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50"
                    placeholder="0 0 24 24"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/60 mb-1 uppercase tracking-wider">
                  Examples
                </label>
                <div className="flex flex-wrap gap-2">
                  {examplePaths.map((ex) => (
                    <button
                      key={ex.name}
                      onClick={() => setSvgPath(ex.path)}
                      className={`px-2.5 py-1 text-[10px] rounded-md border transition-colors ${
                        svgPath === ex.path
                          ? "border-[#F59E0B] bg-[#F59E0B]/10 text-[#F59E0B]"
                          : "border-foreground/10 text-foreground/50 hover:text-foreground hover:border-foreground/30"
                      }`}
                    >
                      {ex.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const full = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="${viewBox}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="${editorStrokeWidth}"><path d="${svgPath}"/></svg>`;
                    copyToClipboard(full);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#F59E0B] text-white text-xs font-medium hover:bg-[#F59E0B]/90 transition-colors"
                >
                  <Copy size={14} />
                  Copy SVG
                </button>
                <button
                  onClick={() => {
                    const full = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="${viewBox}" fill="${fillColor}" stroke="${strokeColor}" stroke-width="${editorStrokeWidth}"><path d="${svgPath}"/></svg>`;
                    downloadSvg(full, "custom_icon");
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-foreground/10 text-foreground/70 text-xs font-medium hover:bg-foreground/5 transition-colors"
                >
                  <Download size={14} />
                  Download SVG
                </button>
              </div>

              <div className="text-[10px] text-foreground/40 font-mono">
                <p>Path length: {svgPath.length} chars</p>
                <p>Commands: {countCommands(svgPath)}</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-8 rounded-xl border border-foreground/10 bg-foreground/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox={viewBox}
                fill={fillColor}
                stroke={strokeColor}
                strokeWidth={editorStrokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d={svgPath} />
              </svg>
              <p className="mt-4 text-xs text-foreground/40">Preview</p>
            </div>
          </div>
        )}

        {/* Tab 4: Icon Export */}
        {activeTab === "export" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-foreground/60 mb-2 uppercase tracking-wider">
                  Selected Icon
                </label>
                <div className="flex items-center gap-3 p-3 rounded-lg border border-foreground/10 bg-foreground/5">
                  <div className="w-8 h-8 flex items-center justify-center text-foreground">
                    {renderSvgPreview(selectedIcon.svg, 24)}
                  </div>
                  <div>
                    <p className="text-sm text-foreground">{selectedIcon.name}</p>
                    <p className="text-[10px] text-foreground/40">{selectedIcon.category}</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/60 mb-2 uppercase tracking-wider">
                  Format
                </label>
                <div className="flex flex-wrap gap-2">
                  {["SVG", "JSX", "TSX", "PNG"].map((fmt) => (
                    <button
                      key={fmt}
                      onClick={() => setExportFormat(fmt)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                        exportFormat === fmt
                          ? "border-[#F59E0B] bg-[#F59E0B]/10 text-[#F59E0B]"
                          : "border-foreground/10 text-foreground/60 hover:text-foreground hover:border-foreground/30"
                      }`}
                    >
                      {fmt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/60 mb-2 uppercase tracking-wider">
                  Size: {exportSize}px
                </label>
                <div className="flex flex-wrap gap-2">
                  {[16, 24, 32, 48, 64, 128].map((s) => (
                    <button
                      key={s}
                      onClick={() => setExportSize(s)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                        exportSize === s
                          ? "border-[#F59E0B] bg-[#F59E0B]/10 text-[#F59E0B]"
                          : "border-foreground/10 text-foreground/60 hover:text-foreground hover:border-foreground/30"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground/60 mb-2 uppercase tracking-wider">
                  Component / Class Name
                </label>
                <input
                  type="text"
                  value={exportName}
                  onChange={(e) => setExportName(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-foreground/10 bg-foreground/5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50"
                  placeholder="IconName"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-foreground/40">
                <Download size={14} />
                <span>Export icon for use in your project</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col items-center justify-center p-6 rounded-xl border border-foreground/10 bg-foreground/5">
                <div className="text-foreground">
                  {renderSvgPreview(selectedIcon.svg, Math.min(exportSize, 64), undefined, 2)}
                </div>
                <p className="mt-2 text-xs text-foreground/40">
                  Preview at {Math.min(exportSize, 64)}px
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-foreground/60 uppercase tracking-wider">Generated Code</span>
                  <button
                    onClick={() => handleCopyExport(exportedCode)}
                    className={`flex items-center gap-1 px-2 py-1 text-[10px] rounded-md transition-colors ${
                      copiedExport
                        ? "text-green-500 bg-green-500/10"
                        : "text-foreground/40 hover:text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {copiedExport ? <Check size={12} /> : <Copy size={12} />}
                    {copiedExport ? "Copied" : "Copy"}
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-foreground/5 border border-foreground/10 overflow-x-auto text-[10px] font-mono text-foreground/80 leading-relaxed max-h-60 overflow-y-auto">
                  <code>{exportedCode}</code>
                </pre>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Accessibility */}
        {activeTab === "accessibility" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-foreground/60 mb-2 uppercase tracking-wider">
                  Paste SVG Code
                </label>
                <textarea
                  value={accessibilitySvg}
                  onChange={(e) => setAccessibilitySvg(e.target.value)}
                  rows={6}
                  className="w-full px-3 py-2 rounded-lg border border-foreground/10 bg-foreground/5 text-sm font-mono text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]/50 resize-none"
                  placeholder='<svg xmlns="http://www.w3.org/2000/svg" ...>'
                />
              </div>

              {a11y && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-bold text-foreground">{a11y.score}</div>
                    <div className="flex-1 h-2 rounded-full bg-foreground/10 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          a11y.score >= 80
                            ? "bg-green-500"
                            : a11y.score >= 50
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${a11y.score}%` }}
                      />
                    </div>
                    <span className="text-xs text-foreground/40">/100</span>
                  </div>

                  <div className="space-y-2">
                    {a11y.checks.map((check) => (
                      <div
                        key={check.label}
                        className="flex items-start gap-2 p-2 rounded-lg border border-foreground/10 bg-foreground/5"
                      >
                        <div
                          className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center ${
                            check.passed ? "bg-green-500/20 text-green-500" : "bg-red-500/20 text-red-500"
                          }`}
                        >
                          {check.passed ? <Check size={10} /> : <X size={10} />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-foreground">{check.label}</p>
                          {!check.passed && (
                            <p className="text-[10px] text-foreground/50 mt-0.5">{check.suggestion}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-lg border border-foreground/10 bg-foreground/5">
                    <p className="text-xs font-medium text-foreground/60 mb-1">Screen Reader Preview</p>
                    <p className="text-xs text-foreground/80 italic">&ldquo;{readerPreview}&rdquo;</p>
                  </div>
                </div>
              )}

              {!a11y && (
                <div className="text-center py-8 text-foreground/40">
                  <Eye size={32} className="mx-auto mb-2 opacity-30" />
                  <p className="text-xs">Paste SVG code above to check accessibility</p>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-medium text-foreground/60 mb-3 uppercase tracking-wider">
                  Good Example
                </h4>
                <div className="p-3 rounded-xl border border-green-500/20 bg-green-500/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-8 h-8 text-green-500"
                      dangerouslySetInnerHTML={{ __html: goodAccessibilityExample }}
                    />
                    <span className="text-xs text-green-500 font-medium">Accessible Icon</span>
                  </div>
                  <pre className="text-[10px] font-mono text-foreground/60 overflow-x-auto">
                    <code>{goodAccessibilityExample}</code>
                  </pre>
                  <div className="mt-2 text-[10px] text-green-500/70">
                    &check; Has aria-label, role="img", title, and viewBox
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-medium text-foreground/60 mb-3 uppercase tracking-wider">
                  Bad Example
                </h4>
                <div className="p-3 rounded-xl border border-red-500/20 bg-red-500/5">
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="w-8 h-8 text-red-500"
                      dangerouslySetInnerHTML={{ __html: badAccessibilityExample }}
                    />
                    <span className="text-xs text-red-500 font-medium">Inaccessible Icon</span>
                  </div>
                  <pre className="text-[10px] font-mono text-foreground/60 overflow-x-auto">
                    <code>{badAccessibilityExample}</code>
                  </pre>
                  <div className="mt-2 text-[10px] text-red-500/70">
                    &times; Missing aria-label, role="img", title, and viewBox
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg border border-foreground/10 bg-foreground/5">
                <h4 className="text-xs font-medium text-foreground/60 mb-2 uppercase tracking-wider">
                  Quick Reference
                </h4>
                <ul className="space-y-1 text-[10px] text-foreground/60">
                  <li><strong className="text-foreground/80">aria-label</strong> &mdash; Provides accessible name</li>
                  <li><strong className="text-foreground/80">role="img"</strong> &mdash; Identifies the element as an image</li>
                  <li><strong className="text-foreground/80">&lt;title&gt;</strong> &mdash; Semantic description for screen readers</li>
                  <li><strong className="text-foreground/80">focusable="false"</strong> &mdash; Prevents focus in IE when decorative</li>
                  <li><strong className="text-foreground/80">aria-hidden="true"</strong> &mdash; Hides decorative icons from AT</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
