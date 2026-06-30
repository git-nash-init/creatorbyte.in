export const BRAND = "CreatorByte";
export const SITE = "https://creatorbyte.in";

export type Category = {
  id: string;
  label: string;
  icon: string; // path under /assets
};

export type Creator = {
  name: string;
  meta: string; // e.g. "200+ Supporters"
  image: string;
  href: string;
};

export const categories: Category[] = [
  { id: "streamers", label: "Streamers", icon: "/assets/cat-streamers.webp" },
  { id: "artists", label: "Artists", icon: "/assets/cat-artists.webp" },
  { id: "writers", label: "Writers", icon: "/assets/cat-writers.webp" },
  { id: "crafters", label: "Crafters", icon: "/assets/cat-crafters.webp" },
  { id: "podcasters", label: "Podcasters", icon: "/assets/cat-podcasters.webp" },
  { id: "video", label: "Video Creators", icon: "/assets/cat-video.webp" },
  { id: "cosplayers", label: "Cosplayers", icon: "/assets/cat-cosplayers.webp" },
  { id: "musicians", label: "Musicians", icon: "/assets/cat-musicians.webp" },
  { id: "developers", label: "Developers", icon: "/assets/cat-developers.webp" },
  { id: "communities", label: "Communities", icon: "/assets/cat-communities.webp" },
];

