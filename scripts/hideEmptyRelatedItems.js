// HIDE RELATED POSTS WHEN IS EMPTY

$(".related-items .w-dyn-empty")
  .parents(".related-posts")
  .each(function () {
    $(".related-posts").hide();
  });
