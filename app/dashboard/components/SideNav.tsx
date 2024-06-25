import Image from 'next/image'
import profilepic from './unifycoffee.jpeg'
import {
    InboxIcon,
    TagIcon,
    FolderIcon,
    SparklesIcon,
    HomeIcon,
    UsersIcon,
  } from '@heroicons/react/24/outline'
  
  const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'Orders', href: '#', icon: InboxIcon, count: '5', current: false },
    { name: 'Products', href: '#', icon: TagIcon, count: '12', current: false },
    { name: 'Rewards', href: '#', icon: SparklesIcon, current: false },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
  ]
  const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
  ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function SideNav() {
    return (
      <div className="flex grow flex-col items-start gap-y-5 overflow-y-auto min-h-screen border-r border-gray-200 bg-white pl-6 pr-12">
        <div className="flex h-16 shrink-0 items-center">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-50 text-indigo-600'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                        'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6',
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                          'h-6 w-6 shrink-0',
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                      {item.count ? (
                        <span
                          className="ml-auto w-9 min-w-max whitespace-nowrap rounded-full bg-white px-2.5 py-0.5 text-center text-xs font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200"
                          aria-hidden="true"
                        >
                          {item.count}
                        </span>
                      ) : null}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className="-mx-6 mt-auto">
              <a
                href="#"
                className="flex items-center gap-x-2 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
              >
                <Image
                  className="h-8 w-8 rounded-full bg-gray-50"
                  src={profilepic}
                  alt=""
                />
                <span className="sr-only">Your profile</span>
                <span aria-hidden="true">Unify Coffee</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
  