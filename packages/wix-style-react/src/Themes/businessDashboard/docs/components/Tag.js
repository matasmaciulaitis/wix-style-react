export const playground = `
  <ThemeProvider theme={theme()}>
    <Layout cols={1}>
      <Cell span={1}>
        <Tag size="tiny" theme="lightOutlined" removable={false}>Tag 1</Tag>
      </Cell>
      <Cell span={1}>
        <Tag size="small" theme="lightOutlined" removable={false}>Tag 2</Tag>
      </Cell>
      <Cell span={1}>
        <Tag size="medium" theme="lightOutlined" removable={false}>Tag 3</Tag>
      </Cell>
      <Cell span={1}>
        <Tag size="large" theme="lightOutlined" removable={false}>Tag 4</Tag>
      </Cell>
    </Layout>
  </ThemeProvider>
`;
