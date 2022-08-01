/* const app = document.getElementById("root"); */
const app = document.querySelector("#root");

const Avatar = (params) => {
  return `
      <picture>
        <img src="https://randomuser.me/api/portraits/lego/${params.id}.jpg" alt="${params.name}">
        <p>${params.name}</p>
      </picture>
      `;
}

app.innerHTML = Avatar({name: "Renzo", id: 5});
app.innerHTML += Avatar({name: "Andrés", id: 3});
