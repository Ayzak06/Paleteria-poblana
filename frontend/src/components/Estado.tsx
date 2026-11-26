export function Cargando({ texto = 'Cargando...' }: { texto?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 py-20 text-cafe/70" role="status">
      <div className="size-10 animate-spin rounded-full border-4 border-rosa-suave border-t-rosa" />
      <p className="text-sm font-semibold">{texto}</p>
    </div>
  )
}

export function MensajeError({ mensaje }: { mensaje: string }) {
  return (
    <div className="mx-auto my-12 max-w-md rounded-2xl bg-rosa-suave px-6 py-6 text-center ring-1 ring-rosa/20">
      <p className="font-bold text-rosa">Algo salió mal</p>
      <p className="mt-1 text-sm text-cafe/80">{mensaje}</p>
    </div>
  )
}
