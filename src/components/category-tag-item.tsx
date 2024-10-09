import React, { FC } from "react";
import { generateCategorySlug, getIcon } from "@/lib/category";

import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Link from "next/link";

const CategoryTagItem: FC<{ title: string; count: number }> = ({
    title,
    count,
}) => {
    const Icon = getIcon(title);

    return (
        <Button variant="outline" size="sm" className="group" asChild>
            <Link href={`/category/${generateCategorySlug(title)}`}>
                <Icon className="w-3 h-3 mr-2" />
                {title}
                <Badge
                    className="text-xs px-1 ms-2 group-hover:bg-primary group-hover:text-white"
                    variant="secondary"
                >
                    {count}
                </Badge>
            </Link>
        </Button>
    );
};

export default CategoryTagItem;
