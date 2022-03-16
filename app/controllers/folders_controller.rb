class FoldersController < ApplicationController
      skip_forgery_protection
  before_action :set_folder, only: %i[ show edit update destroy ]

  # Zuordnung der Ordner (organisation_id):
  #   0 = Organisations Ornder
  #   1 = Persönlicher Ordner
  #   x = id des Organisations Ordner

  # GET /folders or /folders.json
  def index
    @folders = Folder.all
  end

  # GET /folders/1 or /folders/1.json
  def show
       respond_to do |format|
        format.html {render :partial => "show", :locals => {:folder => @folder}}
    end
  end

  # GET /folders/new
  def new
    @folder = Folder.new
  end

  # GET /folders/1/edit
  def edit
    respond_to do |format|
        format.html {render :partial => "edit", :locals => {:folder => @folder}}
    end
  end

  # POST /folders or /folders.json
def modal
    respond_to do |format|
        format.html {render :partial => "modalcreate"}
      end
 end

  def create
    current_folder=Folder.find(session[:folder_id])

    @folder = Folder.new
    @folder.name = params[:name]
    @folder.parent_id=1
    Rails.logger.info current_folder.organisation_id
    if current_folder.organisation_id!=1
      @folder.parent_id=current_user.organisation.folder_id                     # 
    end
    @folder.user_id=current_user.id
    if @folder.parent_id==1
      @folder.organisation_id=1
    else
      @folder.organisation_id=current_user.organisation_id
    end
    @folder.save
    Rails.logger.info @folder
    respond_to do |format|
      format.html {redirect_to lernchips_url, notice: "Order wurde  erstellt"}
    end
  end

  # PATCH/PUT /folders/1 or /folders/1.json


  def update
    Rails.logger.info params[:id]
    c=Folder.find(params[:id])
    titel=params[:title]
    c.name=titel
    if c.save
      respond_to do |format|
        format.html {render :partial => "show", :locals => {:folder => c} }
      end
    end      
  end


  # DELETE /folders/1 or /folders/1.json
  def destroy
    @folder.destroy
    session[:folder_id]=1
    respond_to do |format|
      format.html { redirect_to lernchips_url, notice: "Der Order wurde gelöscht" }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_folder
        @folder = Folder.find(params[:id])
       session[:current_folder_id]=params[:id]

    end

    # Only allow a list of trusted parameters through.
    def folder_params
      params.require(:folder).permit(:name, :parent_id, :user_id)
    end
end
