// consrtucture object diffrent hotel
function Hotel(hotelName2, location2, image2) {
    this.hotelName = hotelName2;
    this.location = location2;
    this.image = image2;
  }


  // consrtucture object diffrent standard room
function SweetRoom(price2, roomImage2, NumberBed2, description2) {
    this.price = price2;
    this.roomImage= roomImage2;
    this.NumberBed = NumberBed2;
    this.description = description2;
  }


  // consrtucture object diffrent family room
function FamilyRoom(price2, roomImage2, NumberBed2, description2) {
    this.price = price2;
    this.roomImage= roomImage2;
    this.NumberBed = NumberBed2;
    this.description = description2;
  }

  // consrtucture object diffrent standard room
function StandardRoom(price2,roomImage2, NumberBed2, description2) {
    this.price = price2;
    this.roomImage= roomImage2;
    this.NumberBed = NumberBed2;
    this.description = description2;
  }
//how many room in each hotel
  function numHotelRoomFunc(hotelName, numStandardRoom, numFamilyRoom, numSweetRoom, standardRoom,familyRoom, sweetRoom) {
    this.hotelName = hotelName;
    this.numFamilyRoom = numFamilyRoom;
    this.numSweetRoom = numSweetRoom;
    this.standardRoom = standardRoom;
    this.familyRoom = familyRoom;
    this.sweetRoom = sweetRoom;

  }


const hotelThailand = new Hotel("White Lotus Thailand", "Thailand", "https://plus.unsplash.com/premium_photo-1683134041222-fb1cb31c1203?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGh1a2V0JTIwJTIwYmVhY2glMjAlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D");

const hotelThailand2 = new Hotel("Pink Lotus Thailand", "Thailand", "https://plus.unsplash.com/premium_photo-1670002464796-3a3136fe8808?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBob3R0ZWwlMjB0aGFpbGFuZHxlbnwwfHwwfHx8MA%3D%3D");

const hotelThailand3 = new Hotel(" Spa Lotus Thailand", "Thailand", "https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYWNoJTIwaG90dGVsJTIwdGhhaWxhbmR8ZW58MHx8MHx8fDA%3D");



const hotelDubai = new Hotel("Lotus Dubai", "Dubai", "https://plus.unsplash.com/premium_photo-1661962790754-9a1a5b5e334a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHViYWklMjBiZWFjaCUyMCUyMHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D");
const hotelHawaii = new Hotel("Lotus Hawaii", "Hawaii", "https://images.unsplash.com/photo-1646843132316-e63a43d8a251?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhd2FpaSUyMGJlYWNoJTIwJTIwcmVzb3J0fGVufDB8fDB8fHww");

var hotel = [hotelThailand,hotelThailand2,hotelThailand3,hotelDubai,hotelHawaii ]



var standardRoom = new StandardRoom(100, "https://plus.unsplash.com/premium_photo-1681822718579-314dd234fb6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tJTIwc3RhbmRhcmR8ZW58MHx8MHx8fDA%3D",1, "")//price, image , no of bed, description
var familyRoom = new FamilyRoom(200, "https://plus.unsplash.com/premium_photo-1663091084165-5623c80cea52?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjBmYW1pbHklMjByb29tfGVufDB8fDB8fHww ", 2, "")
var sweetRoom = new SweetRoom(300, " https://plus.unsplash.com/premium_photo-1664476831905-36395f089394?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBzd2VldCUyMHJvb20lMjB3ZWRkaW5nfGVufDB8fDB8fHww",1, "")
var hotelThailandRoom = new numHotelRoomFunc("White Lotus Thailand",20,10,5, standardRoom,familyRoom, sweetRoom)//num standard romm, family, sweet

 standardRoom = new StandardRoom(200, " ",1, "")//price, image , no of bed, description
 familyRoom = new FamilyRoom(300, " ", 2, "")
 sweetRoom = new SweetRoom(500, " ",1, "")
 var hotelHawaiiRoom = new numHotelRoomFunc("Lotus Hawaii",30,20,10, standardRoom,familyRoom, sweetRoom)//Lotus Hawaii --line51-num standard romm, family, sweet

 standardRoom = new StandardRoom(300, " ",1, "")//price, image , no of bed, description
 familyRoom = new FamilyRoom(400, " ", 2, "")
 sweetRoom = new SweetRoom(600, " ",1, "")
 var hotelDubaiRoom = new numHotelRoomFunc("Lotus Dubai",50,30,10, standardRoom,familyRoom, sweetRoom)//Lotus Hawaii --line51-num standard romm, family, sweet

 var hotelRoom = [hotelThailandRoom,hotelDubaiRoom,hotelHawaiiRoom ]


function displayHotel(){
// update delete previouse search start Headers
let div = document.getElementById('displayHotelImage')
  //id contactList control the whole section of new contact
  //first child what inside div --remove it all
  while(div.firstChild){
div.removeChild(div.firstChild)
  }
// end here update content

  var readListBoxHotel = document.getElementById("allHotelID").value
  //go to all loop of hotel object
  for (i=0;i<hotel.length;i++){
if(hotel[i].location == readListBoxHotel){
  var createDiv = document.createElement("div")
  createDiv.setAttribute("class", "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700")
  var createPtag = document.createElement("p")
  var textNote = document.createTextNode(hotel[i].hotelName)//crate text  inside p tag
  createPtag.appendChild(textNote)//put textnote on ptag
  createDiv.appendChild(createPtag)//put ptag in div 

//create image tag
  var imgTag = document.createElement("img")//we create image tag
imgTag.setAttribute("src",hotel[i].image)//from hotel object
imgTag.setAttribute("height","150px")
imgTag.setAttribute("width","150px")
createDiv.appendChild(imgTag) //add image tag to div tag

//button viewrate
var buttonVar = document.createElement('button')
var textNoteTwo = document.createTextNode('View Rate')
buttonVar.appendChild(textNoteTwo)
buttonVar.setAttribute('class','bg-pink-400 w-full h-full')
// buttonVar.setAttribute('type','button')
// buttonVar.setAttribute('value', 'View Rate')
buttonVar.setAttribute("onclick","showImgRoomType('"+ hotel[i].hotelName + "')")
createDiv.appendChild(buttonVar)
document.getElementById('displayHotelImage').appendChild(createDiv)
}
  }
}

