import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import Footer from "./Components/Footer";

let arr = [
  {
    title: "Skills",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, odit, maxime assumenda porro inventore fugiat, facere velit consectetur aliquam distinctio voluptas voluptatibus delectus? Necessitatibus inventore a eum ipsum optio nostrum accusantium reprehenderit soluta, repellat magni? Harum minus excepturi voluptatum, inventore perspiciatis voluptates officiis dicta mollitia recusandae itaque, architecto exercitationem expedita. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, odit, maxime assumenda porro inventore fugiat, facere velit consectetur aliquam distinctio voluptas voluptatibus delectus? Necessitatibus inventore a eum ipsum optio nostrum accusantium reprehenderit soluta, repellat magni? Harum minus excepturi voluptatum, inventore perspiciatis voluptates officiis dicta mollitia recusandae itaque, architecto exercitationem expedita.",
  },
  {
    title: "Qualifications",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt consectetur recusandae id, cupiditate iste ab nobis voluptatum fugiat enim, deleniti eaque excepturi eius ex exercitationem natus praesentium aut incidunt amet omnis hic perspiciatis animi? Dolore obcaecati, cupiditate eius excepturi nulla veniam sed doloremque sequi similique in minus deserunt nobis quo unde provident, illum praesentium dolores! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt consectetur recusandae id, cupiditate iste ab nobis voluptatum fugiat enim, deleniti eaque excepturi eius ex exercitationem natus praesentium aut incidunt amet omnis hic perspiciatis animi? Dolore obcaecati, cupiditate eius excepturi nulla veniam sed doloremque sequi similique in minus deserunt nobis quo unde provident, illum praesentium dolores!",
  },
  {
    title: "Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae magni minus adipisci, molestias impedit! Sequi, suscipit officiis ipsum architecto aperiam, eum culpa laboriosam ea iusto natus accusamus nostrum ab sed adipisci consequatur fugiat molestiae nihil voluptas ducimus exercitationem vitae nesciunt! Omnis, beatae harum? Harum aspernatur dicta quibusdam debitis. Doloremque nostrum minima sint voluptate numquam nam voluptatum esse illum quo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae magni minus adipisci, molestias impedit! Sequi, suscipit officiis ipsum architecto aperiam, eum culpa laboriosam ea iusto natus accusamus nostrum ab sed adipisci consequatur fugiat molestiae nihil voluptas ducimus exercitationem vitae nesciunt! Omnis, beatae harum? Harum aspernatur dicta quibusdam debitis. Doloremque nostrum minima sint voluptate numquam nam voluptatum esse illum quo?",
  },
];
function App() {
  return (
    <div className="main">
      <Navbar />
      <About />
      {arr.map((secItem, index) => {
        return (
          <Section
            key={index}
            title={secItem.title}
            description={secItem.description}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
