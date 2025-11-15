import React from 'react'
export const Separator: React.FC<{className?: string}> = ({className=''}) => <div className={`w-full h-px bg-slate-200 ${className}`} />
export default Separator
