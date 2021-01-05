/* eslint-disable */

() => {
  const data = (item) => [{ item: item }, { item: item }, { item: item }];
  const columns = [{ title: 'Column Name', render: row => row.item }];
  
  return (
    <Layout>
      <Cell span={4}>
        <Table rowVerticalPadding="small" data={data('Small')} columns={columns}>
          <Table.Content />
        </Table>
      </Cell>
      <Cell span={4}>
        <Table rowVerticalPadding="medium" data={data('Medium')} columns={columns}>
          <Table.Content />
        </Table>
      </Cell>
      <Cell span={4}>
        <Table rowVerticalPadding="large" data={data('Large')} columns={columns}>
          <Table.Content />
        </Table>
      </Cell>
    </Layout>
  );
};
