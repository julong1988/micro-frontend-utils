# Micro FrontEnd Utils

### Guide 
```js
// react
import react from 'react'
import ReactDOM from 'react-dom'
import { moduleLoader } from '@julong/micro-frontend-utils';
moduleLoader('ground1', <App />, ReactDOM)

// vue
import { moduleLoader } from '@julong/micro-frontend-utils';
const app = new Vue({
  router,
  render: h => h(App),
})
moduleLoader('ground3', app);
```
