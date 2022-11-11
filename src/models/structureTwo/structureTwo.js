
let structureTwo = ((scene, modalsLoaded) => {


  const manager = new THREE.LoadingManager();
  manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
    
    document.getElementById('loadText').innerHTML = 'Started loading file: Garden ' + ' .\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.'
    // console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
    
  };

  manager.onLoad = function ( ) {
    modalsLoaded.push('structureTwo')
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


  var lod = new THREE.LOD();
  var geometry = new THREE.BoxBufferGeometry( 5, 5, 5 );
  var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
  var cube3 = new THREE.Mesh( geometry, material );
  // cube2.position.set(-274, -0.5, 0)
  lod.updateMatrix();
  lod.matrixAutoUpdate = false;
  lod.addLevel(cube3, 50);
  scene.add( lod );
  loader.load("https://mubico.s3.us-east-2.amazonaws.com/structureTwoDraco.gltf", function (gltf) {
    

    const woodTextureDark = new THREE.TextureLoader().load('src/images/textures/Walnut dark_100_DP.jpg')

    woodTextureDark.wrapS = THREE.RepeatWrapping
    woodTextureDark.wrapT = THREE.RepeatWrapping

    woodTextureDark.repeat.set(2.000, 2.000)
    woodTextureDark.rotation = 80

    const mapWoodFloorDark = new THREE.MeshStandardMaterial({
      map: woodTextureDark,
      shadowSide: true
    })

    let woodPaths = gltf.scene.getObjectByName('METAL_01')
    woodPaths.children.map((path) => {
      path.material = mapWoodFloorDark
    })

    let position = {
      x: -37.526,
      y: 0.705,
      z: 40.948
    }
    lod.position.set(position.x - 184, -5, position.z - 28)
    lod.addLevel(gltf.scene,40);
    lod.updateMatrix();
    lod.matrixAutoUpdate = false;
      scene.add(lod);
    });
});

export default structureTwo;



