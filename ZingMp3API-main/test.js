
// const app = {
//     currentIndex : 0,
//     isRamdom: false,
//     isRepeat: false,
//     isPlaying: false,
//     songs: [
//         {
//           "id": 1,
//           "songName": "Sao Cũng Được",
//           "singer": "Thành Đạt",
//           "path": "/music/SaoCungDuoc-ThanhDat-8072594.mp3",
//           "poster": "/media-icon/Saocungduoc.webp",
//           "duration" : '05:19',
//         },
//         {
//           "songName": "Cưới Hông Chốt Nha",
//           "singer": "Út Nhị,Đỗ Thành Duy",
//           "path": "/music/CuoiHongChotNha-UtNhiDoThanhDuyNH4T-8072828.mp3",
//           "poster": "/image/Cuoi-Hong-Chot-Nha.jpg",
//           "id": 2,
//           "duration" : '04:16',
//         },
//         {
//           "songName": "Ân Tình Sang Trang",
//           "singer": "Châu Khải Phong,ACV",
//           "path": "/music/AnTinhSangTrang-ChauKhaiPhongLeCuong-7976352.mp3",
//           "poster": "/media-icon/antinhsangtrang.webp",
//           "id": 3,
//           "duration" : '05:42',
//         },
//         {
//           "songName": "Anh Yêu Em Cực",
//           "singer": "Linh Thộn, MInh Vũ",
//           "path": "/music/AnhYeuEmCuc-LinhThonMinhVu-7956240.mp3",
//           "poster": "/image/anh_yeu_em_cuc.jpg",
//           "id": 4,
//           "duration" : '02:26',
//         },
//         {
//           "songName": "Kiệu Hoa",
//           "singer": "Bin",
//           "path": "/music/KieuHoa-BIN-7793428.mp3",
//           "poster": "/image/1663556797282_500.jpg",
//           "id": 5,
//           "duration" : '02:57',
//         },
//         {
//           "songName": "Pháo Hồng",
//           "singer": "Đạt Long Vinh",
//           "path": "/music/PhaoHong-DatLongVinh-7582920.mp3",
//           "poster": "/image/phao_hong.jpg",
//           "id": 6,
//           "duration" : '03:55',
//         },
//         {
//           "songName": "Waiting For You",
//           "singer": "MONO",
//           "path": "/music/WaitingForYou-MONOOnionn-7733882.mp3",
//           "poster": "/image/Mono.jpg",
//           "id": 7,
//           "duration" : '04:25',
//         },
//         {
//           "songName": "Tòng Phu",
//           "singer": "Keyo",
//           "path": "/music/TongPhu-KeyoVietNam-7802406.mp3",
//           "poster": "/image/tong_phu.jpg",
//           "id": 8,
//           "duration" : '04:52',
//         }
//     ],

//     albums: [
//       {
//         "albumName": "Dance Việt Nam Hay Nhất",
//         "singer":"Masew,K-ICM,...",
//         "image":"/image/albums/Combo hits.jpg",
//         "id": 1
//       },

//       {
//         "albumName": "Combo Hits",
//         "singer":"Masew,K-ICM,Sơn Tùng M-TP,Hoàng Thùy Linh,...",
//         "image":"/image/albums/Dance Viet Nam.webp",
//         "id": 2
//       },

//       {
//         "albumName": "Hip-Hop",
//         "singer":"Eminem,Drake,...",
//         "image":"/image/albums/hiphop.webp",
//         "id": 3
//       },

//       {
//         "albumName": "Nhạc Việt Kết Hợp",
//         "singer":"Masew,K-ICM,...",
//         "image":"/image/albums/Combo hits.jpg",
//         "id": 4
//       },

//       {
//         "albumName": "Rap Việt",
//         "singer":"B ray,Biz,Đen Vâu,Sofia,...",
//         "image":"/image/albums/Combo hits.jpg",
//         "id": 5
//       },

//     ],

