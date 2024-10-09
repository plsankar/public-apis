import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { generateCategorySlug, getIcon } from "@/lib/category";

import Link from "next/link";
import React from "react";
import apis from "@/data";

const Categories = () => {
    return (
        <div className="container mx-auto mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {apis.map((category, index) => {
                    const Icon = getIcon(category.title);
                    return (
                        <Card
                            key={`category-${index}`}
                            className="group relative shadow-none hover:shadow"
                        >
                            <CardHeader className="p-4">
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-lg bg-secondary border inline-flex items-center justify-center group-hover:bg-primary group-hover:text-white">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <Link
                                        href={`/category/${generateCategorySlug(
                                            category.title
                                        )}`}
                                        className="after:absolute after:inset-0 after:content"
                                    >
                                        <CardTitle>{category.title}</CardTitle>
                                    </Link>
                                </div>
                            </CardHeader>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default Categories;
