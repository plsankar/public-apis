import React, { FC } from "react";

import { APICategory } from "@/data";
import CategoryTagItem from "./category-tag-item";
import Marquee from "react-fast-marquee";

const CategoryTags: FC<{ categories: APICategory[]; reverse: boolean }> = ({
    categories,
    reverse = false,
}) => {
    const _categories =
        reverse == true ? [...categories].reverse() : categories;
    return (
        <Marquee pauseOnHover direction={reverse ? "right" : "left"} gradient>
            <div className="flex gap-3 me-3">
                {_categories.map((category, index) => (
                    <CategoryTagItem
                        key={`cartgory-tag-${index}`}
                        title={category.title}
                        count={category.table.length}
                    />
                ))}
            </div>
        </Marquee>
    );
};

export default CategoryTags;
