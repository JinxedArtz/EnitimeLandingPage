import { Check } from "lucide-react"

const POINTS = [
  "Feito para o dia a dia de quem conserta eletrônicos",
  "Rede crescente de fornecedores verificados",
  "Suporte da Enigma Solutions",
]

export function About() {
  return (
    <section id="sobre" className="bg-[#eef3fc]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-strong">Sobre nós</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
            Menos tempo procurando, mais tempo consertando
          </h2>
          <p className="mt-4 text-foreground/70">
            O Enitime nasceu para resolver o maior gargalo entre lojas de reparo: encontrar a peça certa, pelo
            melhor preço, no menor tempo. Pensando nisso, automatizamos a ponte entre quem conserta e quem fornece, para que
            você foque no que faz de melhor.
          </p>

          <ul className="mt-6 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground/80">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-strong text-white">
                  <Check className="h-3 w-3" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-3xl border border-black/5 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(30,60,120,0.35)]">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#f7f9fd] p-5">
              <p className="font-display text-3xl font-extrabold text-ink">99%(!)</p>
              <p className="mt-1 text-sm text-foreground/60">de pedidos atendidos no mesmo dia</p>
            </div>
            <div className="rounded-2xl bg-ink p-5 text-white">
              <p className="font-display text-3xl font-extrabold">80%</p>
              <p className="mt-1 text-sm text-white/70">de tempo economizado entre pedidos</p>
            </div>
            <div className="col-span-2 rounded-2xl bg-brand-soft p-5">
              <p className="font-display text-3xl font-extrabold text-ink">4,9/5</p>
              <p className="mt-1 text-sm text-ink/70">avaliação média das lojas parceiras</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
