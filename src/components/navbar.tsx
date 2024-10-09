import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 border-b">
            <div className="container flex flex-wrap items-center justify-between mx-auto py-4">
                <Link
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse text-2xl font-bold leading-none"
                >
                    Public APIs
                </Link>
                <div className="flex gap-4 justify-center">
                    <Button variant="outline" asChild>
                        <Link href="/categories">All Categories</Link>
                    </Button>
                    <Button variant="outline" asChild>
                        <Link
                            href="https://github.com/plsankar/public-apis"
                            target="_blank"
                        >
                            Github
                        </Link>
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
