import type { BodySystem } from "../types";

export const systems: BodySystem[] = [
  {
    id: "skeletal",
    name: "Skeletal",
    color: "#e8e4d9",
    colorLight: "#f5f3ec",
    description: "The skeletal system provides structure, protects organs, and enables movement.",
  },
  {
    id: "muscular",
    name: "Muscular",
    color: "#c0392b",
    colorLight: "#e6b0aa",
    description: "The muscular system enables body movement, maintains posture, and generates heat.",
  },
  {
    id: "circulatory",
    name: "Circulatory",
    color: "#e74c3c",
    colorLight: "#f5b7b1",
    description: "The circulatory system transports blood, nutrients, and oxygen throughout the body.",
  },
  {
    id: "respiratory",
    name: "Respiratory",
    color: "#5dade2",
    colorLight: "#aed6f1",
    description: "The respiratory system handles gas exchange, bringing oxygen in and removing carbon dioxide.",
  },
  {
    id: "digestive",
    name: "Digestive",
    color: "#f39c12",
    colorLight: "#fad7a0",
    description: "The digestive system breaks down food into nutrients the body can absorb and use.",
  },
  {
    id: "nervous",
    name: "Nervous",
    color: "#f1c40f",
    colorLight: "#f9e79f",
    description: "The nervous system coordinates actions and transmits signals between body parts.",
  },
];

export const systemMap = new Map(systems.map((s) => [s.id, s]));
