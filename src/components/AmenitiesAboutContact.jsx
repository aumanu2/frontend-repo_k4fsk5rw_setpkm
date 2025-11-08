import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Shield, Zap, MapPin, Phone, Mail } from 'lucide-react';

const Counter = ({ value, label }) => (
  <div className="text-center">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-4xl md:text-5xl font-semibold"
    >
      {value}+
    </motion.div>
    <div className="mt-2 text-white/60">{label}</div>
  </div>
);

const Amenities = () => (
  <section className="bg-black text-white">
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="grid md:grid-cols-4 gap-8 items-center">
        <div className="md:col-span-2">
          <p className="text-sm tracking-widest uppercase text-white/50">Highlights</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Infrastructure & Assurance</h2>
          <p className="mt-5 text-white/70 max-w-xl">Wide road access, power-ready plots, and secure legal frameworks. Every site is vetted for compliance, access, and scalability.</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 text-white/80"><Zap size={18}/> Power Ready</div>
            <div className="flex items-center gap-3 text-white/80"><Shield size={18}/> 24/7 Security</div>
            <div className="flex items-center gap-3 text-white/80"><Building2 size={18}/> Ready Possession</div>
            <div className="flex items-center gap-3 text-white/80"><MapPin size={18}/> Prime Arterials</div>
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-3 gap-6">
          <Counter value={50} label="Acres curated" />
          <Counter value={12} label="Prime corridors" />
          <Counter value={30} label="Corporate clients" />
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="bg-black text-white">
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm tracking-widest uppercase text-white/50">About</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">A Corporate Standard of Excellence</h2>
          <p className="mt-5 text-white/70 leading-relaxed">We specialize in premium plots and commercial assets across Gorakhpur’s most strategic corridors. Our portfolio is handpicked for institutions and enterprises that value access, compliance, and brand presence. With a discreet, client-first approach, we deliver opportunities that align with long-term vision.</p>
        </div>
        <div className="rounded-xl overflow-hidden border border-white/10 aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate architecture"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="bg-black text-white">
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <p className="text-sm tracking-widest uppercase text-white/50">Contact</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Arrange a Private Showing</h2>
          <p className="mt-5 text-white/70">Office Address: Gorakhnath, Gorakhpur 273001</p>
          <div className="mt-4 space-y-2 text-white/80">
            <div className="flex items-center gap-3"><Phone size={18}/> +91 8726884022</div>
            <div className="flex items-center gap-3"><Mail size={18}/> info@corporateproperty.com</div>
          </div>

          <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg border border-white/10">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Gorakhnath%2C%20Gorakhpur%20273001&output=embed"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <form className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-white/60">Name</label>
              <input className="mt-1 w-full rounded-md bg-black border border-white/20 px-3 py-2 text-white outline-none focus:border-white/40 transition" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm text-white/60">Phone</label>
              <input className="mt-1 w-full rounded-md bg-black border border-white/20 px-3 py-2 text-white outline-none focus:border-white/40 transition" placeholder="(+91)" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-white/60">Email</label>
              <input type="email" className="mt-1 w-full rounded-md bg-black border border-white/20 px-3 py-2 text-white outline-none focus:border-white/40 transition" placeholder="you@company.com" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-white/60">Message</label>
              <textarea rows="4" className="mt-1 w-full rounded-md bg-black border border-white/20 px-3 py-2 text-white outline-none focus:border-white/40 transition" placeholder="Tell us about your requirement" />
            </div>
          </div>
          <button type="button" className="mt-6 w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm hover:bg-white hover:text-black transition-colors">Submit Inquiry</button>
          <p className="mt-3 text-xs text-white/50">This is a design prototype. Form submission is not wired to a backend.</p>
        </form>
      </div>
    </div>
  </section>
);

export { Amenities, About, Contact };
