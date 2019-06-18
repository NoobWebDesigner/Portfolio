import emergence from 'emergence.js';
var WebFont = require('webfontloader');

//スクロールジャンクを防ぐ
document.addEventListener('touchstart', function () { }, { passive: true });

//fonts

window.WebFontConfig = {
  google: { families: ['Noto+Sans+JP:300,400,500'] },
  typekit: { id: 'zgt5zkk' },
  custom: {
    families: ['YakuHanJP_Noto'],
    urls: ['https://cdn.jsdelivr.net/npm/yakuhanjp@3.2.0/dist/css/yakuhanjp-noto.min.css']
  },
  active: function () {
    sessionStorage.fonts = true;
  }
};

(function () {
  var wf = document.createElement('script');
  wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})();

//toggleClass
const toggleClass = function (node, className) {
  let classNames = className.trim().split(/\s+/),
    nodeClass = (node.getAttribute('class') || '').trim(),
    nodeClassNames = nodeClass.split(/\s+/),
    i = classNames.length;

  while (i--) {
    let index = nodeClassNames.indexOf(classNames[i]);
    if (~index) {
      classNames.splice(i, 1);
      nodeClassNames.splice(index, 1);
    }
  }
  nodeClassNames = nodeClassNames.concat(classNames);
  node.setAttribute('class', nodeClassNames.join(' '));
};

//hasClass
const hasClass = (node, className) => {
  if (node.classList) {
    return node.classList.contains(className.trim());
  }
  return new RegExp('(^| )' + className + '( |$)', 'g').test(node.className.trim());
};

//sticky
const stickyHeight = () => {
  const headerHeight = document.getElementById('header').offsetHeight + 'px';
  document.getElementById('sticky').style.height = headerHeight;
  document.getElementById('gNav').style.top = headerHeight;
}
stickyHeight();

//menu
const spMenu = () => {
  toggleClass(document.getElementById('sp-menu').querySelector('i'), 'fa-times');
  toggleClass(document.getElementById('gNav'), 'isActive');
}
document.getElementById('sp-menu').addEventListener('click', function () {
  spMenu();
}, false);

const removeIsActive = () => {
  document.getElementById('gNav').classList.remove('isActive');
  document.getElementById('sp-menu').querySelector('i').classList.remove('fa-times');
}

//resize
let _resizeEvent;
window.onresize = function () {
  clearTimeout(_resizeEvent);
  _resizeEvent = setTimeout(function () {
    stickyHeight();
    removeIsActive();
  }, 50);
}

//chart
if (document.getElementById('about')) {
  const chartFunc = (id, blue, gray) => {
    const chartjs = new Chart(id, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [blue, gray],
          backgroundColor: [
            'rgba(82, 202, 255, 1)',
            'rgba(206, 206, 206, 1)'
          ],
          borderWidth: 0
        }]
      },
      options: {
        tooltips: {
          enabled: false
        },
        hover: {
          mode: null
        },
        cutoutPercentage: 75,
        plugins: {
          deferred: {
            yOffset: '80%',
            delay: 200
          }
        }
      }
    });
  }
  const ctx_html = document.getElementsByClassName("per-html");
  chartFunc(ctx_html, 11, 1);
  const ctx_css = document.getElementsByClassName("per-css");
  chartFunc(ctx_css, 11, 1);
  const ctx_sass = document.getElementsByClassName("per-sass");
  chartFunc(ctx_sass, 10, 2);
  const ctx_ps = document.getElementsByClassName("per-ps");
  chartFunc(ctx_ps, 10, 2);
  const ctx_dw = document.getElementsByClassName("per-dw");
  chartFunc(ctx_dw, 10, 2);
  const ctx_ai = document.getElementsByClassName("per-ai");
  chartFunc(ctx_ai, 9, 3);
  const ctx_pug = document.getElementsByClassName("per-pug");
  chartFunc(ctx_pug, 9, 3);
  const ctx_git = document.getElementsByClassName("per-git");
  chartFunc(ctx_git, 8, 4);
  const ctx_lm = document.getElementsByClassName("per-lm");
  chartFunc(ctx_lm, 7, 5);
  const ctx_npm = document.getElementsByClassName("per-npm");
  chartFunc(ctx_npm, 7, 5);
  const ctx_gulp = document.getElementsByClassName("per-gulp");
  chartFunc(ctx_gulp, 7, 5);
  const ctx_jq = document.getElementsByClassName("per-jq");
  chartFunc(ctx_jq, 6, 6);
  const ctx_xd = document.getElementsByClassName("per-xd");
  chartFunc(ctx_xd, 6, 6);
  const ctx_pr = document.getElementsByClassName("per-pr");
  chartFunc(ctx_pr, 6, 6);
  const ctx_ae = document.getElementsByClassName("per-ae");
  chartFunc(ctx_ae, 3, 9);
  const ctx_js = document.getElementsByClassName("per-js");
  chartFunc(ctx_js, 3, 9);

}

// pagetop
const pageTopBtn = document.getElementById('pagetop');
pageTopBtn.addEventListener("click", function foo() {
  const nowY = window.pageYOffset;
  window.scrollTo(0, Math.floor(nowY * 0.8));
  if (nowY > 0) {
    window.setTimeout(foo, 10);
  }
});

// pagetop をスクロールしてから表示
window.addEventListener('scroll', () => {
  //高さを取得して表示
  let scrollTop = document.scrollingElement.scrollTop;
  if (scrollTop > 100) {
    document.getElementById('pagetop').classList.add('show');
  } else if (scrollTop < 100) {
    document.getElementById('pagetop').classList.remove('show');
  }
}, false);

//emergence
emergence.init({
  offsetTop: 100,
  offsetBottom: 100
});