const applySequenceByMap = (items = []) =>
  items.map((m, i) => ({ ...m, sequence: i }))

export { applySequenceByMap }
