var inputLabel = document.getElementById('inputLabel');
 
function pushBtn(obj) 
{
    var pushed = obj.innerHTML;
     
    if (pushed == '=')
    {
        // Calculate
        inputLabel.innerHTML = eval(inputLabel.innerHTML);
         
    }
     else if (pushed == 'AC')
    {
        // All Clear
        inputLabel.innerHTML = '0';
         
    } 
    else 
    {
        if (inputLabel.innerHTML == '0')
         {
            inputLabel.innerHTML = pushed;
             
         }
        else 
        {
            inputLabel.innerHTML += pushed;
             
        }
    }
}

// Kanomi Code
neededkeys = [38,38,40,40,37,39,37,39,66,65], started = false, count = 0;
$(document).keydown(function(e)
 {
    key = e.keyCode;
    if (!started) 
    {
        if (key == 38) 
        {
            started = true;
        }
    }
    if (started) 
    {
        if (neededkeys[count] == key) 
        {
            count++;
        } else {
            reset();
        }
        if (count == 10) 
        {

            reset();
            // Alert message
            alert('Kanomi Code Activated');
            //runs the KanomiCode function, to change background color, and angle. 
            kanomiFunction();
        }
    } else 
    {
        reset();
    }
});
//reset the kanomi code so it can be run more than once
function reset() 
{
    started = false;
    count = 0;
}

//gengerates a random color.
function getRandomColor () 
{
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

//counter to see how many time the function was run
var kanomiCounter = 0;

//Kanomi code fuction that if run multiple times user gets an extra suprise. 
function kanomiFunction()
{
	if(kanomiCounter >= 2)
	{
		$('.calculator').css('transform', 'rotate(30deg)');
	}
	if(kanomiCounter >= 4)
	{
		$('.calculator').css('transform', 'rotate(0deg)');
		kanomiCounter = 0;
	}
	else
	{
		kanomiCounter++;
		$('body').css('background-color', getRandomColor);
	}
}