//     // RENDER LIST MUSIC ITEM
//     renderPlayList : function (playListElement, songs) {
//       const htmls = songs.map((song, index) => {
//           return `
//               <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
//               <li class="songs-item js__song-item0 ${index == this.currentIndex ? 'songs-item--active' : ''} " data-index="${index}">
//                   <div class="songs-item-left">
//                       <div style="background-image: url(${song.poster});" class="songs-item-left-img js__songs-item-left-img-0">
//                           <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
//                           <div class="songs-item-left-img-playing-box">
//                               <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
//                           </div>
//                       </div>

//                       <div class="songs-item-left-body">
//                           <h3 class="songs-item-left-body-name js__main-color">${song.songName}</h3>
//                           <span class="songs-item-left-body-singer js__sub-color">${song.singer}</span>
//                       </div>
//                   </div>
//                   <div class="songs-item-center tablet-hiden mobile-hiden  js__sub-color">
//                       <span>${song.songName} (Remix)</span>
//                   </div>
//                   <div class="songs-item-right mobile-hiden ">
//                       <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
//                       <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
//                       <span class="songs-item-right-tym">
//                           <i class="fas fa-heart songs-item-right-tym-first"></i>
//                           <i class="far fa-heart songs-item-right-tym-last"></i>
//                       </span>
//                       <span class="songs-item-right-duration js__sub-color">${song.duration}</span>
//                       <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
//                   </div>
//               </li>`
//       })
//       playListElement.innerHTML = htmls.join('');
//     }, 
    
//     // RENDER LIST MUSIC ITEM OPTION1
//     renderPlayList1 : function (playListElement, songs) {
//       const htmls = songs.map((song, index) => {
//           return `
//               <!-- songs-item-playing--active-onplay songs-item--active songs-item-playbtn--active -->
//               <li class="songs-item js__song-item1 ${index == this.currentIndex ? 'songs-item--active songs-item-playbtn--active' : ''} " data-index="${index}">
//                   <div class="songs-item-left">
//                       <div style="background-image: url(${song.poster});" class="songs-item-left-img js__songs-item-left-img-1">
//                           <div class="songs-item-left-img-playbtn"><i class="fas fa-play"></i></div>
//                           <div class="songs-item-left-img-playing-box">
//                               <img class = "songs-item-left-img-playing" src="./assets/img/songs/icon-playing.gif" alt="playing">
//                           </div>
//                       </div>

//                       <div class="songs-item-left-body">
//                           <h3 class="songs-item-left-body-name js__main-color">${song.songName}</h3>
//                           <span class="songs-item-left-body-singer js__sub-color">${song.singer}</span>
//                       </div>
//                   </div>
//                   <div class="songs-item-center tablet-hiden mobile-hiden js__sub-color">
//                       <span>${song.songName} (Remix)</span>
//                   </div>
//                   <div class="songs-item-right mobile-hiden">
//                       <span class="songs-item-right-mv ipad-air-hiden"><i class="fas fa-photo-video js__main-color"></i></span>
//                       <span class="songs-item-right-lyric ipad-air-hiden"><i class="fas fa-microphone js__main-color"></i></span>
//                       <span class="songs-item-right-tym">
//                           <i class="fas fa-heart songs-item-right-tym-first"></i>
//                           <i class="far fa-heart songs-item-right-tym-last"></i>
//                       </span>
//                       <span class="songs-item-right-duration js__sub-color">${song.duration}</span>
//                       <span class="songs-item-right-more js__main-color"><i class="fas fa-ellipsis-h"></i></span>
//                   </div>
//               </li>`
//       })
//       playListElement.innerHTML = htmls.join('');
//     },
  

//     // render bài hát gần đây
//     renderRecently: function() {
//         const htmls = this.songs.map(song => {
//             return `
//             <li class="songItem">
//                 <div class="img_play">
//                 <img src="${song.poster}" alt="${song.songName}">
//                 <i class="bi playListPlay bi-play-circle" id="${song.id}"></i>
//                 </div>
//             <h5>
//                 ${song.songName}
//                 <br>
//                 <div class="subtitle">${song.singer}</div>
//             </h5>
//           </li>
//             `
//         })

