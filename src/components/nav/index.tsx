import { Navbar, Text, Link, Image } from '@nextui-org/react'
import { usePathname } from 'next/navigation'

const NavLink = ({ text, path, ...props }) => {
  const pathname = usePathname()
  return (
    <Navbar.CollapseItem
      isActive={pathname === path}
      activeColor="primary"
      {...props}
    >
      <Link
        href={path}
        color="inherit"
      >
        {text}
      </Link>
    </Navbar.CollapseItem>
  )
}

export default function Nav () {
  const pathname = usePathname()

  return (
    <Navbar
      isBordered
      variant="sticky"
    >
      <Navbar.Brand>
        <Image showSkeleton src='/logo.png' alt='Logo' width={35} height={35} />
        <Text css={{ marginLeft: "$5" }} size="$xl" showIn="xs" b color="inherit">
          RC
        </Text>
        <Text css={{ marginLeft: "$5" }} size="$xl" b color="inherit" hideIn="xs">
          Ricardo Castro
        </Text>
      </Navbar.Brand>

      <Navbar.Content
        enableCursorHighlight
        activeColor="primary"
        hideIn="xs"
        variant="underline-rounded"
      >
        <Navbar.Link isActive={pathname === '/'} href="/">Home</Navbar.Link>
        <Navbar.Link isActive={pathname === '/projects'} href="/projects">Projects</Navbar.Link>
        <Navbar.Link isActive={pathname === '/contact'} href="/contact">Contact</Navbar.Link>
      </Navbar.Content>

      <Navbar.Content showIn="xs">
        <Navbar.Toggle aria-label="toggle navigation" />
      </Navbar.Content>

      <Navbar.Collapse>
        <NavLink path='/' text='Home' />
        <NavLink path='/projects' text='Projects' />
        <NavLink path='/contact' text='Contact' />
      </Navbar.Collapse>
    </Navbar>
  )
}
