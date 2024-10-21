/* Type writing java script code */
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

function start_ani() {
   const ele = document.querySelector('#animate-r');
   ele.style.animationPlayState = 'running';

}
function stop_ani() {
   const ele = document.querySelector('#animate-r');
   ele.style.animationPlayState = 'paused'; 
}


/* Email service for enquery */
(function(){
    emailjs.init("dJxVgUhitl1ycDPUP"); // Replace with your public key
})();

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const templateParams = {
        from_name: document.getElementById("from_name").value,
        from_email: document.getElementById("from_email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_ye6wxih", "template_rw1kffj", templateParams)
        .then(function(response) {
            document.getElementById("form-response").innerHTML = "Message sent successfully!";
            document.getElementById("myForm").reset();
        }, function(error) {
            document.getElementById("form-response").innerHTML = "Error sending message. Please try again.";
        });
});

function showsidebar() {
    const sidebar = document.querySelector('.nav_itemss');
    sidebar.style.display = 'flex';
}
function closesidebar() {
    const sidebar = document.querySelector('.nav_itemss');
    sidebar.style.display = 'none';
}
/* Contact form script */
document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            const formData = new FormData(this); // Create FormData object

            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    document.getElementById("form-response").innerHTML = "Message sent successfully!";
                    this.reset(); // Clear form
                } else {
                    document.getElementById("form-response").innerHTML = "Error sending message. Please try again.";
                }
            }).catch(error => {
                document.getElementById("form-response").innerHTML = "Error sending message. Please try again.";
            });
        });


