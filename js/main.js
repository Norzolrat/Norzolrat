
const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};

if(deviceType() == "desktop") jumbotron();

function jumbotron() {
    let max_scroll_pos = 200;
    document.querySelector("#jumbotron aside").style.marginRight = "0vw";
    window.onscroll = function(){
        current_scroll_pos = window.pageYOffset;
        if(max_scroll_pos < current_scroll_pos) current_scroll_pos = max_scroll_pos;
        document.querySelector("#jumbotron").style.top = (current_scroll_pos / 10) + "vh";
        document.querySelector("#jumbotron aside").style.marginRight = (current_scroll_pos / 4) + "vw";
    }
}