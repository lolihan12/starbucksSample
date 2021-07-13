  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  function onYouTubeIframeAPIReady() {
    new YT.Player('player', {
      videoId: 's1HkMMAAdyg', // 최초재생할 유튜브 영상 ID
      playerVars:{
        autoplay: true, // 자동재생여부
        loop : true, // 반복 재생 유무
        playList: 's1HkMMAAdyg' // 반복재생할 영상 ID
      },
      events: {
        onReady: function(event){
          event.target.mute() // 음소거

        }
      }

    });
  }