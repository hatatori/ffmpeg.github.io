function drag(div){
		
		if(div.style.position == "")
			div.style.position="absolute"
		
		div.style.top = div.offsetTop
		div.style.left = div.offsetLeft

		
		k = div['drag'] = false

		div.onmousedown=function(e){
			this['drag'] = true
			k = this
		}

		div.onmouseup=function(e){
			this['drag'] = false
			k = this
		}

		div.onmousemove=function(e){
			x = e.movementX
			y = e.movementY

			if(e.buttons > 0 && k['drag']){
				k.style.top = parseInt(k.style.top)+y+"px"
				k.style.left = parseInt(k.style.left)+x+"px"
			}		

			return false
		}

	}

	drag(cortarTamanho.children[0])