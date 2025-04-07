// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  // { name: "Products", url: "/products" },
  // { name: "Services", url: "/services" },
  { name: "Blog", url: "/blog" },
  { name: "Contact", url: "mailTo:contact@navdyut.com" },
  { name: "Research", url: "/research" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Ecosystem",
    links: [
      { name: "Documentation", url: "#" },
      { name: "Products", url: "/products" },
      { name: "Services", url: "/services" },
    ],
  },
  {
    section: "Company",
    links: [
      { name: "About us", url: "#" },
      { name: "Blog", url: "/blog" },

      { name: "Research", url: "/research" },
    ],
  },
];


export default {
  navBarLinks,
  footerLinks,

};