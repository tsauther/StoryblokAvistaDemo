import Navitem from './Navitem'
const Header = ({blok}) => {
    return (
      <div className="header_background">
          <div className="header_container">
              <div className="header_slug">
              <a href="https://www.myavista.com" class="header-orange-bar"><img src="https://a.storyblok.com/f/152868/307x120/44e16eba51/avista_bug.png" alt="Avista Logo" class="bug-header"></img></a>
              </div>
          </div>
          <div class="button_container">
            <Navitem></Navitem>
          </div>
      </div>
    )
  }
  
  export default Header