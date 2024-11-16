
// configure Justified Gallery (tiles)
$("#gallery").justifiedGallery({
    // don't justify last row
    // lastRow : 'nojustify',
    // tile height
    rowHeight : 210,
    // margins between tiles
    margins : 5,
    // enbale videojs custom video player
    videojs: true,
    // show captions
    captions: true,
    cssAnimation: false,
    captionSettings: {
      animationDuration: 200,
      visibleOpacity: 1,
      nonVisibleOpacity: 0.5
    }
  });
