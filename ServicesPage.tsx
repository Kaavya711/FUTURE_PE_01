import { useState } from "react";
import { Coffee, BookOpen, Users, Sun, Armchair, Music, Leaf, Lamp } from "lucide-react";
import InfoModal from "@/components/InfoModal";

const beverageData: Record<string, { subtitle: string; body: string; closing: string }> = {
  "Espresso": {
    subtitle: "Single Origin · Bold",
    body: "Small in size, infinite in depth. A perfect espresso at Between the Pages is the distilled essence of a thousand mornings — dark, rich, and grounding. The kind of sip that says: you're exactly where you need to be.",
    closing: "Best paired with silence and the first page of a new book.",
  },
  "Americano": {
    subtitle: "Smooth & Long",
    body: "Espresso meets stillness. The Americano stretches out a bold shot into something slower, more contemplative — perfect for long study sessions, quiet afternoons, and chapters that refuse to end.",
    closing: "A drink that gives you time.",
  },
  "Cappuccino": {
    subtitle: "Frothy & Balanced",
    body: "Equal parts espresso, steamed milk, and silken foam. The cappuccino is a conversation in a cup — balanced, warm, and deeply satisfying. Every sip feels like a moment worth remembering.",
    closing: "For the reader who likes harmony in every detail.",
  },
  "Latte": {
    subtitle: "Creamy & Gentle",
    body: "Silky steamed milk cradling a gentle espresso heart. The latte is the drink that holds you — soft, warm, and endlessly comforting. Perfect for those days when you just need to settle in.",
    closing: "Like a warm blanket for your hands.",
  },
  "Flat White": {
    subtitle: "Velvety & Precise",
    body: "Microfoam milk over a double ristretto — the flat white is for those who want their coffee elegant and unhurried. Smooth texture, focused flavour, and quiet intensity.",
    closing: "Precision brewed for the quietly discerning.",
  },
  "Mocha": {
    subtitle: "Coffee Meets Chocolate",
    body: "When espresso and chocolate come together, something magical happens. The mocha is indulgent without apology — a little sweet, a little dark, and completely irresistible on a rainy Jaipur afternoon.",
    closing: "Treat yourself. You've earned it.",
  },
  "Caramel Macchiato": {
    subtitle: "Sweet & Layered",
    body: "Layers of vanilla-infused milk, espresso, and a slow drizzle of caramel. The caramel macchiato is as beautiful to look at as it is to sip — a dessert and a drink rolled into one luxurious moment.",
    closing: "For those who believe every chapter deserves a sweet ending.",
  },
  "Hazelnut Latte": {
    subtitle: "Nutty & Warm",
    body: "The warmth of hazelnut woven into creamy espresso milk — a drink that feels like coming home. Rich, aromatic, and gently sweet. The kind of cup that makes you slow down and breathe.",
    closing: "Because some flavours feel like memory.",
  },
  "Cold Brew": {
    subtitle: "12-Hour Steeped · Smooth",
    body: "Brewed slow and cold over twelve hours, our cold brew is patience in a glass — smooth, bold, and deeply satisfying without a hint of bitterness. The perfect companion for long, focused work sessions.",
    closing: "For those who know that the best things take time.",
  },
  "Matcha Latte": {
    subtitle: "Earthy & Calming",
    body: "Ceremonial-grade matcha whisked with steamed milk into a drink that is as serene as it is vibrant. The matcha latte brings focus and calm in equal measure — a quiet ritual worth repeating.",
    closing: "Stillness, sipped.",
  },
  "Masala Chai": {
    subtitle: "Spiced & Soulful",
    body: "A blend of warming spices — ginger, cardamom, cinnamon, and clove — steeped in strong tea and frothed milk. Our masala chai is the cup that feels like home, like monsoons, like someone who knows you.",
    closing: "India, in every sip.",
  },
  "Seasonal Signature Drinks": {
    subtitle: "Chef's Seasonal Creation",
    body: "Every season, our team crafts something new — a drink inspired by the time of year, local ingredients, and the quiet magic of Jaipur. Ask our staff what's brewing this season.",
    closing: "Something new is always waiting for you.",
  },
  "Iced Vanilla Latte": {
    subtitle: "Cool & Sweet",
    body: "Chilled espresso over ice with silky vanilla-sweetened milk. The iced vanilla latte is summer afternoon poetry — cool, smooth, and endlessly refreshing. Perfect for Jaipur's warmest days and your longest reading sessions.",
    closing: "Cool on the outside. Warm on the inside.",
  },
  "Cinnamon Honey Brew": {
    subtitle: "Aromatic & Golden",
    body: "A hand-crafted blend of brewed coffee, raw honey, and a whisper of cinnamon — warm, golden, and deeply aromatic. This is the drink for quiet mornings when the world is still yours alone.",
    closing: "The colour of sunrise. The warmth of belonging.",
  },
};

