//Use destructuring to make this code cleaner

function detectCollision(objects,{x:px,y:py}) {
    for (let i = 0; i < objects.length; i++) {
      let object = objects[i];
      const {x,y,width:w,height:h} = objects[i];
      if (
        px >= x &&
        px <= x + w &&
        py >= y &&
        py <= y + h
      )
      return object;
    }
  }

  const myObjects = [
    { x: 10, y: 20, width: 30, height: 30 },
    { x: -40, y: 20, width: 30, height: 30 },
    { x: 0, y: 0, width: 10, height: 5 },
  ];

  const point =  { x:0, y:0};
  
  console.log(detectCollision(myObjects,point));