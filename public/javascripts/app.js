make$Element = function(options) {

  var options = options || {},
    tag = options['tagName'] || 'div',
    $tag = $('<' + tag + '>')


if ( options['className'] ) { $tag.addClass(options['className']); }
if ( options['id'] ) { $tag.attr('id', options['id']); }

return $tag;
  // if ( options == null ) {
  //   $tag = $('<div>');
  //   console.log(options);
  // } else {
  //   var tagName = options.tagName;
  //   var className = options.className;
  //   var idName = options.id;
  //   // $tag = $('<' + tagName '>');
  //   $tag = $('<p>');
  //   console.log(options);
  // }
  // return $tag;
};



function Model(options) {
  this.options = options || {};
};

Model.prototype.get = function(property) {
  return this.options[property];
}

Model.prototype.set = function(options) {
  for (var opt in options) {
    this.options[opt] = options[opt];
  }
}
