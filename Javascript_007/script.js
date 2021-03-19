const painting = function () {
    console.log("The wall has been painted red")
  };
  
  painting();
    
  const painting = function (item) {
    console.log("The wall has been painted " + item)
  };
  
  painting("green");
    


const painting = function (item) {
    console.log("The north wall has been painted " + item);
    console.log("The south-east wall has been painted " + item );
  };
  
  const north_wall = "orange";
  const southEast_wall = "grey"
  
  painting(north_wall);
  painting(southEast_wall);




