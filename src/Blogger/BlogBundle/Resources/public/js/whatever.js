//Hook up flickr feed

$(document).ready(function() {
  $('div.flickr').flickrush({
    limit:10,
    id:'44499772@N06',
    random:true
  });
});

//Hook up the flexslider

$(document).ready(function() {
	$('.flexslider').flexslider({
		directionNav: false,
	});
});
