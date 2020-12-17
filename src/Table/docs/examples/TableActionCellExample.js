/* eslint-disable */

class TableActionCellExample extends React.Component {
  state = {
    data: [
      { member: 'Meghan Bishop', email: 'meghan.bishop@gmail.com' },
      { member: 'Sara Porter', email: 's.porter@yahoo.com' },
      { member: 'Deborah Rhodes', email: 'deborahmariarhodes@gmail.com' },
      { member: 'Walter Jenning', email: 'walter.jenning@carrental.com' },
    ],
  };

  render() {
    return (
      <Table
        data={this.state.data}
        columns={[
          { title: 'Member', render: row => row.member },
          { title: 'Email', render: row => row.email },
          {
            title: '',
            render: rowData => (
              <TableActionCell
                upgrade
                primaryAction={{
                  text: 'Edit',
                  skin: 'standard',
                  onClick: () => window.alert(`Editing data of member ${rowData.member}`),
                }}
                secondaryActions={[
                  {
                    text: 'Star',
                    icon: <Icons.Star />,
                    onClick: () => window.alert(`Starring data of member ${rowData.member}`),
                  },
                  {
                    text: 'Duplicate',
                    icon: <Icons.Duplicate />,
                    onClick: () => window.alert(`Duplicating data of member ${rowData.member}`),
                  },
                  {
                    text: 'Download',
                    icon: <Icons.Download />,
                    onClick: () => window.alert(`Downloading data of member ${rowData.member}`),
                  },
                  {
                    text: 'Print',
                    icon: <Icons.Print />,
                    onClick: () => window.alert(`Printing data of member ${rowData.member}`),
                  },
                ]}
                // How many actions are visible, whereas the rest would be shown within a popover menu
                numOfVisibleSecondaryActions={2}
              />
            ),
          },
        ]}
        onRowClick={(rowData, rowNum) => console.log(`Row data is: ${JSON.stringify(rowData)}. Row num is: ${rowNum}`)}
      >
        <Table.Content />
      </Table>
    );
  }
}
export default TableActionCellExample