const genreData: Record<string, { body: string; closing: string }> = {
  "Thriller": {
    body: "Heart in your throat, pages turning faster than you can breathe. Our thriller collection is hand-curated for those who love the edge — the midnight reads, the locked-door mysteries, the twists that leave you gasping.",
    closing: "Come find your next obsession on our shelves.",
  },
  "Romance": {
    body: "Love letters, longing glances, and stories that remind you of the warmth a single person can hold. Our romance collection is for dreamers and hopefuls — curated with tenderness for every kind of heart.",
    closing: "Because everyone deserves a love story.",
  },
  "Contemporary Fiction": {
    body: "Stories rooted in now — in the texture of modern lives, complicated feelings, and the beauty of ordinary moments. Our contemporary fiction section holds books that will make you feel understood.",
    closing: "Recognise yourself in these pages.",
  },
  "Self-Help": {
    body: "Books that see you clearly and gently push you forward. Our self-help collection is not about quick fixes — it's about real growth, intentional living, and becoming more of who you already are.",
    closing: "The right book at the right moment can change everything.",
  },
  "Classical Literature": {
    body: "The words that have outlasted everything — centuries of readers, changing worlds, and shifting times. Our classical literature collection is a conversation with the greatest minds who ever lived.",
    closing: "Some books were written for every era. Yours included.",
  },
  "Poetry": {
    body: "A single line that stops you mid-breath. Poetry at Between the Pages lives in a special corner — close to the window, close to the light — because that's where words like these belong.",
    closing: "Come read something that needs no explanation.",
  },
};

const ambienceFeatures = [
  {
    icon: Sun,
    title: "Sunlit Corners",
    desc: "Large windows flood every table with golden afternoon light",
    subtitle: "Natural Light · Golden Hours",
    body: "Golden light spills across your table, tracing the edges of your thoughts. Our sunlit corners are designed to hold the afternoon — warm, generous, and endlessly inviting. Here, even a difficult page feels a little easier.",
    closing: "Stay awhile. Let time slow around you.",
  },
  {
    icon: Armchair,
    title: "Cozy Armchairs",
    desc: "Sink into plush seating designed for hours of reading",
    subtitle: "Plush Seating · Hours of Comfort",
    body: "Sink into a chair that hugs you back. Our armchairs are chosen for the long reader — deep enough to disappear into, soft enough to forget the world outside. Hours slip by unnoticed here, wrapped in comfort and quiet inspiration.",
    closing: "Find your chair. Make it yours for the afternoon.",
  },
  {
    icon: Music,
    title: "Soft Instrumentals",
    desc: "A curated playlist that never interrupts your thoughts",
    subtitle: "Curated Playlist · Always Gentle",
    body: "Gentle notes drift through the air — never intrusive, always soothing. Our instrumental playlist is hand-curated to accompany thought, not compete with it. Let the music be the quiet companion you didn't know you needed.",
    closing: "Read. Write. Simply breathe. The music holds the rest.",
  },
  {
    icon: Leaf,
    title: "Plant-Filled Spaces",
    desc: "Indoor greens that bring life and calm to every corner",
    subtitle: "Living Greens · Calming Energy",
    body: "Green whispers of life surround you — calming your mind and refreshing your spirit. Our indoor plants are not decoration; they are presence. Each leaf invites a moment of pause, a breath of quiet, a small return to something real.",
    closing: "Nature inside, world outside. You're exactly where you should be.",
  },
  {
    icon: Lamp,
    title: "Warm Interiors",
    desc: "Rich wooden textures and warm lighting that feels like home",
    subtitle: "Wooden Textures · Amber Light",
    body: "Rich wooden tones, floor-to-ceiling shelves, and the soft amber glow of warm lighting — every corner of Between the Pages feels like a story waiting to be told. Walk in and feel the shift. This is what it means to feel at home somewhere new.",
    closing: "You don't have to be a regular to feel like you belong here.",
  },
  {
    icon: BookOpen,
    title: "Reading Nooks",
    desc: "Dedicated quiet zones where the world fades away",
    subtitle: "Quiet Zones · Private Retreat",
    body: "Quiet corners where the world fades — leaving only words, thoughts, and your imagination. Our reading nooks are deliberately designed for disappearing into. No distractions. No noise. Just you and the page, exactly as it should be.",
    closing: "Enter and lose yourself, beautifully.",
  },
];

type ModalContent = { title: string; subtitle?: string; body: string; closing?: string; icon?: React.ReactNode } | null;

