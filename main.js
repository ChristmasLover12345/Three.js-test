import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement )

const geometry = new THREE.DodecahedronGeometry(8);
const material = new THREE.MeshPhongMaterial( { color: 0x00ff00});
const cube = new THREE.Mesh( geometry, material);

const light = new THREE.DirectionalLight({color: 0xFFFFFF}, 2)
light.position.set(-1, 2, 47)

function makeInstance(geometry, color, x)
{
    const material = new THREE.MeshPhongMaterial({color});
    const dedadrong = new THREE.Mesh(geometry, material);
    scene.add(dedadrong)

    dedadrong.position.x = x

    return dedadrong
}

const dedadrongs = [makeInstance(geometry, 0x44aa88, 0), makeInstance(geometry, 0x8844aa, -20),  makeInstance(geometry, 0xaa8844,  20)]

scene.add(light)

camera.position.z = 45

function animate(time) {
    time *= 0.001;

    dedadrongs.forEach((deda, ndx) => {
        const speed = 1 + ndx * .1
        const rot = time * speed

        deda.rotation.x = rot
        deda.rotation.y = rot

    })


    // cube.rotation.x += 0.001;
    // cube.rotation.y += 0.002;
    renderer.render(scene, camera)

    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);