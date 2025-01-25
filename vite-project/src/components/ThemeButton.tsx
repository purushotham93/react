import { useTheme } from "../context/ThemeContext"

function ThemeButton () {
    const {isDarkMode, togggleTheme} = useTheme()
    return (
        <button onClick={togggleTheme}>
        {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    )
}
export default ThemeButton;