const ServicesPage = () => {
  const [modal, setModal] = useState<ModalContent>(null);

  const openAmbience = (f: typeof ambienceFeatures[0]) => {
    setModal({
      title: f.title,
      subtitle: f.subtitle,
      body: f.body,
      closing: f.closing,
      icon: <f.icon className="h-7 w-7 text-cafe-warm" />,
    });
  };

  const openBeverage = (name: string) => {
    const d = beverageData[name];
    if (!d) return;
    setModal({
      title: name,
      subtitle: d.subtitle,
      body: d.body,
      closing: d.closing,
      icon: <Coffee className="h-7 w-7 text-cafe-warm" />,
    });
  };

  const openGenre = (name: string) => {
    const d = genreData[name];
    if (!d) return;
    setModal({
      title: name,
      subtitle: "Book Collection",
      body: d.body,
      closing: d.closing,
      icon: <BookOpen className="h-7 w-7 text-primary" />,
    });
  };

  return (
    <>
      <InfoModal
        open={!!modal}
        onClose={() => setModal(null)}
        title={modal?.title ?? ""}
        subtitle={modal?.subtitle}
        body={modal?.body ?? ""}
        closingLine={modal?.closing}
        icon={modal?.icon}
      />

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-cafe-espresso py-20 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-3 font-body text-sm uppercase tracking-[0.25em] text-cafe-gold">What We Offer</p>
            <h1 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
              Stories, Sips & Shared Moments
            </h1>
          </div>
        </section>

        {/* Coffee & Beverages */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
                  <Coffee className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">Coffee & Beverages</h2>
                  <p className="font-body text-sm italic text-cafe-sage">Student-friendly pricing. Comfort for long stays.</p>
                </div>
              </div>
              <p className="mb-8 font-body text-base leading-relaxed text-muted-foreground">
                High-quality coffee crafted for long reading sessions and deep conversations. From rich espressos
                to seasonal signature drinks — every cup is brewed to keep you company through one more chapter.
                Welcoming, student-friendly, and warm.
              </p>
              <div className="flex flex-wrap gap-3">
                {Object.keys(beverageData).map((b) => (
                  <button
                    key={b}
                    onClick={() => openBeverage(b)}
                    className="cursor-pointer rounded-full border border-border bg-card px-4 py-2 font-body text-sm text-foreground transition-all duration-300 hover:border-cafe-gold hover:bg-accent hover:text-primary"
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-border" />

        {/* Book Library */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
                  <BookOpen className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">Book Library & Reading Space</h2>
                  <p className="font-body text-sm italic text-cafe-sage">3,000+ curated books across genres.</p>
                </div>
              </div>
              <p className="mb-6 font-body text-base leading-relaxed text-muted-foreground">
                A curated library with 3,000+ books — from thriller and romance to poetry and self-help.
                Floor-to-ceiling wooden shelves, a wooden ladder to reach the top, and corners so cozy you'll
                forget the time.
              </p>
              <p className="mb-5 font-body text-sm font-medium text-foreground">Explore a genre:</p>
              <div className="mb-8 flex flex-wrap gap-3">
                {Object.keys(genreData).map((g) => (
                  <button
                    key={g}
                    onClick={() => openGenre(g)}
                    className="cursor-pointer rounded-full border border-border bg-card px-4 py-2 font-body text-sm text-foreground transition-all duration-300 hover:border-cafe-gold hover:bg-accent hover:text-primary"
                  >
                    {g}
                  </button>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Large windows with natural sunlight",
                  "Indoor green plants throughout",
                  "Floor-to-ceiling wooden shelves",
                  "Wooden ladder for higher books",
                  "Quiet reading zones",
                  "Discussion tables",
                  "Instagram-worthy aesthetic corners",
                  "Monthly staff recommendations",
                ].map((detail) => (
                  <div key={detail} className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-cafe-sage" />
                    <span className="font-body text-sm text-muted-foreground">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="border-t border-border" />

        {/* Events */}
        <section className="bg-card py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">Events & Community</h2>
                  <p className="font-body text-sm italic text-cafe-sage">Where Jaipur's literary community comes alive.</p>
                </div>
              </div>
              <p className="font-body text-base leading-relaxed text-muted-foreground">
                More than a café — a creative hub in Jaipur. A gathering place for readers, writers, poets, and
                dreamers who want to connect with like-minded souls over great coffee.
              </p>
            </div>
          </div>
        </section>

        {/* Ambience */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <p className="mb-3 font-body text-sm uppercase tracking-[0.25em] text-cafe-sage">The Atmosphere</p>
              <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-5xl">A Space Designed to Stay</h2>
              <p className="mx-auto max-w-2xl font-body text-base leading-relaxed text-muted-foreground">
                Walk in and feel the difference. The scent of freshly ground coffee mingles with the soft rustle
                of turning pages. Warm wooden interiors, sunlit reading corners, and the kind of quiet that makes
                you think clearly, dream freely, and stay a little longer than you planned.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ambienceFeatures.map((f) => (
                <button
                  key={f.title}
                  onClick={() => openAmbience(f)}
                  className="group flex items-start gap-4 rounded-xl border border-border/50 bg-card p-6 text-left transition-all duration-300 hover:border-cafe-warm/40 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent transition-colors duration-300 group-hover:bg-cafe-sage-light">
                    <f.icon className="h-6 w-6 text-cafe-warm transition-colors duration-300 group-hover:text-cafe-sage" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{f.title}</h3>
                    <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
                    <span className="mt-2 inline-block font-body text-xs text-cafe-warm transition-colors duration-300 group-hover:text-cafe-gold">Explore →</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
