export const groupType = `
<Layout cols={1}>
<AvatarGroup type="stretched" items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>
<AvatarGroup type="condensed" items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>
</Layout>
`;

export const maxItems = `
<AvatarGroup
  maxItems={5}
  items={[
    { name: 'first user' },
    { name: 'second user' },
    { name: 'third avatar' },
    { name: 'fourth avatar' },
    { name: 'fifth avatar' },
    { name: 'sixth avatar' }
  ]}
/>;

`;
export const size = `
<Layout cols={1}>
<AvatarGroup size="small" items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>
<AvatarGroup size="medium" items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>
</Layout>
`;

export const divider = `
<AvatarGroup showDivider items={[{name: 'first avatar'}, {name: 'second avatar'}, {name: 'third avatar'}]}/>
`;
