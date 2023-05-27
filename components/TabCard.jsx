// import { useState } from "react";

const tabs = [
    { name: 'Data Analytics', href: '#tab1', current: true },
    { name: 'Workshop', href: '#tab2', current: false },
    { name: 'Bootcamp', href: '#tab3', current: false },
    { name: 'Coding', href: '#tab4', current: false },
    { name: 'Career Coaching', href: '#tab5', current: false },
  ]

// const card = [
//     { id: 1, imgUrl: '/tableau.svg', name: 'Mastering Tableau', duration: '4 weeks', modules: '12 modules', price: '₹ 4999', tutor: 'Raghu Raman', company: '/dell.svg', person: '/raghu.svg'  },
//     { id: 2, imgUrl: '/excel.svg', name: 'The Excel Bootcamp', duration: '4 weeks', modules: '12 modules', price: '₹ 1499', tutor: 'Siddhart Rout', company: '/microsoft.svg', person: '/siddhart.svg'  },
//     { id: 3, imgUrl: '/mysql.svg', name: 'Mastering SQL', duration: '4 weeks', modules: '12 modules', price: '₹ 1499', tutor: 'Huzefa Lohawala', company: '/paypal.svg', person: '/huzefa.svg'  },
// ];



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function TabCard() {

    return (
      <div className="mx-24">
        <div className="sm:hidden">
          {/* <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label> */}
          {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:border-primary sm:text-sm"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="hidden sm:block">
          <div className="border-b border-blue-900">
            <nav className="-mb-px flex justify-between space-x-12" aria-label="Tabs">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  onClick={() => setOpenTab(tab.name)}
                  className={classNames(
                    tab.current
                      ? 'border-green-primary text-primary'
                      : 'border-transparent text-primary hover:border-green-600 hover:text-green-500',
                    'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    )
  }