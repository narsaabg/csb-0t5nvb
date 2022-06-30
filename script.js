console.log('Its working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'default.css'
	}

	if(mode == 'blue'){
		document.getElementById('theme-style').href = 'blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = 'green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}

$("#contact-form").submit(function(e){
    e.preventDefault();
    let FormData = $(this).serializeArray();
    let moveForward = true;
    for(var i=0;i<FormData.length;i++){
        if(FormData[i].value == ''){
            moveForward = false;
        }
    }
    if(moveForward){
        $.ajax({
        url:'https://narsaabg.github.io/portfolio/mail.php',
            method:'post',
            data:FormData,
            success:function(response){
                console.log(response);
            }
        })
        return;
    }

    alert('I think you did not form correctly');
    
});
