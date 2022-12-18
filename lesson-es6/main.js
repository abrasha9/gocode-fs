//Use destructuring to make this code cleaner

function detectCollision(objects,point) {
    for (let i = 0; i < objects.length; i++) {
      let object = objects[i];
      const {x,y,width,height} = objects[i];
      const {x:px,y:py} = point;
      if (
        px >= x &&
        px <= x + width &&
        py >= y &&
        py <= y + height
      ){
      console.log('i was here '+object);
      return object;}
    }
  }
 
  
  const myObjects = [
    { x: 10, y: 20, width: 30, height: 30 },
    { x: -40, y: 20, width: 30, height: 30 },
    { x: 0, y: 0, width: 10, height: 5 },
  ];

  const point =  { x:10, y:20};
  

  console.log(detectCollision(myObjects,point));