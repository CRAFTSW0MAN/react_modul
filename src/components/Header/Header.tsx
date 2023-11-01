import { Component, ReactNode } from 'react';
import soundtrack from '/audio/zvezdnye-vojny-enikin-i-padme_(zzz.fm).mp3';
import style from './_header.module.scss';
import Logo from '/assets/images/star-wars-logo-png-image.png';
import ErroLogo from '/assets/images/EternalGalacticEmpireLogo.webp';
import { HeaderState } from '../../type/type';

export class Header extends Component {
  audio: HTMLAudioElement | null = null;
  state: HeaderState = {
    isPlaying: false,
    hasError: false,
  };

  public componentDidMount(): void {
    this.initializeAudio();
  }
  private initializeAudio(): void {
    this.audio = new Audio(soundtrack);
    this.audio.volume = 0.2;
  }

  private toggleMusic(): void {
    if (this.audio) {
      if (this.state.isPlaying) {
        this.audio.pause();
        this.setState({
          isPlaying: false,
        });
      } else {
        this.audio.play();
        this.setState({
          isPlaying: true,
        });
      }
    }
  }

  public render(): ReactNode {
    if (this.state.hasError) {
      throw new Error('Error!');
    }
    return (
      <header className={style.header}>
        <div className={style.header_logo}>
          <img className={style.logo_img} src={Logo} alt="logo" />
          <div className={style.logo_name}>
            <span className={style.name_span1}>Star Wards</span>
            <span className={style.name_span2}> Wikipedia</span>
          </div>
        </div>
        <nav className={style.header_nav}>
          <div>Main</div>
        </nav>
        <button
          className={style.button_music}
          onClick={() => this.toggleMusic()}
        >
          {this.state.isPlaying ? 'Pause Music' : 'Play Music'}
        </button>
        <button
          className={style.button_error}
          onClick={() => {
            this.setState({
              hasError: !this.state.hasError,
            });
          }}
        >
          <img className={style.button_img} src={ErroLogo} alt="Error" />
        </button>
      </header>
    );
  }
}
