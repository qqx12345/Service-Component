import { useState } from 'react'
import Index from './index';
// import Conversation from './commuication'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import '../output.css'
import Help from './help';
    const navigation = [
      { name: 'Index', id: 1 },
      { name: 'Message', id: 2 },
      { name: 'Help', id: 3 },
    ]
    
    function classNames(...classes) {
      return classes.filter(Boolean).join(' ')
    }
    
    export default function Service() {
      const [count ,setcount]=useState(1);
      return (
       <div className='fixed bottom-40 right-40 overflow-y-auto bg-white p-6 w-110 h-120 scrollbar-hidden rounded-lg shadow-lg z-50'>
        <Disclosure as="nav" className="bg-gray-600 rounded-lg">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                Mobile menu button
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <button
                        key={item.id}
                        // href={item.href}
                        aria-current={item.id==count ? 'page' : undefined}
                        className={classNames(
                          item.id===count ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                        onClick={()=>{setcount(item.id)}}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
            </div>
          </div>
    
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.id}
                  // as="a"
                  // href={item.href}
                  aria-current={item.id==count ? 'page' : undefined}
                  className={classNames(
                    item.id==count ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                  onClick={()=>{setcount(item.id)}}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
        {count==1 && <Index/>}
        {/* {count==2 && <Conversation/>} */}
        {count==3 && <Help/>}
        </div>
      )
    }
    