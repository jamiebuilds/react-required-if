# react-required-if

> React PropType to conditionally add `.isRequired` based on other props

## Install

```sh
$ npm install --save react-required-if
```

## Usage

```js
import React, {PropTypes} from 'react';
import requiredIf from 'react-required-if';

export default class Component extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onClick: requiredIf(PropTypes.func, props => !props.disabled)
  };

  render() {
    return <button onClick={this.props.onClick}>Click Me</button>
  }
}
```

**Result:**

```js
import React from 'react';
import {render} from 'react-dom';
import Component from './Component';

render(
  <div>
    <Component onClick={() => {})/> // ok
    <Component disabled={true}/> // ok
    <Component/> // NOooooooo
  </div>,
  document.getElementById('root')
);
```
