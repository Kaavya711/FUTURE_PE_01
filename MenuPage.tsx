import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InfoModal from "@/components/InfoModal";
import { Coffee, Leaf, UtensilsCrossed } from "lucide-react";

type DrinkInfo = { subtitle: string; body: string; closing: string };

const coffeeData: Record<string, DrinkInfo> = {
  "Espresso": {
    subtitle: "Bold · Single Origin",
    body: "A concentrated pour of pure intent — dark, aromatic, and grounding. Our espresso is the soul of everything we brew. One sip and the world slows down just enough.",
    closing: "Best enjoyed in silence, with a book you can't put down.",
  },
  "Americano": {
    subtitle: "Long · Smooth",
    body: "Espresso diluted with hot water into something slow and reflective. The Americano is made for the long reader — the one who settles in and stays until the last page.",
    closing: "A drink that gives you all the time in the world.",
  },
  "Cappuccino": {
    subtitle: "Frothy · Balanced",
    body: "Equal parts espresso, steamed milk, and silky microfoam. The cappuccino is a moment of balance — warm, rich, and perfectly proportioned. Every cup, a small ceremony.",
    closing: "For those who believe good things come in threes.",
  },
  "Latte": {
    subtitle: "Creamy · Gentle",
    body: "Velvety steamed milk cradling a gentle espresso heart. The latte is warmth in liquid form — soft, familiar, and deeply comforting. The drink that holds you.",
    closing: "Like curling up in your favourite corner with your favourite book.",
  },
  "Flat White": {
    subtitle: "Intense · Velvety",
    body: "A double ristretto beneath a thin, silky layer of microfoam. Smaller than a latte, bolder in flavour. The flat white is for those who want their coffee to mean something.",
    closing: "Precision in every sip.",
  },
  "Mocha": {
    subtitle: "Coffee & Chocolate",
    body: "Espresso meets dark chocolate in a union that is nothing short of indulgent. Rich, complex, and just sweet enough. The mocha is the drink for cloudy days and happy afternoons.",
    closing: "Because some combinations are simply meant to be.",
  },
  "Caramel Macchiato": {
    subtitle: "Layered · Sweet",
    body: "Vanilla milk, bold espresso, and a slow golden drizzle of caramel. Beautiful to look at. Even better to sip. The caramel macchiato turns your coffee break into an occasion.",
    closing: "A drink worthy of the quiet moments between chapters.",
  },
  "Hazelnut Latte": {
    subtitle: "Nutty · Warm",
    body: "The gentle sweetness of hazelnut folded into a creamy espresso latte. Aromatic, warm, and deeply satisfying — this is the cup that feels like coming home after a long day.",
    closing: "Because some flavours feel like a hug.",
  },
  "Cold Brew": {
    subtitle: "12-Hour Steeped · Smooth",
    body: "Steeped cold over twelve slow hours — the result is a coffee so smooth it feels almost silken. No bitterness. No rush. Just deep, clean flavour for long, focused sessions.",
    closing: "Good things take time. So does great cold brew.",
  },
};

const specialtyData: Record<string, DrinkInfo> = {
  "Matcha Latte": {
    subtitle: "Ceremonial Grade · Earthy",
    body: "Ceremonial matcha whisked with steamed milk into a drink that is both calming and focused. Earthy, vibrant, and quietly beautiful — like a morning ritual you actually look forward to.",
    closing: "Stillness, sipped slowly.",
  },
  "Masala Chai": {
    subtitle: "Spiced · Soulful",
    body: "Ginger, cardamom, cinnamon, clove — our masala chai is a symphony of warmth. Brewed strong, frothed gently, and served with intention. This is the cup that knows you.",
    closing: "India, in every single sip.",
  },
  "Iced Vanilla Latte": {
    subtitle: "Chilled · Sweet",
    body: "Chilled espresso over ice with vanilla-sweetened milk — cool, smooth, and endlessly refreshing. The perfect companion for Jaipur's warm afternoons and your longest reading sessions.",
    closing: "Cool on the outside. Warmth that stays.",
  },
  "Cinnamon Honey Brew": {
    subtitle: "Aromatic · Golden",
    body: "A hand-crafted blend of brewed coffee, raw honey, and a whisper of cinnamon. Warm, golden, and deeply aromatic — this is the drink for quiet mornings when the world is still yours alone.",
    closing: "The colour of sunrise. The warmth of belonging.",
  },
};

