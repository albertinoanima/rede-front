import { useEffect, useState } from "react";
import Image from "next/image";

type CustomImageType = {
    src: string;
    alt: string;
    fallbackSrc: string;
    style?: React.CSSProperties;
    width: number;
    height: number;
    className?: string;
};

const CustomImage: React.FC<CustomImageType> = ({ width, height, src, fallbackSrc, alt, style, className }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [failedToLoad, setFailedToLoad] = useState(false);
    const [localSrc, setLocalSrc] = useState<string>("");

    useEffect(() => {
        if (src && src.length > 0) {
            setLocalSrc(src);
        }
    }, [src])
    

    return (
        <Image
            width={width}
            height={height}
            src={(!isLoading && !failedToLoad && localSrc.length > 0) ? localSrc : fallbackSrc}
            alt={alt}
            style={style}
            className={className}
            onLoadingComplete={() => setIsLoading(false)}
            onError={() => setFailedToLoad(true)}
        />
    );
};

export default CustomImage;