//         document.querySelector('.popular_song .pop_song').innerHTML = htmls.join('');

//     },

//     // RENDER HEADDING NEXT SONG tab right
//         renderNextSongHeadding: function(playListElement, songs){
//           var playListElement = document.querySelector('.nextsong_fist');
//           const htmls = this.songs.map((song, index) => {
//           return index <= this.currentIndex ? `
//           <div class="nextsong__fist-item nextsong__item nextsong__fist-item-playbtn--active ${audioMusic.onplay && index == this.currentIndex ? 'nextsong__fist-item-headding--active' : ''} ${index == this.currentIndex ? 'nextsong__fist-item-background--active' : ''}" data-index="${index}">
//               <div class="nextsong__item-img" style="background-image: url(${song.poster});">
//                   <div class="nextsong__item-playbtn">
//                     <i class="bi bi-play-circle"></i>
//                   </div>
//                   <div class="songs-item-left-img-playing-box">
//                       <img class = "songs-item-left-img-playing" src="/icon/icon-playing.gif" alt="playing">
//                   </div>
//               </div>
//               <div class="nextsong__item-body">
//                   <span class="nextsong__item-body-heading ${index == this.currentIndex ? '' : 'js__main-color'}">${song.songName}</span>
//                   <span class="nextsong__item-body-depsc ${index == this.currentIndex ? '' : 'js__sub-color'}">${song.singer}</span>
//               </div>
//               <div class="nextsong__item-action">
//                   <span class="nextsong__item-action-heart">
//                       <i class="bi bi-heart nextsong__item-action-heart-icon1"></i>
//                       <i class="bi bi-heart nextsong__item-action-heart-icon2"></i>
//                   </span>
//                   <span class="nextsong__item-action-dot">
//                       <i class="bi bi-three-dots nextsong__item-action-heart-icon2"></i>
//                   </span>
//               </div>
//           </div>` : ''
//       })
//         playListElement.innerHTML = htmls.join('');
//       },

//     // render list next song
//     renderNextSongList: function(playListElement) {
//       var playListElement = document.querySelector('.media-next-play');
//       if(this.currentIndex >= this.songs.length -1) {
//         playListElement.innerHTML = `
//           <span>
//             Danh sách bài hát đã hết! :))
//           </span>
//         `
//       }else {
//         const htmls = this.songs.map((song,index) => {
//           return index > this.currentIndex ? `
//           <li class="nextsong__last-item nextsong__item" data-index="${index}">
//           <div class="nextsong__item-img" style="background-image: url(${song.poster});">
//               <div class="nextsong__item-playbtn">
//                 <i class="bi bi-play-circle"></i>
//               </div>
//           </div>
//           <div class="nextsong__item-body">
//               <span class="nextsong__item-body-heading js__main-color">${song.songName}</span>
//               <span class="nextsong__item-body-depsc js__sub-color">${song.singer}</span>
//           </div>
//           <div class="nextsong__item-action">
//               <span class="nextsong__item-action-heart">
//                 <i class="bi bi-heart nextsong__item-action-heart-icon1"></i>
//                 <i class="bi bi-heart nextsong__item-action-heart-icon2"></i>
//               </span>
//               <span class="nextsong__item-action-dot js__main-color">
//                 <i class="bi bi-three-dots nextsong__item-action-heart-icon2"></i>  
//               </span>
//           </div>
//       </li>` : ''
//         })
//         playListElement.innerHTML = htmls.join('');
//       }
//     },
    
//     // định nghĩa các thuộc tính

//     defineProperties: function() {
//         Object.defineProperty(this,'currentSong', {
//             get: function() {
//                 return this.songs[this.currentIndex];
//             }
//         })
//     },

//     // Xử lí các sự kiện
//     handleEvents: function() {

