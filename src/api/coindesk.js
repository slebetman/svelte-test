
export default async function getBitcoinPrice() {
    const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
    return await response.json();
}
