import { Memories } from "@/types/index";

const rawData = [
  {
    title: "December date☕",
    date: "December 30, 2024",
    note: "I was so nervous, but you made me laugh nonstop.",
  },
  {
    title: "Fav ig pic ✈️",
    date: "July 2022",
    note: "Still my favorite adventure with you.",
  },
  {
    title: "First bus trip 🎉",
    date: "Sept 2023",
    note: "The happiest night, just us and forever vibes.",
  },
  {
    title: "Holding hands sa bus",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "First dagat date 🌊",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
  {
    title: "Kain muna bago ihatid sa terminal",
    date: "Jan 2024",
    note: "Waves, laughter, and holding your hand.",
  },
];

export const memories: Memories = rawData.map((item, i) => ({
  ...item,
  image: `/images/memories/${i + 1}.jpg`,
}));
