import Link from "next/link"
import Image from "next/image"
import logoImage from "../../public/images/logo.png"

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <Link href="/">
            <Image src={logoImage} alt="logo" />
          </Link>
          <ul>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
