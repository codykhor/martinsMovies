interface IconProps {
    className?: string;
    width?: number;
    height?: number;
}

export function SearchIcon({className, width = 20, height = 20, ...restParams}: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="currentColor"
             className={className} {...restParams}>
            <path fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"/>
        </svg>
    );
}

export function PlayIcon({className, width = 20, height = 20, ...restParams}: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="currentColor"
             className={className} {...restParams}>
            <path fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"/>
        </svg>
    );
}

export function StarIcon({className, width = 20, height = 20, ...restParams}: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="currentColor"
             className={className} {...restParams}>
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
    );
}

export function Logo({className}: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <g>
                <circle fill="#606060" cx="53.337" cy="140.889" r="43.653"/>
                <polygon fill="#F0EFEF"
                         points="512,192.862 512,422.467 470.122,464.345 51.505,464.345 9.707,422.467 9.707,192.862"/>
                <g>
                    <polygon fill="#F5EFBB" points="111.528,144.713 87.261,192.881 155.473,192.881 179.74,144.713"/>
                    <polygon fill="#3F3F3F" points="453.572,192.881 511.945,192.881 511.945,144.713 477.839,144.713"/>
                    <polygon fill="#6EB9D2" points="233.632,144.713 209.365,192.881 277.577,192.881 301.844,144.713"/>
                    <polygon fill="#FAFAFB" points="355.735,144.713 331.469,192.881 399.68,192.881 423.947,144.713"/>
                    <polygon fill="#3F3F3F"
                             points="57.602,144.726 38.829,182.031 33.374,192.862 8.665,192.862 8.665,144.726"/>
                    <polygon fill="#648A7B" points="423.947,144.713 399.68,192.881 453.572,192.881 477.839,144.713"/>
                    <polygon fill="#C15670" points="301.844,144.713 277.577,192.881 331.469,192.881 355.735,144.713"/>
                    <polygon fill="#69865C" points="179.74,144.713 155.473,192.881 209.365,192.881 233.632,144.713"/>
                    <polygon fill="#648A7B" points="57.636,144.713 33.369,192.881 87.261,192.881 111.528,144.713"/>
                </g>
                <g>
                    <polygon fill="#FAFAFB" points="416.371,64.581 349.382,77.738 316.33,35.138 383.238,21.982"/>
                    <polygon fill="#3F3F3F"
                             points="56.96,135.34 9.868,144.646 9.306,144.726 0,97.473 23.827,92.74 27.838,91.938 34.337,101.645"/>
                    <polygon fill="#6EB9D2"
                             points="296.514,88.168 256,96.11 229.606,101.324 196.472,58.805 256,47.011 263.461,45.568"/>
                    <polygon fill="#F5EFBB" points="176.737,111.754 109.829,124.911 76.696,82.391 143.604,69.154"/>
                    <polygon fill="#3F3F3F"
                             points="504.138,47.252 469.4,54.152 468.678,53.43 425.998,13.558 436.106,11.552 489.296,1.042 494.832,0 496.436,8.182"/>
                    <polygon fill="#648A7B"
                             points="109.829,124.911 94.987,127.879 56.96,135.34 31.77,103.008 23.827,92.74 27.838,91.938 76.696,82.391"/>
                    <polygon fill="#69865C" points="229.606,101.324 176.737,111.754 143.604,69.154 196.472,58.805"/>
                    <polygon fill="#C15670" points="349.382,77.738 296.514,88.168 263.461,45.568 316.33,35.138"/>
                    <polygon fill="#648A7B"
                             points="469.24,54.152 416.371,64.581 383.238,21.982 425.998,13.558 436.106,11.552 468.678,53.43 468.839,53.59"/>
                </g>
                <circle fill="#F0E1B7" cx="23.882" cy="117.874" r="6.125"/>
                <circle fill="#F0E1B7" cx="23.882" cy="169.717" r="6.125"/>
                <rect x="83.144" y="235.66" fill="#454444" width="355.384" height="71.782"/>
            </g>
        </svg>
    );
}

export function UserIcon({className, width = 20, height = 20, ...restParams}: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 20 20" fill="none"
             className={className} {...restParams} strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
        </svg>
    );
}

export function GlobeIcon({className, width = 20, height = 20, ...restParams}: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="currentColor"
             className={className} {...restParams}>
            <path
                d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z"/>
            <path fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                  clipRule="evenodd"/>
        </svg>
    );
}