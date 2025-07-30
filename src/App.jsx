import React, { useState } from 'react'
import QRCode from 'qrcode'

const App = () => {
  const [url, setUrl] = useState('')
  const [qrcode, setQrcode] = useState('')

  const GenerateQr = () => {
    QRCode.toDataURL(url,
      {
        width: 800,
        margin: 2
      }, (err, url) => {
        if (err) {
          return console.error(err)
        }
        else {
          console.log(url);
          setQrcode(url)

        }
      })
  }
  return (
    <div className='app'>
      <h2>QR Code Generator</h2>
      <input type="text" placeholder='e.g:https://www.googlr.com' value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={GenerateQr}>Generate</button>
      {qrcode && <>
        <img src={qrcode} alt="" />
        <a href={qrcode} download='qrcode.png'>Download</a>
      </>}

    </div >
  )
}

export default App