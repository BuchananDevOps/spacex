import Link from "next/link"
import { useState } from "react"

import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid"
import clsx from "clsx"

import { type Category, routes } from "@/lib/routes"

export const CategoryNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const close = () => setIsOpen(false)

  return (
    <div className="fixed top-0 z-50 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
        <Link
          className="group flex w-full items-center space-x-2.5"
          href="/"
          onClick={close}
        >
          <div className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
            Logo
          </div>
          <h2 className="font-medium tracking-wide text-gray-300 group-hover:text-gray-50">
            SpaceX Directory <span className="Work in progress">(WIP)</span>
          </h2>
        </Link>
      </div>
      <button
        className="group absolute right-0 top-0 flex h-14 items-center space-x-2 px-4 lg:hidden"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <XIcon className="block w-6 text-gray-300" />
        ) : (
          <MenuAlt2Icon className="block w-6 text-gray-300" />
        )}
      </button>
      <div
        className={clsx("overflow-y-auto lg:static lg:block", {
          "fixed inset-x-0 bottom-0 top-14 mt-px bg-black": isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 py-5">
          {routes.map(section => {
            return (
              <div key={section.name}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-600">
                  <div>{section.name}</div>
                </div>
                <div className="space-y-1">
                  {section.categories.map(category => (
                    <GlobalNavItem
                      key={category.name}
                      category={category}
                      close={close}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

const GlobalNavItem = ({
  category,
  close,
}: {
  category: Category
  close: () => false | void
}) => {
  return (
    <Link
      className={clsx(
        "block rounded-md px-3 py-2 text-sm font-medium  hover:text-gray-300"
      )}
      href={`/${category.slug}`}
      onClick={close}
    >
      {category.name}
    </Link>
  )
}
