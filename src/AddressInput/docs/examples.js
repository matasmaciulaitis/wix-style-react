export const simple = `
() => {
  const predictions = [
    {
      id: 0,
      displayLabel: 'First option',
      mainLabel: 'First',
      secondaryLabel: 'option',
    },
    {
      id: 1,
      displayLabel: 'Second option',
      mainLabel: 'Second',
      secondaryLabel: 'option',
    },
  ];
  const options = predictions.map(addressInputOptionBuilder);

  return (
    <AddressInput options={options} />
  );
}
`;