//       var sliderIndex1 = 1;
//       var sliderIndex = 1;
//       var sliderIndex1 = 1;
//       var sliderLenght = 18;
//       const songItemsOption1 = $$('.js__song-item1');
//       const songItems = $$('.js__song-item0');
//       //   LÀM SLIDER BÊN TAP KHÁM PHÁ
//       changeImage1Replate = function() {
//         slidersDiscover.forEach((item,index) => {
//             if (index == sliderIndex1) {
//                 slidersDiscover[index].classList.replace('container-discover__slider-item-second','container-discover__slider-item-first');
//                 slidersDiscover[index].classList.replace('container-discover__slider-item-third','container-discover__slider-item-first');
//                 slidersDiscover[index].classList.replace('container-discover__slider-item-four','container-discover__slider-item-first');
//             } else if (index == sliderIndex1 + 1) {
//                 slidersDiscover[index].classList.replace('container-discover__slider-item-first','container-discover__slider-item-second');
//                 slidersDiscover[index].classList.replace('container-discover__slider-item-third','container-discover__slider-item-second');
//                 slidersDiscover[index].classList.replace('container-discover__slider-item-four','container-discover__slider-item-second');
//             } else if (index == sliderIndex1 + 2) {
//                 slidersDiscover[index].classList.replace('container-discover__slider-item-first','container-discover__slider-item-third');
//                 slidersDiscover[index].classList.replace('container-discover__slider-item-second','container-discover__slider-item-third');
//                 slidersDiscover[index].classList.replace('container-discover__slider-item-four','container-discover__slider-item-third');
//             } else {
//                 slidersDiscover[index].classList.replace('container-discover__slider-item-first','container-discover__slider-item-four');
//                 slidersDiscover[index].classList.replace('container-discover__slider-item-second','container-discover__slider-item-four');
//                 slidersDiscover[index].classList.replace('container-discover__slider-item-third','container-discover__slider-item-four');
//             }
//             if (sliderIndex1 == 2) {
//                 slidersDiscover[0].classList.replace('container-discover__slider-item-first','container-discover__slider-item-third');
//                 slidersDiscover[0].classList.replace('container-discover__slider-item-second','container-discover__slider-item-third');
//                 slidersDiscover[0].classList.replace('container-discover__slider-item-four','container-discover__slider-item-third');
//             } else if (sliderIndex1 == 3) {
//                 slidersDiscover[0].classList.replace('container-discover__slider-item-first','container-discover__slider-item-second');
//                 slidersDiscover[0].classList.replace('container-discover__slider-item-third','container-discover__slider-item-second');
//                 slidersDiscover[0].classList.replace('container-discover__slider-item-four','container-discover__slider-item-second');
//                 slidersDiscover[1].classList.replace('container-discover__slider-item-first','container-discover__slider-item-third');
//                 slidersDiscover[1].classList.replace('container-discover__slider-item-second','container-discover__slider-item-third');
//                 slidersDiscover[1].classList.replace('container-discover__slider-item-four','container-discover__slider-item-third');
//             }
//         })
//     }
//     changeImage1 = function() {
//       changeImage1Replate();
//       sliderIndex1++;
//       if (sliderIndex1 >= 4) {
//           sliderIndex1 = 0;
//       }
//     }

//     // CHUYỂN TAB CÁ NHÂN / KHÁM PHÁ / ZINGCHART
//     sideBarTabs.forEach((tab, index) => {
//       tab.onclick = function() {
//         document.querySelector('.js__sidebar-tabs.sidebar__item--active').classList.remove('sidebar__item--active');
//           tab.classList.add('sidebar__item--active');
//             containerPanes[0].style.display = "none";
//             containerPanes[1].style.display = "none";
//             // containerPanes[2].style.display = "none";
//             containerPanes[index].style.display = "block";
//         }
//       })    

