import React from 'react'
export const Stat: React.FC<{value: React.ReactNode; label: string}> = ({value,label}) => (
  <div className="rounded-2xl bg-white p-4 shadow text-center">
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-slate-500">{label}</div>
  </div>
)
export default Stat