const snackData: Record<string, DrinkInfo> = {
  "Garlic Bread": {
    subtitle: "Warm · Toasted",
    body: "Crusty on the outside, soft within — our garlic bread arrives warm from the oven, brushed with herb butter and sliced just right. The perfect companion to a good book and a hot cup.",
    closing: "Simple pleasures, done beautifully.",
  },
  "Cheese Croissant": {
    subtitle: "Flaky · Rich",
    body: "Buttery, golden, and layered with melted cheese — our croissant is the kind of thing you look forward to all week. Best enjoyed warm, in a quiet corner, with nowhere else to be.",
    closing: "A little indulgence goes a long way.",
  },
  "Chocolate Brownie": {
    subtitle: "Dense · Decadent",
    body: "Rich dark chocolate baked into a dense, fudgy square — our brownie is uncompromising in its love for chocolate. Serve it to yourself when you've earned it, or when you simply want it.",
    closing: "Because you deserve something extraordinary.",
  },
  "Blueberry Muffin": {
    subtitle: "Light · Berry-Sweet",
    body: "Studded with plump blueberries and baked to a gentle golden dome — our muffin is soft, fragrant, and just sweet enough. A morning companion that never disappoints.",
    closing: "Some things are just perfectly right.",
  },
  "Veg Sandwich": {
    subtitle: "Fresh · Wholesome",
    body: "A thoughtfully assembled sandwich — fresh vegetables, gentle seasoning, and bread that holds it all together. Light enough to keep reading. Satisfying enough to call a meal.",
    closing: "Nourishment without distraction.",
  },
  "Pasta (Red/White Sauce)": {
    subtitle: "Hearty · Comforting",
    body: "Choose your sauce — a slow-simmered tomato red or a creamy, herb-flecked white. Either way, this is a plate that earns your full attention. Stay for the pasta. Stay for the next chapter too.",
    closing: "The kind of meal that keeps you settled.",
  },
  "Nachos": {
    subtitle: "Crunchy · Shared",
    body: "Golden chips loaded with toppings — the kind of snack best enjoyed in good company. Our nachos are unapologetically fun, and exactly what you need for a lively book club session.",
    closing: "Some conversations are best had over nachos.",
  },
  "Pancakes": {
    subtitle: "Fluffy · Golden",
    body: "Stacked high, golden-edged, and impossibly fluffy — our pancakes are breakfast as it was meant to be. Drizzled with maple syrup, they turn any morning into a gentle celebration.",
    closing: "Start your chapter right.",
  },
  "Waffles": {
    subtitle: "Crisp · Warm",
    body: "Crisp on the outside, pillowy within — our waffles are comfort in grid form. Dressed simply or adorned as you like. The kind of thing that makes you slow down and savour.",
    closing: "Because a perfect square can hold everything good.",
  },
};

type ModalContent = { title: string; subtitle: string; body: string; closing: string; icon: React.ReactNode } | null;

