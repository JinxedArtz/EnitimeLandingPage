import { Check, CheckCheck, Package, Zap } from "lucide-react"

export function ChatPreview() {
  return (
    <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_20px_60px_-25px_rgba(30,60,120,0.35)]">
      {/* header */}
      <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
            <Zap className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink">Enitime</p>
            <p className="flex items-center gap-1.5 text-xs text-foreground/50">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              online agora
            </p>
          </div>
        </div>
        <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-medium text-brand-strong">
          Pedido #4821
        </span>
      </div>

      {/* messages */}
      <div className="space-y-3 bg-[#f6f8fd] px-5 py-6">
        <Bubble side="left" meta="Reparo Tech · 14:02">
          Preciso de 2 telas OLED para Galaxy S22. Alguém tem em estoque hoje?
        </Bubble>

        <Bubble side="right" meta="Enitime" bot>
          <strong>🔔Nova Oferta Recebida!</strong> <br />
          Loja: Peças prime <br />
        </Bubble>

        <div className="ml-auto w-full max-w-[19rem] rounded-2xl rounded-tr-sm border border-brand/40 bg-white p-3 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-soft text-brand-strong">
              <Package className="h-4 w-4" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink">Peças Prime</p>
              <p className="text-xs text-foreground/50">2 un. · entrega em 40 min</p>
            </div>
            <span className="ml-auto font-display text-base font-extrabold text-ink">R$ 318</span>
          </div>
        </div>

        <Bubble side="left" meta="Reparo Tech · 14:03" read>
          Fechado! Confirma o pedido.
        </Bubble>
      </div>

      {/* input */}
      <div className="flex items-center gap-3 border-t border-black/5 px-5 py-4">
        <div className="flex-1 rounded-full bg-[#f1f4fb] px-4 py-2.5 text-sm text-foreground/40">
          Escreva uma mensagem…
        </div>
        <button
          type="button"
          className="flex h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-white"
        >
          Enviar
        </button>
      </div>
    </div>
  )
}

function Bubble({
  side,
  meta,
  bot,
  read,
  children,
}: {
  side: "left" | "right"
  meta: string
  bot?: boolean
  read?: boolean
  children: React.ReactNode
}) {
  const isRight = side === "right"
  return (
    <div className={`flex max-w-[19rem] flex-col gap-1 ${isRight ? "ml-auto items-end" : "items-start"}`}>
      <div
        className={[
          "rounded-2xl px-3.5 py-2.5 text-sm leading-snug",
          isRight
            ? "rounded-tr-sm bg-ink text-white"
            : "rounded-tl-sm border border-black/5 bg-white text-ink",
        ].join(" ")}
      >
        {children}
      </div>
      <span className="flex items-center gap-1 px-1 text-[11px] text-foreground/45">
        {bot && <Zap className="h-3 w-3 text-brand-strong" />}
        {meta}
        {read && <CheckCheck className="h-3.5 w-3.5 text-brand-strong" />}
        {!read && !bot && <Check className="h-3.5 w-3.5" />}
      </span>
    </div>
  )
}
