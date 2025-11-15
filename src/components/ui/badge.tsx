import React from 'react'

export const Badge: React.FC<{children: React.ReactNode}> = ({children}) => (
  <span className="inline-flex px-2 py-1 rounded text-xs bg-emerald-100 text-emerald-800">{children}</span>
)
export default Badge
