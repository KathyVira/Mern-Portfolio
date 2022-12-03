import React from 'react'

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-white z-[1000]">
      <div className="flex gap-5 text-6xl font-semibold sm:text-3xl">
        <h2 className="text-secondary k">Kathy</h2>
        <h2 className="text-primary v">Vira</h2>
        <h2 className="text-black t">Tech</h2>
      </div>
    </div>
  )
}

export default Loader
