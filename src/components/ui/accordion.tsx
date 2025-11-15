import React from 'react'
export const Accordion: React.FC<any> = ({children}) => <div>{children}</div>
export const AccordionItem: React.FC<any> = ({children}) => <div>{children}</div>
export const AccordionTrigger: React.FC<any> = ({children}) => <div className="font-semibold">{children}</div>
export const AccordionContent: React.FC<any> = ({children}) => <div className="text-sm text-slate-600">{children}</div>
export default Accordion
