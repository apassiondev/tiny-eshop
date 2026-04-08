"use client"

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { MoonIcon, SunIcon, SunMoon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { JSX } from 'react';

const icons = {
    "light": <SunIcon />,
    "dark": <MoonIcon />,
    "system": <SunMoon />
}

const ModeToggle = () => {
    const { theme, setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className='focus-visible:ring-0 focus-visible:ring-offset-0'
                >
                    {icons[(theme ?? 'light') as 'light' | 'dark' | 'system'] as JSX.Element}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {['light', 'dark', 'system'].map(themeValue => (
                    <DropdownMenuCheckboxItem key={themeValue}
                        checked={theme === themeValue}
                        onClick={() => setTheme(themeValue)}
                    >
                        {themeValue}
                    </DropdownMenuCheckboxItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default ModeToggle;