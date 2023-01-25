'use client'

import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'

import { SunIcon, MoonIcon } from '.'

const ChangeTheme = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  return (
    <Switch
      checked={isDark}
      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
      color="primary"
      size="md"
      iconOff={<SunIcon filled />}
      iconOn={<MoonIcon filled />}
    />
  )
}

export default ChangeTheme