const MenuPage = () => {
  const [modal, setModal] = useState<ModalContent>(null);

  const openModal = (name: string, data: Record<string, DrinkInfo>, icon: React.ReactNode) => {
    const d = data[name];
    if (!d) return;
    setModal({ title: name, subtitle: d.subtitle, body: d.body, closing: d.closing, icon });
  };

  const coffeeIcon = <Coffee className="h-7 w-7 text-cafe-warm" />;
  const leafIcon = <Leaf className="h-7 w-7 text-cafe-sage" />;
  const snackIcon = <UtensilsCrossed className="h-7 w-7 text-primary" />;

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
            <p className="mb-3 font-body text-sm uppercase tracking-[0.25em] text-cafe-gold">Our Menu</p>
            <h1 className="mb-4 font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
              Fuel Your Next Chapter
            </h1>
            <p className="mx-auto max-w-lg font-body text-sm text-primary-foreground/70">
              Mid-range, student-friendly pricing — because great coffee and good books shouldn't break the bank.
            </p>
          </div>
        </section>

        {/* Menu Tabs */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl">
              <Tabs defaultValue="coffee" className="w-full">
                <TabsList className="mb-8 w-full justify-center gap-2 bg-transparent flex-wrap">
                  <TabsTrigger
                    value="coffee"
                    className="rounded-full border border-border px-6 font-body text-sm transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Coffee
                  </TabsTrigger>
                  <TabsTrigger
                    value="specialty"
                    className="rounded-full border border-border px-6 font-body text-sm transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Specialty Drinks
                  </TabsTrigger>
                  <TabsTrigger
                    value="snacks"
                    className="rounded-full border border-border px-6 font-body text-sm transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    Sides & Snacks
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="coffee" className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <h2 className="mb-2 font-serif text-2xl font-semibold text-foreground">Coffee</h2>
                  <p className="mb-6 font-body text-sm text-muted-foreground">Classic and crafted — every cup brewed with care. Tap any item to learn more.</p>
                  <div className="divide-y divide-dashed divide-border">
                    {Object.keys(coffeeData).map((item) => (
                      <button
                        key={item}
                        onClick={() => openModal(item, coffeeData, coffeeIcon)}
                        className="flex w-full items-center justify-between py-4 text-left transition-all duration-300 hover:text-cafe-warm group"
                      >
                        <span className="font-body text-base text-foreground group-hover:text-cafe-warm transition-colors duration-300">{item}</span>
                        <span className="font-body text-xs text-muted-foreground group-hover:text-cafe-gold transition-colors duration-300">View →</span>
                      </button>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="specialty" className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <h2 className="mb-2 font-serif text-2xl font-semibold text-foreground">Specialty Drinks</h2>
                  <p className="mb-6 font-body text-sm text-muted-foreground">Unique, seasonal, and handcrafted with love. Tap any item to learn more.</p>
                  <div className="divide-y divide-dashed divide-border">
                    {Object.keys(specialtyData).map((item) => (
                      <button
                        key={item}
                        onClick={() => openModal(item, specialtyData, leafIcon)}
                        className="flex w-full items-center justify-between py-4 text-left transition-all duration-300 group"
                      >
                        <span className="font-body text-base text-foreground group-hover:text-cafe-warm transition-colors duration-300">{item}</span>
                        <span className="font-body text-xs text-muted-foreground group-hover:text-cafe-gold transition-colors duration-300">View →</span>
                      </button>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="snacks" className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <h2 className="mb-2 font-serif text-2xl font-semibold text-foreground">Sides & Snacks</h2>
                  <p className="mb-6 font-body text-sm text-muted-foreground">The perfect companion to your reading session. Tap any item to learn more.</p>
                  <div className="divide-y divide-dashed divide-border">
                    {Object.keys(snackData).map((item) => (
                      <button
                        key={item}
                        onClick={() => openModal(item, snackData, snackIcon)}
                        className="flex w-full items-center justify-between py-4 text-left transition-all duration-300 group"
                      >
                        <span className="font-body text-base text-foreground group-hover:text-cafe-warm transition-colors duration-300">{item}</span>
                        <span className="font-body text-xs text-muted-foreground group-hover:text-cafe-gold transition-colors duration-300">View →</span>
                      </button>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              <p className="mt-8 text-center font-body text-sm italic text-muted-foreground">
                Explore an extended selection of seasonal dishes and handcrafted desserts waiting for you at the café.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MenuPage;
