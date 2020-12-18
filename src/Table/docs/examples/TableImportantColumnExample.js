/* eslint-disable */

class TableImportantColumnExample extends React.Component {
  state = {
    data: [
      {
        name: 'Sara Porter',
        country: 'Canada',
        orders: 2,
        lastActivity: 'Sep 9, 2020',
      },
      {
        name: 'Michael Baldwin',
        country: 'Germany',
        orders: 43,
        lastActivity: 'Sep 7, 2020',
      },
      {
        name: 'Alex Halifax',
        country: 'United Kingdom',
        orders: 12,
        lastActivity: 'Jun 30, 2020',
      },
      {
        name: 'Paul Sheffield',
        country: 'US',
        orders: 0,
        lastActivity: 'Sep 18, 2019',
      },
    ],
  };

  render() {
    return (
      <Table
        data={this.state.data}
        columns={[
          { title: 'Name', render: row => row.name, important: true },
          { title: 'Country', render: row => row.country },
          { title: 'Orders', render: row => row.orders },
          { title: 'Last Activity', render: row => row.lastActivity },
          {
            title: '',
            render: rowData => (
              <TableActionCell
                primaryAction={{
                  skin: 'inverted',
                }}
              />
            ),
          },
        ]}
      >
        <Table.Content />
      </Table>
    );
  }
}
export default TableImportantColumnExample;
