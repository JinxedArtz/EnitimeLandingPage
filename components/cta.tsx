import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="cadastro" className="bg-[#eef3fc]">
      <div className="mx-auto max-w-6xl px-5 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-brand-strong/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-brand/20 blur-3xl"
          />
          <h2 className="relative font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
            Pronto para conexões mais rápidas?
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-white/70">
            Cadastre sua loja e comece a cotar peças com toda a rede de fornecedores hoje mesmo.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#cadastro"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-base font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              Comece já!
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#entrar"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              Já tenho conta
            </a>
          </div>

          {/* <p className="relative mt-8 text-sm text-white/50">
            disponível a partir do{" "}
            <a href="#recursos" className="font-semibold text-white underline underline-offset-4">
              ENIWHERE BRONZE
            </a>
            *{" "}
            <a href="#recursos" className="font-semibold text-brand underline underline-offset-4">
              Saiba mais
            </a>
          </p> */}
        </div>
      </div>
    </section>
  )
}
