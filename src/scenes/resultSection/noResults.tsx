
function noResults(props: any) {
    return (
        <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 1920 1080"
            style={{
                enableBackground: "new 0 0 1920 1080",
            }}
            xmlSpace="preserve"
            {...props}
        >
            <style type="text/css">
                {
                    "\n\t.st0{opacity:0.2;}\n\t.st1{fill:none;}\n\t.st2{fill:#FFFFFF;}\n\t.st3{font-family:'UDDigiKyokashoNK-B';}\n\t.st4{font-size:183px;}\n"
                }
            </style>
            <g className="st0">
                <rect x={0.5} y={0.5} width={1919} height={1079} />
                <path d="M1919,1v1078H1V1H1919 M1920,0H0v1080h1920V0L1920,0z" />
            </g>
            <rect y={454.13} className="st1" width={1920.69} height={171.64} />
            <text transform="matrix(1 0 0 1 338.7422 592.4565)" className="st2 st3 st4">
                {"NO RESULTS"}
            </text>
        </svg>
    )
}

export default noResults