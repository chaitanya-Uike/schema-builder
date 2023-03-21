interface Props {
  width: number;
  height: number;
  color: string;
}

export default class SVGIcons {
  static DropDown({ width, height, color }: Props) {
    return (
      <div
        style={{
          width,
          height,
          display: "flex",
          flexDirection: "column",
          gap: 3,
          alignItems: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
        >
          <path
            d="M1.38401 7.24718H6.61595C6.78247 7.24718 6.92679 7.21055 7.0489 7.13728C7.17101 7.06623 7.26426 6.96854 7.32864 6.84421C7.39525 6.7221 7.42855 6.58556 7.42855 6.43458C7.42855 6.36575 7.41967 6.29804 7.40191 6.23143C7.38415 6.16482 7.35751 6.09933 7.32198 6.03494L4.70102 1.35583C4.62553 1.2204 4.52451 1.11827 4.39796 1.04944C4.2714 0.978395 4.1393 0.942871 4.00165 0.942871C3.86399 0.942871 3.73078 0.978395 3.60201 1.04944C3.47546 1.11827 3.37444 1.2204 3.29895 1.35583L0.681312 6.03827C0.608045 6.17148 0.571411 6.30359 0.571411 6.43458C0.571411 6.58556 0.604714 6.7221 0.671321 6.84421C0.737927 6.96854 0.831177 7.06623 0.951068 7.13728C1.07318 7.21055 1.21749 7.24718 1.38401 7.24718Z"
            fill={color}
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 7"
          fill="none"
        >
          <path
            d="M1.38401 0.675672H6.61595C6.78247 0.675672 6.92679 0.712306 7.0489 0.785573C7.17101 0.856619 7.26426 0.954309 7.32864 1.07864C7.39525 1.20075 7.42855 1.3373 7.42855 1.48827C7.42855 1.5571 7.41967 1.62481 7.40191 1.69142C7.38415 1.75803 7.35751 1.82352 7.32198 1.88791L4.70102 6.56702C4.62553 6.70245 4.52451 6.80458 4.39796 6.87341C4.2714 6.94446 4.1393 6.97998 4.00165 6.97998C3.86399 6.97998 3.73078 6.94446 3.60201 6.87341C3.47546 6.80458 3.37444 6.70245 3.29895 6.56702L0.681312 1.88458C0.608045 1.75137 0.571411 1.61926 0.571411 1.48827C0.571411 1.3373 0.604714 1.20075 0.671321 1.07864C0.737927 0.954309 0.831177 0.856619 0.951068 0.785573C1.07318 0.712306 1.21749 0.675672 1.38401 0.675672Z"
            fill={color}
          ></path>
        </svg>
      </div>
    );
  }

  static Tick({ width, height, color }: Props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 12 10"
      >
        <path
          d="M11.6343 2.4525C11.9291 2.05511 11.8964 1.49118 11.536 1.13081C11.1396 0.734393 10.4969 0.734393 10.1004 1.13081L4.39356 6.83574L1.89933 4.34237L1.78546 4.24411C1.38801 3.94934 0.824085 3.98222 0.463785 4.34267C0.0674547 4.73917 0.0675904 5.38188 0.464088 5.77821L3.67716 8.98993L3.79101 9.08818C4.1884 9.38292 4.75223 9.3501 5.11255 8.98978L11.536 2.56635L11.6343 2.4525Z"
          fill={color}
        ></path>
      </svg>
    );
  }
}
