import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const badges = (item) => [
  item.type,
  item.area,
  item.location,
];

const PropertyCard = ({ item, onOpen }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5 }}
    className="group relative rounded-xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/10 transition-colors"
  >
    <div className="aspect-[16/10] w-full overflow-hidden">
      <img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
    </div>
    <div className="p-5 text-white">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-medium tracking-tight">{item.title}</h3>
        <span className="text-xs rounded-full border border-white/15 px-3 py-1 text-white/70">{item.price}</span>
      </div>
      <p className="mt-2 text-sm text-white/60 line-clamp-2">{item.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {badges(item).map((b) => (
          <span key={b} className="text-xs rounded-full border border-white/15 px-2.5 py-1 text-white/60">
            {b}
          </span>
        ))}
      </div>
      <button
        onClick={() => onOpen(item)}
        className="mt-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors"
      >
        View Details
      </button>
    </div>
  </motion.div>
);

const FilterBar = ({ filters, setFilters }) => {
  const update = (k, v) => setFilters((f) => ({ ...f, [k]: v }));
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="text-white/70 text-sm">Refine Selection</div>
      <div className="flex flex-wrap gap-3">
        <select
          value={filters.type}
          onChange={(e) => update('type', e.target.value)}
          className="bg-black text-white/80 border border-white/20 rounded-md px-3 py-2"
        >
          <option value="">All Types</option>
          <option value="Plot">Plot</option>
          <option value="Commercial">Commercial</option>
          <option value="Institutional">Institutional</option>
          <option value="Mixed-use">Mixed-use</option>
          <option value="Retail">Retail</option>
          <option value="Office">Office</option>
        </select>
        <select
          value={filters.location}
          onChange={(e) => update('location', e.target.value)}
          className="bg-black text-white/80 border border-white/20 rounded-md px-3 py-2"
        >
          <option value="">All Locations</option>
          <option>Medical College Road</option>
          <option>Kutchery Road</option>
          <option>Civil Lines</option>
          <option>Near Gorakhpur University</option>
          <option>Pardihat Road</option>
          <option>Colonelganj Road</option>
          <option>Golghar</option>
        </select>
        <select
          value={filters.sort}
          onChange={(e) => update('sort', e.target.value)}
          className="bg-black text-white/80 border border-white/20 rounded-md px-3 py-2"
        >
          <option value="">Sort</option>
          <option value="area-asc">Area: Low to High</option>
          <option value="area-desc">Area: High to Low</option>
        </select>
      </div>
    </div>
  );
};

const PropertyModal = ({ open, item, onClose }) => {
  if (!open || !item) return null;
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="relative max-w-5xl w-[92vw] bg-black border border-white/10 rounded-2xl overflow-hidden"
      >
        <div className="grid md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
            <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
          </div>
          <div className="p-6 md:p-8 text-white">
            <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-1 text-white/60">{item.location}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="text-xs rounded-full border border-white/15 px-2.5 py-1 text-white/60">{item.type}</span>
              <span className="text-xs rounded-full border border-white/15 px-2.5 py-1 text-white/60">{item.area}</span>
              <span className="text-xs rounded-full border border-white/15 px-2.5 py-1 text-white/60">{item.price}</span>
            </div>
            <p className="mt-5 text-white/70 leading-relaxed">{item.description}</p>
            <div className="mt-5">
              <h4 className="text-sm uppercase tracking-widest text-white/50">Highlights</h4>
              <ul className="mt-2 grid grid-cols-2 gap-2 text-sm text-white/70">
                {item.features.map((f) => (
                  <li key={f} className="">• {f}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a href="#" className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors">Download Brochure</a>
              <a href="#contact" className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm hover:bg-white hover:text-black transition-colors">Schedule a Visit</a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm uppercase tracking-widest text-white/50">Map</h4>
              <div className="mt-2 aspect-video w-full overflow-hidden rounded-lg border border-white/10">
                <iframe
                  title="map"
                  src={item.map}
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
        <button onClick={onClose} className="absolute top-3 right-3 text-white/60 hover:text-white">✕</button>
      </motion.div>
    </div>
  );
};

const PropertyGrid = () => {
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState({ type: '', location: '', sort: '' });
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    fetch('/properties.json')
      .then((r) => r.json())
      .then(setItems)
      .catch(() => setItems([]));
  }, []);

  const filtered = useMemo(() => {
    let out = [...items];
    if (filters.type) out = out.filter((i) => i.type === filters.type);
    if (filters.location) out = out.filter((i) => i.location === filters.location);

    if (filters.sort?.startsWith('area')) {
      const dir = filters.sort.endsWith('asc') ? 1 : -1;
      out.sort((a, b) => (a.areaSqft - b.areaSqft) * dir);
    }
    return out;
  }, [items, filters]);

  const onOpen = (item) => {
    setActive(item);
    setOpen(true);
  };

  return (
    <section id="properties" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-sm tracking-widest uppercase text-white/50">Curated Portfolio</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">Featured Listings</h2>
          </div>
          <FilterBar filters={filters} setFilters={setFilters} />
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item) => (
              <PropertyCard key={item.id} item={item} onOpen={onOpen} />
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {open && (
            <PropertyModal open={open} item={active} onClose={() => setOpen(false)} />)
          }
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PropertyGrid;
