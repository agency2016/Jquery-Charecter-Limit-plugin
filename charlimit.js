/**
 * Created by rothy on 1/10/15.
 */



$.fn.charlimit = function(config){

    if(config !== undefined){
        var options = $.extend(
            {'limit':10,'this_class':'mzrlimit','color': 0,'disable':0,'statusshow':1,'statusclass':'status','type':'div' ,'position':'after','text':'char left'},config
        )
    }


    $(this).each(function(){
        $(this).removeAttr('disabled');
        if(options.statusshow == 1){
            var current = $(this).val().length;
            var left = options.limit - current;
            if(left >=0){

                if(options.position == 'after'){

                    $(this).after('<'+options.type+' class="'+options.statusclass+'">'+left+' '+options.text+'</'+options.type+'>');
                } else if(options.position == 'before'){
                    $(this).before('<'+options.type+' class="'+options.statusclass+'">'+left+' '+options.text+'</'+options.type+'>');
                }
            }
            else{

                if(options.position == 'after'){

                    $(this).after('<'+options.type+' class="'+options.statusclass+'">'+'0'+' '+options.text+'</'+options.type+'>');
                } else if(options.position == 'before'){
                    $(this).before('<'+options.type+' class="'+options.statusclass+'">'+'0'+' '+options.text+'</'+options.type+'>');
                }

                if(options.disable == 1){
                    $(this).attr('disabled' ,'disabled');
                }
                if(options.color == 1){
                    $(this).css('background' ,'#dd00');
                }
                var currentva = $(this).val();
                var value = currentva.substring(0, options.limit);
                $(this).val(value);
            }

        }
        $(this).addClass(options.this_class);
        $(this).on('input',function(){

            var current = $(this).val().length;
            var currentva = $(this).val();
            var left = options.limit - current;
           // alert( left);
            if(left >=0){
                if(options.position == 'after'){
                    $(this).next('.'+options.statusclass).text(left+' '+options.text);
                }
                else if(options.position == 'before'){
                    $(this).prev('.'+options.statusclass).text(left+' '+options.text);
                }
                
            }
            else{
                    var value = currentva.substring(0, options.limit);
                    $(this).val(value);
                if(options.position == 'after'){
                        $(this).next('.'+options.statusclass).text( '0'+' '+options.text);
                    }
                    else if(options.position == 'before'){
                        $(this).prev('.'+options.statusclass).text('0'+' '+options.text);
                    }

                if(options.disable == 1){
                    $(this).attr('disabled' ,'disabled');
                }
                if(options.color == 1){
                    $(this).css('background' ,'#dd00');
                }

            }

        });


    });

};
