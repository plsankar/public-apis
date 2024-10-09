import { Button } from "@/components/ui/button";
import CategoryTags from "@/components/category-tags";
import Link from "next/link";
import apis from "@/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Public APIs - A collective list of Public APIs",
};

export default async function Home() {
    return (
        <main className="flex items-center min-h-screen justify-center">
            <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 w-full">
                <div className="container flex max-w-[64rem] flex-col items-center gap-7 text-center">
                    <Link
                        href="https://github.com/plsankar/public-apis"
                        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                        target="_blank"
                    >
                        Star on Github
                    </Link>
                    <h1 className="font-heading text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight">
                        A collective list of <br /> Public APIs
                    </h1>
                    <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8">
                        <b>{apis.length}</b> categories and{" "}
                        <b> {apis.reduce((p, c) => p + c.table.length, 0)}</b>{" "}
                        apis so far.
                    </p>
                </div>
                <CategoryTags categories={apis} reverse={false} />
                <CategoryTags categories={apis} reverse={true} />
                <div className="flex gap-4 justify-center pt-4">
                    <Button asChild>
                        <Link href="/categories">All Categories</Link>
                    </Button>
                    <Button className="bg-[#24292e]" asChild>
                        <Link
                            href="https://github.com/plsankar/public-apis"
                            target="_blank"
                        >
                            Github
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    );
}
