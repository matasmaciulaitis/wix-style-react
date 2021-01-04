/* eslint-disable */

() => {
  const data = [{ item: 'Item 1' }, { item: 'Item 2' }, { item: 'Item 3' }];
  const columns = [{ title: 'Column Name', render: row => row.item }];

  return (
    <Layout>
      <Cell span={6}>
        <Table skin="standard" data={data} columns={columns}>
          <Table.Content />
        </Table>
        <Box align="center" padding="small">
          <Text size="small">Standard Skin</Text>
        </Box>
      </Cell>
      <Cell span={6}>
        <Table skin="neutral" data={data} columns={columns}>
          <Table.Content />
        </Table>
        <Box align="center" padding="small">
          <Text size="small">Neutral Skin</Text>
        </Box>
      </Cell>
    </Layout>
  );
};