//       // chuyển tab option
//     tabs.forEach((tab, index) => {
//       const pane = panes[index];
//         $('.panes-item:not(.music__option-item--active)').style.backgroundColor = 'transparent';
//         themeItems[backgroundIndex].click();
//           // app.verifyOptionTextColor();
//           tab.onclick = function() {
//             $('.music__option-item.music__option-item--active').classList.remove('music__option-item--active');
//             tab.classList.add('music__option-item--active')
//             $('.panes-item.active').classList.remove('active');
//             tabs[0].style.backgroundColor = 'transparent';
//             tabs[1].style.backgroundColor = 'transparent';
//             tabs[2].style.backgroundColor = 'transparent';
//             tabs[3].style.backgroundColor = 'transparent';
//             tab.style.backgroundColor = `var(--option-color-${backgroundIndex})`;
//             pane.classList.add('active')
//             // if (index === 1) {
//             //     app.renderPlayList1($('.option-music-list'),app.songsData);
//             // }
//             $('.music__option-item.music__option-item--active').classList.remove('js__main-color');
//       }
//     })  

//     //   LÀM SLIDER BÊN TAP CÁ NHÂN
//      changeImage = function() {
//           sliderItems.forEach((item,index) => {
//                   // index == sliderIndex ? sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-first') : index == sliderIndex + 1 ?  sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second'):sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-third');
//               if (index == sliderIndex) {
//                   sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-first');
//                   sliderItems[index].classList.replace('option-all__song-slider-img-second','option-all__song-slider-img-first');
//               } else if (index == sliderIndex + 1) {
//                   sliderItems[index].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-second');
//                   sliderItems[index].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second');
//               } else {
//                   sliderItems[index].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-third');
//                   sliderItems[index].classList.replace('option-all__song-slider-img-second','option-all__song-slider-img-third');
//               }
//               if (sliderIndex == sliderLenght - 1) {
//                   sliderItems[0].classList.replace('option-all__song-slider-img-first','option-all__song-slider-img-second');
//                   sliderItems[0].classList.replace('option-all__song-slider-img-third','option-all__song-slider-img-second');
//               }
//           })
//           sliderIndex++;
//           if (sliderIndex >= sliderLenght) {
//               sliderIndex = 0;
//           }
//       }
//       setInterval(changeImage,2000);    

//     setInterval(changeImage1,5000);
//     // khi bấm vào nut right của slider
//     $('.js__container-discover__slider-right').onclick = function() {
//         changeImage1();
//     }
//     // khi bấm vào nut left của slider
//     $('.js__container-discover__slider-left').onclick = function() {
//         changeImage1Replate();
//         sliderIndex1--;
//         if (sliderIndex1 < 0) {
//             sliderIndex1 = 3;
//         }
//     }
//         // xử lí khi play
//         let masterPlay = document.querySelector('#masterPlay');
//         let wave = document.getElementsByClassName('wave')[0];

//         var playMusic = masterPlay.addEventListener('click',()=> {
//             if(audioMusic.paused || audio.currentTime <=0){
//                 audioMusic.play();
//                 masterPlay.classList.remove('bi-play-circle');
//                 masterPlay.classList.add('bi-pause-circle');
//                 wave.classList.add('active2');

//                 // playing
//                 audioMusic.onplay = function() {
//                   app.isPlaying = true;
//                     const mediaPlaying = document.querySelectorAll('.nextsong__item')
//                     mediaPlaying[app.currentIndex].classList.add('nextsong__fist-item-headding--active')
//                     mediaPlaying[app.currentIndex].classList.remove('nextsong__fist-item-playbtn--active')

//                     songItems[app.currentIndex].classList.add('songs-item-playing--active-onplay');
//                     songItems[app.currentIndex].classList.add('songs-item--active');            
//                     songItems[app.currentIndex].classList.remove('songs-item-playbtn--active');

//                     songItemsOption1[app.currentIndex].classList.add('songs-item-playing--active-onplay');
//                     songItemsOption1[app.currentIndex].classList.add('songs-item--active');            
//                     songItemsOption1[app.currentIndex].classList.remove('songs-item-playbtn--active');                    
//                   }
//             }else {
//                 audioMusic.pause();
//                 masterPlay.classList.add('bi-play-circle');
//                 masterPlay.classList.remove('bi-pause-circle');
//                 wave.classList.remove('active2');

