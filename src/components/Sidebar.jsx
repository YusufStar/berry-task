'use client'
import React, {useEffect, useState} from 'react'
import DefaultIcon from '@/assets/DefaultIcon'
import NavigationButton from './NavigationButton'
import AnalyticsIcon from '@/assets/AnalyticsIcon'
import UserIcon from '@/assets/UserIcon'
import classNames from 'classnames'
import {usePathname} from 'next/navigation'

const data = [
  {
    title: "Dashboard",
    path: "dashboard",
    buttons: [
      {
        Icon: DefaultIcon,
        label: "Default",
        path: "default",
        childs: []
      },
      {
        Icon: AnalyticsIcon,
        label: "Analytics",
        path: "analytics",
        childs: []
      },
    ]
  },
  {
    title: "Application",
    path: "application",
    buttons: [
      {
        Icon: UserIcon,
        label: "Users",
        isChilds: true,
        path: "users",
        childs: [
          {
            label: "Account profile",
            path: "account-profile",
            isChilds: true,
            childs: [
              {
                label: "Profile 1",
                path: "profile-1",
                childs: []
              },
              {
                label: "Profile 2",
                path: "profile-2",
                childs: []
              },
            ]
          },
          {
            label: "Social profile",
            path: "social-profile",
            childs: []
          }
        ]
      },
    ]
  },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState(pathname.split("/"));

  useEffect(() => {
    setOpenMenu(pathname.split("/"))
  }, [pathname])

  const handleToggleMenu = (path) => {
    setOpenMenu((prevMenus) => {
      const menuIndex = prevMenus?.indexOf(path);
      if (menuIndex !== -1) {
        return [...prevMenus?.slice(0, menuIndex), ...prevMenus?.slice(menuIndex + 1)];
      } else {
        return [...prevMenus, path];
      }
    });
  };

  const renderChildButtons = (buttons, depth, parentPaths) => {
    return (
      <div className={`ml-4 flex flex-col gap-2`}>
        {buttons.map((button, btn_idx) => (
          <React.Fragment key={btn_idx}>
            <NavigationButton
              childs={button.childs}
              paths={[...parentPaths, button.path]}
              className="w-full py-3 list-disc"
              label={button.label}
              isActive={openMenu?.includes(button.path)}
              onClick={() => handleToggleMenu(button.path)}
            />
            {button.isChilds && openMenu?.includes(button.path) && button.childs.length > 0 && (
              renderChildButtons(button.childs, depth + 1, [...parentPaths, button.path])
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <aside className={classNames(
      "md:shadow-sm shadow-lg flex flex-col px-2 bg-white h-[calc(100vh-85px)] overflow-y-auto transition-all ease-in-out duration-[395ms] z-50",
      isOpen ? "w-[250px] opacity-100" : "w-0 opacity-0 md:opacity-100 md:w-[81.62px]",
      "flex md:relative absolute"
    )}>
      {data.map((dt, dt_idx) => (
        <div key={dt_idx} className='flex flex-col gap-2 border-b-[1px] border-b-trans-purple py-2.5'>
          {isOpen && <span className='text-nav-item font-semibold'>{dt.title}</span>}

          <div className="flex flex-col gap-2">
            {dt.buttons.map((button, btn_idx) => (
              <React.Fragment key={btn_idx}>
                <NavigationButton
                  childs={button.childs}
                  paths={[dt.path, button.path]}
                  className={`${isOpen ? "w-full py-3" : `w-fit h-fit p-3 ml-1 `} my2`}
                  icon={button.Icon}
                  label={isOpen ? button.label : null}
                  isActive={openMenu?.includes(button.path)}
                  isOpen={isOpen}
                  onClick={() => handleToggleMenu(button.path)}
                />
                {button.isChilds && openMenu?.includes(button.path) && button.childs.length > 0 && isOpen && (
                  renderChildButtons(button.childs, 1, [dt.path, button.path])
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;