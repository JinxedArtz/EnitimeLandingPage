import { ArrowRight } from "lucide-react"
import { ChatPreview } from "./chat-preview"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#cddcfa] via-[#e6eefc] to-white"
    >
      <div className="mx-auto max-w-6xl px-5 pt-16 pb-24 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-strong/20 bg-white/60 px-3 py-1 text-xs font-medium text-brand-strong">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-strong" />
            Um recurso do ecossistema ENIWHERE
          </span>

          <h1 className="font-antonio mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl md:text-7xl">
            Prioridade
            <br />
            otimização
            <br />
            <span className="text-brand-strong">conexões + rápidas</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-pretty text-base text-foreground/70 sm:text-lg">
            Otimize seus processos e economize tempo (e dinheiro) conectando sua loja de reparo aos melhores
            fornecedores de peças através do nosso chatbot.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#cadastro"
              className="group inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3.5 text-base font-medium text-white transition-opacity hover:opacity-90"
            >
              Comece já!
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center gap-2 rounded-xl border border-ink/15 bg-white/70 px-6 py-3.5 text-base font-medium text-ink transition-colors hover:bg-white"
            >
              Como funciona
            </a>
          </div>
        </div>

        <div className="relative mt-16">
          <ChatPreview />
        </div>
      </div>
    </section>
  )
}
