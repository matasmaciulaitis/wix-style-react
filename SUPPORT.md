# Support

## Table of Content

- [Introduction](##introduction)
  * [Components and Testkit Usage](###omponents-and-testkit-usage)
  * [Frequently Asked Questions](###frequently-asked-questions)
  * [Playground](###playground)
  * [Cheatsheet](###cheatsheet)
  * [Resources](###resources)
- [Debugging Strategies and Reporting an issue](##debugging-strategies-and-reporting-an-issue)
  * [Debugging Strategies](###debugging-strategies)
  * [Reporting an issue](###reporting-an-issue)
    + [Have you managed to resolve the issue?](####have-you-managed-to-resolve-the-issue?)
  * [Wix Employees](###wix-employees)
- [Supported versions](##supported-versions)
  * [Upgrade from older versions](###upgrade-from-older-versions)


## Introduction
Each component has a story page that describes all the "interesting" states in which a component supports.
A story page has one or more of the following sections:
- **Description:** Contains a short description of the component usage, an example of how to import it and examples of common usages and features.
- **API:** Detailed section with all the props names, types, default values, required values and descriptions.
- **Testkit:** Contains an import examples and API description of the component testkit.
- **Playground:** A graphical UI to interact with a component's arguments dynamically, without needing to code. It creates a code snippet which can be used in your application.

### Components and Testkit Usage
Each component within the library is tested with our on drivers. This is a great way to document the proper usage of the component and drivers. You can learn from the tests on how the component should properly used and tested.
Checkout the [sourcecode](https://github.com/wix/wix-style-react). Each component's tests files are listed under:
`src/ComponentName/test/...`.

### Frequently Asked Questions
You may find an answer to your question at the [Frequently Asked Questions](https://github.com/wix/wix-style-react/tree/master/docs/FAQ#frequently-asked-questions) article.

### Playground
You can use the [Playground](https://www.wix-style-react.com/?path=/story/introduction-playground--playground) to easily test the component abilities. In order to share your code snippet with others, follow the following steps:
1. Edit the code snippet.
2. Click ![save-button](https://raw.githubusercontent.com/wix/wix-style-react/master/docs/assets/playgroundSaveButton.png) which located on the top right side of the code editor.
3. A generated url will be generated which can be shared with others. ![generated-link](https://raw.githubusercontent.com/wix/wix-style-react/master/docs/assets/generatedLink.png)

### Cheatsheet
The components inventory is displayed at the [Cheetsheet](https://www.wix-style-react.com/?path=/story/introduction-cheatsheet--components-cheatsheet) page which contains examples and links to the relevant documentation pages.

### Resources 📖
New to Wix Style React? It's easy to learn if you know where to start!
Check out the [Getting Started](https://www.wix-style-react.com/?path=/story/introduction-getting-started--getting-started) page.

## Debugging Strategies and Reporting an issue

### Debugging Strategies
There are two recommended strategies to better understand the root cause of an issue:
- Using the most basic and clean example and on top of it adding your own feature in small parts.
- Taking your current code and strip it's features slowly, one by one, until you reach to the point where things work. Than, slowly add them back again so you are able to find the what causes the issue.

### Reporting an issue ![github-mark](https://raw.githubusercontent.com/wix/wix-style-react/master/docs/assets/GitHub-Mark-32px.png)
We use GitHub issues as bugs and feature requests tracker.
If you think you have found a bug, or have a new feature idea- please start by making sure it hasn't already been [reported or fixed](https://github.com/wix/wix-style-react/issues).
You can search through existing issues and pull requests to see if someone has reported a similar issue to yours.

If it does not exist, please follow the following guidelines:
- Click [here](https://github.com/wix/wix-style-react/issues/new/choose) to choose the relevant issue template.
- Please begin the title with `<ComponentName/>` where appropriate, and use a succinct description that helps others find similar issues.
  - `<FilePicker/>`- `<some feature>` doesn't work ❌ [(Example)](https://github.com/wix/wix-style-react/issues/6202)
  - `<Table/>` - Add support for `<some feature>` ✅ [(Example)](https://github.com/wix/wix-style-react/issues/5668)

- Please don't group multiple topics in one issue – each issue should have its own github issue.
- Please add a link with a recreation of the issue within our [Playground](###playground).

#### Have you managed to resolve the issue?
- ✅ A contribution to our [Frequently Asked Questions](https://github.com/wix/wix-style-react/tree/master/docs/FAQ#frequently-asked-questions) article is welcome! Check out our [contribution guide](https://github.com/wix/wix-style-react/blob/master/CONTRIBUTING.md) for more information.
- ❌ Create [a GitHub issue](####reporting-an-issue).

### Wix Employees
Here are few more steps which can help with troubleshooting an issue we struggle with:
- Debug storybook on your local machine. You can place a `debugger` inside the story of your rebellious component.
- Search `#wix-style-react` slack channel for similar problems.
- Consult with your Guild Masters (Organization Wix Style React Expert / Heavy Users).
- Create a new yoshi project and try to recreate the issue in a clean environment. This can be helpful in order to check whether it's an issue with the component, driver or the project we currently work on.
- Check with your UX designer whether the desired spec was reviewed by Wix Style React UX team.
- Consult with `#wix-style-ux` slack channel for UX related questions.

## Supported versions

The current status of each Wix Style React version is as follows:

| Version        | Active / Inactive development |
| ------------- |:-------------:|
| [Version 9](https://www.wix-style-react.com)| ✅ |
| [Version 8](https://wix-style-react-v8.now.sh)| ❌ |
| [Version 7](https://wix-style-react-v7.now.sh)| ❌ |
| [Version 6](https://wix-wix-style-react-v6.surge.sh)| ❌ |


###  Upgrade from older versions
Read and follow our migration guides:

- From 7.x to 8.x/9.x read [V8/V9 migration guide](https://github.com/wix/wix-style-react/blob/master/MIGRATION.md)
- From 6.x to 7.x read [V7 migration guide](https://github.com/wix/wix-style-react/blob/version_7.x/docs/migration/v6-v7.md)
- From 5.x to 6.x read [V6 migration guide](https://github.com/wix/wix-style-react/blob/version_7.x/docs/migration/v5-v6.md)
- From 4.x to 5.x read [V5 migration guide](https://github.com/wix/wix-style-react/blob/version_7.x/docs/migration/v4-v5.md)
