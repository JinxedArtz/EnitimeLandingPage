const STEPS = [
  {
    n: "01",
    title: "Descreva a peça",
    desc: "Envie o modelo do aparelho e a peça que precisa direto no chat.",
  },
  {
    n: "02",
    title: "Receba cotações",
    desc: "O Enitime consulta a rede de fornecedores locais e traz preço, estoque e prazo de entrega.",
  },
  {
    n: "03",
    title: "Compare e escolha",
    desc: "Analise as ofertas lado a lado e selecione a melhor combinação de preço e rapidez.",
  },
  {
    n: "04",
    title: "Feche o pedido",
    desc: "Confirme pelo chat e acompanhe a entrega. Todo o histórico fica salvo para você.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-gradient-to-b from-white to-[#eef3fc]">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-strong">Como funciona</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
            Da busca ao pedido em 4 passos
          </h2>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-4">
          {STEPS.map((s) => (
            <li key={s.n} className="relative rounded-2xl border border-black/5 bg-white p-6">
              <span className="font-display text-4xl font-extrabold text-brand">{s.n}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/65">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
