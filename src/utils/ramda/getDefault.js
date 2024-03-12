const filterQuery = pipe(defaultTo([]), filter(propEq('key', 'QUERY')))
filter(propEq('key', 'QUERY'))(list)