export const creatorsByCategory: Record<string, Creator[]> = {
  streamers: [
    { name: "Drakoniques", meta: "200+ Supporters", image: "/assets/drakoniques.webp", href: "#" },
    { name: "Peter Webby", meta: "95+ Supporters", image: "/assets/peterwebby.webp", href: "#" },
    { name: "Shenanjegans", meta: "320+ Supporters", image: "/assets/shenanjegans.webp", href: "#" },
  ],
  artists: [
    { name: "Lucracia", meta: "430+ Supporters", image: "/assets/lucracia.webp", href: "#" },
    { name: "Lee's Photography", meta: "50+ Supporters", image: "/assets/lees-photography.webp", href: "#" },
    { name: "Joe Lillington", meta: "160+ Supporters", image: "/assets/joe-lillington.webp", href: "#" },
  ],
  writers: [
    { name: "clairegcoleman", meta: "630+ Supporters", image: "/assets/clairegcoleman.webp", href: "#" },
    { name: "LigiaNunes", meta: "90+ Supporters", image: "/assets/ligianunes.webp", href: "#" },
    { name: "Bjørn Larssen", meta: "50+ Supporters", image: "/assets/bjorn-larssen.webp", href: "#" },
  ],
  crafters: [
    { name: "Nix's House Of Glass", meta: "580+ Supporters", image: "/assets/nixs-glass.webp", href: "#" },
    { name: "Rolling Yarn", meta: "230+ Supporters", image: "/assets/rolling-yarn.webp", href: "#" },
    { name: "Mystic Reflections", meta: "80+ Sales", image: "/assets/mystic-reflections.webp", href: "#" },
  ],
  podcasters: [
    { name: "Grey History Podcasts", meta: "60 Supporters", image: "/assets/grey-history.webp", href: "#" },
    { name: "GeekShock", meta: "50+ Members", image: "/assets/geekshock.webp", href: "#" },
    { name: "Exploding Heads", meta: "1.9k+ Supporters", image: "/assets/exploding-heads.webp", href: "#" },
  ],
  video: [
    { name: "LivingTheSkyeLife", meta: "660+ Supporters", image: "/assets/livingtheskyelife.webp", href: "#" },
    { name: "Daniel and Yuka", meta: "70+ Supporters", image: "/assets/daniel-and-yuka.webp", href: "#" },
    { name: "The Girl With The Pilates Mat", meta: "2.2k+ Members", image: "/assets/pilates-mat.webp", href: "#" },
  ],
  cosplayers: [
    { name: "Yarn Goddess", meta: "225 Supporters", image: "/assets/yarn-goddess.webp", href: "#" },
    { name: "Bastian Kerk Cosplay", meta: "10+ Supporters", image: "/assets/bastian-kerk.webp", href: "#" },
    { name: "Charybdis Studio", meta: "70+ Supporters", image: "/assets/charybdis-studio.webp", href: "#" },
  ],
  musicians: [
    { name: "Colin Hendra", meta: "250+ Supporters", image: "/assets/colin-hendra.webp", href: "#" },
    { name: "Amy Shafer", meta: "550+ Supporters", image: "/assets/amy-shafer.webp", href: "#" },
    { name: "Coffee Run", meta: "20k Sales", image: "/assets/coffee-run.webp", href: "#" },
  ],
  developers: [
    { name: "Wonderful Elephant", meta: "90+ Members", image: "/assets/wonderful-elephant.webp", href: "#" },
    { name: "AMP3", meta: "330+ Supporters", image: "/assets/amp3.webp", href: "#" },
    { name: "balmut", meta: "25+ Supporters", image: "/assets/balmut.webp", href: "#" },
  ],
  communities: [
    { name: "My disabled hairy friends", meta: "1.1k+ Supporters", image: "/assets/disabled-hairy-friends.webp", href: "#" },
    { name: "The Streampunks!", meta: "160+ Members", image: "/assets/streampunks.webp", href: "#" },
    { name: "Theatre of Science", meta: "1000+ Members", image: "/assets/theatre-of-science.webp", href: "#" },
  ],
};

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "What is CreatorByte?",
    a: "CreatorByte helps creators make an income from your biggest fans. Whether you're an artist, streamer or any kind of creator you can accept tips, set up memberships, take requests and sell your work - all in one place.",
  },
  {
    q: "How does CreatorByte work?",
    a: "It's simple! Create a free account, connect your own payment method (you get paid directly on CreatorByte), share it with your fans, and start earning in just a few minutes! CreatorByte has everything you need to create, share and make money in one place and on your own terms.",
  },
  {
    q: "Does CreatorByte take a fee?",
    a: "There's no monthly fee so we only make money when you do. To cover our costs of running and building the service, CreatorByte takes a creator friendly 0-5% fee.",
  },
  {
    q: "Can I use CreatorByte if I'm just starting out?",
    a: "Absolutely! CreatorByte is perfect for creators of all sizes. We're all about letting you do your thing, at your pace – no need to rush or churn out content to a schedule. Grow your support at your own pace without the pressure.",
  },
  {
    q: "How do I get paid on CreatorByte?",
    a: "You get paid directly and instantly into your own PayPal or Stripe account. CreatorByte never processes or holds funds, so no waiting around for payouts. Supporters can pay you via PayPal, Cards, Apple Pay, Google Pay, Venmo, CashApp and loads of local payment methods. They're your fans so they're your payments!",
  },
  {
    q: "How is CreatorByte different from other services like Patreon?",
    a: "CreatorByte puts creators first, giving you full control over how you connect with your fans. You decide what to offer, set your own prices and terms and get paid directly and instantly through your own PayPal or Stripe account. Unlike other sites, we don't process transactions or control the relationship you have with your fans. We just give you the tools to help you grow.",
  },
];

export const footerLinks = {
  features: {
    title: "Features",
    links: [
      "Tips",
      "Memberships",
      "Shop",
      "Commissions",
      "Stream Alerts",
      "Pricing",
      "Patreon alternative",
    ],
  },
  use: {
    title: `Use ${BRAND} with`,
    links: [
      "Instagram",
      "YouTube",
      "TikTok",
      "Twitch",
      "X/Twitter",
      "Medium",
      "Facebook",
      "GitHub",
      "Discord",
    ],
  },
  help: {
    title: "Help & Support",
    links: ["Brand assets", `${BRAND} blog`, "Help", "WordPress plugin"],
  },
  about: {
    title: `About ${BRAND}`,
    links: [
      "Our story",
      "We're hiring!",
      "Cookie settings",
      "Terms",
      "Privacy",
      "Copyright policy",
    ],
  },
};
