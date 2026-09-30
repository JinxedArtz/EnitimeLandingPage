import { WordmarkEniwhere } from "./wordmark"

const COLUMNS = [
  {
    title: "Preços",
    links: ["Bronze", "Prata", "Ouro"],
  },
  {
    title: "Equipe",
    links: ["Sobre nós", "Carreiras", "Parceiros"],
  },
  {
    title: "Contato",
    links: ["Suporte", "Vendas", "WhatsApp"],
  },
]

const RESOURCES = ["Eniwhere", "Analytics*", "Enithing", "Enitime"]

export function SiteFooter() {
  return (
    <footer id="recursos" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <WordmarkEniwhere />
            <p className="mt-4 max-w-xs text-sm text-white/50">
              Agilidade, praticidade e os dados da papelada.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-white">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/50 transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold text-white">Recursos</h3>
            <ul className="mt-4 space-y-2.5">
              {RESOURCES.map((r) => (
                <li key={r}>
                  <a href="#" className="text-sm text-brand transition-colors hover:text-white">
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-white/40">© 2025 Enigma Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
