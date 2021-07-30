import { nodeResolve } from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

const extensions = [".js", ".jsx", ".es6", ".es", ".mjs", "ts", "tsx"];

export default {
  input: "./src/index.tsx",
  plugins: [
    nodeResolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
      extensions,
    }),
    typescript()
  ],
  output: {
    dir: "dist",
    format: "cjs",
    exports: 'auto',
  },
  external: ["react", "react-router-dom"],
};
