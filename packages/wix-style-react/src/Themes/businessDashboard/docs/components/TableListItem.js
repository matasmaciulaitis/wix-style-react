export const playground = `
  <ThemeProvider theme={theme()}>
    <Layout cols={1}>
      <TableListItem
        showDivider
        options={[
          { value: 'Personal Finance' },
          { value: '7 posts' },
          { value: 'Last update on 27 April 2020' },
        ]}
        onClick={() => { }}
      />
    </Layout>
  </ThemeProvider>
`;
