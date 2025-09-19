let meta = {
    value: "Aprender JavaScript 1",
    checkout: false
}

let metas  = [
    meta,

    { value: "Aprender JavaScript", checked: false },
    { value: "Aprender React", checked: false },
    { value: "Aprender Node.js", checked: false }
]

console.log(metas);

function insertMeta( value, checked) {
    metas.push({ value, checked });
}

insertMeta("Aprender HTML e CSS", false);
console.log(metas);

function metaConcluida(index) {
    metas[index].checked = true;
}

metaConcluida(0);
console.log(metas);

function removerMeta(index) {
    metas.splice(index, 1);
}

removerMeta(1);
console.log(metas);