/* eslint-disable */

class TableWithUnselectableRowsExample extends React.Component {
  state = {
    data: [
      { category: 'All posts', posts: '123 posts', unselectable: true },
      { category: 'Business', posts: '76 posts' },
      { category: 'Culture', posts: '342 posts' },
      { category: 'History', posts: '1024 posts' },
    ],
  };

  render() {
    return (
      <Card>
        <Table
          data={this.state.data}
          columns={[
            { title: 'Name', render: row => row.category },
            { title: 'Type', render: row => row.posts },
            { render: row => <TableActionCell secondaryActions={[{}]} /> },
          ]}
          showSelection
        />
      </Card>
    );
  }
}
