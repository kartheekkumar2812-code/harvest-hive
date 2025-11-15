import React from 'react'
export const Tabs: React.FC<{children: React.ReactNode, defaultValue?: string, className?: string}> = ({children, className=''}) => <div className={className}>{children}</div>
export const TabsList = (p:any) => <div {...p} />
export const TabsTrigger = (p:any) => <button {...p} />
export const TabsContent = (p:any) => <div {...p} />
export default Tabs
