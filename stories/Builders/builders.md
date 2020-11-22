1. Import the testkit as described under `Testkit` section:
```js
import { ListItemSelectTestkit } from 'wix-style-react/dist/testkit';
```

2. Import the desired builder:
```js
import { listItemSelectBuilder } from 'wix-style-react';
```

3. Render the desired builder within the `<DropdownLayout/>`. Don't forget to provide `dataHook` and `id`.
```js
      const dataHook = 'select-builder';
      const title = 'section title';
      const options = [
        listItemSelectBuilder({
          id: 0,
          title,
          dataHook,
        }),
      ];
      const { driver } = render(<DropdownLayout visible options={options} />);
```

4. Use the `getOptionElementById` method of the `DropdownLayout` driver to get the option native element:
```js
const wrapper = await driver.getOptionElementById(0);
```

5. Initialize the suitable testkit:
```js
const testkit = ListItemSelectTestkit({ wrapper, dataHook });
```

6. Use the desired testkit method:
```js
const listItemSelectTitle = await testkit.getTitle();
```
