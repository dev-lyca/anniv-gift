import { Galleries } from "@/types/index";

const rawData = [
  {
    caption: "Venice Canal",
    quote: "Hiya hiya pa pag hug",
  },
  {
    caption: "Capitol",
    quote: "Bet na bet mo to",
  },
  {
    caption: "Capitol Date ulit",
    quote: "Date na naman sa capitol",
  },
  {
    caption: "Morning gala",
    quote: "Cutie mo here, one of my favs",
  },
  {
    caption: "OTW to Pasay",
    quote: "First time bumyahe together",
  },
  {
    caption: "Burnham Park",
    quote: "Nag away muna bago makapag bike",
  },
  {
    caption: "With tatay",
    quote: "Nagtinda kasama si tatay T.T",
  },
  {
    caption: "Selfie mo",
    quote: "Habang nagtutulak kami ni tatay :)",
  },
  {
    caption: "Asleep gf",
    quote: "Baby sa muscles ko",
  },
  {
    caption: "Capitol date",
    quote: "Couple Outfit -- Black pants tas cutie shoes",
  },
  {
    caption: "Lamon",
    quote: "Takaw sa bbq kahit ako naman bbmhue",
  },
  {
    caption: "Milktea",
    quote: "Coffee and Damo flavor",
  },
  {
    caption: "Sweet",
    quote: "Holding hands while eating yie",
  },
  {
    caption: "Yakap gurl",
    quote: "Si bebe na hilig sa yakap",
  },
  {
    caption: "Pizza",
    quote: "Gala with ate and onying and abby sa capitol ulit hahaha",
  },
  {
    caption: "Bridge sa capitol",
    quote: "Took this habang umihi kayo ni ate hahaha",
  },
  {
    caption: "Yay Mang Inasal",
    quote: "This was march 15",
  },
  {
    caption: "Capitol view",
    quote: "Nag away din tayo nito ahhahaha",
  },
  {
    caption: "Beach view",
    quote: "Peaceful tignan tas kasama ka pa",
  },
  {
    caption: "Beach and LOVE view",
    quote: "My love in one frame",
  },
  {
    caption: "Simple lamon",
    quote: "Hati tayo hahaha",
  },
  {
    caption: "Ice cream date",
    quote: "Diretso pasok sa sm after sundo",
  },
  {
    caption: "Inihaw dinner date",
    quote: "Dinner here kesa kumain sa bahay tas mailang hahahha",
  },
  {
    caption: "Sunday date",
    quote: "Treat ni nanay hahaha",
  },
  {
    caption: "Sunday date",
    quote: "Treat ni nanay ulit with pansit na fav mo hahaha",
  },
  {
    caption: "Pasay building view",
    quote: "View sa inupahan natin na condo",
  },
  {
    caption: "Venice Canal",
    quote: "Papic muna ng patalikod HAHAHHA",
  },
  {
    caption: "Arcade Date",
    quote: "With salbaheng pamangkin hahahahha",
  },
  {
    caption: "Landmark",
    quote: "Took this sa landmark",
  },
  {
    caption: "Jabe dinner",
    quote: "Treat mo to lahat, napaka galante",
  },
  {
    caption: "Jabe dinner",
    quote: "Pakagat sa burger mo hhahahahhahahaha",
  },
  {
    caption: "MOA Globe",
    quote:
      "Ito yung photo after natin magwatak watak umuwi HAHAHHAHA mga tampororot",
  },
  {
    caption: "Netflix and Chill",
    quote: "Bumblebee with bebe without beembung :(",
  },
  {
    caption: "Yakap yakap",
    quote: "Hugs na naman ang clingy gf",
  },
  {
    caption: "Bus trip pauwi",
    quote: "Tulog ako tas picture pa :)",
  },
  {
    caption: "Ihaw ihaw kesa sa mahal",
    quote: "Always here for dinner kasi sulit",
  },
  {
    caption: "Capitol Date",
    quote:
      "Simple pero memorable, with the kiwi and lemon flavor fruit tea HHAHAH",
  },
  {
    caption: "Skyranch",
    quote: "Ganda ganda tignan, balik tayo rito soonnnn",
  },
  {
    caption: "Jabe treat ni nanay",
    quote: "Kakapagod na to pero bait pa rin ni nanay talaga",
  },
  {
    caption: "Burnham Park",
    quote: "Nice view feat nice weather",
  },
  {
    caption: "Burnham Park",
    quote: "Cute ko heree with nanay ulit huehue",
  },
  {
    caption: "Burnham Park",
    quote: "Kayo naman ni nanay",
  },
  {
    caption: "Burnham Park",
    quote: "Ice cream sa baguio",
  },
  {
    caption: "Burnham Park",
    quote: "Si bebe ang driver, kelan kaya ako iddrive?",
  },
  {
    caption: "Burnham Park",
    quote: "Ako na driver nito, ako na bahala sayo",
  },
  {
    caption: "Burnham Park",
    quote: "My fav view pic sa burnham huhu",
  },
  {
    caption: "Burnham Park",
    quote: "My 2nd fav view pic sa burnham huhu",
  },
  {
    caption: "OTW to church",
    quote: "Attend sa binyag hahahah",
  },
  {
    caption: "Ihaw dinner",
    quote: "Dapat dito na tayo natutulog",
  },
  {
    caption: "Pogi ko rito",
    quote: "Kunware guitarist ako pero yung photographer pala expert hehehe",
  },
  {
    caption: "Capitol date",
    quote: "Laging bbq bbq bbq",
  },
  {
    caption: "Tambay sa bato",
    quote: "Feel na feel ni shalaney to na para bang sya yung tao",
  },
  {
    caption: "Tambay sa bato",
    quote: "Dapit hapon sa bato",
  },
  {
    caption: "Coffee Date",
    quote: "Kape sa harap ng dagat habang lumilipad mga buhangin",
  },
  {
    caption: "MCdo treat",
    quote: "Sino gumastos nittooooooo HAHAHHA",
  },
  {
    caption: "Pasalubong",
    quote: "Pasalubong mo to sakin after school yieeee",
  },
  {
    caption: "Review ni bebe",
    quote: "Review review ket sakin naman talaga nakafocus",
  },
  {
    caption: "Sundo",
    quote: "Joyride papunta sayo nong uuwi ka galing smx",
  },
  {
    caption: "Tambay sa bato",
    quote: "Tambay kasama na naman ang aso",
  },
];

export const gallery: Galleries = rawData.map((item, i) => ({
  ...item,
  src: `/images/gallery/${i + 1}.jpg`,
}));
