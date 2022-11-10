const manager = new THREE.LoadingManager();
manager.onStart = function ( url, itemsLoaded, itemsTotal ) {
  
  document.getElementById('loadText').innerHTML = 'Started loading file: Garden ' + ' .\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.'
  console.log( 'Started loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
  
};

manager.onLoad = function ( ) {
  
  document.getElementById('loadText').innerHTML = 'Loading complete!'
  
};


manager.onProgress = function ( url, itemsLoaded, itemsTotal ) {
  
  document.getElementById('loadText').innerHTML = 'Loading file: Garden ' + ' .\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.'
  console.log( 'Loading file: ' + url + '.\nLoaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
  
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

//get mouse cords

let woodRoad = new Promise((res, rej) => {
  loader.load("src/models/woodRoad/woodRoad.gltf",
    function (gltf) {
      gltf.scene.position.set(-184, -5, -28)

      const woodTexture = new THREE.TextureLoader().load('https://i.ibb.co/wzVk7Ps/WOOD-01.png')

      
      woodTexture.wrapS = THREE.RepeatWrapping
      woodTexture.wrapT = THREE.RepeatWrapping

      woodTexture.repeat.set(20.000, 20.000)
      woodTexture.rotation = 80

      const mapWoodFloor = new THREE.MeshStandardMaterial({
        map: woodTexture,
        shadowSide: true
      })

      let woodPaths = gltf.scene.getObjectByName('WOOD_PATH_01')

      woodPaths.children.map((path) => {
        path.material = mapWoodFloor
      })

      res(gltf.scene);
    },
    // called while loading is progressing
    function (xhr) {
      
    },
    // called when loading has errors
    function (error) {
      console.log("An error happened", error);
      rej();
    });
});

export default woodRoad;
