import React from "react";
import Link from "next/link";
import { Home, Notebook, QrCode, ShoppingCart, User } from "lucide-react";

export function Navigation() {
    return (
        <nav className="bg-(--app-theme-background) px-3 pb-3 pt-2 sm:px-5 sm:py-2" aria-label="メインナビゲーション">
            <div
                className="relative mx-auto flex max-w-5xl items-end justify-between gap-1 rounded-[1.75rem] border border-(--app-theme-text)/10 bg-(--app-theme-background-sub)/80 p-2 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-md sm:h-14 sm:items-center sm:gap-2 sm:rounded-2xl sm:p-1.5"
            >
                <NavigationLink href="/" label="HOME">
                    <Home />
                </NavigationLink>
                <NavigationLink href="/cart" label="CART">
                    <ShoppingCart />
                </NavigationLink>
                <NavigationLink href="/verify" label="VERIFY" featured>
                    <QrCode />
                </NavigationLink>
                <NavigationLink href="/order" label="ORDER">
                    <Notebook />
                </NavigationLink>
                <NavigationLink href="/user" label="USER">
                    <User />
                </NavigationLink>
            </div>
        </nav>
    )
}


function NavigationLink({
    children,
    label,
    featured = false,
    ...props
}: {
    href: string;
    label: string;
    featured?: boolean;
    children: React.ReactElement<{ size?: number; strokeWidth?: number }>;
}) {
    return (
        <Link
            {...props}
            className={[
                "group relative flex h-14 min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-2xl text-[10px] font-bold tracking-[0.12em] text-(--app-theme-text)/70 transition-all duration-200",
                "sm:bg-(--app-theme-background-sub) sm:py-1.5",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--app-theme)",
                "sm:h-full sm:flex-row sm:gap-2 sm:text-xs",
                featured
                    ? "-mt-7 h-[4.5rem] rounded-[1.5rem] bg-(--app-theme) px-3 hover:-translate-y-1 sm:mt-0 sm:h-full sm:max-w-auto sm:rounded-2xl sm:px-4 sm:py-1.5 sm:hover:-translate-y-0"
                    : "",
            ].join(" ")}
        >
            <span className={[
                "transition-transform duration-200 group-hover:-translate-y-0.5",
                featured ? "scale-110" : "",
            ].join(" ")}>
                {children}
            </span>
            <span>{label}</span>
        </Link>
    )
}
