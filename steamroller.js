var steamrollArray = arr => arr.reduce((a, e) => a.concat(Array.isArray(e) ? steamrollArray(e) : e), [])
