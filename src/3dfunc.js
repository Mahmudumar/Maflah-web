
let container
let camera
let scene
let renderer
let maf
let light1
let light1helper
let light2

let light3


function init() {
    container = document.querySelector('#scene')
    container.style.minHeight = window.innerHeight
    container.style.minWidth = window.innerWidth
        //create scene
    scene = new THREE.Scene()

    renderer = new THREE.WebGLRenderer({ canvas:container, antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)

    //container.appendChild(renderer.domElement)

    const fov = 35;
    const aspect = container.clientWidth / container.clientHeight
    const near = 0.01
    const far = 2000
        //set cam
    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(-1.2, 2, 2.79)
    camera.rotateX(-.6)
    scene.add(camera)

    //add lights
    const ambLight = new THREE.AmbientLight(0x00ff00, .5)
    light1 = new THREE.PointLight(0x265749, 6, 20, 20);
    light2 = new THREE.PointLight(0x2211dd, 6, 20, 20);
    light3 = new THREE.PointLight(0x22ff11, 6, 20, 20);

    light1helper = new THREE.PointLightHelper(light1, 0.3, 0xfcc);
    //light2helper = new THREE.PointLightHelper(light2, 0.3, 0xcfcff)
    //light3helper = new THREE.PointLightHelper(light3, 0.3, 0xaa00f0)

    light1.position.set(0, .2, 1)
    light2.position.set(1, .5, -3)
    light3.position.set(-.4, -.5, -2)

    scene.add(light1, light2, light3, ambLight) // light2helper,  light3helper)



    //load model
    let loader = new THREE.GLTFLoader()
    loader.load('./3dobjs/maflah3d.glb', function(gltf) {
        scene.add(gltf.scene)
        maf = gltf.scene

        animate()

    });



}
function onWindowResize(){
    camera.aspect = (container.clientWidth)/(container.clientHeight)
    camera.updateProjectionMatrix();

    renderer.setSize(container.clientWidth,container.clientHeight);
} 
window.addEventListener('resize',onWindowResize)
function animate() {
    requestAnimationFrame(animate)
    maf.rotation.y += 0.01
    renderer.render(scene, camera)
    
}

init()
 
