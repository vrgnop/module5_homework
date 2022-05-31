let map = new Map ([
    ['Moscow', 'Russia'],
    ['Washington', 'USA'],
    ['London', 'Great Britain'],
    ])

for (let capitals of map.keys()) {
     console.log(` Ключ - ${capitals}, значение - ${map.get(capitals)}`)
}