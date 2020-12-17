/* eslint-disable */

class TableRowDetailsExample extends React.Component {
  state = {
    data: [
      {
        task: 'Upload New Collection Products',
        date: '23 Sep 2020',
        expandable: true,
        expanded: false, 
      },
      { task: 'Q3 Sales Results Doc', date: '31 Oct 2020', expandable: false },
      {
        task: 'Staff Performace Reviews',
        date: '12 Oct 2020',
        expandable: true,
        expanded: false,
      },
      { task: 'Budget Planning', date: '24 Nov 2020', expandable: true, expanded: false, },
    ],
  };

  renderRowDetails(row) {
    if (row.expandable) {
      return (
        <Box padding="20px">
          <Text>
            {`This is an expandable space where you see the row details for ${row.task} with a due date of ${row.date}.`}
          </Text>
        </Box>
      );
    }
  }

  render() {
    return (
      <Table
        data={this.state.data}
        columns={[
          { title: 'Task', render: row => row.task },
          { title: 'Due Date', render: row => row.date },
          {
            render: row =>
              row.expandable ? (
                <TableActionCell
                  primaryAction={{
                    text: !row.expanded ? 'Expand' : 'Collapse',
                    skin: 'inverted',
                    onClick: row.expanded = !row.expanded,
                  }}
                />
              ) : (
                ''
              ),
          },
        ]}
        rowDetails={row => this.renderRowDetails(row)}
      >
        <Table.Content />
      </Table>
    );
  }
}
