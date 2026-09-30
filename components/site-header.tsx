"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Wordmark } from "./wordmark"

const NAV = [
  { label: "início", href: "#inicio" },
  { label: "serviços", href: "#servicos" },
  { label: "sobre nós", href: "#sobre" },
  { label: "outros", href: "#recursos" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#inicio" className="shrink-0" aria-label="Enitime, por Enigma Solutions">
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#cadastro"
            className="rounded-lg bg-brand-soft px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-brand"
          >
            Cadastre-se
          </a>
          <a
            href="#entrar"
            className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Entrar
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-ink md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4" aria-label="Navegação móvel">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm text-foreground/80 hover:bg-black/5"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <a
                href="#cadastro"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg bg-brand-soft px-4 py-2 text-center text-sm font-medium text-ink"
              >
                Cadastre-se
              </a>
              <a
                href="#entrar"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg bg-ink px-4 py-2 text-center text-sm font-medium text-white"
              >
                Entrar
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
