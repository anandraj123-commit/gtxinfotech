import { ArrowRight, Code2, Sparkles } from "lucide-react";

export const metadata = {
  title: "Hello World | GTX Infotech",
};

export default function HelloWorldPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-slate-950 px-6 py-24 text-white sm:px-10 lg:px-16">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_20%,rgba(20,184,166,0.2),transparent_30%),radial-gradient(circle_at_82%_72%,rgba(59,130,246,0.18),transparent_34%)]" />
      <div className="absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-teal-400/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 -z-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

      <section className="mx-auto flex min-h-[calc(100vh-12rem)] max-w-6xl items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-4 py-2 text-sm font-medium text-teal-200">
              <Sparkles size={16} />
              Welcome to GTX Infotech
            </div>

            <p className="mb-4 font-mono text-sm uppercase tracking-[0.28em] text-teal-300">
              The beginning of something great
            </p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Hello, <span className="text-teal-300">World.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Ideas become thoughtful digital experiences here. Let&apos;s create a product that feels clear, useful, and unmistakably yours.
            </p>

            <a
              href="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-teal-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-200 focus:ring-offset-2 focus:ring-offset-slate-950"
            >
              Start a conversation
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7">
            <div className="mb-8 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 font-mono text-xs text-slate-400">hello-world.tsx</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 font-mono text-sm leading-7 sm:p-7 sm:text-base">
              <p><span className="text-violet-300">const</span> <span className="text-sky-300">message</span> = <span className="text-emerald-300">&quot;Hello, World!&quot;</span>;</p>
              <p className="mt-4 text-slate-400">{'// Build. Learn. Grow.'}</p>
              <p><span className="text-violet-300">export default function</span> <span className="text-sky-300">App</span>() {'{'}</p>
              <p className="pl-5"><span className="text-violet-300">return</span> &lt;<span className="text-teal-300">h1</span>&gt;{'{message}'}&lt;/<span className="text-teal-300">h1</span>&gt;;</p>
              <p>{'}'}</p>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-teal-400/15 text-teal-300"><Code2 size={18} /></span>
              Ready for your next idea.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
