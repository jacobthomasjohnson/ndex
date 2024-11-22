import Link from "next/link"

export function NavMenuLink({ text, href }) {
      return (
            <Link href={href}>
                  <li className={`transition-all duration-300 py-8 border-b-2 border-[#202020] uppercase hover:text-[#e4e4e4] hover:cursor-pointer hover:border-[#282828]`}>{text}</li>
            </Link>
      )
}