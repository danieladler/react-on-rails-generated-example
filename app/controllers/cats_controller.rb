class CatsController < ApplicationController
  def index
    @props = { cats: [
      {id: 12, name: "Flip", color: "tabby brown", treats: 1},
      {id: 72, name: "Bibi", color: "tabby brown", treats: 3},
      {id: 55, name: "Frank", color: "grey", treats: 0},
      {id: 97, name: "Ronnie", color: "orange", treats: 99}
    ]}
  end
end
