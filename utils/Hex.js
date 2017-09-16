const Hex = {}

Hex.empty = () => { }
Hex.domain = 'https://kaiyuanshuwu.com'
// Hex.domain = 'http://localhost:8081'

Hex.validAny = any => any !== null && any !== undefined;
Hex.validString = str => Hex.validAny(str) && str && str.toLowerCase() !== 'null' && str.toLowerCase() !== 'undefined' && str.trim().length > 0;
Hex.validNumber = num => Hex.validAny(num);
Hex.validId = num => Hex.validAny(num) && num > 0;

Hex.sum = array => (array || []).reduce((sum, val) => sum + val, 0)

Hex.uploadImage = (filePaths, pictureKeys, cb) => {
  if (filePaths.length === 0) {
    cb()
    return
  }
  const filePath = filePaths.pop()
  wx.uploadFile({
    url: `${Hex.domain}/api/images/upload`,
    filePath,
    name: 'fileData',
    success: res => {
      pictureKeys.push(JSON.parse(res.data).pictureKey)
      Hex.uploadImage(filePaths, pictureKeys, cb)
    }
  })
}

export default Hex