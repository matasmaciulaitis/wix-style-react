# Support

### Troubleshooting Guide

These are the recommended steps to troubleshoot issues when we struggle with a component or a testkit usage:
1. Check whether there is an example that fits your scenario in [Wix Style React Storybook](https://www.wix-style-react.com).
2. Check our [Cheetsheet](https://www.wix-style-react.com/?path=/story/introduction-cheatsheet--components-cheatsheet) which includes a view of most of the library components inventory and links to the relevant documentation pages.
3. Use the [Playground](https://www.wix-style-react.com/?path=/story/introduction-playground--playground) to easily test the component abilities.
4. You may find an answer to your question in our [Frequently Asked Questions](https://github.com/wix/wix-style-react/tree/master/docs/FAQ#frequently-asked-questions) article.
5. Each component within the library is tested with our on drivers. This is a great way to document the proper usage of the component and drivers. You can learn from the tests on how the component should properly used and tested. Checkout the [sourcecode](https://github.com/wix/wix-style-react). Each component's tests files are listed under:
`src/ComponentName/test/...`.
6. Strip down abilities until you get to the bottom of it. Saying we have for example the `<Table/>` component which does not work as we expect it to. All the above steps did not help us. The thing we would do is one of the two:
    - Take the most basic and clean table example and on top of it add your own feature in small parts.
    - Take your current code which does not work and strip it's features slowly, one by one, until you reach to the point where things are working, then slowly add them back again so you will be able to find the root cause of the problem.
7. Still stuck? Let's debug.
   It is very easy to run the storybook on your local machine.
   Instructions can be found [here](https://github.com/wix/wix-style-react/blob/master/CONTRIBUTING.md).
   We suggest placing `debugger` inside the story of your rebellious component. For example [Table story](https://github.com/wix/wix-style-react/blob/1b3e00fb624929927b3921905f8db8bdb011c427/src/Table/docs/index.story.js).
8. Something is broken? Have you updated your Wix Style React version? Check the [change log](https://github.com/wix/wix-style-react/blob/master/CHANGELOG.md) for breaking changes and the [migration guide](https://github.com/wix/wix-style-react/blob/master/MIGRATION.md) for migrating to the latest Wix Style React version. Also, make sure that you don't use a lock file.
9. Create [a GitHub issue](####new-issue-guidelines).
10. Have you managed to resolved the issue? A contribution to our [Frequently Asked Questions](https://github.com/wix/wix-style-react/tree/master/docs/FAQ#frequently-asked-questions) article is welcome! Check out our [contribution guide](https://github.com/wix/wix-style-react/blob/master/CONTRIBUTING.md) for more information.


##### Wix Employees
Here are few more steps which can help with troubleshooting an issue we struggle with:
- Search `#wix-style-react` slack channel for similar problems.
- Consult with your Guild Masters (Organization Wix Style React Expert / Heavy Users).
- Create a new yoshi project and try to recreate the issue in a clean environment. This can be helpful in order to check whether it's an issue with the component, driver or the project we currently work on.
- Check with your UX designer whether the desired spec was reviewed by Wix Style React UX team.
- Consult with `#wix-style-ux` slack channel for UX related questions.

### GitHub ![github-mark](./docs/assets/GitHub-Mark-32px.png)

We use GitHub issues as a bug and feature request tracker.
If you think you have found a bug, or have a new feature idea- please start by making sure it hasn't already been [reported or fixed](https://github.com/wix/wix-style-react/issues).
You can search through existing issues and pull requests to see if someone has reported one similar to yours.

If it does not exist, please [open a github issue](https://github.com/wix/wix-style-react/issues/new/choose)

#### New issue guidelines
- Please begin the title with `<ComponentName/>` where appropriate, and use a succinct description that helps others find similar issues.
  - `<FilePicker/>`- `<some feature>` doesn't work ❌. [Example](https://github.com/wix/wix-style-react/issues/6202)
  - `<Table/>` - Add support for `<some feature>` ✅ [Example](https://github.com/wix/wix-style-react/issues/5668)

- Please don't group multiple topics in one issue – each issue should have its own github issue.
- Please add a link with a recreation of the issue within our [Playground](https://www.wix-style-react.com/?path=/story/introduction-playground--playground):
    1. Edit the code snippet so that it demonstrate the issue.
    2. Click ![save-button](./docs/assets/playgroundSaveButton.png) (located on the top right side of the code editor).
    3. Copy the generated link to the issue description ![github-mark](./docs/assets/generatedLink.png)
    4. Fill in all the other issue template sections


### Resources 📖

New to Wix Style React? It's easy to learn if you know where to start!
Check out the [Getting Started](https://www.wix-style-react.com/?path=/story/introduction-getting-started--getting-started) page.


### Supported versions

The current status of each Wix Style React version is as follows:

| Version        | Active / Inactive development |
| ------------- |:-------------:|
| [Version 9](https://www.wix-style-react.com)| ✅ |
| [Version 8](https://wix-style-react-v8.now.sh)| ❌ |
| [Version 7](https://wix-style-react-v7.now.sh)| ❌ |
| [Version 6](https://wix-wix-style-react-v6.surge.sh)| ❌ |


#####  Upgrade from older versions
Read and follow our migration guides:

- From 7.x to 8.x/9.x read [V8/V9 migration guide](https://github.com/wix/wix-style-react/blob/master/MIGRATION.md)
- From 6.x to 7.x read [V7 migration guide](https://github.com/wix/wix-style-react/blob/version_7.x/docs/migration/v6-v7.md)
- From 5.x to 6.x read [V6 migration guide](https://github.com/wix/wix-style-react/blob/version_7.x/docs/migration/v5-v6.md)
- From 4.x to 5.x read [V5 migration guide](https://github.com/wix/wix-style-react/blob/version_7.x/docs/migration/v4-v5.md)
