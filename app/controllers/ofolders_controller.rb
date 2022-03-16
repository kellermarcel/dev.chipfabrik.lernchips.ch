class OfoldersController < ApplicationController
  before_action :set_ofolder, only: %i[ show edit update destroy ]

  # GET /ofolders or /ofolders.json
  def index
    @ofolders = Ofolder.all
  end

  # GET /ofolders/1 or /ofolders/1.json
  def show
  end

  # GET /ofolders/new
  def new
    @ofolder = Ofolder.new
  end

  # GET /ofolders/1/edit
  def edit
  end

  # POST /ofolders or /ofolders.json
  def create
    @ofolder = Ofolder.new(ofolder_params)

    respond_to do |format|
      if @ofolder.save
        format.html { redirect_to @ofolder, notice: "Ofolder was successfully created." }
        format.json { render :show, status: :created, location: @ofolder }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @ofolder.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ofolders/1 or /ofolders/1.json
  def update
    respond_to do |format|
      if @ofolder.update(ofolder_params)
        format.html { redirect_to @ofolder, notice: "Ofolder was successfully updated." }
        format.json { render :show, status: :ok, location: @ofolder }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @ofolder.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ofolders/1 or /ofolders/1.json
  def destroy
    @ofolder.destroy
    respond_to do |format|
      format.html { redirect_to ofolders_url, notice: "Ofolder was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ofolder
      @ofolder = Ofolder.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ofolder_params
      params.require(:ofolder).permit(:name, :parent_id, :organisation_id)
    end
end
