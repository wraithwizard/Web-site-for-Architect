import * as THREE from "/three/three.module.js";
import {GLTFLoader} from "/three/GLTFLoader.js";
//permite mover la escena con el mouse
import {OrbitControls} from '/three/OrbitControls.js';

//el canvas
const myCanvas = document.getElementById("myCanvas");
const loadingScreen = document.getElementById("loader");

let scene, camera;

const sizeX = 380;
let sizeY = 319;

// loading screen
function init(){
    return new Promise( (resolve) => {              
            camera = new THREE.PerspectiveCamera(50, sizeX / sizeY, 0.1, 1000);
            //camera
            camera.position.set(21.11, 23.93, 26.54);
            camera.rotation.set(-36.32, 29.30, 19.79)
            scene = new THREE.Scene();

            var loader = new GLTFLoader();
            var obj;
            loader.load("three/models/woodHouse2.gltf", function(gltf){
                obj = gltf.scene;
                scene.add(gltf.scene);  
                //promise resolve           
                resolve(gltf); 
            });             
        //loads my loading anim
        loadingScreen.classList.add("loader");    
        // console.log("loading");
    });
}

// async-await
async function app(){
    try{
        //fulfills the promise
        const carga = await init();
        loadingScreen.remove("loader");        
    }catch(error){
        console.log(error);
    }
}
app();

const renderer = new THREE.WebGLRenderer({antialias: true});
// renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setSize(myCanvas.clientWidth, sizeY);

// // changes siseY when media query is >1200px
const mediaQuery = window.matchMedia("(min-width: 1200px)");

function ChangeSizeY(){
    if (mediaQuery.matches){        
        renderer.setSize(myCanvas.clientWidth, 638);
        } else {
        renderer.setSize(myCanvas.clientWidth, sizeY);
    }
}

//document.body.appendChild(renderer.domElement);
myCanvas.appendChild(renderer.domElement);

/** background */
scene.background = new THREE.Color(0x5D6D7E);

// lights
 var light = new THREE.HemisphereLight(0xffffff, 0x000000, 0.5);
 scene.add(light);

//Directional light
const moonLight = new THREE.DirectionalLight('#ffffff', 1)
scene.add(moonLight)
moonLight.position.set(-5.16, 15.63, 8.28);

//para los controles
const controls = new OrbitControls(camera, renderer.domElement);

// resizing the motherfucking display size
function resizeCanvasToDisplaySize() {
    const canvas = renderer.domElement;
    // look up the size the canvas is being displayed
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
  
    // adjust displayBuffer size to match
    if (canvas.width !== width || canvas.height !== height) {
      // you must pass false here or three.js sadly fights the browser
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();  
      // update any render target sizes here
    }
}

function animate(){ 
    resizeCanvasToDisplaySize();     
    requestAnimationFrame(animate);
     //para los controles
    controls.update();
    ChangeSizeY();
    renderer.render( scene, camera );
}
animate();

