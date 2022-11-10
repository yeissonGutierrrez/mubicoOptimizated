import camera from "./components/Camera.js";
import cube from "./components/shapes/Cube.js";
import light from "./components/Light.js";
import renderer from "./components/Renderer.js";
import loopMachine from "./components/LoopMachine.js";
import garden from "./models/garden/garden.js";
import points from "./models/points/points.js";
import Stats from "../js/Stats.js";
import makeScene from "./components/makeScene.js";
import Orchids1 from "./models/orchids/Orchids1.js";
import resize from "./components/Resize.js";
import treesGenerator from "./components/treesGenerator.js";
import woodRoad from "./models/woodRoad/woodRoad.js";
import structureLightsOne from "./models/structureLightsOne/structureLightsOne.js";
import structureLightsTwo from "./models/structureLightsTwo/structureLightsTwo.js";
import structureOne from "./models/structureOne/structureOne.js";
import structureTwo from "./models/structureTwo/structureTwo.js";
import metalRails from "./models/metalRails/metalRails.js";
import orchidText from "./models/orchidText/orchidText.js";
import orchidText2 from "./models/orchidText/orchidText2.js";
import Orchids2 from "./models/orchids/Orchids2.js";
import Orchids3 from "./models/orchids/Orchids3.js";
import Orchids4 from "./models/orchids/Orchids4.js";
import Orchids5 from "./models/orchids/Orchids5.js";
import Orchids6 from "./models/orchids/Orchids6.js";
import Orchids7 from "./models/orchids/Orchids7.js";


var getBrowserInfo = function() {
  var ua= navigator.userAgent, tem, 
  M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if(/trident/i.test(M[1])){
      tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
      return 'IE '+(tem[1] || '');
  }
  if(M[1]=== 'Chrome'){
      tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
      if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
  }
  M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
  if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
  return M.join(' ');
};

