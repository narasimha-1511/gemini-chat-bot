const m = document.getElementById('chat');
const i = document.getElementById('message-input');
const b = document.getElementById('send');

function a(t, u = false) {
    let e = document.createElement('div');
    e.className = 'message ' + (u ? 'user-message' : 'bot-message');
    e.textContent = t;
    m.appendChild(e);
    m.scrollTop = m.scrollHeight;
}

function clicked() {
    let t = i.value.trim();
    if (t) {
        a(t, true);

        // here i will send the message to 
        //  the server and get the respones

        fetch('/api/gemini/chat' , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({message: t})
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            a(data.message);
        });

        a("Hey this is demo goingd hehehe")
        
    }
}