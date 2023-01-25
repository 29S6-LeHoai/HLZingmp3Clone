
// create Array

const $ =document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const heading = document.querySelector('.player-controls-left .player-controls-left-heading h5')
const cdImg = document.querySelector('.player-controls-left-img')
const singer = document.querySelector('.player-controls-left .player-controls-left-heading .subtitle')
const audioMusic = document.querySelector('#audio')
const nextSongHeadding = document.querySelector('.nextsong_fist')
const nextSongList = document.querySelector('.media-next-play')
const slidersDiscover = document.querySelectorAll('.container-discover__slider-item');
const settingItem = document.querySelector('.setting-item');
const sideBarTabs = $$('.js__sidebar-tabs');
const tabs = $$('.tabs-item');
const cdThumb = $('.player-controls-left-img');
const noteMusicAnimate = $$('.box-note-icon i');
const zmPage = $('.zm-page')
const header = $('.zm-header')


const panes = $$('.panes-item');
const containerPanes = $$('.js__container-panes');
const themeItems = $$('.js-theme-item');
const sliderItems = $$('.option-all__song-slider-img');

const currentStart = document.querySelector('#currentStart')
const currentEnd = document.querySelector('#currentEnd')
const seek = document.querySelector('#seek')
const bar2 = document.querySelector('#bar2')
const dot = document.getElementsByClassName('dot')[0]
let back =document.getElementById('back');
let next =document.getElementById('next');
const ramdomBtn = document.querySelector('#ramdom')
const repeatBtn = document.querySelector('#repeat')
const playAllBtn = $('.js__playall-0');
const playAllBtn1 = $('.js__playall-1');
const leftScrollPlaylist = $('#left_scroll-song');
const rightScrollPlaylist = $('#right_scroll-song');
const recentlySong = $('.recently_song-list');
var backgroundIndex= 0;

const songApi = 'https://63861e4d875ca3273d50b4df.mockapi.io/api/songs?songName'
const singerApi = 'https://63861e4d875ca3273d50b4df.mockapi.io/api/singers'
const zingchartApi = 'https://mp3.zing.vn/xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1'
const playlistAPI = 'https://615950a6601e6f0017e5a15b.mockapi.io/api/playlist'
const videoAPI = 'https://615950a6601e6f0017e5a15b.mockapi.io/api/videos'
const songUSUKAPI = 'https://63861e4d875ca3273d50b4df.mockapi.io/api/US-UK'
const songEDMAPI = 'https://6260ea02f429c20deb979e8a.mockapi.io/EDM'
const songHipHopApi = 'https://639081070bf398c73a89b1ef.mockapi.io/api/songHipHop/'
const choiceSingerApi = 'https://63861e4d875ca3273d50b4df.mockapi.io/api/choiceSinger'

var songData = [];
var singerData = [];
var zingchartData = [];
var choiceSingerData = [];
var songHipHopData = [];
var songUSUKData = [];


getData = (api) =>{
  return new Promise((resolve, reject)=>{
      var request = new XMLHttpRequest()
      request.open('GET', api)
      request.onload = () =>{
          if(request.status == 200){
              resolve(request.response)
          }
          else{
              reject(Error(request.statusText))
          }
      }
      request.onerror = ()=>{
          return Error('Fetching Data Failed')
      }
      request.send()
  })
}


Promise.all([getData(songApi) , getData(singerApi), getData(zingchartApi), getData(choiceSingerApi),getData(songUSUKAPI), getData(songHipHopApi) ])
  .then(([songs, singers,zingchart,choiceSinger,songUSUK,songHipHop]) => {
    songData = JSON.parse(songs)
    singerData = JSON.parse(singers)
    zingchartData = JSON.parse(zingchart)
    choiceSingerData = JSON.parse(choiceSinger)
    songUSUKData = JSON.parse(songUSUK)
    songHipHopData = JSON.parse(songHipHop)
  })
  
  .then(()=>app.start())
  .catch((err)=>alert(err))


