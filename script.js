document.getElementById('uploadForm').onsubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  await fetch('https://agniwrite-backend.onrender.com/submit', {
    method: 'POST',
    body: formData
  });

  alert("Submitted for review!");
  e.target.reset();
};
