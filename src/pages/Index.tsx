import { useState } from "react";
import { motion, type Easing } from "framer-motion";
import { Leaf, Mountain, Droplets, Sun } from "lucide-react";
import heroImage from "@/assets/hero-resort.jpg";

const ease: Easing = [0.25, 0.1, 0.25, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease },
  }),
};

const features = [
  {
    icon: Leaf,
    title: "Carbon Neutral",
    desc: "100% renewable energy powered with net-zero carbon operations.",
  },
  {
    icon: Mountain,
    title: "Wilderness Immersion",
    desc: "20 new eco-cabins nestled into untouched forest canopy.",
  },
  {
    icon: Droplets,
    title: "Living Waters",
    desc: "Natural swimming pools and restored wetland sanctuaries.",
  },
  {
    icon: Sun,
    title: "Regenerative Dining",
    desc: "Farm-to-table cuisine from our permaculture gardens.",
  },
];

const Index = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <span className="font-serif text-2xl font-semibold tracking-wide text-foreground">
            Outercamp
          </span>
          <span className="text-sm font-sans tracking-widest uppercase text-muted-foreground">
            Est. 2024
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Outercamp eco-resort cabins surrounded by tropical forest at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="text-sm font-sans tracking-[0.3em] uppercase text-sand mb-6"
          >
            Coming 2026
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-sand-light leading-[1.1] mb-6"
          >
            Outercamp 2.0
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="font-sans text-lg md:text-xl text-sand/90 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            The next chapter of wilderness luxury. Where regenerative design
            meets radical comfort.
          </motion.p>
          <motion.a
            initial="hidden"
            animate="visible"
            custom={3}
            variants={fadeUp}
            href="#waitlist"
            className="inline-block px-8 py-4 border border-sand/40 text-sand font-sans text-sm tracking-widest uppercase hover:bg-sand-light/10 transition-colors duration-300"
          >
            Join the Waitlist
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-sand/30 mx-auto mb-2" />
          <p className="text-sand/50 text-xs tracking-widest uppercase font-sans">
            Scroll
          </p>
        </motion.div>
      </section>

      {/* Features */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4"
            >
              The Expansion
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground"
            >
              Designed by Nature
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                custom={i}
                variants={fadeUp}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                  <f.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
                  {f.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <motion.blockquote
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-light leading-snug italic">
              "We don't build on the land. We grow with it."
            </p>
            <cite className="block mt-8 font-sans text-sm tracking-widest uppercase not-italic opacity-70">
              — Outercamp Founding Principle
            </cite>
          </motion.blockquote>
        </div>
      </section>

      {/* Email Capture */}
      <section id="waitlist" className="py-24 md:py-32 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-xl mx-auto text-center"
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-sm font-sans tracking-[0.3em] uppercase text-muted-foreground mb-4"
            >
              Be First
            </motion.p>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6"
            >
              Join the Waitlist
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="font-sans text-muted-foreground mb-10 leading-relaxed"
            >
              Be among the first to experience Outercamp 2.0. Early access
              members receive priority booking and exclusive founding rates.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 bg-background rounded-lg border border-border"
              >
                <Leaf className="w-10 h-10 text-primary mx-auto mb-4" />
                <p className="font-serif text-2xl text-foreground mb-2">
                  You're on the list
                </p>
                <p className="text-sm text-muted-foreground">
                  We'll be in touch with exclusive updates.
                </p>
              </motion.div>
            ) : (
              <motion.form
                custom={3}
                variants={fadeUp}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  maxLength={255}
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-4 bg-background border border-border text-foreground font-sans text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-primary-foreground font-sans text-sm tracking-widest uppercase hover:bg-forest-light transition-colors duration-300"
                >
                  Notify Me
                </button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-foreground text-background/70">
        <div className="container mx-auto px-6 text-center">
          <p className="font-serif text-xl text-background mb-2">Outercamp</p>
          <p className="font-sans text-xs tracking-widest uppercase">
            © 2026 Outercamp. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
