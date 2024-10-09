import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    GlobeIcon,
    LockIcon,
    ShuffleIcon,
    SquareArrowOutUpRightIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CategoryHeader from "@/components/category-header";
import Favicon from "@/components/favicon";
import Link from "next/link";
import apis from "@/data";
import { generateCategorySlug } from "@/lib/category";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return apis.map((category) => ({
        slug: generateCategorySlug(category.title),
    }));
}

export default function CateoryPage({ params }: { params: { slug: string } }) {
    const category = apis.find(
        (category) => generateCategorySlug(category.title) === params.slug
    );

    if (!category) {
        notFound();
    }

    return (
        <div className="container mx-auto mb-20">
            <CategoryHeader category={category} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {category.table.map((api, index) => (
                    <Card
                        key={index}
                        className="flex flex-col rounded-lg bg-gray-200/60 shadow-sm overflow-hidden hover:shadow-lg duration-150 transtion-all"
                    >
                        <CardHeader className="rounded-lg border-b bg-white overflow-hidden p-4 flex-1 ">
                            <div className="flex gap-2 items-start justify-between">
                                <div>
                                    <CardTitle className="leading-none m-0 p-0 flex gap-2">
                                        <Favicon
                                            url={api.LINK}
                                            size={20}
                                            className="rounded-full border w-5 h-5"
                                        />
                                        {api.API}
                                    </CardTitle>
                                    <CardDescription className="pl-7">
                                        {api.Description}
                                    </CardDescription>
                                </div>
                                <div className="flex gap-3">
                                    <Button variant="ghost" size="icon" asChild>
                                        <Link href={api.LINK} target="_blank">
                                            <SquareArrowOutUpRightIcon className="w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-0 divide-y divide-black/10 text-xs leading-none">
                            <div className="px-4 py-2 flex justify-between items-center">
                                <span className="inline-flex items-center">
                                    <LockIcon
                                        className="w-4 h-4 mr-3"
                                        strokeWidth={1.5}
                                    />
                                    Auth
                                </span>
                                <Badge variant="secondary" className="bg-white">
                                    {api.Auth}
                                </Badge>
                            </div>
                            <div className="px-4 py-2 flex justify-between items-center">
                                <span className="inline-flex items-center">
                                    <GlobeIcon
                                        className="w-4 h-4 mr-3"
                                        strokeWidth={1.5}
                                    />
                                    HTTPS
                                </span>
                                <Badge variant="secondary" className="bg-white">
                                    {api.HTTPS}
                                </Badge>
                            </div>
                            <div className="px-4 py-2 flex justify-between items-center">
                                <span className="inline-flex items-center">
                                    <ShuffleIcon
                                        className="w-4 h-4 mr-3"
                                        strokeWidth={1.5}
                                    />
                                    CORS
                                </span>
                                <Badge variant="secondary" className="bg-white">
                                    {api.CORS}
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
