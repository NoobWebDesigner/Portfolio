var Chart = require('chart.js');

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
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [9, 1],
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
    }
  }
});