//                 // playing
//                 audioMusic.onpause = function() {
//                   app.isPlaying = false;
//                     const mediaPlaying = document.querySelectorAll('.nextsong__item')
//                     mediaPlaying[app.currentIndex].classList.remove('nextsong__fist-item-headding--active')
//                     mediaPlaying[app.currentIndex].classList.add('nextsong__fist-item-playbtn--active')
//                     songItems[app.currentIndex].classList.remove('songs-item-playing--active-onplay');
//                     songItems[app.currentIndex].classList.add('songs-item-playbtn--active');
//                     songItemsOption1[app.currentIndex].classList.remove('songs-item-playing--active-onplay');
//                     songItemsOption1[app.currentIndex].classList.remove('songs-item--active');            
//                     songItemsOption1[app.currentIndex].classList.add('songs-item-playbtn--active');    
//                   }                
//             }
//         })

//       // thời gian khi chạy
//         audioMusic.ontimeupdate = function() {
//           if(audioMusic.duration) {
//             let music_curr = audioMusic.currentTime;
//             let music_dur = audioMusic.duration;

//             // curentStart
//             let min = Math.floor(music_curr/60);
//             let sec = Math.floor(music_curr%60);

//             if(sec<10) {
//               sec = `0${sec}`
//             }

//             currentStart.innerHTML = `${min}:${sec}`;

//             // currentEnd
//             let min1 = Math.floor(music_dur/60);
//             let sec1 = Math.floor(music_dur%60);
            
//             if(sec1<10) {
//               sec1 = `0${sec1}`
//             }
//             currentEnd.innerHTML = `${min1}:${sec1}`;


//       //thanh dot Khi music chạy 
//             let progressBar =parseInt((audioMusic.currentTime/audioMusic.duration)*100);
//             seek.value = progressBar;
//             let seekBar = seek.value;
//             bar2.style.width = `${seekBar}%`;
//             dot.style.left = `${seekBar}%`;
//           }
//         }

//     // tua music
//         seek.addEventListener('change',() => {
//           audioMusic.currentTime = seek.value * audioMusic.duration/100;
//         })

//         // nhạc kết thúc
//         audioMusic.addEventListener('ended',() => {
//           masterPlay.classList.add('bi-play-circle');
//           masterPlay.classList.remove('bi-pause-circle');
//           wave.classList.remove('active2');
//         })


//     // volum
//         let volIcon = document.getElementById('vol_icon');
//         let vol= document.getElementById('vol');
//         let volDot= document.getElementById('vol_dot');
//         const volBar = document.getElementsByClassName('vol_bar')[0]

//         vol.addEventListener('change', () => {
//           if(vol.value == 0) {
//             volIcon.classList.remove('bi-volume-down-fill');
//             volIcon.classList.add('bi-volume-mute-fill');
//             volIcon.classList.remove('bi-volume-up-fill');
//           }
          
//           if(vol.value > 0) {
//             volIcon.classList.add('bi-volume-down-fill');
//             volIcon.classList.remove('bi-volume-mute-fill');
//             volIcon.classList.remove('bi-volume-up-fill');
//           }

//           if(vol.value > 50) {
//             volIcon.classList.remove('bi-volume-down-fill');
//             volIcon.classList.remove('bi-volume-mute-fill');
//             volIcon.classList.add('bi-volume-up-fill');
//           }

//           let volA = vol.value;
//           volBar.style.width = `${volA}%`;
//           volDot.style.left = `${volA}%`;
//           audioMusic.volume = volA/100;
//         })

//     //khi next bài
//         next.onclick = function() {
//           if(app.isRamdom) {
//             app.playRamdom();
//             app.renderNextSongHeadding(nextSongHeadding,this.songs);
//           } else {
//             app.nextSong();
//             app.renderNextSong();
//           }
//           masterPlay.classList.remove('bi-play-circle');
//           masterPlay.classList.add('bi-pause-circle');
//           wave.classList.add('active2');
//           audioMusic.play();
//         }

//     //khi back bài
//         back.onclick = function() {
//           if(app.isRamdom) {
//             app.playRamdom();
//           } else {
//             app.backSong();
//           }

//           audioMusic.play();
//           masterPlay.classList.remove('bi-play-circle');
//           masterPlay.classList.add('bi-pause-circle');
//           wave.classList.add('active2');
//          }

