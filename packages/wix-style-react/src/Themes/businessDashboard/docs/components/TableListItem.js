export const playground = `
  <ThemeProvider theme={theme()}>
    <Card>
      <Card.Content>
        <Layout cols={1}>
          <TableListItem
            verticalPadding="small"
            showDivider
            options={[
              { value: 'Personal Finance' },
              { value: '7 posts' },
              { value: 'Last update on 27 April 2020' },
            ]}
            onClick={() => { }}
          />
        </Layout>
      </Card.Content>
    </Card>
  </ThemeProvider>
`;
