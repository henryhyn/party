const Hex = {}

Hex.empty = () => { }
Hex.domain = 'https://kaiyuanshuwu.com'
// Hex.domain = 'http://localhost:8081'

Hex.validAny = any => any !== null && any !== undefined;
Hex.validString = str => Hex.validAny(str) && str && str.toLowerCase() !== 'null' && str.toLowerCase() !== 'undefined' && str.trim().length > 0;
Hex.validNumber = num => Hex.validAny(num);
Hex.validId = num => Hex.validAny(num) && num > 0;

Hex.sum = array => (array || []).reduce((sum, val) => sum + val, 0)

export default Hex