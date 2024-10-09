import React, { FC } from "react";

import type { APICategory } from "@/data";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { generateCategorySlug } from "@/lib/category";

const CategoryHeader: FC<{ category: APICategory }> = ({ category }) => {
    return (
        <div className="sticky top-0 bg-background p-4 py-8 flex items-center justify-between">
            <h1
                className="text-xl font-bold leading-none inline-flex items-center gap-3"
                id={generateCategorySlug(category.title)}
            >
                {category.title}
                <Badge variant="secondary">{category.table.length}</Badge>
            </h1>
            <div>
                <Button
                    size="sm"
                    variant="ghost"
                    className="opacity-50"
                    asChild
                >
                    <Link href="/">
                        <ChevronLeftIcon className="w-5 h-5 mr-2" />
                        Back to home
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default CategoryHeader;
