/* eslint-disable */

class TableSkinNeutralExample extends React.Component {
  state = {
    data: [{ item: 'Item 1' }, { item: 'Item 2' }, { item: 'Item 3' }],
  };

  render() {
    return (
      <Layout>
        <Cell span={6}>
          <Table
            data={this.state.data}
            skin="standard"
            columns={[{ title: 'Column Name', render: row => row.item }]}
          >
            <Table.Content />
          </Table>
        </Cell>
        <Cell span={6}>
          <Table
            data={this.state.data}
            skin="neutral"
            columns={[{ title: 'Column Name', render: row => row.item }]}
          >
            <Table.Content />
          </Table>
        </Cell>
      </Layout>
    );
  }
}

