import { useState } from 'react'
import { useRouter } from 'next/router'

export default function LocaleSwitcher(){
  const router = useRouter()
  const { locale, locales, asPath } = router

  const switchLocale = (l) => {
    router.push(asPath, asPath, { locale: l })
  }

  return (
    <div className="flex items-center gap-2">
      {locales?.map((l) => (
        <button key={l} onClick={() => switchLocale(l)} className={`px-3 py-1 rounded ${locale===l? 'bg-blue-600 text-white' : 'bg-gray-100'}`}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
