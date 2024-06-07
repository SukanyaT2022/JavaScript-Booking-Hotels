var total = 0
var finalTotal = 0

// consrtucture object diffrent hotel
function Hotel(hotelName2, location2, image, image3, image4, image5) {
  this.hotelName = hotelName2;
  this.location = location2;
  this.image = image;
  this.image3 = image3;
  this.image4 = image4;
  this.image5 = image5;
}

// consrtucture object diffrent standard room
function SweetRoom(price2, roomImage2, NumberBed2, description2) {
  this.price = price2;
  this.roomImage = roomImage2;
  this.NumberBed = NumberBed2;
  this.description = description2;
}

// consrtucture object diffrent family room
function FamilyRoom(price2, roomImage2, NumberBed2, description2) {
  this.price = price2;
  this.roomImage = roomImage2;
  this.NumberBed = NumberBed2;
  this.description = description2;
}

// consrtucture object diffrent standard room
function StandardRoom(price2, roomImage2, NumberBed2, description2) {
  this.price = price2;
  this.roomImage = roomImage2;
  this.NumberBed = NumberBed2;
  this.description = description2;
}
//how many room in each hotel
function numHotelRoomFunc(
  hotelName,
  numStandardRoom,
  numFamilyRoom,
  numSweetRoom,
  standardRoom,
  familyRoom,
  sweetRoom
) {
  this.hotelName = hotelName;
  this.numFamilyRoom = numFamilyRoom;
  this.numSweetRoom = numSweetRoom;
  this.standardRoom = standardRoom;
  this.familyRoom = familyRoom;
  this.sweetRoom = sweetRoom;
}

const hotelThailand = new Hotel(
  'White Lotus Thailand',
  'Thailand',
  'https://plus.unsplash.com/premium_photo-1683134041222-fb1cb31c1203?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGh1a2V0JTIwJTIwYmVhY2glMjAlMjByZXNvcnR8ZW58MHx8MHx8fDA%3D',

  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVtJTIwcGh1a2V0JTIwdGhhaWxhbmR8ZW58MHx8MHx8fDA%',

  'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdGVtJTIwcGh1a2V0JTIwdGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',

  'https://images.unsplash.com/photo-1445546857131-5fc39d1c51f0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjB2aWV3JTIwJTIwcGh1a2V0JTIwdGhhaWxhbmR8ZW58MHx8MHx8fDA%3D'
);

// const hotelThailand2 = new Hotel("Pink Lotus Thailand", "Thailand", "https://plus.unsplash.com/premium_photo-1670002464796-3a3136fe8808?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBob3R0ZWwlMjB0aGFpbGFuZHxlbnwwfHwwfHx8MA%3D%3D");

// const hotelThailand3 = new Hotel(" Spa Lotus Thailand", "Thailand", "https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJlYWNoJTIwaG90dGVsJTIwdGhhaWxhbmR8ZW58MHx8MHx8fDA%3D");

const hotelDubai = new Hotel(
  'Lotus Dubai',
  'Dubai',
  'https://plus.unsplash.com/premium_photo-1661962790754-9a1a5b5e334a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZHViYWklMjBiZWFjaCUyMCUyMHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1661943659036-aa040d92ee64?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBkdWJhaXxlbnwwfDB8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1439130490301-25e322d88054?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwZHViYWl8ZW58MHwwfDB8fHww',
  'https://images.unsplash.com/photo-1459600661907-3c72c54955de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZHViYWl8ZW58MHwwfDB8fHww'
);

const hotelHawaii = new Hotel(
  'Lotus Hawaii',
  'Hawaii',
  'https://images.unsplash.com/photo-1646843132316-e63a43d8a251?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhd2FpaSUyMGJlYWNoJTIwJTIwcmVzb3J0fGVufDB8fDB8fHww',
  'https://plus.unsplash.com/premium_photo-1664476988653-53008a4264a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGF3YWlpJTIwaG90ZWx8ZW58MHwwfDB8fHww',
  'https://images.unsplash.com/photo-1596404575621-5887511bf44c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhd2FpaSUyMGhvdGVsfGVufDB8MHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1507876466758-bc54f384809c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGF3YWlpJTIwaG90ZWx8ZW58MHwwfDB8fHww'
);

var hotel = [hotelThailand, hotelDubai, hotelHawaii];

