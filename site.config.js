// ─────────────────────────────────────────────────────────────────────────────
//  This is the only file you need to edit.  تنها فایلی که لازمه تغییر بدی همینه.
//
//  - Text with { fa, en } is shown in the matching language.
//  - Leave a value as "" (empty) to hide that part of the page.
//  - Never put passwords, tokens or API keys here: this file is public.
//    Those go in Cloudflare as secrets (see README).
// ─────────────────────────────────────────────────────────────────────────────
export default {
  // ── Who you are ──
  name: "Erfan Khosravani", //           big title, browser tab, share preview
  shortName: "Erfan", //          name under the icon when installed on a phone
  tagline: {
    fa: "توسعه دهنده پلتفرم 24 لند",
    en: "24 Land Platform Developer"
  },
  description: {
    fa: "توسعه دهنده پلتفرم 24 لند",
    en: "24 Land Platform Developer"
  },
  signature: "24Land.ir", // small line at the bottom of the side bar
  cardSubtitle: "24Land.ir", //     line on the visitor card image
  showCredit: false, //            small "made with Pelak" link; false removes it

  // ── Languages ──
  languages: ["fa", "en"], //     ["fa"] or ["en"] for a single language (hides the switch)
  defaultLang: "fa",

  // ── Social accounts: username only, without @ or https:// ──
  // The four big tiles. "telegram", "YouTube"... are only samples: put your own, or "" to hide one.
  // Members / subscribers / stars are fetched automatically.
  social: {
    telegram: "ErfanKhosravani", //      public channel username
    youtube: "", //        channel handle
    instagram: "Erfan_Khosravanifar",
    github: "",
    featuredRepo: "" //       one of your GitHub repositories to show as a card, "" to hide it
  },

  // ── Any other link you want ──
  // id    : used in the address, so id "website" also works as your-site.com/website
  // icon  : code | globe | mail | chat | x | discord | linkedin | store | star
  // color : red,green,blue
  // handle: optional text with a copy button
  links: [
    { id: "website", label: { fa: "بیست و چهار لند | انواع خدمات در یک پلتفرم", en: "24 Land" }, url: "https://24land.ir", icon: "globe", color: "139,92,246", handle: "www.24Land.ir" },
    { id: "shop", label: { fa: "بیست و چهار سوشال | خرید خدمات شبکه‌های اجتماعی و شماره مجازی", en: "24 Social" }, url: "https://24social.ir", icon: "store", color: "250,190,88", handle: "www.24Social.ir" },
    { id: "shop2", label: { fa: "بیست و چهار استورز | فروشگاه اینترنتی", en: "24 Stores" }, url: "https://24stores.ir", icon: "store", color: "250,190,88", handle: "www.24Stores.ir" },
    { id: "website2", label: { fa: "بیست و چهار تونز | دانلود آهنگ و موزیک ویدیو", en: "24 Tunes" }, url: "https://24tunes.ir", icon: "globe", color: "139,92,246", handle: "www.24Tunes.ir" },
    { id: "website3", label: { fa: "بیست و چهار موویز | تماشای آنلاین فیلم و سریال", en: "24 Tunes" }, url: "https://24movies.ir", icon: "globe", color: "139,92,246", handle: "www.24Movies.ir" },
    { id: "website4", label: { fa: "بیست و چهار مگز |اخبار ایران و جهان", en: "24 Tunes" }, url: "https://24mags.ir", icon: "globe", color: "139,92,246", handle: "www.24Mags.ir" },
    { id: "email", label: { fa: "ایمیل", en: "Email" }, url: "mailto:24Land.ir@Gmail.com", icon: "mail", color: "74,222,128", handle: "24Land.ir@Gmail.com" }
  ],

  // ── Donation card ──
  donate: {
    enabled: true,
    title: { fa: "حمایت از بیست و چهار لند", en: "Support For 24 Land" },
    goalName: { fa: "توسعه پلتفرم‌های جدید", en: "Development Of New Platforms" }, // Reymit's own goal name wins when connected
    goal: 10000000, //            goal amount
    currency: { fa: "تومان", en: "Toman" },
    button: { label: { fa: "حمایت با ریمت (تومان)", en: "Support Via Reymit (Toman)" }, url: "https://reymit.ir/khosravani" }, // url "" hides the button
    crypto: { label: { fa: "⚡ حمایت با NowPayments (کریپتو)", en: "⚡ Support Via NowPayments (Crypto)" }, url: "https://nowpayments.io/donation/erfan" }
  },

  // ── Turn parts of the page on / off ──
  sections: {
    videos: false, //        latest YouTube videos
    posts: false, //         latest Telegram channel posts
    project: false, //       featured GitHub project
    tip: true, //           Linux tip of the day (edit the tips in public/tips.js)
    guestbook: false,
    map: true, //           visitors globe
    snake: true, //         snake game with a shared leaderboard
    terminal: true,
    achievements: true,
    visitorCard: true,
    qr: true
  },

  // ── Look ──
  theme: {
    // null = colours follow the visitor's time of day.
    // For fixed colours: { a1: [47, 139, 255], a2: [139, 92, 246] }  (red, green, blue)
    accent: null
  },
  hubCountry: "IR", //     lines on the globe fly to this country (two-letter code)
  hubLabel: "Shiraz",
  terminalUser: "guest", // shown as guest@pelak in the terminal

  // ── Optional ──
  securityContact: "https://t.me/ErfanKhosravani" //   "mailto:24Land.ir@Gmail.com" or "https://t.me/ErfanKhosravani", used in /.well-known/security.txt
};
