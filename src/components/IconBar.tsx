"use client";


import 'react-tooltip/dist/react-tooltip.css'
import { Icon } from '@iconify-icon/react';
import { Tooltip } from 'react-tooltip'

export default function IconBar() {
    return (
        <ul className="grid grid-rows-4 md:grid-rows-2 grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 text-3xl md:text-4xl 2xl:text-6xl">
            <li><Icon icon="catppuccin:docker" /></li>
            <li><Icon icon="catppuccin:next"/></li>
            <li><Icon icon="catppuccin:javascript-react"/></li>
            <li><Icon icon="catppuccin:typescript"/></li>
            <li><Icon icon="arcticons:arch" className="text-[#1793D1]" /></li>
            <li><Icon icon="catppuccin:bash"/></li>
            <li><Icon icon="catppuccin:tailwind"/></li>
            <li><Icon icon="catppuccin:go"/></li>
            <li><Icon icon="catppuccin:python"/></li>
            <li><Icon icon="catppuccin:nginx"/></li>
            <li><Icon icon="catppuccin:drizzle-orm"/></li>
            <li><Icon icon="catppuccin:playwright"/></li>
        </ul>
    )
}