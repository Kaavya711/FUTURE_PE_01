import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const coffee = [
  { name: "Espresso", price: "₹129" },
  { name: "Americano", price: "₹149" },
  { name: "Cappuccino", price: "₹179" },
  { name: "Latte", price: "₹189" },
  { name: "Flat White", price: "₹199" },
  { name: "Mocha", price: "₹209" },
  { name: "Caramel Macchiato", price: "₹219" },
  { name: "Hazelnut Latte", price: "₹219" },
  { name: "Cold Brew", price: "₹199" },
];

const specialty = [
  { name: "Matcha Latte", price: "₹229" },
  { name: "Masala Chai", price: "₹99" },
  { name: "Iced Vanilla Latte", price: "₹209" },
  { name: "Cinnamon Honey Brew", price: "₹239" },
];

const snacks = [
  { name: "Garlic Bread", price: "₹129" },
  { name: "Cheese Croissant", price: "₹149" },
  { name: "Chocolate Brownie", price: "₹139" },
  { name: "Blueberry Muffin", price: "₹129" },
  { name: "Veg Sandwich", price: "₹159" },
  { name: "Pasta (Red/White Sauce)", price: "₹189" },
  { name: "Nachos", price: "₹169" },
  { name: "Pancakes", price: "₹179" },
  { name: "Waffles", price: "₹189" },
];

const MenuItem = ({ name, price }: { name: string; price: string }) => (
  <div className="flex items-center justify-between border-b border-dashed border-border py-3 last:border-0">
    <span className="font-body text-sm text-foreground">{name}</span>
    <span className="font-body text-sm font-semibold text-primary">{price}</span>
  </div>
);

const MenuSection = () => {
  return (
    <section id="menu" className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-3 font-body text-sm uppercase tracking-[0.25em] text-cafe-sage">Our Menu</p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-5xl">Fuel Your Next Chapter</h2>
          <p className="mx-auto max-w-lg font-body text-sm text-muted-foreground">
            Mid-range, student-friendly pricing — because great coffee and good books shouldn't break the bank.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Tabs defaultValue="coffee" className="w-full">
            <TabsList className="mb-8 w-full justify-center gap-2 bg-transparent">
              <TabsTrigger value="coffee" className="rounded-full border border-border px-6 font-body text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Coffee
              </TabsTrigger>
              <TabsTrigger value="specialty" className="rounded-full border border-border px-6 font-body text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Specialty Drinks
              </TabsTrigger>
              <TabsTrigger value="snacks" className="rounded-full border border-border px-6 font-body text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Sides & Snacks
              </TabsTrigger>
            </TabsList>

            <TabsContent value="coffee" className="rounded-2xl border border-border bg-card p-6 md:p-8">
              {coffee.map((item) => <MenuItem key={item.name} {...item} />)}
            </TabsContent>
            <TabsContent value="specialty" className="rounded-2xl border border-border bg-card p-6 md:p-8">
              {specialty.map((item) => <MenuItem key={item.name} {...item} />)}
            </TabsContent>
            <TabsContent value="snacks" className="rounded-2xl border border-border bg-card p-6 md:p-8">
              {snacks.map((item) => <MenuItem key={item.name} {...item} />)}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
