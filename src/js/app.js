import emergence from 'emergence.js';

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
  const ctx = document.getElementsByClassName("per-90");
  chartFunc(ctx, 9, 1);
  const ctx2 = document.getElementsByClassName("per-80");
  chartFunc(ctx2, 8, 2);
  const ctx3 = document.getElementsByClassName("per-70");
  chartFunc(ctx3, 7, 3);
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