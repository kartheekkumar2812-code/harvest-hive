import React, { useState, ReactNode, createContext, useContext } from 'react'
import { X } from 'lucide-react'

interface DialogContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const DialogContext = createContext<DialogContextType | undefined>(undefined)

interface DialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: ReactNode
}

interface DialogTriggerProps {
  children: ReactNode
  asChild?: boolean
}

interface DialogContentProps {
  children: ReactNode
  className?: string
}

export const Dialog: React.FC<DialogProps> = ({ open: controlledOpen, onOpenChange, children }) => {
  const [internalOpen, setInternalOpen] = useState(false)
  
  // Use controlled open if provided, otherwise use internal state
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen
  
  const setOpen = (newOpen: boolean) => {
    // If controlled, let parent handle state
    if (controlledOpen !== undefined) {
      onOpenChange?.(newOpen)
    } else {
      // If uncontrolled, manage internal state
      setInternalOpen(newOpen)
      onOpenChange?.(newOpen)
    }
  }

  return (
    <DialogContext.Provider value={{ open: isOpen, setOpen }}>
      {children}
    </DialogContext.Provider>
  )
}

const useDialog = () => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('Dialog components must be used within a Dialog')
  }
  return context
}

export const DialogTrigger: React.FC<DialogTriggerProps> = ({ children, asChild }) => {
  const { setOpen } = useDialog()
  
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: (e: any) => {
        e.preventDefault()
        setOpen(true)
        if (children.props.onClick) {
          children.props.onClick(e)
        }
      }
    } as any)
  }
  
  return (
    <button onClick={() => setOpen(true)}>
      {children}
    </button>
  )
}

export const DialogContent: React.FC<DialogContentProps> = ({ children, className = '' }) => {
  const { open, setOpen } = useDialog()

  // Only render if explicitly open
  if (!open) {
    return null
  }

  return (
    <>
      <div 
        className="fixed inset-0 z-50 bg-black/50" 
        onClick={() => setOpen(false)} 
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <div 
          className={`bg-white rounded-lg shadow-lg p-6 max-h-[90vh] overflow-auto pointer-events-auto relative ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            aria-label="Close dialog"
          >
            <X className="size-5" />
          </button>
          {children}
        </div>
      </div>
    </>
  )
}

export const DialogHeader: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="mb-4">{children}</div>
)

export const DialogTitle: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="text-lg font-semibold mb-2">{children}</div>
)

export default Dialog
