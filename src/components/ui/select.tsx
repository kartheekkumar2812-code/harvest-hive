import React from 'react'

export const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement> & {children?: React.ReactNode}> = ({children, ...props}) => (
  <select {...props} className="border rounded px-2 py-2">{children}</select>
)

export const SelectTrigger = (props:any) => <div {...props} />
export const SelectValue = (props:any) => <div {...props} />
export const SelectContent = (props:any) => <div {...props} />
export const SelectItem = (props:any) => <option {...props} />

export default Select
