import Link from "next/link"
import Image from "next/image"
import { Search, Phone, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getSiteConfig } from "@/lib/data-utils"

export default function SiteHeader() {
  const { navigation, contact } = getSiteConfig()

  return (
    <header className="border-b bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Intex Management Services Logo"
              width={150}
              height={60}
              className="h-12 w-auto"
            />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navigation.top.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-sm font-medium hover:text-blue-700 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-8 rounded-md border border-gray-300"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col items-end">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4 text-blue-700" />
                <span className="text-sm font-medium">{contact.phone}</span>
              </div>
              <Link href={`mailto:${contact.email}`} className="text-sm text-blue-700 hover:underline">
                {contact.email}
              </Link>
            </div>
            <Button variant="outline" className="hidden md:flex">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 py-4">
          {navigation.main.map((item, index) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm font-medium ${
                index === 0 ? "bg-blue-700 text-white px-4 py-2 rounded-md" : "hover:text-blue-700 transition-colors"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
