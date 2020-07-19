const players = Array.from(document.querySelectorAll('video')).map(p => new Plyr(p, { ratio: '16:9' }));

new Siema({
    selector: '.missions-slider',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: false,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
});
