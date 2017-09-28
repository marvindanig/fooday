# fooday

> A Vue.js assignment project

## Problem statement & Instructions

Option 1: Based on data available via the FDA API at:

https://open.fda.gov/food/enforcement/

Build a stand alone app with a Vue front end that allows users to log in, enter in their birthday, and do one of the following:
1. based on that date give some type of visual to show them what foods they should avoid for their birthday dinner. The assumption is that foods recalled on or around their birthday in previous years would be ‘bad’ foods.
2. Enter in a list of menu items for their birthday dinner and alert them if any of the menu items have been recalled in the past 5 years.
3. Something of your own design.

The goal of the project is to see that you can build a full end-to-end web application that interacts with an API and does something of interest. We’re not looking for the number of features, but just the ability to build something quickly, and that the source code is well structured with proper use of REST API’s, error handling etc… The UI does not have to be artistic, but should look professional.

The code should be delivered via git with instructions on running locally, or alternatively we can arrange to host it in our environment.

## Build Setup 

``` bash

# git clone repo
git clone https://github.com/marvindanig/fooday.git && cd fooday

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
