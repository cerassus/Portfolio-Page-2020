const loader = new Waypoint({
    element: document.querySelector('#loader'),
    handler: function () {
        setTimeout(() => {
            this.element.style = "opacity: 0; visibility: hidden;"
        }, 2000);
    },
    offset: '0%'
});
const header_author = new Waypoint({
    element: document.querySelector('.header__author'),
    handler: function () {
        setTimeout(() => {
            this.element.classList.add('anim__header');
        }, 2100);
    },
    offset: '100%'
});
const header_title = new Waypoint({
    element: document.querySelector('.header__title'),
    handler: function () {
        setTimeout(() => {
            this.element.classList.add('anim__header');
        }, 2100);
    },
    offset: '100%'
});
const about_right = new Waypoint({
    element: document.querySelector('.about__right'),
    handler: function () {
        this.element.classList.add('anim__about_me');
    },
    offset: '70%'
});
const about_left = new Waypoint({
    element: document.querySelector('.about__left'),
    handler: function () {
        this.element.classList.add('anim__about_me');
    },
    offset: '70%'
});
const hobbies = new Waypoint({
    element: document.querySelector('.hobbies'),
    handler: function () {
        this.element.classList.add('anim__hobbies');
    },
    offset: '70%'
});
const hobby1 = new Waypoint({
    element: document.querySelector('.hobby:nth-of-type(1)'),
    handler: function () {
        setTimeout(() => {
            this.element.classList.add('anim__hobby');
        }, 600)
    },
    offset: '70%'
});
const hobby2 = new Waypoint({
    element: document.querySelector('.hobby:nth-of-type(2)'),
    handler: function () {
        setTimeout(() => {
            this.element.classList.add('anim__hobby');
        }, 600)
    },
    offset: '70%'
});
const hobby3 = new Waypoint({
    element: document.querySelector('.hobby:nth-of-type(3)'),
    handler: function () {
        setTimeout(() => {
            this.element.classList.add('anim__hobby');
        }, 600)
    },
    offset: '80%'
});
const workstation_right = new Waypoint({
    element: document.querySelector('.workstation__right'),
    handler: function () {
        this.element.classList.add('anim__about_me');
    },
    offset: '70%'
});
const workstation_left = new Waypoint({
    element: document.querySelector('.workstation__left'),
    handler: function () {
        this.element.classList.add('anim__about_me') 
    },
    offset: '70%'
});
const career1a = new Waypoint({
    element: document.querySelector('.career__block:nth-of-type(1) .career__block__title'),
    handler: function () {
        this.element.classList.add('anim__about_me') 
    },
    offset: '70%'
});
const career1 = new Waypoint({
    element: document.querySelector('.career__block:first-of-type'),
    handler: function () {
        this.element.classList.add('anim__visible') 
    },
    offset: '70%'
});
const career2a = new Waypoint({
    element: document.querySelector('.career__block:nth-of-type(2) .career__block__title'),
    handler: function () {
        this.element.classList.add('anim__about_me') 
    },
    offset: '70%'
});
const career2 = new Waypoint({
    element: document.querySelector('.career__block:nth-of-type(2)'),

    handler: function () {
        this.element.classList.add('anim__visible') 
    },
    offset: '70%'
});
const career3a = new Waypoint({
    element: document.querySelector('.career__block:nth-of-type(3) .career__block__title'),
    handler: function () {
        this.element.classList.add('anim__about_me') 
    },
    offset: '70%'
});
const career3 = new Waypoint({
    element: document.querySelector('.career__block:nth-of-type(3)'),
    handler: function () {
        this.element.classList.add('anim__visible') 
    },
    offset: '70%'
});
const projects = new Waypoint({
    element: document.querySelector('.projects div'),
    handler: function () {
        this.element.classList.add('anim__visible') 
    },
    offset: '70%'
});
const projects1 = new Waypoint({
    element: document.querySelector('.projects p'),
    handler: function () {
        this.element.classList.add('anim__visible') 
    },
    offset: '70%'
});
const projects2 = new Waypoint({
    element: document.querySelector('.projects__container'),
    handler: function () {
        this.element.classList.add('anim__visible') 
    },
    offset: '70%'
});
const projects3 = new Waypoint({
    element: document.querySelector('.projects__resume__cv'),
    handler: function () {
        this.element.classList.add('anim__about_me') 
    },
    offset: '70%'
});
const projects4 = new Waypoint({
    element: document.querySelector('.projects__resume__certifications'),
    handler: function () {
        this.element.classList.add('anim__about_me') 
    },
    offset: '70%'
});
const contact = new Waypoint({
    element: document.querySelector('.contact'),
    handler: function () {
        this.element.classList.add('anim__visible') 
    },
    offset: '70%'
});
const footer = new Waypoint({
    element: document.querySelector('.footer'),
    handler: function () {
        this.element.classList.add('anim__footer') 
    },
    offset: '100%'
});
const INPUT_NAME = document.getElementById('name');
const INPUT_MAIL = document.getElementById('mail');
const INPUT_AREA = document.getElementById('area');
const FORM = document.getElementById('form');
const INPUT_NAME_HINT = document.querySelector(".form__hint-name");
const INPUT_MAIL_HINT = document.querySelector(".form__hint-mail");
const INPUT_AREA_HINT = document.querySelector(".form__hint-area");
const ALERT_EMAIL_YES = document.getElementById("checkbox_email_success");
const ALERT_EMAIL_NO = document.getElementById("checkbox_email_fail");
const ALERT_EMAIL_SUCCESS_CLOSE = document.getElementById('alert_email_success_close');
const ALERT_EMAIL_FAIL_CLOSE = document.getElementById('alert_email_fail_close');

