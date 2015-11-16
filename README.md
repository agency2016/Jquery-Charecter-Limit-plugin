#CharLimit Jquery plugin
This is a demo page for charlimit jquery plugin.You can restrict the number of character input in
 any textarea or input box.This plugin checks not only input by keyboard but
 also pasting any text by mouse it shows remaining char counting (optional) .There are more settings

##Options

        limit : 10 (number of input character),
       'this_class':'mzrlimit' (class added in the input box or textarea )
       'color': 0, (add red color to input box when count 0 , value 0/1)
       'disable':0, (make disable when input limit achieved  value : 0/1)
       'statusshow':1, (show hide remaining char count , value :0/1)
       'statusclass':'status',(class of status text)
       'type':'div' ,(example : div , span . status will be shown in this element )
       'position':'after',(value : before/after)
       'text':'char left' ( text after remaining char count  . example : 10 char left / 4 letter more ..)


##Examples
  $('.charlimit2').charlimit()
  $('.charlimit2').charlimit({
        'limit':15,
        'this_class':'democlass',
        'color':1,
        'disable':1,
        'position':'before'
    });

