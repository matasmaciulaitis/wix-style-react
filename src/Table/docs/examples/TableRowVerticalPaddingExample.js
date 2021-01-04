/* eslint-disable */

() => {
  const data = [{ item: 'Item 1' }, { item: 'Item 2' }, { item: 'Item 3' }];
  const columns = [{ title: 'Column Name', render: row => row.item }];
  
  return (
    <Layout>
      <Cell span={6}>
        <Table rowVerticalPadding="medium" data={data} columns={columns}>
          <Table.Content />
        </Table>
      </Cell>
      <Cell span={6}>
        <Table rowVerticalPadding="large" data={data} columns={columns}>
          <Table.Content />
        </Table>
      </Cell>
    </Layout>
  );
};
