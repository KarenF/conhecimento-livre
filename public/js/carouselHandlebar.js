function carouselHandlebar() {
  Handlebars.registerHelper('allContents', function() {
    let args = [],
    options = arguments[arguments.length - 1]
    for (let i = 0; i < arguments.length - 1; i++ ) {
      args.push(arguments[i])
    }
    return options.fn(this, {data: options.data, allContents: args})
  })
}