var standardRoom = new StandardRoom(
  100,
  'https://plus.unsplash.com/premium_photo-1681822718579-314dd234fb6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tJTIwc3RhbmRhcmR8ZW58MHx8MHx8fDA%3D',
  1,
  ''
); //price, image , no of bed, description
var familyRoom = new FamilyRoom(
  200,
  'https://plus.unsplash.com/premium_photo-1663091084165-5623c80cea52?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjBmYW1pbHklMjByb29tfGVufDB8fDB8fHww ',
  2,
  ''
);
var sweetRoom = new SweetRoom(
  300,
  ' https://plus.unsplash.com/premium_photo-1664476831905-36395f089394?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBzd2VldCUyMHJvb20lMjB3ZWRkaW5nfGVufDB8fDB8fHww',
  1,
  ''
);
var hotelThailandRoom = new numHotelRoomFunc(
  'White Lotus Thailand',
  20,
  10,
  5,
  standardRoom,
  familyRoom,
  sweetRoom
); //num standard romm, family, sweet

var standardRoom = new StandardRoom(
  200,
  'https://plus.unsplash.com/premium_photo-1681822718579-314dd234fb6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tJTIwc3RhbmRhcmR8ZW58MHx8MHx8fDA%3D',
  1,
  ''
); //price, image , no of bed, description
var familyRoom = new FamilyRoom(
  300,
  'https://plus.unsplash.com/premium_photo-1663091084165-5623c80cea52?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjBmYW1pbHklMjByb29tfGVufDB8fDB8fHww ',
  2,
  ''
);
var sweetRoom = new SweetRoom(
  500,
  ' https://plus.unsplash.com/premium_photo-1664476831905-36395f089394?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBzd2VldCUyMHJvb20lMjB3ZWRkaW5nfGVufDB8fDB8fHww',
  1,
  ''
);
var hotelHawaiiRoom = new numHotelRoomFunc(
  'Lotus Hawaii',
  30,
  20,
  10,
  standardRoom,
  familyRoom,
  sweetRoom
); //Lotus Hawaii --line51-num standard romm, family, sweet

var standardRoom = new StandardRoom(
  400,
  'https://plus.unsplash.com/premium_photo-1681822718579-314dd234fb6d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tJTIwc3RhbmRhcmR8ZW58MHx8MHx8fDA%3D',
  1,
  ''
); //price, image , no of bed, description
var familyRoom = new FamilyRoom(
  500,
  'https://plus.unsplash.com/premium_photo-1663091084165-5623c80cea52?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjBmYW1pbHklMjByb29tfGVufDB8fDB8fHww ',
  2,
  ''
);
var sweetRoom = new SweetRoom(
  800,
  ' https://plus.unsplash.com/premium_photo-1664476831905-36395f089394?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWwlMjBzd2VldCUyMHJvb20lMjB3ZWRkaW5nfGVufDB8fDB8fHww',
  1,
  ''
);
var hotelDubaiRoom = new numHotelRoomFunc(
  'Lotus Dubai',
  50,
  30,
  10,
  standardRoom,
  familyRoom,
  sweetRoom
); //Lotus Hawaii --line51-num standard romm, family, sweet

var hotelRoom = [hotelThailandRoom, hotelDubaiRoom, hotelHawaiiRoom];


