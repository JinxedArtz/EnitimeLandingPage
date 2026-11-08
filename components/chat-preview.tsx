import { Check, CheckCheck, Package, Bot } from "lucide-react"

export function ChatPreview() {
  return (
    <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_20px_60px_-25px_rgba(30,60,120,0.35)]">
      {/* header */}
      <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
            <Bot className="h-4 w-4" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink">Enitime</p>
            <p className="flex items-center gap-1.5 text-xs text-foreground/50">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              bot
            </p>
          </div>
        </div>
      </div>

      {/* messages */}
      <div className="space-y-3 bg-[#f6f8fd] px-5 py-6">
        <Bubble side="right" meta="Reparo Tech · 14:02">
          Tela OLED para Samsung Galaxy S22.
        </Bubble>

        <Bubble side="left" meta="Enitime" bot>
          <strong>🔔Nova Oferta Recebida!</strong> <br />
          Loja: Peças Prime <br />
          Valor: R$318,00
        </Bubble>

        <OfferBubble side="left" />

        <Bubble side="right" meta="Reparo Tech · 14:03" read>
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
        {bot && <Bot className="h-3 w-3 text-brand-strong" />}
        {meta}
        {read && <CheckCheck className="h-3.5 w-3.5 text-brand-strong" />}
        {!read && !bot && <Check className="h-3.5 w-3.5" />}
      </span>
    </div>
  )
}

function OfferBubble({ side }: { side: "left" | "right" }) {
  const isRight = side === "right"

  return (
    <div
      className={`flex w-full max-w-[19rem] flex-col ${
        isRight ? "ml-auto items-end" : "items-start"
      }`}
    >
      <div
        className={[
          "w-full rounded-2xl border border-brand/40 bg-white p-3 shadow-sm",
          isRight ? "rounded-tr-sm" : "rounded-tl-sm",
        ].join(" ")}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand-strong">
            <Package className="h-4 w-4" />
          </span>

          <div className="leading-tight">
            <p className="text-sm font-semibold text-ink">
              Aceitar oferta de R$318,00?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}