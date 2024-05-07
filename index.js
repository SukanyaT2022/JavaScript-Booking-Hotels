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


const hotel = new Hotel("hotelName", "location", "image");
const sweetRoom = new SweetRoom(400, 4, "roomImage", 1, "description");
const familyRoom = new FamilyRoom(300, 10, "roomImage", 3, "description");
const standardRoom = new StandardRoom(200, 20, "roomImage", 2, "description");