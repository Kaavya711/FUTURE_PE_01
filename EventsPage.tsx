import { useState } from "react";
import { BookOpen, Mic, PenTool, Users, Heart, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventModal from "@/components/EventModal";
import InfoModal from "@/components/InfoModal";

const events = [
  {
    icon: BookOpen,
    title: "Weekly Book Clubs",
    freq: "Every Saturday, 5:00 PM",
    subtitle: "Literary Community · Weekly",
    body: "There is something rare about a room full of people who have all lived inside the same story. Our weekly book club is that room — curated, welcoming, and full of voices. Every Saturday, a new book opens a new conversation. You might arrive as a stranger. You'll leave as a reader who belongs.",
    closing: "Come with your thoughts. Leave with a friend and your next favourite book.",
  },
  {
    icon: PenTool,
    title: "Poetry Nights",
    freq: "Every second Friday, 6:30 PM",
    subtitle: "Candlelit · Intimate",
    body: "A room lit by candlelight, soft music fading into silence, and a voice reading something true. Poetry Night at Between the Pages is one of Jaipur's most quietly beautiful evenings — open to all, intimate for everyone. Bring your own verses, or simply come to listen. Every word finds a home here.",
    closing: "Some things are too real for prose. Come and hear them.",
  },
  {
    icon: Users,
    title: "Writers' Meetups",
    freq: "Every Sunday, 4:00 PM",
    subtitle: "Creative Community · Open",
    body: "Writing is the loneliest art — until you find your people. Our writers' meetups are a safe and generous space for stories still finding their shape. Share a chapter, seek feedback, or simply sit with other writers and feel less alone in the process. The work gets better when it's witnessed.",
    closing: "Your story is worth sharing. We promise to listen carefully.",
  },
  {
    icon: Mic,
    title: "Open Mic Evenings",
    freq: "Every third Saturday, 7:00 PM",
    subtitle: "Spoken Word · Music · Expression",
    body: "A microphone, a room of attentive ears, and the courage to speak. Our Open Mic Evenings welcome every kind of voice — spoken word, original music, personal essays, comedy. There is no wrong way to be heard here. Step up if you dare, or sit back and be genuinely moved.",
    closing: "The stage is small. The feeling is enormous.",
  },
  {
    icon: Trophy,
    title: "Reading Challenges",
    freq: "Monthly — new challenge every 1st",
    subtitle: "Monthly · Track & Celebrate",
    body: "Every month, we throw down a reading challenge — a genre, a theme, a number of pages, a kind of story. Track your progress, collect café stamps for completed books, and celebrate finishing something wonderful with something delicious. Reading alone is peaceful. Reading together is electric.",
    closing: "Push your shelf. Discover what you've been missing.",
  },
  {
    icon: Heart,
    title: "Couple Reading Date Nights",
    freq: "Every Friday & Saturday, 7:30 PM",
    subtitle: "Romance · Intimate · Curated",
    body: "Two chairs, a small table, two cups of something warm, and a book each. Our Couple Reading Date Nights offer curated book pairings for two, matching drinks, a reserved quiet corner, and the kind of evening that reminds you that shared silence is its own love language. Romance, redefined — one page at a time.",
    closing: "The best date is one where you both grow. Come read together.",
  },
];

type EventModalContent = typeof events[0] | null;

const EventsPage = () => {
  const [eventOpen, setEventOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventModalContent>(null);

  return (
    <>
      <EventModal open={eventOpen} onClose={() => setEventOpen(false)} />

      {selectedEvent && (
        <InfoModal
          open={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
          title={selectedEvent.title}
          subtitle={selectedEvent.subtitle}
          body={selectedEvent.body}
          closingLine={selectedEvent.closing}
          icon={<selectedEvent.icon className="h-7 w-7 text-primary" />}
          cta={{ label: "Join This Event", onClick: () => { setSelectedEvent(null); setEventOpen(true); } }}
        />
      )}

      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="bg-cafe-espresso py-20 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-3 font-body text-sm uppercase tracking-[0.25em] text-cafe-gold">Community & Culture</p>
            <h1 className="mb-4 font-serif text-4xl font-bold text-primary-foreground md:text-5xl">
              Events at Between the Pages
            </h1>
            <p className="mx-auto max-w-lg font-body text-sm text-primary-foreground/70">
              Jaipur's most vibrant literary community — gathering here, every week.
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {events.map((ev) => (
                <button
                  key={ev.title}
                  onClick={() => setSelectedEvent(ev)}
                  className="group rounded-2xl border border-border bg-card p-8 text-left transition-all duration-300 hover:shadow-lg hover:border-cafe-warm/40 hover:-translate-y-1"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-accent transition-colors duration-300 group-hover:bg-cafe-sage-light">
                    <ev.icon className="h-7 w-7 text-primary group-hover:text-cafe-sage transition-colors duration-300" />
                  </div>
                  <h3 className="mb-2 font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{ev.title}</h3>
                  <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground line-clamp-2">{ev.body}</p>
                  <p className="mb-4 font-body text-xs font-medium italic text-cafe-sage">{ev.freq}</p>
                  <span className="font-body text-xs text-cafe-warm transition-colors duration-300 group-hover:text-cafe-gold">Learn more →</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cafe-espresso py-20 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Be Part of the Story?
            </h2>
            <p className="mx-auto mb-8 max-w-lg font-body text-sm text-primary-foreground/70">
              Between the Pages is Jaipur's creative community hub — a gathering place for readers, writers,
              poets, and dreamers. Come for the coffee. Stay for the conversation.
            </p>
            <Button
              size="lg"
              onClick={() => setEventOpen(true)}
              className="rounded-full bg-cafe-gold px-10 font-body text-sm font-semibold text-cafe-espresso transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
            >
              Join Our Next Event
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default EventsPage;
