"use client";

import 'react-tooltip/dist/react-tooltip.css'
import { Icon } from '@iconify-icon/react';
import { Tooltip } from 'react-tooltip'

export default function IconBar() {
    return (
        <>
            <Tooltip id="icon-tooltip" />
            <ul className="grid grid-rows-2 grid-cols-6 gap-4 md:gap-6 text-4xl md:text-5xl 2xl:text-6xl mt-6">
                <li><Icon icon="catppuccin:docker" data-tooltip-id="icon-tooltip" data-tooltip-content="Docker" /></li>
                <li><Icon icon="catppuccin:next" data-tooltip-id="icon-tooltip" data-tooltip-content="Next.js" /></li>
                <li><Icon icon="catppuccin:javascript-react" data-tooltip-id="icon-tooltip" data-tooltip-content="React" /></li>
                <li><Icon icon="catppuccin:typescript" data-tooltip-id="icon-tooltip" data-tooltip-content="TypeScript" /></li>
                <li><Icon icon="arcticons:arch" className="text-[#1793D1]" data-tooltip-id="icon-tooltip" data-tooltip-content="Arch Linux" /></li>
                <li><Icon icon="catppuccin:bash" data-tooltip-id="icon-tooltip" data-tooltip-content="Bash" /></li>
                <li><Icon icon="catppuccin:tailwind" data-tooltip-id="icon-tooltip" data-tooltip-content="Tailwind CSS" /></li>
                <li><Icon icon="catppuccin:go" data-tooltip-id="icon-tooltip" data-tooltip-content="Go" /></li>
                <li><Icon icon="catppuccin:python" data-tooltip-id="icon-tooltip" data-tooltip-content="Python" /></li>
                <li><Icon icon="selfhst:redis" data-tooltip-id="icon-tooltip" data-tooltip-content="Redis" /></li>
                <li><Icon icon="catppuccin:drizzle-orm" data-tooltip-id="icon-tooltip" data-tooltip-content="Drizzle ORM" /></li>
                <li><Icon icon="selfhst:mongodb" data-tooltip-id="icon-tooltip" data-tooltip-content="MongoDB" /></li>
            </ul>
        </>
    )
}