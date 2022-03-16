class PlayController < ApplicationController

  def index
  	render :layout => "play"
  end

  def edit
render :layout => false
  end
end
