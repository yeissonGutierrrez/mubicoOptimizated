let points = ((scene,pointsNames, objects, loadedFiles) => {

  const manager = new THREE.LoadingManager();
manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
  
  document.getElementById('loadText').innerHTML = 'Started loading file: Garden ' + ' .\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.'
  // console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
  
};

manager.onLoad = function ( ) {
  loadedFiles.push('points')
  // document.getElementById('loadText').innerHTML = 'Loading complete!'
  
};


manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
  
  document.getElementById('loadText').innerHTML = 'Loading file: Garden ' + ' .\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.'
  // console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
  
};

manager.onError = function ( url ) {
  
  document.getElementById('loadText').innerHTML =  'There was an error loading '
	console.log( 'There was an error loading ' + url );

};

const dracoLoader = new THREE.DRACOLoader();
dracoLoader.setDecoderPath( 'https://www.gstatic.com/draco/v1/decoders/' );
const loader = new THREE.GLTFLoader(manager);
dracoLoader.setDecoderConfig({ type: 'js' });
loader.setDRACOLoader( dracoLoader );

// gltf.scene.position.set(-184, -5, -28)


  loader.load("src/models/points/movePoints.gltf", function (gltf) {

    gltf.scene.position.set(-184, -5, -28)
    
    for (let index = 673; index <= 837; index++) {
      let element = `Object_${index}`;
      pointsNames.push(element)
    }
    
    pointsNames.map((p) => {
      let cube = gltf.scene.getObjectByName('PATH-_DOTS').children.find(e => e.name === p)
      objects.push(cube)
    })

    scene.add(gltf.scene);
    });
});

export default points;

