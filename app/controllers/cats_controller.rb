class CatsController < ApplicationController
  def index
    @cats = { cats: [
      {id: 12, name: "Flip", color: "tabby brown"},
      {id: 72, name: "Bibi", color: "tabby brown"},
      {id: 55, name: "Frank", color: "grey"},
      {id: 97, name: "Ronnie", color: "orange"}
    ]}
  end
end
