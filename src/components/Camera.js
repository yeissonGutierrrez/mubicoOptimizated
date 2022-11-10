let FOV
let FAR
let NEAR = 400

// Mobile camera
if (window.innerWidth <= 768) {
  FOV = 50
  FAR = 1200
  // 769px - 1080px screen width camera
} else if (window.innerWidth >= 769 && window.innerWidth <= 1080) {
  FOV = 50
  FAR = 1475
  // > 1080px screen width res camera
} else {
  FOV = 40
  FAR = 1800
}

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1800);


export default camera