var upcoming = {event1:['event1','time','image2.jpg','https://www.google.com'], event2:['event2','time','image1.jpg','wwww.facebook.com'], event3:['event1','time','image2.jpg','https://www.google.com'], event4:['event2','time','image1.jpg','wwww.facebook.com']};
var noevents = true;

for (key in upcoming){
    xa = upcoming[key];
    var events = xa[0];
    var time = xa[1];
    var image = xa[2];
    var link = xa[3];
    var x = '<div class="col-sm-6 col-xs-12 col-md-3"><div class="card mb-3"><div class="card-body"><h5 class="card-title">'+events+'</h5><h6 class="card-subtitle text-muted">'+time+'</h6></div><img style="width: 100%; display:block;" src="'+image+'" alt="Card image"><div class="card-body"><a href="'+link+'" class="btn btn-primary btn-xs card-link">Event link</a></div></div></div>';
    $( ".check" ).append(x);
    noevents = false;
}


if (noevents){
	var x = '<div class="container justify"><h4 class="heading">No upcoming Events</h4></div>';
	$( ".check" ).append(x);
}

