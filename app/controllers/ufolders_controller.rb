class UfoldersController < ApplicationController
  before_action :set_ufolder, only: %i[ show edit update destroy ]

  # GET /ufolders or /ufolders.json
  def index
    @ufolders = Ufolder.all
  end

  # GET /ufolders/1 or /ufolders/1.json
  def show
  end

  # GET /ufolders/new
  def new
    @ufolder = Ufolder.new
  end

  # GET /ufolders/1/edit
  def edit
  end

  # POST /ufolders or /ufolders.json
  def create
    @ufolder = Ufolder.new(ufolder_params)

    respond_to do |format|
      if @ufolder.save
        format.html { redirect_to @ufolder, notice: "Ufolder was successfully created." }
        format.json { render :show, status: :created, location: @ufolder }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @ufolder.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /ufolders/1 or /ufolders/1.json
  def update
    respond_to do |format|
      if @ufolder.update(ufolder_params)
        format.html { redirect_to @ufolder, notice: "Ufolder was successfully updated." }
        format.json { render :show, status: :ok, location: @ufolder }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @ufolder.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /ufolders/1 or /ufolders/1.json
  def destroy
    @ufolder.destroy
    respond_to do |format|
      format.html { redirect_to ufolders_url, notice: "Ufolder was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ufolder
      @ufolder = Ufolder.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def ufolder_params
      params.require(:ufolder).permit(:name, :parent_id, :user_id)
    end
end
