function hide_all(){
  $(".cat-block").hide();
}
hide_all();
$("#cat1").show();

$("#cat-list a").click(function(){
  console.log("test");
  hide_all();
  var cat_id = $(this).data("id");
  $("#cat" + cat_id).show();
})

$(".cat-block .cat-img").click(function(){
  var count = $(this).closest("div").find(".cat-count span");
  var num =  +count.text(); // parseInt( count.text() )
  count.text( num + 1 );
})
