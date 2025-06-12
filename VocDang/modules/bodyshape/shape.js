document.addEventListener('DOMContentLoaded', function () {
  // Load saved data
  const savedData = JSON.parse(localStorage.getItem('shapeData'));
  if (savedData) {
    ['shoulder', 'chest', 'waist', 'hip', 'height', 'gender'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = savedData[id] || '';
    });
  }

  // Load saved result
  const savedResult = localStorage.getItem('savedShapeResult');
  if (savedResult) {
    displayResult(JSON.parse(savedResult));
  }