### Repro

https://github.com/lazarv/react-server/issues/11

#### Dev: works
Page loads and displays
`["username","first","last","age"]`

```sh
pnpm run dev
```

#### Build + start: fails (deepkit runtimes info are stripped somewhere in the pipeline)
```sh
pnpm run preview
```
```shell
Error: No type given in ReflectionClass.from<T>
    at ReflectionClass.from (file:///C:/PROG/reproductions/lazarv-reactserver-deepkit/node_modules/.pnpm/@deepkit+type@1.0.1-alpha.151_@deepkit+core@1.0.1-alpha.147/node_modules/@deepkit/type/dist/esm/src/reflection/reflection.js:1085:19)
    at n (file:///C:/PROG/reproductions/lazarv-reactserver-deepkit/.react-server/server/index.mjs:1:126)
    at renderFunctionComponent (C:\PROG\reproductions\lazarv-reactserver-deepkit\node_modules\.pnpm\react-server-dom-webpack@0.0.0-experimental-58af67a8f8-20240628_react-dom@0.0.0-experimental-_3l7nb44lyq4op3vbwdjmmrg73q\node_modules\react-server-dom-webpack\cjs\react-server-dom-webpack-server.edge.production.js:1024:15)
    at renderElement (C:\PROG\reproductions\lazarv-reactserver-deepkit\node_modules\.pnpm\react-server-dom-webpack@0.0.0-experimental-58af67a8f8-20240628_react-dom@0.0.0-experimental-_3l7nb44lyq4op3vbwdjmmrg73q\node_modules\react-server-dom-webpack\cjs\react-server-dom-webpack-server.edge.production.js:1092:12)
    at renderModelDestructive (C:\PROG\reproductions\lazarv-reactserver-deepkit\node_modules\.pnpm\react-server-dom-webpack@0.0.0-experimental-58af67a8f8-20240628_react-dom@0.0.0-experimental-_3l7nb44lyq4op3vbwdjmmrg73q\node_modules\react-server-dom-webpack\cjs\react-server-dom-webpack-server.edge.production.js:1370:17)
    at renderModel (C:\PROG\reproductions\lazarv-reactserver-deepkit\node_modules\.pnpm\react-server-dom-webpack@0.0.0-experimental-58af67a8f8-20240628_react-dom@0.0.0-experimental-_3l7nb44lyq4op3vbwdjmmrg73q\node_modules\react-server-dom-webpack\cjs\react-server-dom-webpack-server.edge.production.js:1281:12)
    at Array.toJSON (C:\PROG\reproductions\lazarv-reactserver-deepkit\node_modules\.pnpm\react-server-dom-webpack@0.0.0-experimental-58af67a8f8-20240628_react-dom@0.0.0-experimental-_3l7nb44lyq4op3vbwdjmmrg73q\node_modules\react-server-dom-webpack\cjs\react-server-dom-webpack-server.edge.production.js:1159:14)
    at stringify (<anonymous>)
    at emitChunk (C:\PROG\reproductions\lazarv-reactserver-deepkit\node_modules\.pnpm\react-server-dom-webpack@0.0.0-experimental-58af67a8f8-20240628_react-dom@0.0.0-experimental-_3l7nb44lyq4op3vbwdjmmrg73q\node_modules\react-server-dom-webpack\cjs\react-server-dom-webpack-server.edge.production.js:1762:17)
    at retryTask (C:\PROG\reproductions\lazarv-reactserver-deepkit\node_modules\.pnpm\react-server-dom-webpack@0.0.0-experimental-58af67a8f8-20240628_react-dom@0.0.0-experimental-_3l7nb44lyq4op3vbwdjmmrg73q\node_modules\react-server-dom-webpack\cjs\react-server-dom-webpack-server.edge.production.js:1783:11)

```


