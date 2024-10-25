import "lit-components-1"
import useCustomElement from "use-custom-element";

function App() {

  const cards = [
    {
      title: "Cheetah thai",
      altText: "miau",
      ctaText: "Read more →",
      image: "http://placekitten.com/500/200",
      link: "#kitty-link",
      text:
        "Mew. Hiding behind the couch until lured out by a feathery toy my water bowl is clean",
      textDesc: "Birman tiger abyssinian",
      textDescLink: "#kitty-owner"
    },
    {
      title: "Singapura savan",
      altText: "miau",
      ctaText: "Read more →",
      image: "http://placekitten.com/500/200",
      link: "#kitty-link",
      text:
        "Then sniff the offering and walk away for ask to go outside and ask to come inside",
      textDesc: "Grimalkin for siamese",
      textDescLink: "#kitty-owner"
    },
    {
      title: "Devonshire rex lion",
      altText: "miau",
      ctaText: "Read more →",
      image: "http://placekitten.com/500/200",
      link: "#kitty-link",
      text:
        "Jaguar leopard or mouser siberian and savannah. Burmese go outside and ask to come inside",
      textDesc: "Thai abyssinian for leopard siberian",
      textDescLink: "#kitty-owner"
    },
    {
      title: "Devonshire rex",
      altText: "miau",
      ctaText: "Read more →",
      image: "http://placekitten.com/500/200",
      link: "#kitty-link",
      text:
        "Ocicat american shorthair malkin yet turkish angora mouser siberian",
      textDesc: "Thai abyssinian",
      textDescLink: "#kitty-owner"
    },
    {
      title: "Bobcat donskoy",
      altText: "miau",
      ctaText: "Read more →",
      image: "http://placekitten.com/500/200",
      link: "#kitty-link",
      text: "Kitten bobcat for panther malkin yet turkish angora mouser",
      textDesc: "Lynx russian blue",
      textDescLink: "#kitty-owner"
    },
    {
      title: "Havana brown leopard",
      altText: "miau",
      ctaText: "Read more →",
      image: "http://placekitten.com/500/200",
      link: "#kitty-link",
      text:
        "Norwegian forest american bobtail, for tomcat singapura egyptian mau",
      textDesc: "Sphynx havana brown",
      textDescLink: "#kitty-owner"
    }
  ];

  const [customElementProps, ref] = useCustomElement({
    cards
  });

  return (
    <div>
      <cards-images {...customElementProps} ref={ref}></cards-images>;
    </div>
  )
}

export default App
