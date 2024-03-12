const getCheckedByKeys = (items, includedKeys) =>
  items.map((item) => {
    if (includedKeys && includedKeys.includes(item.uid)) {
      item.checked = true
    } else {
      item.checked = false
    }
    return item
  })

export { getCheckedByKeys }
