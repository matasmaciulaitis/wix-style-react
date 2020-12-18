/* eslint-disable */
class TableStickyScrollExample extends React.Component {
  rowCount = 4;
  columnCount = 20;
  range = max => Array.from(Array(max).keys()).map(i => i + 1);
  data = [
    {
      employee: 'Meghan Bishop',
      department: 'Berlin',
      email: 'meghan.bishop@gmail.com',
      phone: '+44757434323',
      startDate: '14 Jun 2019',
    },
    {
      employee: 'Sarah Porter',
      department: 'Hamburg',
      email: 's.porter@yahoo.com',
      phone: '+3330940343',
      startDate: '30 Dec 2009',
    },
    {
      employee: 'Luke Dallas',
      department: 'Berlin',
      email: 'lukematthewdallas@gmail.com',
      phone: '+44734349973',
      startDate: '17 Dec 2005',
    },
    {
      employee: 'Robert Thompson',
      department: 'Berlin',
      email: 'robthompson@hotmail.com',
      phone: '+47343635343',
      startDate: '21 Jun 2000',
    },
  ];
  columnNames = Object.keys(this.data[0]);
  columnTitles = ['Employee', 'Department', 'Email', 'Phone', 'Start Date'];

  columns = this.range(this.columnCount)
    .map((columnIndex, data) => ({
      title: this.columnTitles[columnIndex - 1],
      render: row => row[this.columnNames[columnIndex - 1]],
      width: 300,
    }))
    .concat({
      title: '',
      width: 150,
      stickyActionCell: true,
      render: () => (
        <TableActionCell
          primaryAction={{ text: 'Edit', onClick: () => null }}
          popoverMenuProps={{
            placement: 'top-end',
            triggerElement: ({ toggle, open, close }) => (
              <IconButton onClick={toggle} onMouseLeave={close} skin="inverted">
                <Icons.More />
              </IconButton>
            ),
          }}
          secondaryActions={[
            {
              icon: <Icons.Star />,
              onClick: () => null,
              text: 'Star',
            },
          ]}
        />
      ),
    });

  render() {
    return (
      <Table
        horizontalScroll
        stickyColumns={2}
        onRowClick={() => null}
        showSelection
        data={this.data}
        columns={this.columns}
      >
        <Table.Content />
      </Table>
    );
  }
}
