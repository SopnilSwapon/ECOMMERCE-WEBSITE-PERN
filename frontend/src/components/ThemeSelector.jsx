import { PaletteIcon } from 'lucide-react'
import React from 'react'
import { THEMES } from '../constant'

export default function ThemeSelector() {
    const theme = 'forest'
  return (
    <div className='dropdown dropdown-end'>
        {/* dropdown trigger */}
        <button tabIndex={0} className='btn btn-ghost btn-circle'>
         <PaletteIcon className='size-5'/>
        </button>
        <div tabIndex={0} className='dropdown-content mt-2 p-1 shadow-2xl bg-base-200 backdrop-blur-lg rounded-2xl w-56 border border-base-content/10'>
         {THEMES.map(themeOpption => (
            <button key={themeOpption.name} className={`
            w-full py-3 rounded-xl flex items-center gap-3 transition-colors 
            ${theme === themeOpption.name ? "bg-primary/10 text-primary" : "hover:bg-base-content/5"}`}>
    <PaletteIcon className='size-5'/>
    <span className='text-sm font-medium'>{themeOpption.label}</span>
            </button>
         ))}
        </div>
    </div>
  )
}
