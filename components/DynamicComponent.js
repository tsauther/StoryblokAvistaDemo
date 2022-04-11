import Feature from "./Feature";
import Headline from "./Headline";
import Textedit from "./Textedit";
import Placeholder from "./Placeholder";
import Button from "./layout/StyleGuide/Button";
import Navitem from "./Navitem" 

// resolve Storyblok components to Next.js components
const Components = {
  feature: Feature,
  headline: Headline,
  textedit: Textedit,
  button: Button,
  navitem: Navitem
};

const DynamicComponent = ({ blok }) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    // wrap with SbEditable for visual editing
    return <Component blok={blok} />;
  }

  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;