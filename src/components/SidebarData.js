import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Layout',
    path: '/Layout',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Терминалы',
    path: '/terminals',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Покупатели',
    path: '/buyers',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
 
];
