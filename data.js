

async function loadJsonData(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Network response was not ok. Status code: ' + response.status);
    }

    return await response.json();
}

function toDataSet(json) {
    let result = [];

    for (let i = 0; i < json.length; i++) {
        const quantity = json[i].quantity || 1;
        for (let j = 0; j < quantity; j++) {
            result.push(json[i])
        }
    }

    return result
}

const dataSets = {
    items4: [
        'foo',
        'bar',
    ],
    items2: [
        'foo',
        'bar',
    ],
    items3: [
        'foo',
        'bar',
    ],
};

loadJsonData('wheel-items-1.json')
    .then(json => {
        dataSets.items4 = toDataSet(json);
    })
    .catch(error => {
        console.error(error);
    })
;

loadJsonData('wheel-items-2.json')
    .then(json => {
        dataSets.items2 = toDataSet(json);
    })
    .catch(error => {
        console.error(error);
    })
;

loadJsonData('wheel-items-3.json')
    .then(json => {
        dataSets.items3 = toDataSet(json);
    })
    .catch(error => {
        console.error(error);
    })
;