let input_name = false;
let input_mail = false;
let input_text = false;

FORM.addEventListener('submit', function(event) {
    event.preventDefault();
    if(!input_name || !input_mail || !input_text) {
        alert("Typing Error!");
        console.log(event.target);
    } else {
        emailjs.send("cerassus.shared", "cerassus_template_0", {
            from_name: input_name,
            message: input_text,
            reply_to: input_mail,
        },"user_W8b53hqHp85rSGjVwF3x3").then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                ALERT_EMAIL_YES.checked = true;
            }, function(error) {
                console.log('FAILED...', error);
                ALERT_EMAIL_NO.checked = true;
            });
    }
});

INPUT_NAME.addEventListener('keyup', function() {
    if (/\p{L}{3,}/iu.test(this.value)) {
        input_name = this.value;
        this.style = "box-shadow: 0 2px 4px $color-secondary; border-color: #1f707b;";
        INPUT_NAME_HINT.style = "opacity: 0";
    } else {
        input_name = false;
        if(this.value.length === 0) {
            this.style = "box-shadow: 0 2px 4px $color-secondary; border-color: #1f707b;";
            INPUT_NAME_HINT.style = "opacity: 0";
        } else {
            this.style = "border-color: red";
            INPUT_NAME_HINT.style = "opacity: 1";
        }
    }
})

INPUT_MAIL.addEventListener('keyup', function() {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.value)) {
        input_mail = this.value;
        this.style = "box-shadow: 0 2px 4px $color-secondary; border-color: #1f707b;";
        INPUT_MAIL_HINT.style = "opacity: 0";
    } else {
        input_mail = false;
        if (this.value.length === 0) {
            this.style = "box-shadow: 0 2px 4px $color-secondary; border-color: #1f707b;";
            INPUT_MAIL_HINT.style = "opacity: 0";
        } else {
            this.style = "border-color: red";
            INPUT_MAIL_HINT.style = "opacity: 1";
        }        
    }
})

INPUT_AREA.addEventListener('keyup', function() {
    if (/\p{L}{3,}/iu.test(this.value)) {
        input_text = this.value;
        this.style = "box-shadow: 0 2px 4px $color-secondary; border-color: #1f707b;";
        INPUT_AREA_HINT.style = "opacity: 0";
    } else {
        input_text = false;
        if(this.value.length === 0) {
            this.style = "box-shadow: 0 2px 4px $color-secondary; border-color: #1f707b;";
            INPUT_AREA_HINT.style = "opacity: 0";
        } else {
            this.style = "border-color: red";
            INPUT_AREA_HINT.style = "opacity: 1";
        }
    }
})

ALERT_EMAIL_SUCCESS_CLOSE.addEventListener('click', () => {
    ALERT_EMAIL_YES.checked = false;
})

ALERT_EMAIL_FAIL_CLOSE.addEventListener('click', () => {
    ALERT_EMAIL_NO.checked = false;
})