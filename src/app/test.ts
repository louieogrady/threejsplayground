import { Component, OnDestroy, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
    selector: 'test',
    templateUrl: './test.component.pug',
    // styleUrls: ['./test.component.scss']
})

export class Test implements OnInit, OnDestroy {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer ;
    geometry: THREE.BoxGeometry;
    material: THREE.MeshBasicMaterial;
    cube: THREE.Mesh;
    controls: OrbitControls;

    ngOnInit() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.geometry = new THREE.BoxGeometry();
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.scene.add(this.cube);
        this.camera.position.z = 2;
        document.body.appendChild(this.renderer.domElement);
        this.animate();
    }

    ngOnDestroy() {
        document.body.removeChild(this.renderer.domElement)
    }

    animate = () => {
        requestAnimationFrame(this.animate);
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer.render(this.scene, this.camera);
    };



}

