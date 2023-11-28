'use client'
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const NavigationButton = ({
  icon: Icon,
  label,
  className = "",
  paths,
  isActive,
  onClick,
  childs,
}) => {
  const router = useRouter();
  const pathname = usePathname()
  const path = `/${paths.join("/")}`;

  const handleClick = () => {
    if (childs?.length !== 0) {
      // Sadece alt menüyü aç veya kapat
      onClick && onClick();
    } else {
      // Diğer durumlarda normal işlemi yap
      router.push(path);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={classNames(
        "flex items-center h-fit gap-4 rounded-lg",
        "cursor-pointer group",
        "transition-all duration-200 ease-in-out",
        Icon && !label ? "justify-center" : "px-4",
        pathname === path ? "bg-trans-purple" : "bg-white hover:bg-trans-purple",
        
        className
      )}
    >
      {Icon && <Icon className="stroke-gray" />}
      {label && label !== "" && <span className='text-nav-item'>{label}</span>}
    </div>
  );
};

export default NavigationButton;