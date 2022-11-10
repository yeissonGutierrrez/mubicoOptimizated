
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

let orchidText = ((scene) => {

  loader.load("src/models/orchidText/orchidTextDraco.gltf", function (gltf) {
    gltf.scene.position.set(0, -7, 0)
    gltf.scene.getObjectByName('orchidWithbasegltf').scale.set(3,3,3)

    const pointLight = new THREE.PointLight( 0xFFFFFF, 1, 20 );
    pointLight.position.set(4, 14, 0);
    gltf.scene.add( pointLight );

    const pointLight2 = new THREE.PointLight( 0xFFFFFF, 1, 20 );
    pointLight2.position.set(-4, 14, 0);
    gltf.scene.add( pointLight2 );

    const pointLight3 = new THREE.PointLight( 0xFFFFFF, 1, 20 );
    pointLight3.position.set(0, 14, 4);
    gltf.scene.add( pointLight3 );

    const pointLight4 = new THREE.PointLight( 0xFFFFFF, 1, 20 );
    pointLight4.position.set(0, 14, -4);
    gltf.scene.add( pointLight4 );

    scene.add(gltf.scene);
    });
});

export default orchidText;
