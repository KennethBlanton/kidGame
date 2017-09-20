console.log("Hello World from main.js!");
$('.paper').on('click', function(){
	$('.paper').toggleClass('move');
})


$('.play').click(function(){
	hide();
	$('.background').addClass('active');
	$('.graph').addClass('active');
})

$('.veggies').click(function() {
	console.log('veggies');
	$('.veggies').addClass('selected');
	$('.chart > .next').addClass('active');
})

$('.chart > .next').click(function() {
	hide();
	$('.chart > .next').removeClass('active');
	$('.veggies').removeClass('selected');
	$('.recipe').addClass('active');
	$('.fridge').addClass('active');
})


$('.overlay > .next').click(function() {
	hide();
	$('.background').addClass('active');
	$('.landing').addClass('active');
})


function hide() {
	var clear = $('body').children();
	for (var i = clear.length - 1; i >= 0; i--) {
		console.log('fire');
		$(clear[i]).removeClass('active')
	}
}











var recipe = [
	'cucumber',
	'carrot',
	'cheese',
	'lettuce',
	'tomato'
]
var draggable = $('.draggable');
for (var i = draggable.length - 1; i >= 0; i--) {
	$(draggable[i]).draggable();
}
function checkForMatch(ui) {
	if(recipe.length) {
	    for (var i = recipe.length - 1; i >= 0; i--) {
	      	if($(ui.draggable).parent().hasClass(recipe[i])) {
	      			
	      		$('.foods > .' +recipe[i]).addClass('success');
	      		// console.log(recipe[i])
	      		return recipe[i];
	      	} 
	    }
    } 
		
}
 $( ".bowl" ).droppable({
      drop: function( event, ui ) {
      	var answer = checkForMatch(ui);
      	if(answer) {
      		console.log(answer);
      		recipe.splice( $.inArray(answer, recipe), 1 );
      		if(recipe.length) {
	      		phrases('.nice');
      		} else {
      			$('.overlay').addClass('active');
      		}
      	} else {
      			
	      		phrases('.nope');
	      		console.log('not a match');
      	}
      	console.log(ui.draggable);
        $(ui.draggable).remove()
         
      }
    });


function phrases(phrase) {
	$(phrase).addClass('active');
      		setTimeout(function() {
      			$(phrase).removeClass('active');
      		}, 1000);
}


function initialSizeGame() {
	if(window.innerWidth >= 500) {

		var fridgeWidth = $('.fridge-bg').width();
		var width = window.innerWidth;
		var foodArea =  width-fridgeWidth;
		var counter = 0;
		var foodArray = $('.food');
		if(fridgeWidth >= width*.6 ) {
			$('.paper').addClass('hidden');

		} else {
			$('.paper').removeClass('hidden');
		}
		for (var i = foodArray.length - 1; i >= 0; i--) {
			$(foodArray[i]).css('right', (((width-foodArea)/4)*counter)  + 100);
			if(counter <3) {
				counter++;
			} else {
				counter = 0;
			}
		}
	} else {
		$('.paper').addClass('hidden')
	}
}


initialSizeGame();





$(window).on('resize', function() {
	console.log('running');
	initialSizeGame();
})
$('.food').length