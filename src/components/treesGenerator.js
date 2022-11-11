
  const lineMaterial = new THREE.LineBasicMaterial( { color: Math.random() * 0xffffff } );
  const lineGeometry = new THREE.BufferGeometry();

  var line = new THREE.Mesh( lineGeometry, lineMaterial );

function treesGenerator(treesGeo, treeJumper, sceneInfo) {

  let imgtree1 = document.createElement('img');
  imgtree1.src = './mubicoOptimizated/src/images/trees/Arboles 2.png'
  let sprite1 = new THREE.Texture(imgtree1);
  sprite1.needsUpdate = true;

  let imgtree2 = document.createElement('img');
  imgtree2.src = './mubicoOptimizated/src/images/trees/Arboles.png'
  let sprite2 = new THREE.Texture(imgtree2);
  sprite2.needsUpdate = true;

  let imgtree3 = document.createElement('img');
  imgtree3.src = './mubicoOptimizated/src/images/trees/_ANA_Astronium graveolens, Beltran_Hernandez (104)_-1.png'
  let sprite3 = new THREE.Texture(imgtree3);
  sprite3.needsUpdate = true;

  let imgtree4 = document.createElement('img');
  imgtree4.src = './mubicoOptimizated/src/images/trees/_ANA_Astronium graveolens, Beltran_Hernandez (618)_-1.png'
  let sprite4 = new THREE.Texture(imgtree4);
  sprite4.needsUpdate = true;

  let imgtree5 = document.createElement('img');
  imgtree5.src = './mubicoOptimizated/src/images/trees/_ARE_Sabal mauritiiformis, Beltran_Hernandez (1677)_-1.png'
  let sprite5 = new THREE.Texture(imgtree5);
  sprite5.needsUpdate = true;

  let array = []
  // let numMaxplans = treesGeo1.attributes.position.array.length
  let plans = 0
  let count = 0
  let threeType = 0
  let treeCounter = 0

  for (let index = 0; index < treesGeo.attributes.position.array.length; index++) {
    if (count <= 3) {
      count++
      array.push(treesGeo.attributes.position.array[index])
      //  console.log('aquii',array)
    } else if (count === 4) {
      count++
      let mat

      switch (threeType) {
        case 0:
          mat = new THREE.SpriteMaterial({ map: sprite3, transparent: true, alphaTest: 0.2, fog: true, opacity: 1 })
          break;

        case 1:
          mat = new THREE.SpriteMaterial({ map: sprite2, transparent: true, alphaTest: 0.2, fog: true, opacity: 1 })
          break;

        case 2:
          mat = new THREE.SpriteMaterial({ map: sprite1, transparent: true, alphaTest: 0.2, fog: true, opacity: 1 })
          break;

        case 3:
          mat = new THREE.SpriteMaterial({ map: sprite5, transparent: true, alphaTest: 0.2, fog: true, opacity: 1 })
          break;

        case 4:
          mat = new THREE.SpriteMaterial({ map: sprite4, transparent: true, alphaTest: 0.2, fog: true, opacity: 1 })
          break;

        case 5:
          mat = new THREE.SpriteMaterial({ map: sprite3, transparent: true, alphaTest: 0.2, fog: true, opacity: 1 })
          break;

        case 6:
          mat = new THREE.SpriteMaterial({ map: sprite1, transparent: true, alphaTest: 0.2, fog: true, opacity: 1 })
          break;
      }

      let lod = new THREE.LOD();
      // let scale = Math.random() * 9
      let scale = 4;
      let planes = new THREE.Sprite(mat);
      // planes.position.set(array[0] - 184, array[1] - 0.5, array[2] - 28)
      lod.position.set(array[0] - 184, array[1] - 0.5, array[2] - 28)
      lod.updateMatrix();
      lod.matrixAutoUpdate = false;
      lod.addLevel(line, 30);
      sceneInfo.scene.add( lod );

      if (threeType === 2) {
        scale = 9
      }

      if (threeType === 6 || threeType === 3) {
        scale = 6
      }

      if (scale >= 8) {
        if(threeType === 2) {
          planes.scale.x = 15
          planes.scale.y = 20
          lod.position.setY(1)
        } else {
          planes.scale.x = 2
          planes.scale.y = 4
          lod.position.setY(array[1] - 2.2)
        }

      } else if (scale >= 5 && scale <= 7) {

        if (threeType === 2) {
          planes.scale.x = 7
          planes.scale.y = 9
  
          lod.position.setY(-1)
        } else {
          planes.scale.x = 7
          planes.scale.y = 9
  
          lod.position.setY(array[1] - 2)

        }

      } else if (scale <= 4) {
        if (threeType === 2) {
          planes.scale.x = 4
          planes.scale.y = 6
          lod.position.setY(-2)
        } else {
          planes.scale.x = 4
          planes.scale.y = 6
          lod.position.setY(array[1] - 3)
        }
      } 
      // planes.lookAt(camera)
      if (plans <= treesGeo.attributes.position.array.length) {
        plans++
        if (threeType <= 5) {
          threeType++
        } else {
          threeType = 0
        }
        if (treeCounter === treeJumper) {
          treeCounter = 0
          lod.addLevel(planes,20);
          lod.updateMatrix();
          lod.matrixAutoUpdate = false;
          sceneInfo.scene.add(lod);
          // sceneInfo.scene.add(planes);
        } else {
          treeCounter++
        }
      } else {
        console.log('maxima cantidad de planos')
      }

    } else if (count === 5) {

      count = 0
      array = []
    }


  }
}

export default treesGenerator