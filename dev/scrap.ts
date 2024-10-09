import MarkdownIt from "markdown-it";
import jsdom from "jsdom";
import ky from "ky";
import { tabletojson } from "tabletojson";
import { writeJsonFile } from "write-json-file";
import { z } from "zod";

const apiSchema = z.object({
    API: z.string(),
    Description: z.string(),
    Auth: z.enum(["apiKey", "User-Agent", "OAuth", "No"]),
    HTTPS: z.enum(["Yes", "No"]),
    CORS: z.enum(["Yes", "No", "Unknown"]),
    LINK: z.string().url(),
});

const regex = /<a href="(.*?)">(.*?)<\/a>/;

const apiListSchema = z.array(apiSchema);

(async () => {
    const markdown = await ky
        .get("https://cdn.jsdelivr.net/gh/public-apis/public-apis/README.md")
        .text();

    const md = new MarkdownIt();
    const html = md.render(markdown);

    const { JSDOM } = jsdom;
    const { document } = new JSDOM(html).window;

    const converted = Array.from(document.querySelectorAll("table")).map(
        (el, index) => {
            if (index === 0) {
                return;
            }
            try {
                const tableJson = tabletojson
                    .convert(el.outerHTML, {
                        stripHtmlFromCells: false,
                    })[0]
                    .map((row: { [key: string]: string }) => {
                        const match = row["API"].match(regex);
                        return {
                            ...row,
                            API: match && match[0].replace(/<[^>]*>?/gm, ""),
                            LINK: match && match[1],
                            Auth: row["Auth"].replace(/<[^>]*>?/gm, ""),
                        };
                    });

                const table = apiListSchema.parse(tableJson);

                return {
                    title: el.previousElementSibling?.textContent,
                    table: table,
                };
            } catch (error) {
                console.log(error);
                return undefined;
            }
        }
    );

    await writeJsonFile(
        "./api.json",
        converted.filter((i) => i)
    );
})();
