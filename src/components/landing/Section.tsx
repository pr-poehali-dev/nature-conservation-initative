import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText, stats, cases, table, list, highlight, heroImage }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 overflow-hidden">
      {heroImage && (
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block"
          initial={{ opacity: 0, x: 60 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
          <img src={heroImage} alt="Женщины-юристы России" className="w-full h-full object-cover opacity-70" />
        </motion.div>
      )}
      {subtitle && (
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}

      <motion.h2
        className="text-3xl md:text-5xl lg:text-[4rem] xl:text-[5rem] font-bold leading-[1.1] tracking-tight max-w-4xl text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {content && (
        <motion.p
          className="text-lg md:text-xl max-w-2xl mt-4 text-neutral-400"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {content}
        </motion.p>
      )}

      {stats && (
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((s, i) => (
            <div key={i} className="border border-white/10 bg-white/5 rounded-xl p-4">
              <div className="text-3xl md:text-4xl font-bold text-white">{s.value}</div>
              <div className="text-sm text-neutral-400 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      )}

      {cases && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {cases.map((c, i) => (
            <div key={i} className="border border-white/10 bg-white/5 rounded-xl p-4">
              <div className="text-white font-semibold text-base">{c.name}</div>
              <div className="text-neutral-500 text-xs mt-0.5 mb-2">{c.role}</div>
              <div className="text-neutral-300 text-sm">{c.achievement}</div>
              {c.quote && (
                <div className="text-neutral-500 text-xs italic mt-2 border-l border-white/20 pl-3">"{c.quote}"</div>
              )}
            </div>
          ))}
        </motion.div>
      )}

      {list && !table && (
        <motion.ul
          className="mt-6 space-y-2 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {list.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm md:text-base">
              <span className="text-white/40 mt-0.5 shrink-0">—</span>
              {item}
            </li>
          ))}
        </motion.ul>
      )}

      {table && (
        <motion.div
          className="flex flex-col md:flex-row gap-6 mt-6 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex-1 border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="text-left text-neutral-400 font-medium px-4 py-2">Сфера</th>
                  <th className="text-right text-neutral-400 font-medium px-4 py-2">Доля женщин</th>
                </tr>
              </thead>
              <tbody>
                {table.map((row, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="text-neutral-300 px-4 py-2">{row.sphere}</td>
                    <td className="text-white font-semibold text-right px-4 py-2">{row.percent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {list && (
            <ul className="flex-1 space-y-2">
              {list.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-neutral-300 text-sm">
                  <span className="text-white/40 mt-0.5 shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      )}

      {highlight && (
        <motion.blockquote
          className="mt-6 max-w-2xl text-lg md:text-xl text-white/60 italic border-l-2 border-white/20 pl-6"
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {highlight}
        </motion.blockquote>
      )}

      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8"
        >
          <Button
            variant="outline"
            size="lg"
            className="text-[#C084FC] bg-transparent border-[#C084FC] hover:bg-[#C084FC] hover:text-black transition-colors"
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}