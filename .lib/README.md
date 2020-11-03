This folder contains examples for how to create a lib bundle that can be consumed stand alone

### Two modes

- single chunk - all code in one file
- dynamic - all code is spited via import()

for the dynamic mode there is a react library context (`lib.dynamic.context.js`) that can be use to preload the components

### Notes:

- no yoshi!
- each example is built to a separate folder
- just open the html file after you build the example
- the dynamic example dose not handle errors
- the dependencies of the webpack config are not in the package.json there are there because of yoshi. (I used yarn to install the project npm may dedupe differently)
- I did not give all the components the right props so there are some errors related to that
- I did not generated source maps (but it can be easily added)
- Not all component are included (only what was easy to do with regex) we need to complete the list (they are commented out) 

### How to build:

At the repo root just

`yarn webpack --config ".lib/webpack.lib.config.js"`

or

`yarn webpack --config ".lib/webpack.dynamic.config.js"`
