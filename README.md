해당 페이지는 ios 및 safari 브라우저에서는 동작하지 않습니다!
<br/>Apple이 MPEG-DASH 규격을 지원하지 않아 발생하는 이슈입니다

https://github.com/DooheeKim/media-server 해당 깃의 핵심기능 작동 확인을 위한 프론트 페이지입니다.<br/>
핵심기능(로그인, 영상 목록 조회, 영상 재생, 업로드)만 포함되어 있고 부가적인 기능은 없습니다.

사용방법은 src/config.json의 SERVER_ADDRESS에 본인 서버 주소 입력 후 npm start 입니다. <br/>
Clear key DRM 이 적용된 영상 재생을 위해 shaka-player를 사용하였습니다. <br/>
    shaka-player: https://github.com/shaka-project/shaka-player <br/>
    shaka-player-react: https://github.com/matvp91/shaka-player-react <br/>
