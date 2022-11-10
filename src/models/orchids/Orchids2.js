
const manager = new THREE.LoadingManager();
manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
  
  document.getElementById('loadText').innerHTML = 'Started loading file: Garden ' + ' .\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.'
  
};

manager.onLoad = function ( ) {
  
  document.getElementById('loadText').innerHTML = 'Loading complete!'
  
};


manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
  
  document.getElementById('loadText').innerHTML = 'Loading file: Garden ' + ' .\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.'
  
};

manager.onError = function ( url ) {
  
  document.getElementById('loadText').innerHTML =  'There was an error loading '

};


const dracoLoader = new THREE.DRACOLoader();
dracoLoader.setDecoderPath( 'https://www.gstatic.com/draco/v1/decoders/' );
const loader = new THREE.GLTFLoader(manager);
dracoLoader.setDecoderConfig({ type: 'js' });
loader.setDRACOLoader( dracoLoader );

// gltf.scene.position.set(-184, -5, -28)

let Orchids2 = ((scene, id, object) => {
  let wordDefaultPos = {
    x:-184,
    y: -5,
    z: -28
  }

  var lod = new THREE.LOD();

  const pointLight = new THREE.PointLight( 0xFFFFFF, 1, 10 );
  pointLight.position.set(-256, -1, 5);
  scene.add( pointLight );

  // const sphereSize = 1;
  // const pointLightHelper = new THREE.PointLightHelper( pointLight, sphereSize );
  // scene.add( pointLightHelper );

  var geometry = new THREE.BoxGeometry( 4, 4, 4 );
  var material = new THREE.MeshBasicMaterial( {color: 0x000000} );
  var cube2 = new THREE.Mesh( geometry, material );
  // cube2.position.set(-274, -0.5, 0)
  lod.position.set(-258, -3.5, 8)
  lod.updateMatrix();
  lod.matrixAutoUpdate = false;
  lod.addLevel(cube2, 30);
  scene.add( lod );
  loader.load("src/models/orchids/orchidWithbaseDraco2.gltf", function (gltf) {

    
    let ICE_BOX = gltf.scene.getObjectByName('ICE_BOX').children.find(e => e.name === id)
    object.push(ICE_BOX)    

    let material = new THREE.MeshPhysicalMaterial({
      transmission: 1,
      thickness: 0,
      roughness: 0,
      // envMap: hdrEquirect,
      // color: new THREE.Color("rgb(255, 0, 0)"),
      //para que se puedan ver los sprites
      depthWrite: false
    });

    gltf.scene.getObjectByName('ICE_BOX').children.map(e => {
      e.geometry.dispose();
      e.material = material
    })

    lod.rotation.set(0,-0.8,0)
    lod.addLevel(gltf.scene,20);
    lod.updateMatrix();
    lod.matrixAutoUpdate = false;
      scene.add(lod);
    });
});

export default Orchids2;
