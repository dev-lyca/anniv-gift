import { Memories } from "@/types/index";

const rawData = [
  {
    title: "December date",
    date: "December 30, 2024",
  },
  {
    title: "Fav ig pic",
    date: "November 06, 2024",
  },
  {
    title: "Sundo kay bebe",
    date: "March 20, 2025",
  },
  {
    title: "First dagat date",
    date: "August 26, 2024",
  },
  {
    title: "First pic sa new phone",
    date: "November 01, 2024",
  },
  {
    title: "First pic together sa bagong phone",
    date: "November 01, 2024",
  },
  {
    title: "Hugs ni bebe (bigay mo jacket)",
    date: "December 12, 2024",
  },
  {
    title: "First pic together sa bagong phone",
    date: "November 01, 2024",
  },
  {
    title: "First pic together sa bagong phone",
    date: "November 01, 2024",
  },
  {
    title: "First pic together sa bagong phone",
    date: "November 01, 2024",
  },
  {
    title: "First pic together sa bagong phone",
    date: "November 01, 2024",
  },
  {
    title: "Cute selfie ni bebe with my muscles",
    date: "January 04, 2024",
  },
  {
    title: "Morning pasyal sa dagat",
    date: "January 05, 2024",
  },
  {
    title: "Morning pasyal sa dagat",
    date: "January 05, 2024",
  },
  {
    title: "Lunch before ihatid sa terminal",
    date: "January 06, 2024",
  },
  {
    title: "Takot sa camera",
    date: "March 14, 2025",
  },
  {
    title: "Takot sa camera",
    date: "March 14, 2025",
  },
  {
    title: "Takot sa camera",
    date: "March 14, 2025",
  },
  {
    title: "Inasal date",
    date: "March 15, 2025",
  },
  {
    title: "Dagat date after inasal",
    date: "March 15, 2025",
  },
  {
    title: "This one is cutie",
    date: "March 15, 2025",
  },
  {
    title: "Cutiiee baby feat. ukay",
    date: "March 15, 2025",
  },
  {
    title: "Holding hands sa bus yiee",
    date: "March 17, 2025",
  },
  {
    title: "Mcdo date",
    date: "March 17, 2025",
  },
  {
    title: "Mcdo date",
    date: "March 17, 2025",
  },
  {
    title: "Ihaw dinner",
    date: "March 17, 2025",
  },
  {
    title: "With DJ",
    date: "March 22, 2025",
  },
  {
    title: "Sexy baby",
    date: "March 22, 2025",
  },
  {
    title: "Fav pic together sa dagat",
    date: "March 22, 2025",
  },
  {
    title: "Fav pic together sa dagat",
    date: "March 22, 2025",
  },
  {
    title: "Fav pic together sa dagat",
    date: "March 22, 2025",
  },
  {
    title: "Sunday bond with the fam",
    date: "March 23, 2025",
  },
  {
    title: "Family picture",
    date: "March 22, 2025",
  },
  {
    title: "Couple shoes",
    date: "March 28, 2025",
  },
  {
    title: "I love the view",
    date: "March 28, 2025",
  },
  {
    title: "Venice pic tgthr",
    date: "March 28, 2025",
  },
  {
    title: "Venice pic tgthr",
    date: "March 28, 2025",
  },
  {
    title: "Venice pic tgthr",
    date: "March 28, 2025",
  },
  {
    title: "Cr photo, walang kiss bawal pda",
    date: "March 28, 2025",
  },
  {
    title: "Arcade Date",
    date: "March 30, 2025",
  },
  {
    title: "So aesthetic",
    date: "March 31, 2025",
  },
  {
    title: "So aesthetic",
    date: "March 31, 2025",
  },
  {
    title: "OTW sa Concentrix",
    date: "April 15, 2025",
  },
  {
    title: "Burnham Park",
    date: "April 15, 2025",
  },
  {
    title: "Outing",
    date: "April 24, 2025",
  },
  {
    title: "Bebe with dogs",
    date: "April 27, 2025",
  },
  {
    title: "Cuteeee",
    date: "September 14, 2024",
  },
  {
    title: "Kain muna after sundo sa terminal",
    date: "September 14, 2024",
  },
  {
    title: "Venice Date",
    date: "March 28, 2025",
  },
  {
    title: "Venice Date",
    date: "March 28, 2025",
  },
];

export const memories: Memories = rawData.map((item, i) => ({
  ...item,
  image: `/images/memories/${i + 1}.jpg`,
}));
