import React from 'react'

export const Textarea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return <textarea {...props} className={`border rounded px-3 py-2 outline-none ${props.className || ''}`} />
}
export default Textarea