function showImgRoomType(hotelName){
  // update delete previouse search start Headers
  let div = document.getElementById('showImgRoomType')

    //id contactList control the whole section of new contact
    // first child what inside div --remove it all
    while(div.firstChild){
  div.removeChild(div.firstChild)
    }
  // end here update content

    // go to all loop of hotel object
    for (i=0;i<hotelRoom.length;i++){
  
  if(hotelRoom[i].hotelName == hotelName){
    var createDiv = document.createElement("div")
    createDiv.setAttribute("class", "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700")
    
    //show standdard room
  //create image tag
    var imgTag = document.createElement("img")//we create image tag
  imgTag.setAttribute("src",hotelRoom[i].standardRoom.roomImage)//from hotel object
  imgTag.setAttribute("height","150px")
  imgTag.setAttribute("width","150px")
  createDiv.appendChild(imgTag) //add image tag to div tag

  var createPtag = document.createElement("p")
    var textNote = document.createTextNode('Standard Room')//crate text  inside p tag
    createPtag.appendChild(textNote)//put textnote on ptag
    createDiv.appendChild(createPtag)//put ptag in div 

    // var createPtag3 = document.createElement("p")
    // var textNote3 = document.createTextNode(hotelRoom[i].numStandardRoom)//crate text  inside p tag
    // createPtag3.appendChild(textNote3)//put textnote on ptag
    // createDiv.appendChild(createPtag3)//put ptag in div 

    var createPtag4 = document.createElement("p")
    var textNote4 = document.createTextNode(hotelRoom[i].standardRoom.price)//crate text  inside p tag
    createPtag4.appendChild(textNote4)//put textnote on ptag
    createDiv.appendChild(createPtag4)//put ptag in div 
  
  div.appendChild(createDiv)

  //end

// family room type create

var createDiv = document.createElement("div")
    createDiv.setAttribute("class", "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700")
    
  //create image tag
    var imgTag = document.createElement("img")//we create image tag
  imgTag.setAttribute("src",hotelRoom[i].familyRoom.roomImage)//from hotel object
  imgTag.setAttribute("height","150px")
  imgTag.setAttribute("width","150px")
  createDiv.appendChild(imgTag) //add image tag to div tag
  var createPtag = document.createElement("p")
    var textNote = document.createTextNode('Family Room')//crate text  inside p tag
    createPtag.appendChild(textNote)//put textnote on ptag
    createDiv.appendChild(createPtag)//put ptag in div 

    // var createPtag3 = document.createElement("p")
    // var textNote3 = document.createTextNode(hotelRoom[i].numFamilyRoom)//crate text  inside p tag
    // createPtag3.appendChild(textNote3)//put textnote on ptag
    // createDiv.appendChild(createPtag3)//put ptag in div 

    var createPtag4 = document.createElement("p")
    var textNote4 = document.createTextNode(hotelRoom[i].familyRoom.price)//crate text  inside p tag
    createPtag4.appendChild(textNote4)//put textnote on ptag
    createDiv.appendChild(createPtag4)//put ptag in div 
  
  div.appendChild(createDiv)

  //end

  // family room type create

var createDiv = document.createElement("div")
    createDiv.setAttribute("class", "max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700")
    
  //create image tag
    var imgTag = document.createElement("img")//we create image tag
  imgTag.setAttribute("src",hotelRoom[i].sweetRoom.roomImage)//from hotel object
  imgTag.setAttribute("height","150px")
  imgTag.setAttribute("width","150px")
  createDiv.appendChild(imgTag) //add image tag to div tag
  var createPtag = document.createElement("p")
    var textNote = document.createTextNode('Sweet Room')//crate text  inside p tag
    createPtag.appendChild(textNote)//put textnote on ptag
    createDiv.appendChild(createPtag)//put ptag in div 

    // var createPtag3 = document.createElement("p")
    // var textNote3 = document.createTextNode(hotelRoom[i].numFamilyRoom)//crate text  inside p tag
    // createPtag3.appendChild(textNote3)//put textnote on ptag
    // createDiv.appendChild(createPtag3)//put ptag in div 

    var createPtag4 = document.createElement("p")
    var textNote4 = document.createTextNode(hotelRoom[i].sweetRoom.price)//crate text  inside p tag
    createPtag4.appendChild(textNote4)//put textnote on ptag
    createDiv.appendChild(createPtag4)//put ptag in div 
  
  div.appendChild(createDiv)

  //end


  }
}
}


const sweetRoomObj = new SweetRoom(400, 4, "roomImage", 1, "description");
const familyRoomObj = new FamilyRoom(300, 10, "roomImage", 3, "description");
const standardRoomObj = new StandardRoom(200, 20, "roomImage", 2, "description");