const modal = document.getElementById('modal-init');
  const btnWithMusic = document.getElementById('enter-with-music');
  const btnWithoutMusic = document.getElementById('enter-without-music');
  const musicControl = document.getElementById('music-control');
  const audio = document.getElementById('background-music');

  let isPlaying = false;

  const closeModal = () => {
    modal?.classList.add('hidden');
    showMusicControl();
  };

  const playMusic = () => {
    if (audio instanceof HTMLAudioElement) {
      audio.play();
      isPlaying = true;
    }
  };

  const pauseMusic = () => {
    if (audio instanceof HTMLAudioElement) {
      audio.pause();
      isPlaying = false;
    }
  };

  const hideMusicControl = () => {
    musicControl?.classList.add('hidden');
    };

    const showMusicControl = () => {
    musicControl?.classList.remove('hidden');
    };

  // Botones del modal
  btnWithMusic?.addEventListener('click', () => {
    playMusic();
    closeModal();
  });

  btnWithoutMusic?.addEventListener('click', () => {
    closeModal();
  });

  // Botón de control de música
  musicControl?.addEventListener('click', () => {
    if (isPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  });

  // Ajuste de z-index según secciones
  const sectionsWithBackground = document.querySelectorAll('section[data-background]');
  window.addEventListener('scroll', () => {
    let isInSectionWithBackground = false;

    sectionsWithBackground.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        isInSectionWithBackground = true;
      }
    });

    if (musicControl) {
      musicControl.style.zIndex = isInSectionWithBackground ? '9999' : '1000';
    }
  });

  hideMusicControl();