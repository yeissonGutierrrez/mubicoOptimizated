
let structureLightsTwo = ((scene, modalsLoaded) => {


  const manager = new THREE.LoadingManager();
  manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
    
    document.getElementById('loadText').innerHTML = 'Started loading file: Garden ' + ' .\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.'
    // console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    
  };

  manager.onLoad = function ( ) {
    modalsLoaded.push('structureLightsTwo')
    document.getElementById('loadText').innerHTML = 'Loading complete!'
    // console.log( 'Loading complete!');
    
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


  let position = {
    x: -37.2,
    y: 0,
    z: 41
  }

  var lod = new THREE.LOD();
  var geometry = new THREE.BoxBufferGeometry( 5, 5, 5 );
  var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
  var cube3 = new THREE.Mesh( geometry, material );
  // cube2.position.set(-274, -0.5, 0)
  lod.updateMatrix();
  lod.matrixAutoUpdate = false;
  lod.addLevel(cube3, 50);
  scene.add( lod );
  loader.load("https://mubico.s3.us-east-2.amazonaws.com/structureLightsTwoDraco.gltf", function (gltf) {
    // gltf.scene.position.set(-184, -5, -28)
    lod.position.set(position.x - 184, -5.5, position.z - 28)
    lod.addLevel(gltf.scene,40);
    lod.updateMatrix();
    lod.matrixAutoUpdate = false;
      scene.add(lod);
    });
});

export default structureLightsTwo;

