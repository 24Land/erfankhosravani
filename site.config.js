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
    fa: "وب‌سایت شخصی توسعه دهنده پلتفرم 24 لند",
    en: "Personal WebSite Of The Developer Of The 24 Land Platform"
  },
  description: {
    fa: "وب‌سایت شخصی توسعه دهنده پلتفرم 24 لند",
    en: "Personal WebSite Of The Developer Of The 24 Land Platform"
  },
  signature: "24Land.ir", // small line at the bottom of the side bar
  cardSubtitle: "24Land.ir", //     line on the visitor card image
  showCredit: true, //            small "made with Pelak" link; false removes it

  // ── Languages ──
  languages: ["fa", "en"], //     ["fa"] or ["en"] for a single language (hides the switch)
  defaultLang: "fa",

  // ── Social accounts: username only, without @ or https:// ──
  // The four big tiles. "telegram", "YouTube"... are only samples: put your own, or "" to hide one.
  // Members / subscribers / stars are fetched automatically.
  social: {
    telegram: "TwentyFourLand", //      public channel username
    youtube: "", //        channel handle
    instagram: "24Land.ir",
    website: "https://github.com/24Land",
    featuredRepo: "https://github.com/24Land" //       one of your GitHub repositories to show as a card, "" to hide it
  },

  // ── Any other link you want ──
  // id    : used in the address, so id "website" also works as your-site.com/website
  // icon  : code | globe | mail | chat | x | discord | linkedin | store | star
  // color : red,green,blue
  // handle: optional text with a copy button
  links: [
    { id: "website", label: { fa: "ورود به 24 لند", en: "Website" }, url: "https://24Land.ir", icon: "globe", color: "139,92,246", handle: "" },
        { id: "website", label: { fa: "24 سوشال | خرید خدمات شبکه‌های اجتماعی و شماره مجازی
", en: "Website" }, url: "https://24Land.ir", icon: "globe", color: "139,92,246", handle: "" },
        { id: "website", label: { fa: "وب‌سایت", en: "Website" }, url: "https://24Land.ir", icon: "globe", color: "139,92,246", handle: "" },
        { id: "website", label: { fa: "وب‌سایت", en: "Website" }, url: "https://24Land.ir", icon: "globe", color: "139,92,246", handle: "" },
        { id: "website", label: { fa: "وب‌سایت", en: "Website" }, url: "https://24Land.ir", icon: "globe", color: "139,92,246", handle: "" },
    { id: "email", label: { fa: "ایمیل", en: "Email" }, url: "mailto:24Land.ir@Gmail.com", icon: "mail", color: "74,222,128", handle: "hello@example.com" }
  ],

  // ── Donation card ──
  donate: {
    enabled: true,
    title: { fa: "حمایت از من", en: "Support me" },
    goalName: { fa: "توسعه 24 لند", en: "New gear" }, // Reymit's own goal name wins when connected
    goal: 10000000, //            goal amount
    currency: { fa: "تومان", en: "Toman" },
    button: { label: { fa: "حمایت", en: "Donate" }, url: "https://reymit.ir/khosravani" }, // url "" hides the button
    crypto: { label: { fa: "کریپتو ⚡", en: "Crypto ⚡" }, url: "https://nowpayments.io/donation/erfan" }
  },

  // ── Turn parts of the page on / off ──
  sections: {
    videos: fulse, //        latest YouTube videos
    posts: true, //         latest Telegram channel posts
    project: true, //       featured GitHub project
    tip: true, //           Linux tip of the day (edit the tips in public/tips.js)
    guestbook: true,
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
  securityContact: "" //   "mailto:24Land.ir@Gmail.com" or "https://t.me/ErfanKhosravani", used in /.well-known/security.txt
};
