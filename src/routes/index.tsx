import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Figma, Palette, Layout, Smartphone, ShoppingBag, Building2, User, Image as ImageIcon, Send, MapPin, Sparkles, Check } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { icon: Layout, title: "Landing Page", desc: "UI/UX yo'naltirilgan, konversiyaga ishlaydigan zamonaviy landing dizayn.", tag: "Figma" },
  { icon: Building2, title: "Biznes / Korporativ sayt", desc: "Brendingiz uchun ishonchli, professional korporativ sayt dizayni.", tag: "UI/UX" },
  { icon: User, title: "Shaxsiy portfolio", desc: "Dizaynerlar va freelancerlar uchun shaxsiy brending dizayni.", tag: "Personal" },
  { icon: ShoppingBag, title: "Onlayn do'kon (UI)", desc: "Mahsulot kartochkalari, savat va buyurtma oqimi dizayni.", tag: "E-commerce" },
  { icon: Smartphone, title: "Responsive dizayn", desc: "Desktop, planshet va mobil — barcha qurilmalarga mos.", tag: "Mobile" },
  { icon: Palette, title: "Grafik dizayn", desc: "Logo, banner, post, vizitka va flayer dizayni.", tag: "Brand" },
];

const portfolio = [
  { n: "01", title: "Landing Page Dizayni", desc: "Biznes va xizmatlar uchun mos zamonaviy UI/UX. Desktop va mobil versiya.", tool: "Figma" },
  { n: "02", title: "Shaxsiy Portfolio", desc: "About, Skills, Projects, Contact bo'limlari bilan dizayner portfoliosi.", tool: "Figma" },
  { n: "03", title: "Onlayn Do'kon UI", desc: "Mahsulot kartochkalari, Savat sahifasi va buyurtma formasi.", tool: "Figma" },
  { n: "04", title: "Grafik dizayn ishlari", desc: "Logo, Telegram/Instagram postlar, vizitka va bannerlar.", tool: "PS / AI" },
];

const process = [
  { n: "01", t: "Texnik topshiriq", d: "Mijozdan to'liq brif va talablar olinadi." },
  { n: "02", t: "Struktura", d: "Figma'da dizayn strukturasi va wireframe tuziladi." },
  { n: "03", t: "Stil tizimi", d: "Ranglar, tipografiya va komponentlar tanlanadi." },
  { n: "04", t: "Dizayn", d: "Desktop va mobil versiyalar to'liq ishlab chiqiladi." },
  { n: "05", t: "Topshirish", d: "Yakuniy Figma link yoki eksport fayllar topshiriladi." },
];

