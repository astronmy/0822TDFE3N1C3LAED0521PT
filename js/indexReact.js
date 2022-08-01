/* const app = document.getElementById("root"); */
const app = document.querySelector("#root");

/* 
  React.createElement()
  1. type
  2. props
  3. children
*/

const Avatar = (params) => {
  return `
      <picture>
        <img src="https://randomuser.me/api/portraits/lego/${params.id}.jpg" alt="${params.name}">
        <p>${params.name}</p>
      </picture>
      `;
}

const AvatarReact = () => {
  const avatar = "https://randomuser.me/api/portraits/lego/3.jpg";
  const image = React.createElement("img", {src: avatar, className: "img-avatar", alt: "Logo", key: 3})
  const p  = React.createElement("p", {key: 1}, "Renzo")
  const p2 = React.createElement("p", {key: 2}, "Vinci")
  return React.createElement("picture", {}, [image, p, p2]);
}

/* ReactDOM.render(React.createElement(AvatarReact), app);*/

const root = ReactDOM.createRoot(app);
root.render(React.createElement(AvatarReact));