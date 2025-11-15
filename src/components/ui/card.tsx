import React from 'react'

export const Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className='', ...props }) => (
  <div {...props} className={`bg-white rounded-2xl shadow p-4 ${className}`}>{children}</div>
)

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className='', ...props }) => (
  <div {...props} className={`mb-2 ${className}`}>{children}</div>
)
export const CardTitle: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className='', ...props }) => (
  <div {...props} className={`font-semibold ${className}`}>{children}</div>
)
export const CardDescription: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className='', ...props }) => (
  <div {...props} className={`text-sm text-slate-500 ${className}`}>{children}</div>
)
export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className='', ...props }) => (
  <div {...props} className={`${className}`}>{children}</div>
)

export default Card
