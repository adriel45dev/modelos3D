// Configuração inicial
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.6);
document.getElementById("canvas-container").appendChild(renderer.domElement);

// Função para atualizar o tamanho da câmera ao redimensionar a janela
window.addEventListener("resize", () => {
  const newWidth = window.innerWidth * 0.6;
  const newHeight = window.innerHeight * 0.6;

  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(newWidth, newHeight);
});

// Criação de uma forma
// const geometry = new THREE.BoxGeometry();
const geometry = formas.esfera();

const material = new THREE.MeshBasicMaterial({
  color: 0x3293a8,
  wireframe: true,
});

const forma = new THREE.Mesh(geometry, material);

// Escala da forma
// forma.scale.set(2, 2, 2); // Define a escala em x, y e z para duplicar o tamanho

scene.add(forma);

// Movimentação da câmera
camera.position.z = 5;

// Renderização da cena
const animate = () => {
  requestAnimationFrame(animate);

  // Rotação da forma
  forma.rotation.x += 0.01;
  forma.rotation.y += 0.01;

  renderer.render(scene, camera);
};

animate();