const app = {
    isPlaying: false,
    isPlayPersonalSong: false,
    currentIndex : 0,
    isRandom: false,
    isRepeat: false,
    // render bài hát gần đây
    renderRecently: function() {
        const recentlySong = document.querySelector('.recently_song-list');
        const htmls = songData.map(song => {
            return `
            <div class="col l-2-4 s-6">
              <li class="recently_song-item">
                <div class="img_play">
                  <img class="recently_song-img" src="${song.poster}" alt="Dacen Việt Nam">
                  <div class="recently_song-icon">
                    <span class="icon__heart">
                      <i class="bi bi-heart icon-disslike"></i>
                      <i class="bi bi-heart-fill icon-like"></i>
                      <span class="explication-heart">Thêm vào thư viện</span>
                    </span>
                    <i class="bi bi-play-circle icon-play"></i>
                    <span class="icon__more">
                      <i class="bi bi-three-dots icon-more"></i>
                      <span class="explication-more">Khác</span>
                    </span>
                  </div> 
                </div>
                <h5 class="recently_song-name"> ${song.songName}
                  <br>
                  <div class="subtitle">${song.singer}
                </h5>
              </li>
          </div>
            `
        })
        recentlySong.innerHTML = htmls.join('');
    },

    //RENDER LIST MUSIC ITEM Tổng quan
    renderPlayList : function () {
        const playListMyMusic = document.querySelector('.songs-list');
        const htmls = songData.map((song, index) => {
            return `
                <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
                <li class="songs-item js__song-item0 ${index == app.currentIndex ? 'songs-item--active' : ''} " data-index="${index}">
                    <div class="songs-item-left">
                        <div style="background-image: url(${song.poster});" class="songs-item-left-img js__songs-item-left-img-0">
                            <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                            <div class="songs-item-left-img-playing-box">
                            <img class = "songs-item-left-img-playing" src="/icon/icon-playing.gif" alt="playing">
                            </div>
                        </div>

                        <div class="songs-item-left-body">
                            <h3 class="songs-item-left-body-name js__main-color">${song.songName}</h3>
                            <span class="songs-item-left-body-singer js__sub-color">${song.singer}</span>
                        </div>
                    </div>
                    <div class="songs-item-center tablet-hiden mobile-hiden  js__sub-color">
                        <span>${song.songName} (Remix)</span>
                    </div>
                    <div class="songs-item-right mobile-hiden ">
                        <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                        <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                        <span class="songs-item-right-tym">
                            <i class="fas fa-heart songs-item-right-tym-first"></i>
                            <i class="far fa-heart songs-item-right-tym-last"></i>
                        </span>
                        <span class="songs-item-right-duration js__sub-color">${song.duration}</span>
                        <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                    </div>
                </li>`
        })
        playListMyMusic.innerHTML = htmls.join('');
    },

    // RENDER LIST MUSIC ITEM OPTION1
    renderPlayList1 : function (playListElement, songs) {
      const htmls = songData.map((song, index) => {
          return `
              <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
              <li class="songs-item js__song-item1 ${index == this.currentIndex ? 'songs-item--active songs-item-playbtn--active' : ''} " data-index="${index}">
                  <div class="songs-item-left">
                      <div style="background-image: url(${song.poster});" class="songs-item-left-img js__songs-item-left-img-1">
                          <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                          <div class="songs-item-left-img-playing-box">
                              <img class = "songs-item-left-img-playing" src="/icon/icon-playing.gif" alt="playing">
                          </div>
                      </div>

                      <div class="songs-item-left-body">
                          <h3 class="songs-item-left-body-name js__main-color">${song.songName}</h3>
                          <span class="songs-item-left-body-singer js__sub-color">${song.singer}</span>
                      </div>
                  </div>
                  <div class="songs-item-center tablet-hiden mobile-hiden js__sub-color">
                      <span>${song.songName} (Remix)</span>
                  </div>
                  <div class="songs-item-right mobile-hiden">
                      <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                      <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                      <span class="songs-item-right-tym">
                          <i class="fas fa-heart songs-item-right-tym-first"></i>
                          <i class="far fa-heart songs-item-right-tym-last"></i>
                      </span>
                      <span class="songs-item-right-duration js__sub-color">${song.duration}</span>
                      <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                  </div>
              </li>`
      })
      playListElement.innerHTML = htmls.join('');
    },   
    

    // RENDER HEADDING NEXT SONG tab right
    renderNextSongHeadding: function(playListElement){
        var playListElement = document.querySelector('.nextsong_fist');
        const htmls = zingchartData.data.song.map((song, index) => {
        return index <= app.currentIndex ? `
        <div class="nextsong__fist-item nextsong__item nextsong__fist-item-playbtn--active ${audioMusic.onplay && index == app.currentIndex ? 'nextsong__fist-item-headding--active' : ''} ${index == app.currentIndex ? 'nextsong__fist-item-background--active' : ''}" data-index="${index}">
            <div class="nextsong__item-img js__iconPlay" style="background-image: url(${song.thumbnail});">
                <div class="nextsong__item-playbtn">
                  <i class="bi bi-play-circle"></i>
                </div>
                <div class="songs-item-left-img-playing-box">
                    <img class = "songs-item-left-img-playing" src="/icon/icon-playing.gif" alt="playing">
                </div>
            </div>
            <div class="nextsong__item-body">
                <span class="nextsong__item-body-heading ${index == app.currentIndex ? '' : 'js__main-color'}">${song.name}</span>
                <span class="nextsong__item-body-depsc ${index == app.currentIndex ? '' : 'js__sub-color'}">${song.artists_names}</span>
            </div>
            <div class="nextsong__item-action">
                <span class="nextsong__item-action-heart">
                    <i class="bi bi-heart-fill nextsong__item-action-heart-icon1"></i>
                    <i class="bi bi-heart-fill nextsong__item-action-heart-icon2"></i>
                </span>
                <span class="nextsong__item-action-dot">
                    <i class="bi bi-three-dots nextsong__item-action-heart-icon2"></i>
                </span>
            </div>
        </div>` : ''
      })
      playListElement.innerHTML = htmls.join('');
    },

    // render list next song tab right
    renderNextSongList: function(playListElement) {
          var playListElement = document.querySelector('.media-next-play');
          if(app.currentIndex >= zingchartData.data.song.length -1) {
            playListElement.innerHTML = `
              <span>
                Danh sách bài hát đã hết! :))
              </span>
            `
          }else {
            const htmls = zingchartData.data.song.map((song,index) => {
              return index > app.currentIndex ? `
              <li class="nextsong__last-item nextsong__item" data-index="${index}">
              <div class="nextsong__item-img" style="background-image: url(${song.thumbnail});">
                  <div class="nextsong__item-playbtn">
                    <i class="bi bi-play-circle"></i>
                  </div>
              </div>
              <div class="nextsong__item-body">
                  <span class="nextsong__item-body-heading js__main-color">${song.name}</span>
                  <span class="nextsong__item-body-depsc js__sub-color">${song.artists_names}</span>
              </div>
              <div class="nextsong__item-action">
                  <span class="nextsong__item-action-heart">
                    <i class="bi bi-heart-fill nextsong__item-action-heart-icon1"></i>
                    <i class="bi bi-heart-fill nextsong__item-action-heart-icon2"></i>
                  </span>
                  <span class="nextsong__item-action-dot js__main-color">
                    <i class="bi bi-three-dots nextsong__item-action-heart-icon2"></i>  
                  </span>
              </div>
          </li>` : ''
            })
            playListElement.innerHTML = htmls.join('');
          }
    },

    // RENDER LIST ZINGCHART ở khám phá
    renderZingChart : function () {
      const htmls = zingchartData.data.song.map((song, index) => {
              return index < 10 ? `
                  <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
                  <li class="songs-item">
                      <div class="songs-item-left">
                          <span class="zingchart__item-left-stt ${index == 0 ? 'zingchart__item-first': index == 1 ? 'zingchart__item-second' : index == 2 ? 'zingchart__item-third' : ''}">${index+1}</span>
                          <span class="zingchart__item-left-line js__main-color">-</span>
                          <div style="background-image: url(${song.thumbnail});" class="songs-item-left-img">
                              <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                              <div class="songs-item-left-img-playing-box">
                              <img class = "songs-item-left-img-playing" src="/icon/icon-playing.gif" alt="playing">
                              </div>
                          </div>
  
                          <div class="songs-item-left-body">
                              <h3 class="songs-item-left-body-name js__main-color">${song.name}</h3>
                              <span class="songs-item-left-body-singer js__sub-color">${song.artists_names}</span>
                          </div>
                      </div>
                      <div class="songs-item-center tablet-hiden mobile-hiden js__sub-color">
                          <span>${song.name} (Remix)</span>
                      </div>
                      <div class="songs-item-right mobile-hiden">
                          <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                          <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                          <span class="songs-item-right-tym">
                              <i class="fas fa-heart songs-item-right-tym-first"></i>
                              <i class="far fa-heart songs-item-right-tym-last"></i>
                          </span>
                          <span class="songs-item-right-duration js__sub-color">${Math.floor(song.duration/60)}:${Math.floor(song.duration%60)}</span>
                          <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                      </div>
                  </li>` : ''
      })
      $('.js__zingchart__list').innerHTML = htmls.join('');
    },

    // RENDER LIST ZINGCHART MORE
    renderZingChartMore : function () {
      const htmls = zingchartData.data.song.map((song, index) => {
          return `
              <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
              <li class="songs-item">
                  <div class="songs-item-left">
                      <span class="zingchart__item-left-stt ${index == 0 ? 'zingchart__item-first': index == 1 ? 'zingchart__item-second' : index == 2 ? 'zingchart__item-third' : ''}">${index+1}</span>
                      <span class="zingchart__item-left-line">-</span>
                      <div style="background-image: url(${song.thumbnail});" class="songs-item-left-img">
                          <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                          <div class="songs-item-left-img-playing-box">
                          <img class = "songs-item-left-img-playing" src="/icon/icon-playing.gif" alt="playing">
                          </div>
                      </div>

                      <div class="songs-item-left-body">
                          <h3 class="songs-item-left-body-name js__main-color">${song.name}</h3>
                          <span class="songs-item-left-body-singer js__sub-color">${song.artists_names}</span>
                      </div>
                  </div>
                  <div class="songs-item-center tablet-hiden mobile-hiden js__sub-color">
                      <span>${song.name} (Remix)</span>
                  </div>
                  <div class="songs-item-right mobile-hiden">
                      <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                      <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                      <span class="songs-item-right-tym">
                          <i class="fas fa-heart songs-item-right-tym-first"></i>
                          <i class="far fa-heart songs-item-right-tym-last"></i>
                      </span>
                      <span class="songs-item-right-duration js__sub-color">${Math.floor(song.duration/60)}:${Math.floor(song.duration%60)}</span>
                      <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                  </div>
              </li>`
      })
      $('.js__zingchart__list').innerHTML = htmls.join('');
    },

    // RENDER LIST ZINGCHART ở tab zing chart
    rendertabsZingChart : function () {
      const htmls = zingchartData.data.song.map((song, index) => {
              return index < 10 ? `
                  <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
                  <li class="songs-item">
                      <div class="songs-item-left">
                          <span class="zingchart__item-left-stt ${index == 0 ? 'zingchart__item-first': index == 1 ? 'zingchart__item-second' : index == 2 ? 'zingchart__item-third' : ''}">${index+1}</span>
                          <span class="zingchart__item-left-line js__main-color">-</span>
                          <div style="background-image: url(${song.thumbnail});" class="songs-item-left-img">
                              <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                              <div class="songs-item-left-img-playing-box">
                              <img class = "songs-item-left-img-playing" src="/icon/icon-playing.gif" alt="playing">
                              </div>
                          </div>
  
                          <div class="songs-item-left-body">
                              <h3 class="songs-item-left-body-name js__main-color">${song.name}</h3>
                              <span class="songs-item-left-body-singer js__sub-color">${song.artists_names}</span>
                          </div>
                      </div>
                      <div class="songs-item-center tablet-hiden mobile-hiden js__sub-color">
                          <span>${song.name} (Remix)</span>
                      </div>
                      <div class="songs-item-right mobile-hiden">
                          <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                          <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                          <span class="songs-item-right-tym">
                              <i class="fas fa-heart songs-item-right-tym-first"></i>
                              <i class="far fa-heart songs-item-right-tym-last"></i>
                          </span>
                          <span class="songs-item-right-duration js__sub-color">${Math.floor(song.duration/60)}:${Math.floor(song.duration%60)}</span>
                          <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                      </div>
                  </li>` : ''
      })
      $('.js__tabs-zingchart__list').innerHTML = htmls.join('');
    },

    // RENDER LIST ZINGCHART more ở tab zing chart
    rendertabsZingChartMore : function () {
      const htmls = zingchartData.data.song.map((song, index) => {
          return `
              <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
              <li class="songs-item">
                  <div class="songs-item-left">
                      <span class="zingchart__item-left-stt ${index == 0 ? 'zingchart__item-first': index == 1 ? 'zingchart__item-second' : index == 2 ? 'zingchart__item-third' : ''}">${index+1}</span>
                      <span class="zingchart__item-left-line">-</span>
                      <div style="background-image: url(${song.thumbnail});" class="songs-item-left-img">
                          <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
                          <div class="songs-item-left-img-playing-box">
                          <img class = "songs-item-left-img-playing" src="/icon/icon-playing.gif" alt="playing">
                          </div>
                      </div>

                      <div class="songs-item-left-body">
                          <h3 class="songs-item-left-body-name js__main-color">${song.name}</h3>
                          <span class="songs-item-left-body-singer js__sub-color">${song.artists_names}</span>
                      </div>
                  </div>
                  <div class="songs-item-center tablet-hiden mobile-hiden js__sub-color">
                      <span>${song.name} (Remix)</span>
                  </div>
                  <div class="songs-item-right mobile-hiden">
                      <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
                      <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
                      <span class="songs-item-right-tym">
                          <i class="fas fa-heart songs-item-right-tym-first"></i>
                          <i class="far fa-heart songs-item-right-tym-last"></i>
                      </span>
                      <span class="songs-item-right-duration js__sub-color">${Math.floor(song.duration/60)}:${Math.floor(song.duration%60)}</span>
                      <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
                  </div>
              </li>`
      })
      $('.js__tabs-zingchart__list').innerHTML = htmls.join('');
    },

    // RENDER LIST ZINGCHART WEEK VN
    rendertabsZingChartWeekVn : function() {
      const weekVn = document.querySelector('.zingchart-week-vn');
      const htmls = songData.map((song,index) => {
        return index < 4 ? `
          <li class="tabs-zingchart-week__item">
            <div class="tabs-zingchart-week__item-left">
              <span class="tabs-zingchart-week__item-left-stt">${index +1}</span>
              <span class="tabs-zingchart-week__item-left-line">-</span>
            </div>
            <div class="tabs-zingchart-week__item-center">
              <img src="${song.poster}" alt="${song.songName}" class="tabs-zingchart-week__item-center-img">
              <div class="tabs-zingchart-week__item-center-content">
                <span class="js__main-color tabs-zingchart-week__item-center-content-name">${song.songName}</span>
                <span class="js__main-color tabs-zingchart-week__item-center-content-singer">${song.singer}</span>
              </div>
            </div>
            <div class="tabs-zingchart-week__item-right mobile-hiden js__main-color">${song.duration}</div>
        </li>
        `:''
      })
      weekVn.innerHTML = htmls.join('');
    },

    // RENDER LIST ZINGCHART WEEK US-UK
    rendertabsZingChartWeekUS : function() {
      const weekUs = document.querySelector('.zingchart-week-us');
      const htmls = songUSUKData.map((song,index) => {
        return index < 4 ?`
          <li class="tabs-zingchart-week__item">
            <div class="tabs-zingchart-week__item-left">
              <span class="tabs-zingchart-week__item-left-stt">${index +1}</span>
              <span class="tabs-zingchart-week__item-left-line">-</span>
            </div>
            <div class="tabs-zingchart-week__item-center">
              <img src="${song.img}" alt="${song.songName}" class="tabs-zingchart-week__item-center-img">
              <div class="tabs-zingchart-week__item-center-content">
                <span class="js__main-color tabs-zingchart-week__item-center-content-name">${song.songName}</span>
                <span class="js__main-color tabs-zingchart-week__item-center-content-singer">${song.singer}</span>
              </div>
            </div>
            <div class="tabs-zingchart-week__item-right mobile-hiden js__main-color">${song.duration}</div>
          </li>
        `:''
      })
      weekUs.innerHTML = htmls.join('');
    },

    // RENDER LIST ZINGCHART WEEK Kpop
    rendertabsZingChartWeekHip: function() {
      const weekHip = document.querySelector('.zingchart-week-hip');
      const htmls = songHipHopData.map((song,index) => {
        return index < 4 ? `
          <li class="tabs-zingchart-week__item">
            <div class="tabs-zingchart-week__item-left">
              <span class="tabs-zingchart-week__item-left-stt">${index +1}</span>
              <span class="tabs-zingchart-week__item-left-line">-</span>
            </div>
            <div class="tabs-zingchart-week__item-center">
              <img src="${song.img}" alt="${song.songName}" class="tabs-zingchart-week__item-center-img">
              <div class="tabs-zingchart-week__item-center-content">
                <span class="js__main-color tabs-zingchart-week__item-center-content-name">${song.songName}</span>
                <span class="js__main-color tabs-zingchart-week__item-center-content-singer">${song.singer}</span>
              </div>
            </div>
            <div class="tabs-zingchart-week__item-right mobile-hiden js__main-color">${song.duration}</div>
        </li>
        `:''
      })
      weekHip.innerHTML = htmls.join('');
    },

    // RENDER LIST SINGER CHOICE
    renderSingerChoice : function() {
      const choiceList = document.querySelector('.choice-list');
      const htmls = choiceSingerData.map(name => {
        return `
        <div class="col l-2 s-4">
          <div class="choice-item">
            <img src="${name.img}" alt="${name.nameSinger}" class="choice-img">
          </div>
        </div>
        `
      })

      choiceList.innerHTML = htmls.join('');
    },
    

    // định nghĩa currentSong
    defineProperties: () =>{
        Object.defineProperty(app, 'currentSong', {
            get: ()=>(songData[app.currentIndex])
        })
        Object.defineProperty(app, 'currentPlaylist', {
            get: ()=>(zingchartData.data.song[app.currentIndex])
        })
        // Object.defineProperty(app, 'currentSongUSUK', {
        //     get: ()=>(songDataUSUK[app.currentIndex])
        // })
        // Object.defineProperty(app, 'currentSongEDM', {
        //     get: ()=>(songDataEDM[app.currentIndex])
        // })
    },

    //renden next song
    renderNextSong: function () {
        this.renderNextSongHeadding(nextSongHeadding,app.zingchartData);
        this.renderNextSongList(nextSongList,app.zingchartData);
    },

    handleEvents: function() {
        var sliderIndex1 = 1;
        var sliderIndex = 1;
        var sliderLenght = 18;
        const songTyms = $$('.nextsong__item-action-heart-player');
        const songTymListens = $$('.icon__heart');
        const themeSetting = $('.theme-setting');
        const themeModal = $('.theme-modal');
        const themeModalClose = $('.theme-modal__close-btn');
        const themeModalOverlay = $('.theme-modal__overlay');
        const settingBtn = $('.setting-btn');
        const userBtn = $('.user-btn');
        const navSearchOverlay = $('.nav_search__overlay');
        const listSetting = $('.list-setting');
        const recentlySongList = $('.recently_song-list');
        const menuSideRight = $('.menu_side_right-list-item');
        const songItemsOption1 = $$('.js__song-item1');
        const songItems = $$('.js__song-item0');
        const listMusicMobile =  $('#list-music-mobile')
        const menuSideRightNav = $('.menu_side_right-nav')

        // CUỘN LÊN THÌ LÀM TRONG THANH HEADER
        zmPage.onscroll = function() {
          scrollTop = zmPage.scrollY || zmPage.scrollTop
          if (scrollTop > 50) {
              header.classList.toggle('zm-header-active');
          }

          // làm cách này mà ko làm cách trên để tránh bị gật lag 
          if(scrollTop > 5) {
              Object.assign(header.style, {
                  backgroundColor: `var(--backgruond-header)`, //`var(--header-color-${backgroundIndex})`
                  boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
              })
          } else {
              Object.assign(header.style, {
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
              })
          }
      };

        //   LÀM SLIDER BÊN TAP KHÁM PHÁ
        changeImage1Replate = function() {
            slidersDiscover.forEach((item,index) => {
                if (index == sliderIndex1) {
                    slidersDiscover[index].classList.replace('container-discover__slider-item-second','container-discover__slider-item-first');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-third','container-discover__slider-item-first');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-four','container-discover__slider-item-first');
                } else if (index == sliderIndex1 + 1) {
                    slidersDiscover[index].classList.replace('container-discover__slider-item-first','container-discover__slider-item-second');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-third','container-discover__slider-item-second');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-four','container-discover__slider-item-second');
                } else if (index == sliderIndex1 + 2) {
                    slidersDiscover[index].classList.replace('container-discover__slider-item-first','container-discover__slider-item-third');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-second','container-discover__slider-item-third');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-four','container-discover__slider-item-third');
                } else {
                    slidersDiscover[index].classList.replace('container-discover__slider-item-first','container-discover__slider-item-four');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-second','container-discover__slider-item-four');
                    slidersDiscover[index].classList.replace('container-discover__slider-item-third','container-discover__slider-item-four');
                }
                if (sliderIndex1 == 2) {
                    slidersDiscover[0].classList.replace('container-discover__slider-item-first','container-discover__slider-item-third');
                    slidersDiscover[0].classList.replace('container-discover__slider-item-second','container-discover__slider-item-third');
                    slidersDiscover[0].classList.replace('container-discover__slider-item-four','container-discover__slider-item-third');
                } else if (sliderIndex1 == 3) {
                    slidersDiscover[0].classList.replace('container-discover__slider-item-first','container-discover__slider-item-second');
                    slidersDiscover[0].classList.replace('container-discover__slider-item-third','container-discover__slider-item-second');
                    slidersDiscover[0].classList.replace('container-discover__slider-item-four','container-discover__slider-item-second');
                    slidersDiscover[1].classList.replace('container-discover__slider-item-first','container-discover__slider-item-third');
                    slidersDiscover[1].classList.replace('container-discover__slider-item-second','container-discover__slider-item-third');
                    slidersDiscover[1].classList.replace('container-discover__slider-item-four','container-discover__slider-item-third');
                }
              })
        }

        changeImage1 = function() {
          changeImage1Replate();
          sliderIndex1++;
          if (sliderIndex1 >= 4) {
            sliderIndex1 = 0;
          }
        }
        // CHUYỂN TAB CÁ NHÂN / KHÁM PHÁ / ZINGCHART
        sideBarTabs.forEach((tab, index) => {
              tab.onclick = function() {
                document.querySelector('.js__sidebar-tabs.sidebar__item--active').classList.remove('sidebar__item--active');
                  tab.classList.add('sidebar__item--active');
                    containerPanes[0].style.display = "none";
                    containerPanes[1].style.display = "none";
                    containerPanes[2].style.display = "none";
                    containerPanes[index].style.display = "block";
                }
        })    

        // chuyển tab option
        tabs.forEach((tab, index) => {
              const pane = panes[index];
                $('.panes-item:not(.music__option-item--active)').style.backgroundColor = 'transparent';
                themeItems[backgroundIndex].click();
                  // app.verifyOptionTextColor();
                  tab.onclick = function() {
                    $('.music__option-item.music__option-item--active').classList.remove('music__option-item--active');
                    tab.classList.add('music__option-item--active')
                    $('.panes-item.active').classList.remove('active');
                    tabs[0].style.backgroundColor = 'transparent';
                    tabs[1].style.backgroundColor = 'transparent';
                    tabs[2].style.backgroundColor = 'transparent';
                    tabs[3].style.backgroundColor = 'transparent';
                    tab.style.backgroundColor = `var(--option-color-${backgroundIndex})`;
                    pane.classList.add('active')
                    if (index === 1) {
                        app.renderPlayList1($('.option-music-list'),app.songsData);
                    }
                    $('.music__option-item.music__option-item--active').classList.remove('js__main-color');
              }
        })  

        //   LÀM SLIDER BÊN TAP CÁ NHÂN
        changeImage = function() {
                  sliderItems.forEach((item,index) => {
                          // index == sliderIndex ? sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-first') : index == sliderIndex + 1 ?  sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second'):sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-third');
                      if (index == sliderIndex) {
                          sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-first');
                          sliderItems[index].classList.replace('option-all__song-slider-img-second','option-all__song-slider-img-first');
                      } else if (index == sliderIndex + 1) {
                          sliderItems[index].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-second');
                          sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second');
                      } else {
                          sliderItems[index].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-third');
                          sliderItems[index].classList.replace('option-all__song-slider-img-second','option-all__song-slider-img-third');
                      }
                      if (sliderIndex == sliderLenght - 1) {
                          sliderItems[0].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-second');
                          sliderItems[0].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second');
                      }
                  })
                  sliderIndex++;
                  if (sliderIndex >= sliderLenght) {
                      sliderIndex = 0;
                  }
        }
        setInterval(changeImage,2000);    

        setInterval(changeImage1,5000);

        // khi bấm vào theme setting
        themeSetting.onclick = function() {
          themeModal.classList.toggle('theme-modal--avtive');
          settingBtn.classList.remove('js-click-setting-active')
          userBtn.classList.remove('js-click-user-active');
        }

        themeModalClose.onclick = function() {
          themeModal.classList.toggle('theme-modal--avtive')
        }
        themeModalOverlay.onclick = function() {
          themeModal.classList.toggle('theme-modal--avtive')
        }

        // khi bấm vào icon phần setting
        settingBtn.onclick = function() {
          settingBtn.classList.toggle('js-click-setting-active')
          userBtn.classList.remove('js-click-user-active');
          navSearchOverlay.classList.remove('hidden');
        }

        // khi bấm vào user
        userBtn.onclick = function() {
          userBtn.classList.toggle('js-click-user-active');
          userBtn.classList.remove('explication')
          navSearchOverlay.classList.remove('hidden')
          settingBtn.classList.remove('js-click-setting-active')
        }

        navSearchOverlay.onclick = function() {
          userBtn.classList.remove('js-click-user-active');
          settingBtn.classList.remove('js-click-setting-active');
          userBtn.classList.remove('explication')
          navSearchOverlay.classList.add('hidden')
        }

         // khi bấm vào nut right của slider
        $('.js__container-discover__slider-right').onclick = function() {
                changeImage1();
        }
        // khi bấm vào nut left của slider
        $('.js__container-discover__slider-left').onclick = function() {
                changeImage1Replate();
                sliderIndex1--;
                if (sliderIndex1 < 0) {
                    sliderIndex1 = 3;
                }
        }

        // NHẤN MORE HIỂN THỊ 100 BÀI HÁT
        document.querySelector('.js__zingchart__100more').onclick = function() {
          app.renderZingChartMore();
          this.style.display = 'none';
        }
        
        // NHẤN MORE HIỂN THỊ 100 BÀI HÁT ở tab zingchart
        document.querySelector('.js__tabs-zingchart__100more').onclick = function() {
          app.rendertabsZingChartMore();
          this.style.display = 'none';
        }

        //  Xử lý cd quay / dừng
        const cdThumRotate = cdThumb.animate([
          { transform: 'rotate(360deg'}
        ],{
              duration: 8000,
              iterations: Infinity
        })
        cdThumRotate.pause();

        // khi load trang thif icon  noteMusicAnimate duwfng
        Array.from(noteMusicAnimate).forEach((item)=>{
          item.style.display = 'none'
        })
        
        // xử lí khi play
        let masterPlay = document.querySelector('#masterPlay');
        let wave = document.getElementsByClassName('wave')[0];
        masterPlay.addEventListener('click',()=> {
                if(audioMusic.paused || audio.currentTime <=0){
                    audioMusic.play();
                    masterPlay.classList.remove('bi-play-circle');
                    masterPlay.classList.add('bi-pause-circle');
                    wave.classList.add('active2');

                    // playing
                    audioMusic.onplay = function() {
                      app.isPlaying = true;
                        const mediaPlaying = document.querySelectorAll('.nextsong__item')
                        mediaPlaying[app.currentIndex].classList.add('nextsong__fist-item-headding--active')
                        mediaPlaying[app.currentIndex].classList.remove('nextsong__fist-item-playbtn--active')
                        mediaPlaying();
                        cdThumRotate.play();
                        Array.from(noteMusicAnimate).forEach((item)=>{
                          item.style.display = 'block'
                        })
                      }
                }else {
                    audioMusic.pause();
                    masterPlay.classList.add('bi-play-circle');
                    masterPlay.classList.remove('bi-pause-circle');
                    wave.classList.remove('active2');

                    // pause
                    audioMusic.onpause = function() {
                      app.isPlaying = false;
                        const mediaPlaying = document.querySelectorAll('.nextsong__item')
                        mediaPlaying[app.currentIndex].classList.remove('nextsong__fist-item-headding--active')
                        mediaPlaying[app.currentIndex].classList.add('nextsong__fist-item-playbtn--active')
                        cdThumRotate.pause();
                        Array.from(noteMusicAnimate).forEach((item)=>{
                          item.style.display = 'none'
                        })
                      }                
                }
        })

        // thời gian khi chạy
        audioMusic.ontimeupdate = function() {
          if(audioMusic.duration) {
            let music_curr = audioMusic.currentTime;
            let music_dur = audioMusic.duration;

            // curentStart
            let min = Math.floor(music_curr/60);
            let sec = Math.floor(music_curr%60);

            if(sec<10) {
              sec = `0${sec}`
            }

            currentStart.innerHTML = `${min}:${sec}`;

            // currentEnd
            let min1 = Math.floor(music_dur/60);
            let sec1 = Math.floor(music_dur%60);
            
            if(sec1<10) {
              sec1 = `0${sec1}`
            }
            currentEnd.innerHTML = `${min1}:${sec1}`;


          //thanh dot Khi music chạy 
            let progressBar =parseInt((audioMusic.currentTime/audioMusic.duration)*100);
            seek.value = progressBar;
            let seekBar = seek.value;
            bar2.style.width = `${seekBar}%`;
            dot.style.left = `${seekBar}%`;
          }
        } 
        
        // tua music
        seek.addEventListener('change',() => {
          audioMusic.currentTime = seek.value * audioMusic.duration/100;
        })

        // nhạc kết thúc
        audioMusic.addEventListener('ended',() => {
          masterPlay.classList.add('bi-play-circle');
          masterPlay.classList.remove('bi-pause-circle');
          wave.classList.remove('active2');
        })


        // volum
        vol.addEventListener('change', () => {
          let volIcon = document.getElementById('vol_icon');
          let vol= document.getElementById('vol');
          let volDot= document.getElementById('vol_dot');
          const volBar = document.getElementsByClassName('vol_bar')[0]
          if(vol.value == 0) {
            volIcon.classList.remove('bi-volume-down-fill');
            volIcon.classList.add('bi-volume-mute-fill');
            volIcon.classList.remove('bi-volume-up-fill');
          }
          
          if(vol.value > 0) {
            volIcon.classList.add('bi-volume-down-fill');
            volIcon.classList.remove('bi-volume-mute-fill');
            volIcon.classList.remove('bi-volume-up-fill');
          }

          if(vol.value > 50) {
            volIcon.classList.remove('bi-volume-down-fill');
            volIcon.classList.remove('bi-volume-mute-fill');
            volIcon.classList.add('bi-volume-up-fill');
          }

          let volA = vol.value;
          volBar.style.width = `${volA}%`;
          volDot.style.left = `${volA}%`;
          audioMusic.volume = volA/100;
        })
        
        // khi next bài
        next.onclick = function() {
          if(app.isRamdom) {
            app.playRamdom();
            app.renderNextSongHeadding(nextSongHeadding,app.zingchartData);
          } else {
            app.nextSong();
            app.renderNextSong();
          }
          masterPlay.classList.remove('bi-play-circle');
          masterPlay.classList.add('bi-pause-circle');
          wave.classList.add('active2');
          cdThumRotate.play();
          Array.from(noteMusicAnimate).forEach((item)=>{
            item.style.display = 'block'
          })
          audioMusic.play();
        }

        //khi back bài
        back.onclick = function() {
          if(app.isRamdom) {
            app.playRamdom();
            app.renderNextSongHeadding(nextSongHeadding,app.zingchartData);
          } else {
            app.backSong();
            app.renderNextSong();
          }

          audioMusic.play();
          masterPlay.classList.remove('bi-play-circle');
          masterPlay.classList.add('bi-pause-circle');
          cdThumRotate.play();
          Array.from(noteMusicAnimate).forEach((item)=>{
            item.style.display = 'block'
          })
          wave.classList.add('active2');
         }

        // khi ramdom 
         ramdomBtn.onclick = function(e) {
          app.isRamdom = !app.isRamdom
          ramdomBtn.classList.toggle('active',app.isRamdom)
         }

        //  xử lí next khi bài hát hết thời gian
        audioMusic.onended = function() {
          if(app.isRepeat) {
            audioMusic.play();
          } else{
            next.click();
          }
          masterPlay.classList.remove('bi-play-circle');
          masterPlay.classList.add('bi-pause-circle');
          wave.classList.add('active2');
        }

        // xử lí lặp bài hát
        repeatBtn.onclick = function() {
          app.isRepeat = !app.isRepeat;
          app.isRandom = false;
          repeatBtn.classList.toggle('active',app.isRepeat);
        } 
        
        // xử lí khi bấm vào iconplay ở phần menu_side_right-nav
        menuSideRight.onclick = function(e) {
          const songNode = e.target.closest(".nextsong__item");
          if(songNode) {
            if(e.target.closest(".nextsong__item-img")) {
              if(app.isPlaying && Number(songNode.dataset.index) == app.currentIndex) {
                audioMusic.pause();
                app.isPlaying = false;
                songNode.classList.remove('nextsong__fist-item-headding--active');
                masterPlay.classList.add('bi-play-circle');
                masterPlay.classList.remove('bi-pause-circle');
                wave.classList.remove('active2');
                cdThumRotate.pause();
                Array.from(noteMusicAnimate).forEach((item)=>{
                  item.style.display = 'none'
                })

              } else if(!app.isPlaying && Number(songNode.dataset.index) == app.currentIndex) {
                audioMusic.play();
                app.isPlaying = true;
                songNode.classList.add('nextsong__fist-item-headding--active');
                songNode.classList.remove('nextsong__fist-item-playbtn--active');
                masterPlay.classList.remove('bi-play-circle');
                masterPlay.classList.add('bi-pause-circle');
                wave.classList.add('active2');
                cdThumRotate.play();
                Array.from(noteMusicAnimate).forEach((item)=>{
                  item.style.display = 'block'
                })

              } else if(Number(songNode.dataset.index) != app.currentIndex) {
                app.currentIndex =Number(songNode.dataset.index);
                app.loadCurrentSong();
                app.renderNextSong();
                audioMusic.play();
                app.isPlaying = true;
                const nextSongItems = $$('.nextsong__item');
                nextSongItems[app.currentIndex].classList.add('nextsong__fist-item-headding--active'); 
                nextSongItems[app.currentIndex].classList.remove('nextsong__fist-item-playbtn--active'); 
                masterPlay.classList.remove('bi-play-circle');
                masterPlay.classList.add('bi-pause-circle');
                wave.classList.add('active2');
                cdThumRotate.play();
                Array.from(noteMusicAnimate).forEach((item)=>{
                  item.style.display = 'block'
                })
              }
            }
          }
        }

        // xử lí khi kích dup vào bài hát
        menuSideRight.ondblclick = function(e) {
          const songNode = e.target.closest(".nextsong__item:not(.nextsong__fist-item-headding--active)");
          if(songNode) {
            if(app.isPlaying && Number(songNode.dataset.index) == app.currentIndex) {
              audioMusic.pause();
              app.isPlaying = false;
              songNode.classList.remove('nextsong__fist-item-headding--active');
              masterPlay.classList.add('bi-play-circle');
              masterPlay.classList.remove('bi-pause-circle');
              wave.classList.remove('active2');
              cdThumRotate.pause();
              Array.from(noteMusicAnimate).forEach((item)=>{
                item.style.display = 'none'
              })

            } else if(!app.isPlaying && Number(songNode.dataset.index) == app.currentIndex) {
              audioMusic.play();
              app.isPlaying = true;
              songNode.classList.add('nextsong__fist-item-headding--active');
              songNode.classList.remove('nextsong__fist-item-playbtn--active');
              masterPlay.classList.remove('bi-play-circle');
              masterPlay.classList.add('bi-pause-circle');
              wave.classList.add('active2');
              cdThumRotate.play();
              Array.from(noteMusicAnimate).forEach((item)=>{
                item.style.display = 'block'
              })

            } else if(Number(songNode.dataset.index) != app.currentIndex) {
              app.currentIndex =Number(songNode.dataset.index);
              app.loadCurrentSong();
              app.renderNextSong();
              audioMusic.play();
              app.isPlaying = true;
              const nextSongItems = $$('.nextsong__item');
              nextSongItems[app.currentIndex].classList.add('nextsong__fist-item-headding--active'); 
              nextSongItems[app.currentIndex].classList.remove('nextsong__fist-item-playbtn--active'); 
              masterPlay.classList.remove('bi-play-circle');
              masterPlay.classList.add('bi-pause-circle');
              wave.classList.add('active2');
              cdThumRotate.play();
              Array.from(noteMusicAnimate).forEach((item)=>{
                item.style.display = 'block'
              })
            }
          }
        }

        // khi ấn vào nút tim ở Có thể nghe 
        songTymListens.forEach((songTymRecently,index) => {
          songTymRecently.onclick = function() {
            songTymRecently.classList.toggle('js-icontym-click');
          }
        }) 
        
        // khi ấn vào nút tim ở recently         
        recentlySongList.onmousemove = function(e) {
          const songTyms = e.target.closest('.icon__heart');
          songTyms.onclick = function() {
            songTyms.classList.toggle('js-icontym-click');
          }    
        }     

        // khi bấm vào nút tym thanh bar bottom
        songTyms.forEach((songTym , index) => {
          songTym.onclick = function() {
            songTym.classList.toggle('nextsong__item-action-heart-click');
          }
        })

        listMusicMobile.onclick = function() {
          menuSideRightNav.classList.toggle('js-list-music-mobile')
        }
    },


    loadCurrentSong:() =>{
            app.currentPlaylist = 0
            heading.textContent = app.currentPlaylist.name
            singer.textContent = app.currentPlaylist.artists_names
            cdImg.style.backgroundImage = `url('${app.currentPlaylist.thumbnail}')`
            audioMusic.src = `http://api.mp3.zing.vn/api/streaming/audio/${app.currentPlaylist.id}/320`
        // if(app.isPlayPersonalSong){
        //     heading.textContent = app.currentSong.name
        //     singer.textContent = app.currentSong.singer
        //     cdImg.style.backgroundImage = `url('${app.currentSong.thumbnail}')`
        //     audioMusic.src = app.currentSong.path
        // }
        // else if(app.isPlayUSUK){
        //     app.currentSongUSUK = 0
        //     heading.textContent = app.currentSongUSUK.name
        //     singer.textContent = app.currentSongUSUK.singer
        //     cdImg.style.backgroundImage = `url('${app.currentSongUSUK.thumbnail}')`
        //     audioMusic.src = app.currentSongUSUK.path
        // }
        // else if(app.isPlayEDM){
        //     app.currentSongEDM = 0
        //     heading.textContent = app.currentSongEDM.name
        //     singer.textContent = app.currentSongEDM.singer
        //     cdImg.style.backgroundImage = `url('${app.currentSongEDM.thumbnail}')`
        //     audioMusic.src = app.currentSongEDM.path
        // }
        // else{
        //     app.currentPlaylist = 0
        //     heading.textContent = app.currentPlaylist.name
        //     singer.textContent = app.currentPlaylist.artists_names
        //     cdImg.style.backgroundImage = `url('${app.currentPlaylist.thumbnail}')`
        //     audioMusic.src = `http://api.mp3.zing.vn/api/streaming/audio/${app.currentPlaylist.id}/320`
        // }
    
    },

    //xử lí khi ấn next bài
    nextSong: function() {
      app.currentIndex++
      if(app.currentIndex >= zingchartData.data.song.length) {
        app.currentIndex = 0
      }
      app.loadCurrentSong();
    },

   // xử lí khi ấn back bài
    backSong: function() {
      app.currentIndex--
        if(app.currentIndex < 0) {
          app.currentIndex = zingchartData.data.song.length - 1
        }
        app.loadCurrentSong();
        app.renderNextSong();
    },

    // xử lí khi ấn Ramdom
    playRamdom: function() {
      let newIndex;
        do {
          newIndex = Math.floor(Math.random() * zingchartData.data.song.length)
        } while(newIndex === this.currentIndex)
            
        app.currentIndex = newIndex;
        app.loadCurrentSong();
    },


  start: () => {
    // app.renderPlayList();
    app.renderNextSongHeadding()
    app.renderNextSongList()
    app.handleEvents();
    app.defineProperties()
    app.loadCurrentSong()
    app.renderRecently()
    app.renderPlayList($('.option-all__songs-list'),this.songData)
    app.renderPlayList1($('.option-music-list'),this.songData)
    app.renderZingChart()
    app.rendertabsZingChart();
    app.renderSingerChoice();
    app.rendertabsZingChartWeekVn();
    app.rendertabsZingChartWeekUS();
    app.rendertabsZingChartWeekHip();
    
  }
}  

/*-----Handle button arrow-----*/
leftScrollPlaylist.onclick = () => recentlySong.scrollLeft -= 250
rightScrollPlaylist.onclick = () => recentlySong.scrollLeft += 250