/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.js", "./src/**/*.jsx", "./src/*.jsx"],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        tablet: "768px",
        // => @media (min-width: 640px) { ... }

        // laptop: "1024px",
        // // => @media (min-width: 1024px) { ... }

        desktop: "1024px",

        // => @media (min-width: 1280px) { ... }
      },
      fontFamily: {
        pre: ["Pretendard", "sans-serif"],
        baloo: ['"Baloo Bhai 2"', "sans-serif"],
        noto: ["Noto Sans KR", "sans-serif"],
        han: ["Black Han Sans", "sans-serif"],
        neoLight: ["NanumSquareNeoLight", "sans-serif"],
        neo: ["NanumSquareNeo", "sans-serif"],
        neoBold: ["NanumSquareNeoBold", "sans-serif"],
        neoExBold: ["NanumSquareNeoExtraBold", "sans-serif"],
        neoHeavy: ["NanumSquareNeoHeavy", "sans-serif"],
        gm: ["GmarketSansMedium", "sans-serif"],
      },

      colors: {
        rgba: "rgba(0, 0, 0, 0.5)",
        brandtext: "#000b1f",
      },
      fontSize: {
        "1.5xl": ["1.3rem", "1.75rem"],
        "2.5xl": ["1.75rem", "2.25rem"], // 원하는 크기로 조정 가능
        "3.5xl": ["2rem", "2.25rem"],
        "4.5xl": ["2.85rem", "3rem"],
      },
    },
  },

  variants: {
    extend: {
      filter: ["hover", "focus"], // 추가
    },
  },
  plugins: [],
};
