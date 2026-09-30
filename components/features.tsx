import { Bot, Clock, ShieldCheck, TrendingDown, Boxes, MessagesSquare } from "lucide-react"

const FEATURES = [
  {
    icon: Bot,
    title: "Cotação automática",
    desc: "Descreva a peça e o chatbot busca disponibilidade e preço em toda a rede de fornecedores em segundos.",
  },
  {
    icon: Clock,
    title: "Pronta-entrega",
    desc: "Priorize fornecedores próximos com estoque imediato e receba a peça em horas.",
  },
  {
    icon: TrendingDown,
    title: "Melhor preço",
    desc: "Compare ofertas lado a lado e feche pelo menor custo sem sair da conversa.",
  },
  {
    icon: Boxes,
    title: "Estoque em tempo real",
    desc: "Fornecedores sincronizam o catálogo para você nunca pedir uma peça que já acabou.",
  },
  {
    icon: ShieldCheck,
    title: "Negociação segura",
    desc: "Pedidos, confirmações e histórico registrados em um só lugar, com rastreio completo.",
  },
  {
    icon: MessagesSquare,
    title: "Tudo pelo chat",
    desc: "Sem planilhas ou ligações. Todo o fluxo acontece em uma única conversa limpa e inteligente.",
  },
]

export function Features() {
  return (
    <section id="servicos" className="bg-white">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-strong">Serviços</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
            Tudo que sua loja precisa para achar a peça certa
          </h2>
          <p className="mt-4 text-foreground/70">
            O Enitime conecta lojas de reparo de eletrônicos a fornecedores de peças e cuida de cada etapa da
            conversa — da busca ao pedido confirmado.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-black/5 bg-[#f7f9fd] p-6 transition-colors hover:border-brand/40 hover:bg-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-white transition-colors group-hover:bg-brand-strong">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
