'use client';
import Image from 'next/image';
// import styles from '../styles';

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Tracks', href: '/tracks' },
  { name: 'About Us', href: '/about' },
  { name: 'Fees', href: '#' },
  { name: 'FAQs', href: '#' },
]


const Navbar = () => {
  // <nav className={`${styles.xPaddings} z-10 py-8 relative justify-between flex border-bottom`}>
  //   <a href="/" className={`${styles.innerWidth} mx-auto flex justify-between gap-8`} >
  //     <Image src="/logo.svg" alt="logo" width={100} height={40} className="cursor-pointer" />
  //   </a>

  //   <div className={`w-full mx-auto align-center flex justify-end gap-12`}>
  //       <h4 className={`whitespace-nowrap font-normal text-[15px] leading-[20px] text-white`}> <a href="/tracks">Tracks</a></h4>
  //       <h4 className={`whitespace-nowrap font-normal text-[15px] leading-[20px] text-white`}><a href="/about">About Us</a></h4>
  //       <h4 className={`whitespace-nowrap font-normal text-[15px] leading-[20px] text-white`}><a href="/fees">Fees</a></h4>
  //       <h4 className={`whitespace-nowrap font-normal text-[15px] leading-[20px] text-white`}><a href="/faq">FAQs</a></h4>
  //       <button className={`whitespace-nowrap text-[15px] leading-[20px] button-primary font-normal text-primary px-5 py-2 -mt-[10px] border border-1 border-primary`}>Log-in</button>
  //   </div>
  // </nav>
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-dark border-b border-gray-800">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <a href="/" className="-m-1.5 p-1.5">
          <Image className="h-8 w-auto" src="/logo.svg" height={100} width={100} alt="logo" />
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center p-3 border-2 border-gray-800 rounded-full text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-normal leading-6 self-center text-white">
              {item.name}
            </a>
          ))}
          <a href="#" className="text-sm font-semibold leading-6 border border-1 button-primary border-primary text-primary px-6 py-2">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-trainity-dark px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-600/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <Image
                className="h-8 w-auto"
                src="/logo.svg"
                alt="logo"
                width={80}
                height={80}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg border-primary px-3 py-2.5 text-base font-semibold leading-7 bg-primary text-white w-[80px] text-center"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
};

export default Navbar;
