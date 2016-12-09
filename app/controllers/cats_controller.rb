class CatsController < ApplicationController
  def index
    @cats = { cats: [
      {id: 1, name: "Flip"},
      {id: 2, name: "Bibi"},
      {id: 3, name: "Frank"},
      {id: 4, name: "Ronnie"}
    ]}
  end
end
