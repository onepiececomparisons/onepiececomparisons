// Usage: $(['img1.jpg','img2.jpg']).preloadImages([handler(isSucceed,finishedCount,len,src)[,handler(succeedCount,len)]]);
// oneCallback(finishedNumber,totalNumber,src) function gets called after each image is preloaded
// allCallback function gets called after all images are preloaded
// author: kamal.yu@gmail.com

$.fn.preloadImages = function (oneCallback, allCallback) {
    oneCallback = oneCallback || $.noop();
    allCallback = allCallback || $.noop();
    var len = this.length;
    var finishedCount = 0;
    var succeedCount = 0;
    var completeLoading = function (src, isSucceed) {
        finishedCount++;
        if (isSucceed) {
            succeedCount++
        }
        oneCallback(isSucceed, finishedCount, len, src);

        if (finishedCount == len) {
            allCallback(succeedCount, len);
        }
    };
    this.each(function () {
        var _this = this;
        var imgLoad = new Image();
        $(imgLoad)
            .load(function () {
                completeLoading(_this, true);
            })
            .error(function () {
                completeLoading(_this, false);
            })
            .attr({
                src: _this
            });
    });
};