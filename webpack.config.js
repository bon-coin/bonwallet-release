const path = require("path");
const webpack = require("webpack");
const vue_loader = require("vue-loader/lib/plugin");
const mode = (process.env.NODE_ENV === "production" ? "production" : "development"); 

const config = {
     entry:{
        app:  "./src/app.js"
     },
     output:{
         path: path.join(__dirname, "dist"),
         filename: "[name].js"
     },
     module:{
         rules: [
           {test: /\.vue$/, use:"vue-loader"},
           {test: /\.css$/, use:["vue-style-loader","css-loader"]},
           {
            test: /\.scss$/,
            use: [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        ]
     },
     mode,
     plugins: [new webpack.NoEmitOnErrorsPlugin(),
               new vue_loader()],
    resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
     }
    }

}

module.exports = config;