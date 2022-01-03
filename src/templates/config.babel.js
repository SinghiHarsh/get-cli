const babelConfig = {
    babelContents: {
        "presets": [["@babel/preset-env", { "targets": { "node": "current" } }]],
        "plugins": [["@babel/plugin-proposal-object-rest-spread", { "useBuiltIns": true }]]
    }
}
export default babelConfig
