module.exports={presets:[["@babel/env",{loose:!0,modules:!1,exclude:["transform-typeof-symbol"]}]],plugins:[process.env.PLUGINS&&"transform-es2015-modules-strip","@babel/proposal-object-rest-spread"].filter(Boolean)};