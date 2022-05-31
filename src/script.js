
fetch('http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0').then((data)=>{
 // console.log(data)
 return data.json();

}).then((completedata)=>{
  console.log(completedata)
  let data1 ="";
 completedata.map((values)=>{
   return(
    data1 +=`<div class="gallery">
   
    <img 
      src=${values.urls.thumb}
      alt="flex-gallery"/>
  </div>`
   )

 })
 document.getElementById("gallery").innerHTML = data1;
}).catch((err)=>{
  console.log(err);
})