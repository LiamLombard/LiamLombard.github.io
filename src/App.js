import React from 'react';
import LinkButton from './LinkButton';
import './App.css';
import { FaGithub, FaYoutube, FaTwitch, FaReddit, FaDropbox, FaPlay, FaShoppingBag, FaTv, FaFacebook, FaMailBulk, FaLinkedin, FaBitbucket, FaGoogleDrive, FaFacebookMessenger, FaSpotify, FaAmazon } from 'react-icons/fa';
import SearchBar from './SearchBar';

class App extends React.Component  
{
  constructor()
  {
    super();
    this.mainDiv = React.createRef();
  }

  componentDidMount() 
  {
    this.mainDiv.current.addEventListener("keydown", this.handleKeyPressed);
  }

  componentWillUnmount() 
  {
    this.mainDiv.current.removeEventListener("keydown", this.handleKeyPressed);
  }

  handleKeyPressed(e) 
  {
    document.getElementById("searchbar").focus();
  }

  render()
  {
    return <div className="App" tabIndex="0" ref={this.mainDiv} onKeyDown={this.handleKeyPressed}>
      <div className="App-header">
        <LinkButton link="https://github.com/" icon={<FaGithub/>}/>
        <LinkButton link="https://facebook.com/" icon={<FaFacebook/>}/>
        <LinkButton link="https://messenger.com/" icon={<FaFacebookMessenger/>}/>
        <LinkButton link="https://linkedin.com/" icon={<FaLinkedin/>}/>
        <LinkButton link="https://outlook.live.com/owa/?path=/mail/inbox" icon={<FaMailBulk/>}/>
        <LinkButton link="https://youtube.com/" icon={<FaYoutube/>}/>
        <LinkButton link="https://twitch.tv/directory" icon={<FaTwitch/>}/>
        <LinkButton link="https://smile.amazon.co.uk/" icon={<FaAmazon/>}/>
        <LinkButton link="https://reddit.com/" icon={<FaReddit/>}/>
        <LinkButton link="https://dropbox.com/" icon={<FaDropbox/>}/>
        <LinkButton link="https://dropdrive.google.com/drive/my-drive" icon={<FaGoogleDrive/>}/>
        <LinkButton link="https://bitbucket.org/" icon={<FaBitbucket/>}/>
        <LinkButton link="https://netflix.com/" icon={<FaPlay/>}/>
        <LinkButton link="https://humblebundle.com/" icon={<FaShoppingBag/>}/>
        <LinkButton link="https://app.plex.tv/desktop" icon={<FaTv/>}/>
        <LinkButton link="https://spotify.com/" icon={<FaSpotify/>}/>
      </div>
      <div className="App-bottom">
        <SearchBar/>
      </div>
    </div>
  }
}

export default App;
