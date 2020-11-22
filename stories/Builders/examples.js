export const buildersExample = `
  <DropdownLayout
    visible
    inContainer
    selectedId={1}
    options={[
     listItemSectionBuilder({
        title: 'Admins',
        type: 'subheader',
        suffix: 'Edit',
      }),
      listItemSelectBuilder({
        id: 1,
        checkbox: true,
        prefix: <Avatar size="size30" />,
        title: 'Gracie-May Marsden',
        subtitle: 'Sderot Ben Gurion 75',
        suffix: '20 Jan 2000',
      }),
      listItemActionBuilder({
        id: 2,
        size: 'medium',
        prefixIcon: <Icons.Edit />,
        title: 'medium',
      }),
     badgeSelectItemBuilder({
      id: 3,
      text: 'This is short',
      subtitle: 'This is a short subtitle',
      skin: 'general',
      ellipsis: true,
    }),
      listItemEditableBuilder({
        id: 4,
        onApprove: val => console.log(val),
        onCancel: () => console.log('cancel'),
        cancelButtonTooltipContent: 'Cancel',
        approveButtonTooltipContent: 'Approve',
      }),
    ]}
  />
`;
