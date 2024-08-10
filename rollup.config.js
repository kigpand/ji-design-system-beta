import babel from "rollup-plugin-babel"; // babel 사용
import resolve from "@rollup/plugin-node-resolve"; // node_modules의 3rd-party 모듈을 사용하기 위해
import external from "rollup-plugin-peer-deps-external"; // peerDependencies external 설정, 번들링 결과에서 제외
import typescript from "@rollup/plugin-typescript"; // typescript 사용
import { terser } from "rollup-plugin-terser"; // 공백 제거
import postcss from "rollup-plugin-postcss"; // css 적용을 위해 postcss 이용

export default [
  {
    external: ["styled-components", "react/jsx-runtime"],
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      terser(),
    ],
  },
];
