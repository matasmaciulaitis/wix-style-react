export const groupType = `
<Box direction="vertical">
<AvatarGroup type="stretched" items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>
<AvatarGroup maxItems={2} type="condensed" items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>
</Box>
`;

export const size = `
<Box direction="vertical">
<AvatarGroup size="small" items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>
<AvatarGroup size="medium" items={[{name: 'first user'}, {name: 'second user'}, {name: 'third avatar'}]}/>
</Box>
`;

export const divider = `
<AvatarGroup showDivider items={[{name: 'first avatar'}, {name: 'second avatar'}, {name: 'third avatar'}]}/>
`;

export const moreIndicator = `
<AvatarGroup maxItems={2} items={[{name: 'first avatar'}, {name: 'second avatar'}, {name: 'third avatar'}]} moreItemContent={<div>Hello World!</div>}/>
`;