//         // khi ramdom 
//          ramdomBtn.onclick = function(e) {
//           app.isRamdom = !app.isRamdom
//           ramdomBtn.classList.toggle('active',app.isRamdom)
//          }

//     //  xử lí next khi bài hát hết thời gian
//         audioMusic.onended = function() {
//           if(app.isRepeat) {
//             audioMusic.play();
//           } else{
//             next.click();
//           }
//           masterPlay.classList.remove('bi-play-circle');
//           masterPlay.classList.add('bi-pause-circle');
//           wave.classList.add('active2');
//         }

//     // xử lí lặp bài hát
//         repeatBtn.onclick = function() {
//           app.isRepeat = !app.isRepeat;
//           repeatBtn.classList.toggle('active',app.isRepeat);
//         } 
        
//         // KHI BAM VÀO NÚT PHÁT TẤT CẢ OPTION-0
//         playAllBtn.onclick = function() {
//           app.currentIndex = 0;
//           app.loadCurrentSong();
//           audio.play();
//           masterPlay.classList.remove('bi-play-circle');
//           masterPlay.classList.add('bi-pause-circle');
//           wave.classList.add('active2');

//           // playing
//           audioMusic.onplay = function() {
//           app.isPlaying = true;
//           const mediaPlaying = document.querySelectorAll('.nextsong__item')
//           mediaPlaying[app.currentIndex].classList.add('nextsong__fist-item-headding--active')
//           mediaPlaying[app.currentIndex].classList.remove('nextsong__fist-item-playbtn--active')
//           }          
//           // all.scrollToActiveSong();
//           if(app.isRandom) {
//               app.renderNextSongHeadding(nextSongHeadding,app.songs);
//               nextSongList.innerHTML = `
//                   <span class="nextsong__last-item-end">
//                       Bật chế độ random thì cần gì xem trước bài phát tiếp theo nhể, đỡ phải code :)
//                   </span>`;
//           } else {
//               app.renderNexrSong();
//               // setTimeout(app.scrollToActiveNextSong(), 2000);
//               // app.scrollToActiveNextSong();
//           }
//       }        
//     },

//     // tải bải hát hiện tại
//     loadCurrentSong: function() {
//         cdImg.src = this.currentSong.poster;
//         heading.textContent = this.currentSong.songName;
//         singer.textContent = this.currentSong.singer;
//         audioMusic.src = this.currentSong.path;
//     },

//     //xử lí khi ấn next bài
//     nextSong: function() {
//       this.currentIndex++
//       if(this.currentIndex >= this.songs.length) {
//         this.currentIndex = 0
//       }
//       this.loadCurrentSong();
//     },

//    // xử lí khi ấn back bài
//     backSong: function() {
//       this.currentIndex--
//         if(this.currentIndex < 0) {
//           this.currentIndex =this.songs.length - 1
//         }
//         this.loadCurrentSong();
//     },

//     // xử lí khi ấn Ramdom
//     playRamdom: function() {
//       let newIndex;
//       do {
//         newIndex = Math.floor(Math.random() * this.songs.length)
//       } while(newIndex === this.currentIndex)

//       this.currentIndex = newIndex;
//       this.loadCurrentSong();
//     },



//     //renden next song
//     renderNextSong: function () {
//       this.renderNextSongHeadding(nextSongHeadding,this.songs);
//       this.renderNextSongList(nextSongList,this.songs);
//     },

//     start: function() {
//         this.defineProperties();
//         // xử lí even
//         this.handleEvents();
//         // render danh sách nhạc ở tổng quan
//         this.renderPlayList(optionAllSongList,this.songs);

//         // render danh sách nhạc ở tab music
//         this.renderPlayList1($('.option-music-list'),this.songs);
        
//         this.loadCurrentSong();
//         // render bài hát gần đây
//         this.renderRecently();

//         this.renderNextSongHeadding();
//         this.renderNextSongList();
//         this.renderWait();
//     },
// }

// app.start();
