// consrtucture object diffrent hotel
function hotel(hotelName, location, image) {
    this.hotelName = hotelName2;
    this.location = location2;
    this.image = image2;
  }


  // consrtucture object diffrent standard room
function sweetRoom(price, quantity, roomImage, NumberBed, description) {
    this.price = price2;
    this.quantity = quantity2;
    this.roomImage= roomImage2;
    this.NumberBed = NumberBed2;
    this.description = description2;
  }


  // consrtucture object diffrent family room
function familyRoom(price, quantity, roomImage, NumberBed, description) {
    this.price = price2;
    this.quantity = quantity2;
    this.roomImage= roomImage2;
    this.NumberBed = NumberBed2;
    this.description = description2;
  }

  // consrtucture object diffrent standard room
function standardRoom(price, quantity, roomImage, NumberBed, description) {
    this.price = price2;
    this.quantity = quantity2;
    this.roomImage= roomImage2;
    this.NumberBed = NumberBed2;
    this.description = description2;
  }


const hotelThailand = new Hotel("Lotus Thailand", "Thailand", "https://plus.unsplash.com/premium_photo-1683134041222-fb1cb31c1203?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGh1a2V0JTIwJTIwYmVhY2glMjAlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D");
const hotelDubai = new Hotel("Lotus Dubai", "Dubai", "https://plus.unsplash.com/premium_photo-1661962790754-9a1a5b5e334a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHViYWklMjBiZWFjaCUyMCUyMHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D");
const hotelHawaii = new Hotel("Lotus Hawaii", "Hawaii", "https://images.unsplash.com/photo-1646843132316-e63a43d8a251?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhd2FpaSUyMGJlYWNoJTIwJTIwcmVzb3J0fGVufDB8fDB8fHww");

var hotel = [hotelThailand,hotelDubai,hotelHawaii ]

function displayHotel(){
  var readListBoxHotel = document.getElementById(allHotelID).value
  //go to all loop of hotel object
  for (i=0;i<hotel.length;i++){
if(hotel[i].hotelName == readListBoxHotel){
  var createDiv = document.createElement("div")
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
document.getElementById('displayHotelImage').appendChild(createDiv)
}
  }
}




const sweetRoom = new SweetRoom(400, 4, "roomImage", 1, "description");
const familyRoom = new FamilyRoom(300, 10, "roomImage", 3, "description");
const standardRoom = new StandardRoom(200, 20, "roomImage", 2, "description");