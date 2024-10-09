import { FC, useMemo } from "react";

interface FaviconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    url: string;
    size: number;
}

const Favicon: FC<FaviconProps> = ({ url, size, ...props }) => {
    const { domain } = useMemo(() => {
        const _url = new URL(url);
        return { domain: _url.hostname };
    }, [url]);
    return (
        <>
            {/*eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={`https://icons.duckduckgo.com/ip3/${domain}.ico`}
                alt={domain}
                width={size}
                height={size}
                {...props}
            />
        </>
    );
};

export default Favicon;
