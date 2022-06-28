export default function getFact () {
    return fetch('https://catfact.ninja/fact')
        .then(x => x.json())
        .then(x => x.fact);
}