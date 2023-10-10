const formas = (() => {
  const cubo = () => {
    return new THREE.BoxGeometry();
  };

  const dodecaedro = () => {
    return new THREE.DodecahedronGeometry(2);
  };

  const capsula = () => {
    return new THREE.CapsuleGeometry(1, 2, 4, 8);
  };

  const cone = () => {
    return new THREE.ConeGeometry(1, 2, 12);
  };

  const cilindro = () => {
    return new THREE.CylinderGeometry(1, 1, 2, 32); // Raio da base, raio do topo, altura, segmentos
  };

  const esfera = () => {
    return new THREE.SphereGeometry(1, 32, 32);
  };

  return {
    cubo,
    esfera,
    capsula,
    cone,
    cilindro,
    dodecaedro,
  };
})();
