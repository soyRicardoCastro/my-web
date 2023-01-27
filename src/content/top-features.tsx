import { Moon, Flash, Devices, Magic } from '../components'

export const topFeature = [
  {
    title: "Themeable",
    description:
      "Provides a simple way to customize default themes, you can change the colors, fonts, breakpoints and everything you need.",
    icon: <Magic fill="#facc15" />,
  },
  {
    title: "Fast",
    description:
      "Avoids unnecessary styles props at runtime, making it more performant than other UI libraries.",
    icon: <Flash fill="#facc15" />,
  },
  {
    title: "Light & Dark UI",
    description:
      "Automatic dark mode recognition, NextUI automatically changes the theme when detects HTML theme prop changes.",
    icon: <Moon fill="#facc15" />,
  },
  {
    title: "Unique DX",
    description:
      "NextUI is fully-typed to minimize the learning curve, and provide the best possible developer experience.",
    icon: <Devices fill="#facc15" />,
  },
]
