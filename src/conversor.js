const fs = require('fs');

let data = fs.readFileSync('data/words.txt').toString();
data = data.replaceAll('\r', '')

const data_list = data
    .split('\n')
    .map(word => {
        return { length: word?.length, word }
    })

fs.writeFileSync('data/json_words.json', JSON.stringify(data_list))

console.log(data_list)