const pricing = [
  "Landing page dizayni",
  "Biznes sayt dizayni",
  "Onlayn do'kon dizayni",
  "Logo dizayn",
  "Ijtimoiy tarmoq postlari",
  "Vizitka va banner",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="w-7 h-7 rounded-md bg-primary text-primary-foreground grid place-items-center text-sm">W</span>
            Web_Site<span className="text-muted-foreground font-normal">/urgut</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition">Xizmatlar</a>
            <a href="#work" className="hover:text-foreground transition">Portfolio</a>
            <a href="#process" className="hover:text-foreground transition">Jarayon</a>
            <a href="#pricing" className="hover:text-foreground transition">Narxlar</a>
          </nav>
          <a href="https://t.me/aliakbar_05" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
            Buyurtma <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-24 px-6">
        <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
        <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-xs text-muted-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Yangi buyurtmalar qabul qilinmoqda · Urgut / Samarqand
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-balance max-w-5xl">
            Zamonaviy web va<br />
            <span className="text-muted-foreground">grafik dizayn</span><br />
            <span className="inline-flex items-baseline gap-3">
              <span className="text-primary">studiyasi</span>
              <Sparkles className="w-10 h-10 md:w-14 md:h-14 text-primary" />
            </span>
          </h1>

          <div className="mt-10 grid md:grid-cols-2 gap-8 items-end">
            <p className="text-lg text-muted-foreground max-w-xl text-balance">
              Figma, Photoshop va Illustrator — qulay, chiroyli va zamonaviy dizayn yechimlari.
              Landing page'dan logogacha, mijozning brendiga mos professional ish.
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href="#work" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-medium hover:opacity-90 transition">
                Ishlarni ko'rish <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="https://t.me/websiteurgut" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-full font-medium hover:bg-surface transition">
                <Send className="w-4 h-4" /> Telegram kanal
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
            {[
              { k: "1+", v: "yil tajriba" },
              { k: "3", v: "asosiy dastur" },
              { k: "20+", v: "demo loyiha" },
              { k: "100%", v: "responsive" },
            ].map((s) => (
              <div key={s.v} className="bg-background p-6 md:p-8">
                <div className="font-display text-4xl md:text-5xl font-bold text-primary">{s.k}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section aria-hidden className="border-y border-border py-6 overflow-hidden bg-surface">
        <div className="flex gap-12 animate-marquee whitespace-nowrap font-display text-2xl md:text-3xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 items-center shrink-0">
              {["Figma", "✦", "Photoshop", "✦", "Illustrator", "✦", "UI / UX", "✦", "Landing", "✦", "Branding", "✦", "Logo", "✦"].map((w, j) => (
                <span key={j} className={j % 2 === 1 ? "text-primary" : "text-foreground"}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <div className="text-sm text-primary font-medium mb-3">/ Xizmatlar</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold max-w-2xl text-balance">
                Dizayn — ehtiyojga moslangan.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Kod yozilmaydi — faqat to'liq dizayn tayyorlanadi.
              Tayyor Figma fayl yoki eksport rasm shaklida topshiriladi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <div key={s.title}
                className="group relative p-7 rounded-2xl border border-border bg-surface hover:bg-card transition overflow-hidden">
                <div className="flex items-start justify-between mb-12">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-muted-foreground border border-border rounded-full px-2.5 py-1">{s.tag}</span>
                </div>
                <div className="text-xs text-muted-foreground mb-2">0{i + 1}</div>
                <h3 className="font-display text-2xl font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="work" className="py-24 md:py-32 px-6 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <div className="text-sm text-primary font-medium mb-3">/ Portfolio</div>
            <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl text-balance">
              Tanlangan ishlar va demo loyihalar.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {portfolio.map((p) => (
              <article key={p.n} className="group relative rounded-2xl border border-border bg-background overflow-hidden">
                <div className="aspect-[16/10] relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/10">
                  <div className="absolute inset-0 grain opacity-60" />
                  <div className="absolute inset-6 rounded-xl border border-border bg-background/50 backdrop-blur-sm flex flex-col">
                    <div className="flex gap-1.5 p-3 border-b border-border">
                      <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                    </div>
                    <div className="flex-1 p-4 grid grid-cols-3 gap-2">
                      <div className="col-span-2 rounded-md bg-foreground/5" />
                      <div className="rounded-md bg-primary/30" />
                      <div className="rounded-md bg-foreground/5" />
                      <div className="rounded-md bg-foreground/10" />
                      <div className="rounded-md bg-foreground/5" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full bg-background/80 backdrop-blur border border-border">
                    {p.tool}
                  </div>
                </div>
                <div className="p-7 flex items-start justify-between gap-6">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1.5">{p.n}</div>
                    <h3 className="font-display text-2xl font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-border grid place-items-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="text-sm text-primary font-medium mb-3">/ Jarayon</div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-balance">
                Qanday ishlayman.
              </h2>
              <p className="text-muted-foreground">
                Har bir loyiha aniq qadamlar bilan boshqariladi — brifdan yakuniy topshirishgacha.
              </p>
            </div>
            <ol className="space-y-px bg-border rounded-2xl overflow-hidden">
              {process.map((p) => (
                <li key={p.n} className="bg-background p-7 md:p-9 flex gap-6 md:gap-10 group hover:bg-surface transition">
                  <div className="font-display text-3xl md:text-4xl font-bold text-primary w-16 shrink-0">{p.n}</div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold mb-1.5">{p.t}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{p.d}</p>
                  </div>
                  <Figma className="w-5 h-5 text-muted-foreground/40 ml-auto shrink-0 mt-2 hidden md:block" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 md:py-32 px-6 bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="text-sm text-primary font-medium mb-3">/ Narxlar</div>
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 text-balance">
                Kelishuv asosida — adolatli.
              </h2>
              <p className="text-muted-foreground max-w-md">
                Narxlar loyiha murakkabligi, sahifalar soni va deadline'ga qarab belgilanadi.
                Aniq taklif olish uchun bog'laning.
              </p>
              <a href="https://t.me/aliakbar_05" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-medium hover:opacity-90 transition">
                Taklif so'rash <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            <ul className="divide-y divide-border border border-border rounded-2xl bg-background">
              {pricing.map((p) => (
                <li key={p} className="flex items-center justify-between gap-4 p-5 md:p-6 hover:bg-surface transition">
                  <div className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary grid place-items-center">
                      <Check className="w-4 h-4" />
                    </span>
                    <span className="font-medium">{p}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">kelishuv asosida</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="relative rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 overflow-hidden">
            <div className="absolute inset-0 grain opacity-30" />
            <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-12 items-end">
              <div>
                <ImageIcon className="w-10 h-10 mb-6" />
                <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.95] text-balance">
                  Loyihangizni<br />birga boshlaymizmi?
                </h2>
                <p className="mt-6 text-primary-foreground/70 max-w-md">
                  Telegram orqali yozing — 24 soat ichida javob beraman va taklif tayyorlayman.
                </p>
              </div>
              <div className="space-y-4">
                <a href="https://t.me/aliakbar_05" target="_blank" rel="noreferrer"
                  className="flex items-center justify-between gap-4 p-5 rounded-2xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition border border-primary-foreground/20">
                  <div>
                    <div className="text-xs opacity-60 mb-0.5">Buyurtma uchun</div>
                    <div className="font-display font-semibold text-lg">@aliakbar_05</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <a href="https://t.me/websiteurgut" target="_blank" rel="noreferrer"
                  className="flex items-center justify-between gap-4 p-5 rounded-2xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition border border-primary-foreground/20">
                  <div>
                    <div className="text-xs opacity-60 mb-0.5">Telegram kanal</div>
                    <div className="font-display font-semibold text-lg">@websiteurgut</div>
                  </div>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <div className="flex items-center gap-3 p-5 rounded-2xl border border-primary-foreground/20">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Urgut · Samarqand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10 px-6">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-primary text-primary-foreground grid place-items-center text-xs font-bold">W</span>
            © {new Date().getFullYear()} Web_Site Urgut. Barcha huquqlar himoyalangan.
          </div>
          <div className="flex gap-6">
            <a href="#services" className="hover:text-foreground">Xizmatlar</a>
            <a href="#work" className="hover:text-foreground">Portfolio</a>
            <a href="#contact" className="hover:text-foreground">Aloqa</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
