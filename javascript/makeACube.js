var scene, camera, renderer;
var geometry, material, cube, light, controls;

init();
animate();

function init() {

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;

    geometry = new THREE.BoxGeometry( 200, 200, 200 );
    material = new THREE.MeshBasicMaterial( {color: 0xf3ff0d, wireframe: true} );

    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild(renderer.domElement);

}

function animate() {

    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.02;

    renderer.render( scene, camera );

}