//displayHotel() do check which hotel select--price --how many days bet 2 day start and end
function displayHotel() {
  total = 0
  // update delete previouse search start Headers
  let div = document.getElementById('displayHotelImage');
  //id contactList control the whole section of new contact
  //first child what inside div --remove it all
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  // end here update content
  //people box how many adult and kid-- not more than 8 people
  var adult = parseInt(document.getElementById('adultTextBox').value);
  var child = parseInt(document.getElementById('childTextBox').value);
  if (adult + child > 8) {
    alert('Can not book a package for more than 8 people');
    return;
  }

  var readListBoxHotel = document.getElementById('allHotelID').value;
  //go to all loop of hotel object
  for (i = 0; i < hotel.length; i++) {
    if (hotel[i].location == readListBoxHotel) {
      var createDiv = document.createElement('div');
      createDiv.setAttribute(
        'class',
        'max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
      );
      var createPtag = document.createElement('p');
      createPtag.setAttribute('class', 'pTagHotelbyCountery');
      var textNote = document.createTextNode(hotel[i].hotelName); //crate text  inside p tag
      createPtag.appendChild(textNote); //put textnote on ptag
      createDiv.appendChild(createPtag); //put ptag in div

      var imageDivWrapper = document.createElement('div');
      imageDivWrapper.setAttribute('class', 'divHotelbyCountery');
      //create image tag
      var imgTag = document.createElement('img'); //we create image tag
      imgTag.setAttribute('class', 'divHotelbyCounteryImage');
      imgTag.setAttribute('src', hotel[i].image); //from hotel object
      imgTag.setAttribute('height', '150px');
      imgTag.setAttribute('width', '150px');
      imageDivWrapper.setAttribute('class', 'wrapDivImage'); //create tag for hotel image
      imageDivWrapper.appendChild(imgTag); //add image tag to div tag

      //create image tag
      var imgTag3 = document.createElement('img'); //we create image tag
      imgTag.setAttribute('class', 'divHotelbyCounteryImage');
      imgTag3.setAttribute('src', hotel[i].image3); //from hotel object
      imgTag3.setAttribute('height', '150px');
      imgTag3.setAttribute('width', '150px');
      imageDivWrapper.appendChild(imgTag3); //add image tag to div tag

      //create image tag
      var imgTag4 = document.createElement('img'); //we create image tag
      imgTag.setAttribute('class', 'divHotelbyCounteryImage');
      imgTag4.setAttribute('src', hotel[i].image4); //from hotel object
      imgTag4.setAttribute('height', '150px');
      imgTag4.setAttribute('width', '150px');
      imageDivWrapper.appendChild(imgTag4); //add image tag to div tag

      //create image tag
      var imgTag5 = document.createElement('img'); //we create image tag
      imgTag.setAttribute('class', 'divHotelbyCounteryImage');
      imgTag5.setAttribute('src', hotel[i].image5); //from hotel object
      imgTag5.setAttribute('height', '150px');
      imgTag5.setAttribute('width', '150px');
      imageDivWrapper.appendChild(imgTag5); //add image tag to div tag
      createDiv.appendChild(imageDivWrapper);

      //button viewrate

      var divViewRateButton = document.createElement('div');
      var buttonVar = document.createElement('button');
      var textNoteTwo = document.createTextNode('View Rate');
      buttonVar.appendChild(textNoteTwo);
      buttonVar.setAttribute('class', 'viewRateButton');
      // buttonVar.setAttribute('type','button')
      // buttonVar.setAttribute('value', 'View Rate')
      buttonVar.setAttribute(
        'onclick',
        "showImgRoomType('" + hotel[i].hotelName + "')"
      );
      divViewRateButton.appendChild(buttonVar);
      createDiv.appendChild(divViewRateButton);
      divViewRateButton.setAttribute('class', 'targetViewRatbutton');
      document.getElementById('displayHotelImage').appendChild(createDiv);
    }
  }
}

function summary(roomType, roomPrice, numRoom, numNight){
  // room type summary
var div = document.createElement('div');
var ptag = document.createElement('p');
var textRoomType = document.createTextNode('Room Type' + roomType)

div.appendChild(ptag)
ptag.appendChild(textRoomType)

ptag.setAttribute('class', 'roomType')
div.setAttribute('class', 'roomTypeDivWrapper')

// room price summary
// var div = document.createElement('div');
var ptag = document.createElement('p');
var textRoomPrice = document.createTextNode('Room Price ' + roomPrice)

div.appendChild(ptag)
ptag.appendChild(textRoomPrice )

ptag.setAttribute('class', 'roomPrice')


// num room summary
// var div = document.createElement('div');
var ptag = document.createElement('p');
var textNumRoom = document.createTextNode('Number of Room ' + numRoom)

div.appendChild(ptag)
ptag.appendChild(textNumRoom)

ptag.setAttribute('class', 'numRoom')


// num night -- how many night
// var div = document.createElement('div');
var ptag = document.createElement('p');
var textNumRoom = document.createTextNode('Total length of stay ( night ) :' + numNight)

div.appendChild(ptag)
ptag.appendChild(textNumRoom)

ptag.setAttribute('class', 'numRoom')




//total
var ptag = document.createElement('p');
var textNumRoom = document.createTextNode('Total: ' + numRoom * roomPrice * numNight)

div.appendChild(ptag)
finalTotal = finalTotal + numRoom * roomPrice * numNight
ptag.appendChild(textNumRoom)
ptag.setAttribute('class', 'total')

var ptag = document.createElement('p');
var textNumRoom = document.createTextNode('Final total: ' + finalTotal)
// document.getElementById('summaryWrapper').removeChild(document.getElementById('summaryWrapper').firstChild())
ptag.appendChild(textNumRoom)
ptag.setAttribute('class', 'total')

while(document.getElementById('showFinalTotal').firstChild){
document.getElementById('showFinalTotal').firstChild.remove()
}

document.getElementById('showFinalTotal').appendChild(ptag)
document.getElementById('summaryWrapper').appendChild(div)
}


