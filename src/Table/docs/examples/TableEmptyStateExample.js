/* eslint-disable */

() => {
    return (
      <Card>
        <Table>
          <TableToolbar>
            <TableToolbar.ItemGroup>
              <TableToolbar.Item>
                <TableToolbar.Title>Published</TableToolbar.Title>
              </TableToolbar.Item>
            </TableToolbar.ItemGroup>
          </TableToolbar>
          <Table.EmptyState
            title="No Published Posts Yet"
            subtitle="Once you publish posts, you'll see them here."
            image={<Image height={120} width={120} borderRadius="60px" />}
          >
            <TextButton prefixIcon={<Icons.Add />}>Create New Post</TextButton>
          </Table.EmptyState>
        </Table>
      </Card>
    );
}
