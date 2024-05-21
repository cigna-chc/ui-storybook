/**
 * Video class
 */

/* eslint-disable */
export default class Video {
    constructor(el) {
      this.el = el;
      this.initializeLimelightVideo();
      this.setPosterImage();
      this.playVideo();
    }

    static init(el) {
      return new Video(el);
    }

    initializeLimelightVideo() {
        document.addEventListener("DOMContentLoaded", () => {
            const limelightElements = document.querySelectorAll('[id^="limelight-"]');
            limelightElements.forEach((element) => {
                const mediaId = element.getAttribute('data-mediaid');

                if (!mediaId) {
                    console.error('No media ID found for element', element);
                    return;
                }

                const randomId = Math.random().toString(36).substr(2, 9);
                element.id = `limelight-${randomId}`;
                element.nextElementSibling.id = `poster-${randomId}`;

                const objData = {
                    playerId: element.id,
                    height: "",
                    width: "",
                    mediaId: mediaId,
                    playerForm: "LVPPlayer"
                };

                try {
                    LimelightPlayerUtil.initEmbed(element.id);
                    LimelightPlayerUtil.embed(objData);
                    element.focus();
                } catch (error) {
                    console.error('Error initializing Limelight player', error);
                    // Fallback to a default video or error message
                    element.innerHTML = '<p>Video unavailable. Please try again later.</p>';
                }
            });
        });
    }



    playVideo() {
       const iframeWrapper = document.querySelectorAll('.cmp-video__iframe');
       const embedContainer = document.querySelectorAll('.cmp-video__assets');

       Array.from(embedContainer).forEach((video) => {
           const videoIframe = video.querySelector('video');

           if(videoIframe) {
                const button = video.querySelector('.overlay-button');
                if(videoIframe.poster == '') {
                    button.style.display = 'none';
                } else {
                    videoIframe.removeAttribute('controls');
                }
                video.addEventListener('click', () => {
                    videoIframe.setAttribute('controls', '');
                    button.style.display = 'none';
                });
                button.addEventListener('click', ()=> {
                    videoIframe.setAttribute('controls', '');
                    videoIframe.play();
                })
            }
       });

        Array.from(iframeWrapper).forEach((container) => {
            container.addEventListener('click', (event) => {
                let currentTargetElement = event.currentTarget;
                Array.from(currentTargetElement?.children).forEach((item) => {
                    if(item.id.includes('limelight-')) {
                        item.classList.add('poster-active');
                        item.doPlay();
                    } else {
                        currentTargetElement.classList.add('poster-active');
                    }
                    if(item.tagName.toLowerCase() === 'button') {
                        item.style.display = "none";
                    }
                    if(item.tagName.toLowerCase() === 'iframe') {
                        let src = item.src;
                        if (src.includes('?')) {
                            src += '&autoplay=true';
                            item.setAttribute('allow', "autoplay");
                        } else {
                            src += '?autoplay=true';
                            item.setAttribute('allow', "autoplay");
                        }
                        item.src = src;
                    }
                })
            })
        })
    }

    addRule = (function(style){
        var sheet = document.head.appendChild(style).sheet;
        return function(selector, css){
            var propText = Object.keys(css).map(function(p){
                return p+":"+css[p]
            }).join(";");
            sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
        }
    })(document.createElement("style"));

    setPosterImage() {
        const iframeWrapper = document.querySelectorAll('.cmp-video__iframe');
        let posterImage;
        iframeWrapper.forEach((element) => {
            Array.from(element.children).forEach((item) => {
                if(item.tagName.toLowerCase() === 'iframe') {
                    posterImage = item.getAttribute('poster');
                    let randomId = Math.random().toString(36).substr(2, 9);
                    element.id = randomId ? `brightcove-${randomId}` : "";
                    if(posterImage != null || posterImage != undefined) {
                        this.addRule(`div#${element.id}:before`, {
                            display: "block",
                            width: "100%",
                            height: "100%",
                            background: `url(${posterImage}) no-repeat`,
                            content: "''",
                            position: "absolute",
                            "background-size": "contain",
                            cursor: "pointer",
                        });
                    }
                } else if(item.tagName.toLowerCase() === 'span') {
                    posterImage = item.getAttribute('poster');
                    if(posterImage != null || posterImage != undefined) {
                        let randomId = Math.random().toString(36).substr(2, 9);
                        element.id = randomId ? `limelight-player-${randomId}` : "";
                        this.addRule(`div#${element.id}:before`, {
                            display: "block",
                            width: "100%",
                            height: "100%",
                            background: `url(${posterImage}) no-repeat`,
                            content: "''",
                            position: "absolute",
                            "background-size": "contain",
                            cursor: "pointer",
                            "z-index": 2,
                        });
                    }
                }
            })
        })
    }
}