// end summary function

function showImgRoomType(hotelName) {
  // update delete previouse search start Headers
  let div = document.getElementById('showImgRoomType');

  //id contactList control the whole section of new contact
  // first child what inside div --remove it all
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  // end here update content

  //capture start and end date of reservation
  var startDate = document.getElementById('startDate').value;
  var endDate = document.getElementById('endDate').value;
  if (startDate == '' || endDate == '') {
    alert('Select Date');
    return;
  }
  console.log(startDate);
  console.log(endDate);

  //start from 0--03/05/2024 --/ slash include to position
  var startDay = parseInt(startDate.substring(3, 5));
  var startMonth = parseInt(startDate.substring(0, 2));
  var startYear = parseInt(startDate.substring(6));

  //start from 0--03/05/2024 --/ slash include to position
  var endDay = parseInt(endDate.substring(3, 5));
  var endMonth = parseInt(endDate.substring(0, 2));
  var endYear = parseInt(startDate.substring(6));

  var dateOne = new Date(startYear, startMonth - 1, startDay);
  var dateTwo = new Date(endYear, endMonth - 1, endDay);
  console.log(dateOne);
  console.log(dateTwo);

  let Difference_In_Time = dateTwo.getTime() - dateOne.getTime();

  // Calculating the no. of days between
  // two dates
  let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
  console.log(Difference_In_Days);
  // alert(Difference_In_Days * hotel[i].price)

  //read how many room
  let numRoom = parseInt(document.getElementById('roomTextBox').value);

  // go to all loop of hotel object
  for (i = 0; i < hotelRoom.length; i++) {
    if (hotelRoom[i].hotelName == hotelName) {
      var createDiv = document.createElement('div');

      createDiv.setAttribute('class', 'mainBox');

      //show standdard room
      //create image tag
      var innerDiv = document.createElement('div');
      innerDiv.setAttribute('class', 'wrapperBox');
      var imgTag = document.createElement('img'); //we create image tag
      imgTag.setAttribute('src', hotelRoom[i].standardRoom.roomImage); //from hotel object

      imgTag.setAttribute('class', 'targetImageViewPrice');

      createDiv.appendChild(imgTag); //add image tag to div tag

      var createPtag = document.createElement('p');
      var textNote = document.createTextNode('Standard Room'); //crate text  inside p tag
      createPtag.appendChild(textNote); //put textnote on ptag
      innerDiv.appendChild(createPtag); //put ptag in div

      var createPriceTag = document.createElement('p');
      var priceNote = document.createTextNode(
        'Price per night' + ' $' + hotelRoom[i].standardRoom.price
      ); //crate text  inside p tag
      createPriceTag.appendChild(priceNote); //put textnote on ptag
      innerDiv.appendChild(createPriceTag); //put ptag in div
      createPriceTag.setAttribute('class', 'perNightSection');

      var createPtag4 = document.createElement('p');
      var textNote4 = document.createTextNode(
        'Total' +
          ' $' +
          hotelRoom[i].standardRoom.price * Difference_In_Days 
      ); //crate text  inside p tag
      createPtag4.appendChild(textNote4); //put textnote on ptag
      innerDiv.appendChild(createPtag4); //put ptag in div
      createPtag4.setAttribute('class', 'total');

      var button = document.createElement('input')
      button.setAttribute('type', 'button')
      button.setAttribute('value','book')
      button.setAttribute('onclick', "summary('Standard Room', " + hotelRoom[i].standardRoom.price + " ,"+ numRoom + ", " + Difference_In_Days + " )")
      innerDiv.appendChild(button)

      createDiv.appendChild(innerDiv);
      div.appendChild(createDiv);

      //end standard type

      // family room type create

      var createDiv = document.createElement('div');
      createDiv.setAttribute('class', 'mainBox');

      var innerDiv = document.createElement('div');
      innerDiv.setAttribute('class', 'wrapperBox');

      //create image tag
      var imgTag = document.createElement('img'); //we create image tag
      imgTag.setAttribute('src', hotelRoom[i].familyRoom.roomImage); //from hotel object
      imgTag.setAttribute('height', '150px');
      imgTag.setAttribute('width', '150px');
      createDiv.appendChild(imgTag); //add image tag to div tag
      var createPtag = document.createElement('p');
      var textNote = document.createTextNode('Family Room'); //crate text  inside p tag
      createPtag.appendChild(textNote); //put textnote on ptag
      innerDiv.appendChild(createPtag); //put ptag in div

      //price per night
      var createPriceTag = document.createElement('p');
      var priceNote = document.createTextNode(
        'Price per night' + ' $' + hotelRoom[i].familyRoom.price
      ); //crate text  inside p tag
      createPriceTag.appendChild(priceNote); //put textnote on ptag
      innerDiv.appendChild(createPriceTag); //put ptag in div
      createPriceTag.setAttribute('class', 'perNightSection');
      //price for total
      var createPtag4 = document.createElement('p');
      var textNote4 = document.createTextNode(
        'Total' +
          ' $' +
          hotelRoom[i].familyRoom.price * Difference_In_Days 
      ); //crate text  inside p tag
      createPtag4.appendChild(textNote4); //put textnote on ptag
      innerDiv.appendChild(createPtag4); //put ptag in div
      createPtag4.setAttribute('class', 'total');

      var button = document.createElement('input')
      button.setAttribute('type', 'button')
      button.setAttribute('value','book')
      button.setAttribute('onclick', "summary('Family  Room', " + hotelRoom[i].familyRoom.price + " ,"+ numRoom + ", " + Difference_In_Days + "  )")
      innerDiv.appendChild(button)


      createDiv.appendChild(innerDiv);
      div.appendChild(createDiv);

      //end family type

      // family room type create

      var createDiv = document.createElement('div');
      createDiv.setAttribute('class', 'mainBox');
      // wrapper image price per night - total price
      var innerDiv = document.createElement('div');
      innerDiv.setAttribute('class', 'wrapperBox');

      //create image tag
      var imgTag = document.createElement('img'); //we create image tag
      imgTag.setAttribute('src', hotelRoom[i].sweetRoom.roomImage); //from hotel object
      imgTag.setAttribute('height', '150px');
      imgTag.setAttribute('width', '150px');
      createDiv.appendChild(imgTag); //add image tag to div tag
      var createPtag = document.createElement('p');
      var textNote = document.createTextNode('Sweet Room'); //crate text  inside p tag
      createPtag.appendChild(textNote); //put textnote on ptag
      innerDiv.appendChild(createPtag); //put ptag in div

      //price per night
      var createPriceTag = document.createElement('p');
      var priceNote = document.createTextNode(
        'Price per night' + ' $' + hotelRoom[i].sweetRoom.price
      ); //crate text  inside p tag
      createPriceTag.appendChild(priceNote); //put textnote on ptag
      innerDiv.appendChild(createPriceTag); //put ptag in div
      createPriceTag.setAttribute('class', 'perNightSection');

      //total price
      var createPtag4 = document.createElement('p');
      var textNote4 = document.createTextNode(
        'Total' +
          ' $' +
          hotelRoom[i].sweetRoom.price * Difference_In_Days 
      ); //crate text  inside p tag
      createPtag4.appendChild(textNote4); //put textnote on ptag
      innerDiv.appendChild(createPtag4); //put ptag in div
      createPtag4.setAttribute('class', 'total');

      var button = document.createElement('input')
      button.setAttribute('type', 'button')
      button.setAttribute('value','book')
      button.setAttribute('onclick', "summary('Sweet Room', " + hotelRoom[i].sweetRoom.price + " ,"+ numRoom + " , " + Difference_In_Days + "  )")
      innerDiv.appendChild(button)


      createDiv.appendChild(innerDiv);
      div.appendChild(createDiv);

      //end
    }
  }
}

const sweetRoomObj = new SweetRoom(400, 4, 'roomImage', 1, 'description');
const familyRoomObj = new FamilyRoom(300, 10, 'roomImage', 3, 'description');
const standardRoomObj = new StandardRoom(
  200,
  20,
  'roomImage',
  2,
  'description'
);
