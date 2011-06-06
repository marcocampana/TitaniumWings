class WingsController
  constructor: (params) ->
    @win = Ti.UI.createWindow(params)

  set_view_class: (@view_class_name) ->

  render: (params) ->
    # TODO check if view_class_name is set or throw an expection
    new @view_class_name.render(params)