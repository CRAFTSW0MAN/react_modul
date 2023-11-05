import { useEffect, useRef, useState } from 'react';
import soundtrack from '/audio/zvezdnye-vojny-enikin-i-padme_(zzz.fm).mp3';
import style from './_header.module.scss';
import Logo from '/assets/images/star-wars-logo-png-image.png';

export function Header(): JSX.Element {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const hasError = false;
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect((): void => {
    const audio = new Audio(soundtrack);
    audio.volume = 0.2;
    audioRef.current = audio;
  }, []);

  function playAndPauseMusic(): void {
    const audio = audioRef.current;
    if (audio) {
      if (!isPlaying) {
        audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    }
  }

  useEffect((): void => {
    if (hasError) {
      throw new Error('Error!');
    }
  }, [hasError]);

  return (
    <header className={style.header}>
      <div className={style.header_logo}>
        <img className={style.logo_img} src={Logo} alt="logo" />
        <div className={style.logo_name}>
          <span className={style.name_span1}>Star Wars</span>
          <span className={style.name_span2}>Wikipedia</span>
        </div>
      </div>
      <button className={style.button_music} onClick={playAndPauseMusic}>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </header>
  );
}
