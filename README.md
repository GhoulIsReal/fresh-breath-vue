# fresh-breath-vue

>

[![NPM](https://img.shields.io/npm/v/fresh-breath-vue.svg)](https://www.npmjs.com/package/fresh-breath-vue) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save fresh-breath-vue
```

## Quickstart

```js
import { MyComponent } from "fresh-breath-vue";

export default {
  name: "UsageExample",
  components: {
    MyComponent,
  },
};
```

```html
<my-component>
  Example
</my-component>
```

## Components

#### Anchor

| Props     | Desciption                                            | Type    | Default |
| :-------- | :---------------------------------------------------- | :------ | :------ |
| color | can be set to any supported CSS value e.g. #fff | string  | - |   
| hover | adds animation on mouse hover | boolean | false |   
| underline | adds a line under anchor on hover | boolean | false |   
| Extra | object with `Content` and `position` keys which<br>adds an icon near the anchor, first is icon path<br>and second sets position to either `left` or `right` | object | - |  
| size | can be set to `large`/`medium`/`small` | string | medium |     

#### Button

| | | | |
| :----- | :------------------------------ | :----- | :------ | 
| type   | can be set to `success`/`error` | string | -       |   
| hover  | adds hover effect | boolean | false |   
| inline | makes button thinner | boolean | false |    
  
#### Breadcrumb
   
Simple breadcrumb menu with only one `items` array prop, each item is an object with ``link`` and ``text`` keys,<br />first defines a  path to follow and second is a menu item's button value.  

#### Card

Commonly seen card component, consists of image, heading and paragraph.  **Important!**The card components' order depends on integer 1-3 at the end of prop. Thus if you want card to have image at the top, heading in the middle and paragraph at bottom props should be like this `img1`/`heading2`/`paragraph3`.  Change numbers in a way you want your card component to be rendered.

| Props      | Desciption                                        | Type | Default |
| :--------- | :------------------------------------------------ | :--- | :------ |  
| img | object with `url` and `alt` keys which<br>specifies card's image, first is an image path<br>and second sets the name of your  image | object | - |    
| heading | sets card's heading | string | - |   
| paragraph | sets card's content | string | - |  

#### Search

| | | | | 
| :-------- | :--------------------------------------- | :----- | :------ |  
| width     | sets search bar's width                  | number | 380px   | 
| value | value in `v-model` which holds search's value | variable | - |  
| submit | function to be executed on search submit | function | - | 

## Layout

#### Flex

Layout which represents a common css flex property.

| Props      | Desciption                          | Type | Default |
| :--------- | :---------------------------------- | :--- | :------ | 
| direction  | sets flex's direction, can be `column` / `row` /<br>`column-reverse` / `row-reverse` | string | row |
| align      | sets flex items' vertical alignment, can be<br>`flex-start` / `center` / `flex-end` / `revert` | string | center |
| justify    | sets flex items' horizontal alignment, can be<br>`flex-start` / `center` / `flex-end` / `revert` /<br>`space-between` / `space-around` | string | center |
| wrap       | specifies whether items should be wrapped | boolean | false |

#### Grid

Represents grid layout

| | | | |
| :--------- | :---------------------------------- | :----- | :------ | 
| gap        | sets gap between grid items         | string | 1rem |
| evenly     | makes all grid items same width, can be also<br>be a value which specifies items minimal width | boolean<br>string  | 300px |  
| justify    | same as flex's `justify` prop       | string | - |
| cols       | sets grid's column number           | number | 4 |

#### Table

| | | | |
| :----------- | :---------------------------------------------- | :------ | :------ | 
| tableHeading | array of strings to appear in table's header    | array   | - |
| tableData    | array of objects to fill table's rows and cells | array   | - |
| wrap         | whether to wrap table's cells                   | boolean | false |

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)