let browserData = getBrowserInfo().split(' ')[0]
if (browserData === 'Chrome') { 

    let counter = 0
    let paused = false

    let fadeIn = (o) => {
      o.classList.add("fadeIn");
      o.classList.remove("fadeOut");
    };
  
    let fadeOut = (o) => {
      o.classList.add("fadeOut");
  
      if (document.querySelector("#myDiv")) {
        setTimeout(d_none, 600);
        // si existe el elemento #myDiv ejecuto la funcion una vez que pasen .6s que es lo que tarda en opacarse
      }
    };

    const orbitControls = new THREE.OrbitControls(
      camera,
      document.getElementById("box")
    );
    orbitControls.minDistance = 0;
    orbitControls.maxDistance = 1;
    orbitControls.enableDamping = true;
    orbitControls.enableZoom = false;
    orbitControls.enablePan = false;
    orbitControls.minPolarAngle = Math.PI / 2.1;
    orbitControls.maxPolarAngle = Math.PI / 1.5;
    orbitControls.screenSpacePanning = true;
    orbitControls.enableRotate = true;
    orbitControls.autoRotate = false;

    orbitControls.addEventListener( 'change', (e) => {
      counter = 0
    } );

      

    const resetTimeline = new gsap.timeline({
      defaults: {
        duration: 1,
      },
    });
    
    resetTimeline.to(orbitControls.target, {
      x: -274,
      y: -1.5,
      z: -60,
    }, {
      x: -275,
      y: -1.5,
      z: -40
    });
    
    
    const sceneElements = [];
    
    function addScene(elem, fn) {
      const ctx = document.createElement("canvas").getContext("2d");
      elem.appendChild(ctx.canvas);
      sceneElements.push({ elem, ctx, fn });
    }
    
    function addTrees(sceneInfo) {
      //trees section 1
      const treesCamp = sceneInfo.scene.getObjectByName('EARTH_TREES').children.find(e => e.name === 'Object_373')
      const treesCamp2 = sceneInfo.scene.getObjectByName('EARTH_TREES').children.find(e => e.name === 'Object_374')
      const treesCamp3 = sceneInfo.scene.getObjectByName('EARTH_TREES').children.find(e => e.name === 'Object_372')
      const treesCamp4 = sceneInfo.scene.getObjectByName('EARTH_TREES').children.find(e => e.name === 'Object_673')
      const treesCamp5 = sceneInfo.scene.getObjectByName('EARTH_TREES').children.find(e => e.name === 'Object_675')
      const treesCamp6 = sceneInfo.scene.getObjectByName('EARTH_TREES').children.find(e => e.name === 'Object_333')
      const treesCamp7 = sceneInfo.scene.getObjectByName('EARTH_TREES').children.find(e => e.name === 'Object_332')
    
    
    
      //aqui se renderiza los arboles en png
    
      let treesGeo1 = new THREE.BufferGeometry();
      treesGeo1.copy(treesCamp.geometry)
    
      let treesGeo2 = new THREE.BufferGeometry();
      treesGeo2.copy(treesCamp2.geometry)
    
      let treesGeo3 = new THREE.BufferGeometry();
      treesGeo3.copy(treesCamp3.geometry)
    
      let treesGeo4 = new THREE.BufferGeometry();
      treesGeo4.copy(treesCamp4.geometry)
    
      let treesGeo5 = new THREE.BufferGeometry();
      treesGeo5.copy(treesCamp5.geometry)
    
      let treesGeo6 = new THREE.BufferGeometry();
      treesGeo6.copy(treesCamp6.geometry)
    
      let treesGeo7 = new THREE.BufferGeometry();
      treesGeo7.copy(treesCamp7.geometry)
    
    
    
      treesGenerator(treesGeo1, 7, sceneInfo)
      treesGenerator(treesGeo2, 3, sceneInfo)
      treesGenerator(treesGeo3, 7, sceneInfo)
      treesGenerator(treesGeo4, 1, sceneInfo)
      treesGenerator(treesGeo5, 3, sceneInfo)
      treesGenerator(treesGeo6, 1, sceneInfo)
      treesGenerator(treesGeo7, 1, sceneInfo)
    
    }
    
    
    // let stats = new Stats();
    // stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
    // document.body.appendChild(stats.dom);
    
    function principalScene(elem) {
      let fog = {
        color: 0x353535,
        near: 10,
        far: 27,
      };
    
      const sceneInfo = makeScene(elem, camera, fog);
      let lod = new THREE.LOD();

      let pointsNames = [];
      let orchids = ['OrchidBox1', 'OrchidBox2', 'OrchidBox3', 'OrchidBox4', 'OrchidBox5', 'OrchidBox6', 'OrchidBox7'];
      let objects = [];

      cube.position.set(-184, -5, -28)
      sceneInfo.scene.add(cube);
      sceneInfo.scene.add(light);

      // camera.lookAt(cube.position);
    
      const raycaster = new THREE.Raycaster();
      let meshCurrentHover = null;
    
      points(sceneInfo.scene,pointsNames,objects )
      
      Orchids1(sceneInfo.scene, orchids[0], objects)
      Orchids2(sceneInfo.scene, orchids[1], objects)
      Orchids3(sceneInfo.scene, orchids[2], objects)
      Orchids4(sceneInfo.scene, orchids[3], objects)
      Orchids5(sceneInfo.scene, orchids[4], objects)
      Orchids6(sceneInfo.scene, orchids[5], objects)
      Orchids7(sceneInfo.scene, orchids[6], objects)
      
      woodRoad.then((gltf) => {
        sceneInfo.scene.add(gltf);
      })
    
      structureLightsOne(sceneInfo.scene)
      structureLightsTwo(sceneInfo.scene)
    
      structureOne(sceneInfo.scene)
    
      structureTwo(sceneInfo.scene)
    
      metalRails.then((gltf) => {
        sceneInfo.scene.add(gltf)
      })
    
      
      garden.then((gltf) => {
        sceneInfo.scene.add(gltf);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        // camera.position.set(-274, -1.5, -6,);
    
        let imgFamily = document.createElement('img');
        imgFamily.src = '/src/images/family.png'
        let familyTexture = new THREE.Texture(imgFamily);
        familyTexture.needsUpdate = true;
        let familyMat = new THREE.SpriteMaterial({ map: familyTexture, transparent: true, alphaTest: 0.2, fog: true, opacity: 1 })
    
        let familySprite = new THREE.Sprite(familyMat);
        familySprite.position.set(-274, -2.8, -45,)
        familySprite.scale.x = 4
        familySprite.scale.y = 4
        sceneInfo.scene.add(familySprite)
    
        // const hdrUrls = ['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'];
        // let hdrCubeMap = new THREE.HDRCubeTextureLoader()
        //   .setPath('/src/textures/')
        //   .load(hdrUrls);
    
        let material = new THREE.MeshPhysicalMaterial({
          transmission: 1,
          thickness: 0,
          roughness: 0,
          // envMap: hdrCubeMap,
          metalness: 0,
          // color: new THREE.Color("rgb(255, 0, 0)"),
          //para que se puedan ver los sprites
          depthWrite: false,
        });
    
        sceneInfo.scene.getObjectByName('GLASS_RAIL').children.map(e => {
          e.geometry.dispose();
          e.material = material
        })
    
    
        addTrees(sceneInfo)
    
        //textures
        const earthTexture = new THREE.TextureLoader().load('https://i.ibb.co/f95zZL9/Textures-Com-Grass0153-2-seamless-S.jpg')
        const woodTexture = new THREE.TextureLoader().load('https://i.ibb.co/wzVk7Ps/WOOD-01.png')
        const woodTexture2 = new THREE.TextureLoader().load('https://i.ibb.co/TcZgxcg/Walnut-dark-100-DP.jpg')
        const concreteTexture = new THREE.TextureLoader().load('https://i.ibb.co/LknZNmz/Concrete-blocks-675-DB.jpg')
        const concreteTexture2 = new THREE.TextureLoader().load('https://i.ibb.co/LknZNmz/Concrete-blocks-675-DB.jpg')
        const grassyTexture = new THREE.TextureLoader().load('https://i.ibb.co/CVZ6y6Z/Grassy-150-DB.jpg')
        const grassyTexture2 = new THREE.TextureLoader().load('https://i.ibb.co/S73YDqW/Grass-dark-150-DB.jpg')
        const galvanizedTexture = new THREE.TextureLoader().load('https://i.ibb.co/JHB0vfr/Galvanized-steel-100-DB.jpg')
    
    
        // woodTexture.wrapS = THREE.RepeatWrapping
        // woodTexture.wrapT = THREE.RepeatWrapping
    
        woodTexture2.wrapS = THREE.RepeatWrapping
        woodTexture2.wrapT = THREE.RepeatWrapping
    
        earthTexture.wrapS = THREE.RepeatWrapping
        earthTexture.wrapT = THREE.RepeatWrapping
    
        concreteTexture.wrapS = THREE.RepeatWrapping
        concreteTexture.wrapT = THREE.RepeatWrapping
    
        concreteTexture2.wrapS = THREE.RepeatWrapping
        concreteTexture2.wrapT = THREE.RepeatWrapping
    
        grassyTexture.wrapS = THREE.RepeatWrapping
        grassyTexture.wrapT = THREE.RepeatWrapping
    
        grassyTexture2.wrapS = THREE.RepeatWrapping
        grassyTexture2.wrapT = THREE.RepeatWrapping
    
        galvanizedTexture.wrapS = THREE.RepeatWrapping
        galvanizedTexture.wrapT = THREE.RepeatWrapping
    
        // woodTexture.repeat.set(20.000, 20.000)
        // woodTexture.rotation = 80
    
        woodTexture2.repeat.set(2.000, 2.000)
        woodTexture2.rotation = 90
    
        concreteTexture.repeat.set(100.000, 100.000)
        concreteTexture.rotation = 90
    
        concreteTexture2.repeat.set(10.000, 10.000)
        concreteTexture2.rotation = 90
    
        grassyTexture.repeat.set(70.000, 70.000)
    
        grassyTexture2.repeat.set(50.000, 50.000)
    
        galvanizedTexture.repeat.set(10.000, 10.000)
    
        earthTexture.repeat.set(50, 50)
    
        const maphearth = new THREE.MeshStandardMaterial({
          map: earthTexture
        })
    
        // const mapWoodFloor = new THREE.MeshStandardMaterial({
        //   map: woodTexture,
        //   shadowSide: true
        // })
    
        const mapWoodFloor2 = new THREE.MeshStandardMaterial({
          map: woodTexture2,
          shadowSide: true
        })
    
        const mapConcreteFloor = new THREE.MeshStandardMaterial({
          map: concreteTexture,
          shadowSide: true
        })
    
        const mapConcreteFloor2 = new THREE.MeshStandardMaterial({
          map: concreteTexture2,
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
    
        const mapGalvanizedTextureFloor = new THREE.MeshStandardMaterial({
          map: galvanizedTexture,
          shadowSide: true
        })
    
    
        // gltf.sceneInfo.scene.getObjectByName('EARTH').children.map(e => e.material = maphearth)
        // sceneInfo.scene.getObjectByName('WOOD_PATH_01').children.map(e => e.material = mapWoodFloor)
        // sceneInfo.scene.getObjectByName('METAL_01').children.map(e => e.material = mapWoodFloor2)
        // sceneInfo.scene.getObjectByName('PATH_CONCRETE').children.map(e => e.material = mapConcreteFloor)
        // sceneInfo.scene.getObjectByName('EARTH_TREES').children.map(e => e.material = mapGrassyFloor2)
        // sceneInfo.scene.getObjectByName('EARTH_SHRUB').children.map(e => e.material = mapGrassyFloor)
        // sceneInfo.scene.getObjectByName('Object_1').material = mapConcreteFloor2
        // sceneInfo.scene.getObjectByName('Object_668').material = mapWoodFloor
        // sceneInfo.scene.getObjectByName('Object_660').material = mapWoodFloor
        // sceneInfo.scene.getObjectByName('Object_666').material = mapWoodFloor2
        // sceneInfo.scene.getObjectByName('Object_665').material = mapWoodFloor2
        // sceneInfo.scene.getObjectByName('Object_663').material = mapWoodFloor2
    
        const pointer = new THREE.Vector2(300, 300);
    
        function onPointerMove(event) {
          pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
          pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }
    
        window.addEventListener("pointermove", onPointerMove);
    
        const timeline = new gsap.timeline({
          defaults: {
            duration: 1,
          },
        });
    
        const gsapAnimations = (mesh) => {
          let point = sceneInfo.scene.getObjectByName(mesh);
          let currentPos = {
            x: point.geometry.attributes.position.array[0] - 184,
            y: point.geometry.attributes.position.array[1] - 3.2,
            z: point.geometry.attributes.position.array[2] - 28,
          }
          console.log('pointer en position', currentPos)
          timeline.to(orbitControls.target, {
            x: point.geometry.attributes.position.array[0] - 184,
            y: point.geometry.attributes.position.array[1] - 3.2,
            z: point.geometry.attributes.position.array[2] - 28,
          });
          // aqui se modifica la camara despues de posicionarse
          //  .to(camera.position, {
          //    x: animationsParams[mesh].camera.x,
          //    y: animationsParams[mesh].camera.y,
          //    z: animationsParams[mesh].camera.z,
          //  }, '-=1.0')  // no agregar dilay a la primera animacion porque puede ocasionar un error
          //  .to(camera, {
          //   //  zoom:animationsParams.cube1.zoom,
          //    onUpdate: () => {
          //      camera.updateProjectionMatrix()
          //    }
          //  }, "-=1.0")
    
          //  cameraFolder.updateDisplay()
        };
    
        
    
        const objectForCollitions = () => {
          return objects //tambien podemos pasarles grupos mediante three.groups
        }
    
        //handle mesh click
        let meshCurrentClick = null
    
        const handleMeshsClick = () => {
          let modal = document.getElementById('modal')
          let modal3d = document.getElementById('modal3d')
          let modal3d2 = document.getElementById('modal3d2')
          let close = document.getElementById('close')
          let buttonModal3d = document.getElementById('buttonModal3d')
          let buttonModal3d2 = document.getElementById('buttonModal3d2')
    
          buttonModal3d.addEventListener('click', () => {
            modal3d.style.display = 'block'
            modal.style.display = 'none'
          })

          buttonModal3d2.addEventListener('click', () => {
            modal3d2.style.display = 'block'
            modal.style.display = 'none'
          })
    
          close.addEventListener('click', () => {
            modal.style.display = 'none'
          })
    
          try {
            let orchidInfo1 = document.getElementById('orchidInfo1')
            let orchidInfo2 = document.getElementById('orchidInfo2')
            switch (meshCurrentClick.name) {
              case pointsNames.find(e => e === meshCurrentClick.name):
                gsapAnimations(meshCurrentClick.name)
    
                console.log('click on a point')
                return meshCurrentClick = null
    
              case 'OrchidBox1':
                  orchidInfo2.style.display = 'none'
                  orchidInfo1.style.display = 'block'
                  modal.style.display = 'flex'

                  buttonModal3d2.style.display = 'none'
                  buttonModal3d.style.display = 'flex'
                  
                  console.log('click on a orchids')

                  return meshCurrentClick = null 
    
              case 'OrchidBox2':
                  orchidInfo1.style.display = 'none'
                  orchidInfo2.style.display = 'block'
                  modal.style.display = 'flex'

                  buttonModal3d.style.display = 'none'
                  buttonModal3d2.style.display = 'flex'
                  
                  console.log('click on a orchids')

                  return meshCurrentClick = null     
    
              case 'OrchidBox3':
                  orchidInfo2.style.display = 'none'
                  orchidInfo1.style.display = 'block'
                  modal.style.display = 'flex'

                  buttonModal3d2.style.display = 'none'
                  buttonModal3d.style.display = 'flex'
                  
                  console.log('click on a orchids')

                  return meshCurrentClick = null 
    
              case 'OrchidBox4':
                  orchidInfo1.style.display = 'none'
                  orchidInfo2.style.display = 'block'
                  modal.style.display = 'flex'

                  buttonModal3d.style.display = 'none'
                  buttonModal3d2.style.display = 'flex'
                  
                  console.log('click on a orchids')

                  return meshCurrentClick = null     
    
              case 'OrchidBox5':
                  orchidInfo2.style.display = 'none'
                  orchidInfo1.style.display = 'block'
                  modal.style.display = 'flex'

                  buttonModal3d2.style.display = 'none'
                  buttonModal3d.style.display = 'flex'
                  
                  console.log('click on a orchids')

                  return meshCurrentClick = null 
    
              case 'OrchidBox6':
                  orchidInfo1.style.display = 'none'
                  orchidInfo2.style.display = 'block'
                  modal.style.display = 'flex'

                  buttonModal3d.style.display = 'none'
                  buttonModal3d2.style.display = 'flex'
                  
                  console.log('click on a orchids')

                  return meshCurrentClick = null 
              
                 
              case 'OrchidBox7':
                orchidInfo2.style.display = 'none'
                orchidInfo1.style.display = 'block'
                modal.style.display = 'flex'

                buttonModal3d2.style.display = 'none'
                buttonModal3d.style.display = 'flex'
                
                console.log('click on a orchids')

                return meshCurrentClick = null 
             
              default:
                meshCurrentClick = null
                break;
            }
    
          } catch (error) {
            console.log(error)
          }
        }
    
    
    
        window.addEventListener('dblclick', handleMeshsClick)
    
        var clock = new THREE.Clock()
        console.log('clock', clock.getDelta())
        const animate = () => {
    
          raycaster.setFromCamera(pointer, camera)
    
          const collitions = objectForCollitions()
    
          const intersects = raycaster.intersectObjects(collitions)
          // console.log(intersects)
    
          //mouse on leave
          if (meshCurrentHover) {
            meshCurrentHover = null
            meshCurrentClick = null
          }
    
    
          //mouse hover and click
          if (intersects.length) {
            meshCurrentHover = intersects[0].object
            meshCurrentClick = intersects[0].object
          } else if (meshCurrentHover) {
            meshCurrentHover = null
          }
    
          // orbitControls.update();
          // controls.update(clock.getDelta())
          // renderer.render(sceneInfo.scene, camera);
          requestAnimationFrame(animate);
        };
    
        animate()
    
        console.log(pointsNames)
    
    
        //loader
        
        setTimeout(() => {
          document.getElementById("loadText").innerHTML = "Loading complete!";
        }, 8000);
        document.getElementById("loadingCircle").style.display = "none";
    
        let playButton = document.getElementById("playButton");
        playButton.style.display = "block";
    
        const loadertimeline = new gsap.timeline({
          defaults: {
            duration: 10,
          },
        });
    
        playButton.addEventListener("click", () => {
          if (counter >= 10) {
            counter = 0
            loopMachine.start()
          }
          fadeOut(document.querySelector("#loader"));
          let activitiInterval = setInterval(() => {
            if (counter <= 10) {
              counter++
              console.log(counter)
            } else {
              paused = true
              clearInterval(activitiInterval)
              document.getElementById("loader").style.display = "flex";
              fadeIn(document.querySelector("#loader"));
              loopMachine.stop()
            }
          }, 10000);

          setTimeout(() => {
            document.getElementById("loader").style.display = "none";
          }, 2000);
    
          if (!paused) {
            loadertimeline.to(orbitControls.target, {
              x: -274,
              y: -1.5,
              z: -6,
            });
          }
    
          // orbitControls.update()
        });
        console.log("Loading complete!");
      });
    
      return () => {
        renderer.render(sceneInfo.scene, sceneInfo.camera);
        orbitControls.update();
        lod.update(camera);
      };
    }
    
    function secondaryScene(elem) {
      const fov = 45;
      const aspect = 2; // the canvas default
      const near = 0.1;
      const far = 20;
      const camera3 = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera3.position.set(-5, 6, 0);
    
      const sceneInfo = makeScene(elem, camera3);
    
      let pointLight = new THREE.PointLight(0xffffff);
      pointLight.intensity = 10;
      pointLight.distance = 10;
      // currentLight.position.setY(currentLight.position.y + 6)
      pointLight.position.set(2, 8, 2);
    
      sceneInfo.scene.add(pointLight);
    
      orchidText(sceneInfo.scene)
      const controls = new THREE.TrackballControls(
        camera3,
        document.getElementById("modal3d")
      );
      controls.rotateSpeed = 0.5;
      controls.noPan = true;
    
      const radius = 0.8;
      const widthSegments = 4;
      const heightSegments = 2;
      const geometry = new THREE.SphereBufferGeometry(
        radius,
        widthSegments,
        heightSegments
      );
      const material = new THREE.MeshPhongMaterial({
        color: "blue",
        flatShading: false,
      });
      const mesh = new THREE.Mesh(geometry, material);
      // sceneInfo.scene.add(light)
      // sceneInfo.scene.add(mesh);
    
      let modal = document.getElementById("modal3d");
      let closeBotton = document.getElementById("modal3dClose");
    
      closeBotton.addEventListener("click", () => {
        // sceneInfo.scene.clear()
        modal.style.display = "none";
      });
    
      return () => {
        renderer.render(sceneInfo.scene, sceneInfo.camera);
        controls.handleResize();
        controls.update();
      };
    }
    
    function threeScene(elem) {
      const fov = 45;
      const aspect = 3; // the canvas default
      const near = 0.1;
      const far = 20;
      const camera4 = new THREE.PerspectiveCamera(fov, aspect, near, far);
      camera4.position.set(10, 0, 0);
    
      const sceneInfo = makeScene(elem, camera4);
        
      orchidText2(sceneInfo.scene)

      const controls = new THREE.TrackballControls(
        camera4,
        document.getElementById("modal3d2")
      );
      controls.rotateSpeed = 0.5;
      controls.noPan = false;
      controls.enableZoom = false
      controls.noZoom = false
      controls.dynamicDampingFactor = true

      controls.addEventListener( 'change', (e) => {
        counter = 0
      } );
    
      let modal = document.getElementById("modal3d2");
      let closeBotton = document.getElementById("modal3dClose2");
    
      closeBotton.addEventListener("dblclick", () => {
        // sceneInfo.scene.clear()
        modal.style.display = "none";
      });
    
      return () => {
        renderer.render(sceneInfo.scene, sceneInfo.camera);
        controls.handleResize();
        controls.update();
      };
    }
    
    document.querySelectorAll("[data-diagram]").forEach((elem) => {
      const sceneName = elem.dataset.diagram;
      if (sceneName === "box") {
        const sceneRenderFunction = principalScene();
        addScene(elem, sceneRenderFunction);
      } else if (sceneName === "modal3d") {
        const sceneRenderFunction = secondaryScene();
        addScene(elem, sceneRenderFunction);
      } else if (sceneName === "modal3d2") {
        const sceneRenderFunction = threeScene();
        addScene(elem, sceneRenderFunction);
      }
    });
    
    function render(time) {
      time *= 0.001;
    
      for (const { elem, fn, ctx } of sceneElements) {
        // get the viewport relative position opf this element
        const rect = elem.getBoundingClientRect();
        const { left, right, top, bottom, width, height } = rect;
        const rendererCanvas = renderer.domElement;
    
        const isOffscreen =
          bottom < 0 ||
          top > window.innerHeight ||
          right < 0 ||
          left > window.innerWidth;
    
        if (!isOffscreen) {
          // make sure the renderer's canvas is big enough
          if (rendererCanvas.width < width || rendererCanvas.height < height) {
            renderer.setSize(width, height, false);
          }
    
          // make sure the canvas for this area is the same size as the area
          if (ctx.canvas.width !== width || ctx.canvas.height !== height) {
            ctx.canvas.width = width;
            ctx.canvas.height = height;
          }
    
          renderer.setScissor(0, 0, width, height);
          renderer.setViewport(0, 0, width, height);
    
          fn(time, rect);
    
          // copy the rendered scene to this element's canvas
          ctx.globalCompositeOperation = "copy";
          ctx.drawImage(
            rendererCanvas,
            0,
            rendererCanvas.height - height,
            width,
            height, // src rect
            0,
            0,
            width,
            height
          ); // dst rect
        }
        resize.start(renderer)
      }
    }
    
    loopMachine.addCallback(() => {
      // stats.update();
      render();
      
      // renderer.render(scene, camera)
      // rendenerSceneInfo(myscene2, camera2)
      // rendenerSceneInfo(myscene, camera)
    });
    
    loopMachine.start();
    
    // console.log(scene, camera, renderer);
} else {
  document.getElementById('loader').style.display = 'none'
  document.getElementById('error').style.display = 'flex'
}
