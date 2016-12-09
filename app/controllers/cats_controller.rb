class CatsController < ApplicationController
  def index
    @cats = { cats: ["Flip", "Bibi", "Frank", "Ronnie"]  }
  end
end
