import React from 'react'

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'ghost'|'outline' }> = ({ children, variant, className='', ...props }) => {
  const base = 'px-4 py-2 rounded inline-flex items-center justify-center'
  const vclass = variant === 'ghost' ? 'bg-transparent' : variant === 'outline' ? 'border' : 'bg-emerald-600 text-white'
  return <button {...props} className={`${base} ${vclass} ${className}`}>{children}</button>
}

export default Button
