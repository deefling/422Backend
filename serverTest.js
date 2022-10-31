// const request = require('request');
// request('http://localhost:3000/getLogins', function (error, response, body) {
//     var data = JSON.parse(body);

//     console.error('error:', error);
//     console.log('statusCode:', response && response.statusCode); 
//     console.log(data['stuff'][1]['email']); 
// });


fetch('http://localhost:3000/images/akaza.png')
  .then(res=>{return res.blob()})
  .then(blob=>{
    var img = URL.createObjectURL(blob);

    let doc = new Document();
    let html = document.createElement("html");
    let imgtag = document.createElement("img");
    imgtag.setAttribute('id', 'img');
    doc.append(html);
    doc.append(imgtag);
    // Do whatever with the img
    document.getElementById('img').setAttribute('src', img);
  })

// const toDataURL = url => fetch(url)
//   .then(response => response.blob())
//   .then(blob => new Promise((resolve, reject) => {
//     const reader = new FileReader()
//     reader.onloadend = () => resolve(reader.result)
//     reader.onerror = reject
//     reader.readAsDataURL(blob)
//   }))


// toDataURL('images/akaza.png')
//   .then(dataUrl => {
//     console.log('RESULT:', dataUrl)
//   })
