import { GamePay } from "../enums/game-pay";
import { Game } from "../models/game";

export const gameList: Game[] = [
  {
    id: 0,
    name: "Counter Strike",
    description:
      "کمتر کسی است که نام بازی Counter به گوش او نخورده باشد. این بازی جذاب و چندنفره بخشی جدانشدنی از گیم نت‌ها بود و بازیکنان زیادی ساعت‌ها درگیر گیم پلی اعتیادآورش می‌شدند.",
    img: "assets/images/games/csgo.webp",
    pay: GamePay.FREE,
    tags: ["Multiplayer", "Shooter"],
  },
  {
    id: 2,
    name: "Cyber Punk",
    description:
      "سایبرپانک ۲۰۷۷، پس از انتظاری طولانی منتشر شد. اما آیا این بازی، همان تجربه شگفت‌انگیز و جادویی است که از سازندگان ویچر انتظار داشتیم؟ همراه بررسی بازی باشید.",

    img: "assets/images/games/cp.webp",
    pay: GamePay.PAY,
    price: 65000,
    tags: ["Multiplayer", "Shooter"],
  },
  {
    id: 2,
    name: "Cyber Punk",
    description:
      "سایبرپانک ۲۰۷۷، پس از انتظاری طولانی منتشر شد. اما آیا این بازی، همان تجربه شگفت‌انگیز و جادویی است که از سازندگان ویچر انتظار داشتیم؟ همراه بررسی بازی باشید.",

    img: "assets/images/games/cp.webp",
    pay: GamePay.PAY,
    price: 65000,
    tags: ["Multiplayer", "Shooter"],
  },
  {
    id: 2,
    name: "Call Of Duty WARZONE 2",
    description:
      "وارزون 2 پر از ایده‌های جدیدی است که اگر مثل ما باشید، انتظار می‌کشیدید تا زودتر آن‌ها را در بازی نهایی تجربه کنید. قابلیت جدیدی به نام Proximity chat داخل بازی وجود دارد که به شما اجازه می‌دهد تا علاوه بر اسکواد خودتان، با دشمن‌های نزدیک صحبت کنید و با آن‌ها از طریق وویس چت در ارتباط باشید.",
    img: "assets/images/games/warzone.webp",
    pay: GamePay.FREE,
    tags: ["Multiplayer", "Shooter"],
  },
  {
    id: 2,
    name: "Dota 2",
    description:
      "مگر می‌شود گیمر باشید و نام بازی‌های وارکرفت یا Dota را نشنیده باشید، دو بازی در سبک استراتژیک با بخش چندنفره جذاب و درگیر کننده، سازنده این بازی‌ها یعنی شرکت Valve Corporation که توانایی خاصی در ساخت بازی‌های اعتیادآور دارد در سال 2013 اقدام به انتشار نسخه دوم بازی Dota 2 کرد.",
    img: "assets/images/games/Dota2.webp",
    pay: GamePay.FREE,
    tags: ["Multiplayer", "Shooter"],
  },

  {
    id: 2,
    name: "Cyber Punk",
    description:
      "سایبرپانک ۲۰۷۷، پس از انتظاری طولانی منتشر شد. اما آیا این بازی، همان تجربه شگفت‌انگیز و جادویی است که از سازندگان ویچر انتظار داشتیم؟ همراه بررسی بازی باشید.",
    img: "assets/images/games/cp.webp",
    pay: GamePay.PAY,
    price: 65000,
    tags: ["Multiplayer", "Shooter"],
  },
];
