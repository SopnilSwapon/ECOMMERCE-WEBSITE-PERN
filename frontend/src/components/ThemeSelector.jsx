import { PaletteIcon } from 'lucide-react'
import { THEMES } from '../constant'
import { useThemeStore } from '../pages/useThemeStore'

export default function ThemeSelector() {
  const {theme, setTheme} = useThemeStore();
  console.log(theme, 'check theme')
  return (
    <div className='dropdown dropdown-end'>
        {/* dropdown trigger */}
        <button tabIndex={0} className='btn btn-ghost btn-circle'>
         <PaletteIcon className='size-5'/>
        </button>
        <div tabIndex={0} className='dropdown-content mt-2 p-1 shadow-2xl bg-base-200 backdrop-blur-lg rounded-2xl w-56 border border-base-content/10'>
         {THEMES.map(themeOpption => (
            <button onClick={() =>setTheme(themeOpption.name)} key={themeOpption.name} className={`
            w-full py-3 rounded-xl flex items-center gap-3 transition-colors 
            ${theme === themeOpption.name ? "bg-primary/10 text-primary" : "hover:bg-base-content/5"}`}>
    <PaletteIcon className='size-5'/>
    <span className='text-sm font-medium'>{themeOpption.label}</span>
    {/* Theme Preview colors */}
     {/* THEME PREVIEW COLORS */}
            <div className="ml-auto flex gap-1">
              {themeOpption.colors.map((color, i) => (
                <span key={i} className="size-2 rounded-full" style={{ backgroundColor: color }} />
              ))}
            </div>
            </button>
         ))}
        </div>
    </div>
  )
}
