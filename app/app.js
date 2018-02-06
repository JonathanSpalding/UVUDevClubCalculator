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
            //Change the back ground color to a random color using the random color function
            $('body').css('background-color', getRandomColor);
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