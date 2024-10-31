let startYear = 500;
let endYear = 1000;
let initLimit = 10;
const timeline = document.getElementById('timeline');
const container_main = document.getElementById('main-container');

container_main.scroll(100, 0);



container_main.addEventListener('scroll', () => {
    //console.log('Moviendo scroll');
    //console.log('Left, Top, H, W', container_main.scrollLeft, container_main.scrollTop, container_main.scrollHeight, container_main.scrollWidth);
    //console.log('clientWidth:', container_main.clientWidth, 'clientHeight:', container_main.clientHeight, 'clientLeft', container_main.clientLeft, 'clientTop', container_main.clientTop);
    console.log(getValueFirstChildOfTimeLine());
    if (container_main.scrollLeft <= 10) {
        //console.log('Margen Izquierdo');
        getYears(getValueFirstChildOfTimeLine() - initLimit, getValueFirstChildOfTimeLine() - 1, true);
        container_main.scroll(100, 0);
    }
    if (container_main.scrollTop === 0) {
        //console.log('Margen Superior');
    }
    if (container_main.scrollLeft === container_main.scrollWidth - container_main.clientWidth) {
        // console.log('Margen derecho');
        getYears(startYear, startYear + initLimit);
    }
    if (container_main.scrollTop === container_main.scrollHeight - container_main.clientHeight) {
        //console.log('Margen Inferior');
    }
});

getYears(startYear, startYear + initLimit);

async function getYears(start, end, prepend = false) {
    console.log(start, end);

    try {
        const response = await fetch(`/timeline/getYears?start=${start}&end=${end}`);
        const years = await response.json();
        years.forEach(year => {
            const div_year = document.createElement('div');
            div_year.classList = 'div-y';
            div_year.textContent = year;

            if (prepend) {
                timeline.insertBefore(div_year, getFirstChildOfTimeLine().nextSibling);
                startYear = start;

            } else {
                timeline.appendChild(div_year);
                startYear += (initLimit + 1);
            }

        });


    } catch (error) {
        console.log('Metodo getYears(), error:', error);
    }
}

function getFirstChildOfTimeLine() {
    return timeline.firstChild.nextSibling;
}

function getValueFirstChildOfTimeLine() {
    return getFirstChildOfTimeLine().textContent;
}

function createElement(type, className, _id, textContent) {
    const e = document.createElement(type);
    e.classList = className;
    e.id = _id;
    e.textContent = textContent;
    return e;
}