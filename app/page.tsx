import Link from 'next/link'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800 dark:bg-zinc-900 dark:text-white transition-colors duration-300">
      <header className="flex justify-between items-center px-8 py-6 shadow-sm">
        <h1 className="text-2xl font-bold">PolyAI</h1>
        <Link
          href="/login"
          className="inline-block px-4 py-2 rounded-lg font-semibold transition
              dark:bg-white dark:hover:bg-blue-400 dark:text-zinc-900"
        >
          Iniciar sesión
        </Link>
      </header>


<main className="flex-1 flex flex-col md:flex-row items-center justify-start px-8 py-12 gap-90">
  <div className="max-w-xl">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
      Prueba PolyAI para trabajar
    </h2>
    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
      Entrenamos un modelo denominado PolyAI, una inteligencia artificial capaz de ayudarte como asistente virtual en cualquier idioma, brindando respuestas rápidas, precisas y personalizadas para facilitar tu trabajo y comunicación.
    </p>
    <Link
      href="/login"
      className="inline-block px-6 py-3 rounded-lg font-semibold transition
        dark:bg-white dark:hover:bg-blue-400 dark:text-zinc-900"
    >
      Empieza ahora
    </Link>
  </div>

  <div className="w-full max-w-md">
    <img
      src="/assets/Polyai.png"
      alt="PolyAI"
      className="w-full object-contain rounded-xl border-4 border-blue-400 shadow-md"
    />
  </div>
</main>
    </div>
  )
}


