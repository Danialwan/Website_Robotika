let diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    defaultShapeType: "img-card",
    scale: 0.9
  });
  
  if(screen.width <= 500) diagram.data.load('datasmall.json');
  else diagram.data.load('databig.json');