import { render } from "storyblok-rich-text-react-renderer"

const Textedit = ({blok}) => {
    return (
      <div>
        {render(blok.text)}
      </div>
    )
  }
  
  export default Textedit