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

function Person(first, last, age, gender, interests) {
    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        // First define a string, and make it equal to the part of
        // the bio that we know will always be the same.
        var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
        // define a variable that will contain the pronoun part of
        // the second sentence
        var pronoun;

        // check what the value of gender is, and set pronoun
        // to an appropriate value in each case
        if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
            pronoun = 'He likes ';
        } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
            pronoun = 'She likes ';
        } else {
            pronoun = 'They like ';
        }

        // add the pronoun string on to the end of the main string
        string += pronoun;

        // use another conditional to structure the last part of the
        // second sentence depending on whether the number of interests
        // is 1, 2, or 3
        if (this.interests.length === 1) {
            string += this.interests[0] + '.';
        } else if (this.interests.length === 2) {
            string += this.interests[0] + ' and ' + this.interests[1] + '.';
        } else {
            // if there are more than 2 interests, we loop through them
            // all, adding each one to the main string followed by a comma,
            // except for the last one, which needs an and & a full stop
            for (var i = 0; i < this.interests.length; i++) {
                if (i === this.interests.length - 1) {
                    string += 'and ' + this.interests[i] + '.';
                } else {
                    string += this.interests[i] + ', ';
                }
            }
        }

        // finally, with the string built, we alert() it
        alert(string);
    };
    this.greeting = function () {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
};

let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);
console.log(person1, Person.prototype, Object.prototype);

var person2 = Object.create(person1);
console.log(person2.__proto__);


