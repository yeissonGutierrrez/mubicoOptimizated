
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


const dracoLoader = new THREE.DRACOLoader(manager);
dracoLoader.setDecoderPath( 'https://www.gstatic.com/draco/v1/decoders/' );
const loader = new THREE.GLTFLoader();
dracoLoader.setDecoderConfig({ type: 'js' });
loader.setDRACOLoader( dracoLoader );





let garden = new Promise((res, rej) => {
  loader.load("src/models/garden/newBaseGardenDraco.gltf",
    function (gltf) {
      gltf.scene.position.set(-184, -5, -28)

      const concreteTexture = new THREE.TextureLoader().load('src/images/textures/Concrete blocks_675_DB.jpg')
      const woodTexture = new THREE.TextureLoader().load('src/images/textures/WOOD_01.png')
      const woodTexture2 = new THREE.TextureLoader().load('src/images/textures/WOOD_01.png')
      const woodTexture3 = new THREE.TextureLoader().load('src/images/textures/WOOD_01.png')
      const woodTextureDark = new THREE.TextureLoader().load('src/images/textures/Walnut dark_100_DP.jpg')
      const grassyTexture = new THREE.TextureLoader().load('src/images/textures/Grassy_150_DB.jpg')
      const grassyTexture2 = new THREE.TextureLoader().load('src/images/textures/Grass dark_150_DB.jpg')

      concreteTexture.wrapS = THREE.RepeatWrapping
      concreteTexture.wrapT = THREE.RepeatWrapping
      
      woodTextureDark.wrapS = THREE.RepeatWrapping
      woodTextureDark.wrapT = THREE.RepeatWrapping
      
      woodTexture.wrapS = THREE.RepeatWrapping
      woodTexture.wrapT = THREE.RepeatWrapping
      
      woodTexture2.wrapS = THREE.RepeatWrapping
      woodTexture2.wrapT = THREE.RepeatWrapping

      woodTexture3.wrapS = THREE.RepeatWrapping
      woodTexture3.wrapT = THREE.RepeatWrapping

      grassyTexture.wrapS = THREE.RepeatWrapping
      grassyTexture.wrapT = THREE.RepeatWrapping

      grassyTexture2.wrapS = THREE.RepeatWrapping
      grassyTexture2.wrapT = THREE.RepeatWrapping

      concreteTexture.repeat.set(100.000, 100.000)
      concreteTexture.rotation = 90

      woodTextureDark.repeat.set(2.000, 2.000)
      woodTextureDark.rotation = 80

      woodTexture.repeat.set(2.000, 2.000)
      woodTexture.rotation = 80
      

      woodTexture2.repeat.set(2.000, 2.000)

      woodTexture3.repeat.set(4.000, 4.000)
      woodTexture3.rotation = 0

      grassyTexture.repeat.set(10.000, 10.000)

      grassyTexture2.repeat.set(5.000, 5.000)

      const mapConcreteFloor = new THREE.MeshStandardMaterial({
        map: concreteTexture,
        shadowSide: true
      })

      const mapWoodFloorDark = new THREE.MeshStandardMaterial({
        map: woodTextureDark,
        shadowSide: true
      })

      const mapWoodFloor = new THREE.MeshStandardMaterial({
        map: woodTexture,
        shadowSide: true
      })

      const mapWoodFloor2 = new THREE.MeshStandardMaterial({
        map: woodTexture2,
        shadowSide: true
      })

      const mapWoodFloor3 = new THREE.MeshStandardMaterial({
        map: woodTexture3,
        shadowSide: true
      })

      const mapGrassyFloor = new THREE.MeshStandardMaterial({
        map: grassyTexture,
        shadowSide: true
      })

      const mapGrassyFloor2 = new THREE.MeshStandardMaterial({
        map: grassyTexture2,
        shadowSide: true
      })

      let concretePaths = gltf.scene.getObjectByName('PATH_CONCRETE')
      let earthTreesPaths = gltf.scene.getObjectByName('EARTH_TREES')
      let shrubPaths = gltf.scene.getObjectByName('EARTH_SHRUB')
      let woodPath2 = gltf.scene.getObjectByName('WOOD_PATH_2')
      let Backpanel = gltf.scene.getObjectByName('BACKPANEL_01')

      concretePaths.children.map((path) => {
        path.material = mapConcreteFloor
      })

      earthTreesPaths.children.map((path) => {
        path.material = mapGrassyFloor2
      })

      shrubPaths.children.map((path) => {
        path.material = mapGrassyFloor
      })

      woodPath2.children.map((path) => {
        path.material = mapWoodFloorDark
      })

      Backpanel.children.map((path) => {
        path.material = mapWoodFloorDark
      })

      gltf.scene.getObjectByName('Object_668').material = mapWoodFloor
      gltf.scene.getObjectByName('Object_660').material = mapWoodFloor2
      gltf.scene.getObjectByName('Object_671').material = mapWoodFloor3
      gltf.scene.getObjectByName('Object_1').material = mapWoodFloor3

      res(gltf.scene);
    });
});

export default garden;
