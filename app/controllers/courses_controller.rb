class CoursesController < ApplicationController
    skip_forgery_protection
  before_action :authenticate_user!, except: [:viewlink,]
  before_action :set_course, only: %i[ show edit  destroy chipsettiteledit ]

  # GET /courses or /courses.json
  def index
    @courses = Course.all
  end

  def setpreview
    Rails.logger.info(params[:id])
    @course=Course.where("urlextern='#{params[:id]}'").first
    @courseitems=@course.courseitems.order("position")
    
    Rails.logger.info @course.title
    respond_to do |format|
      format.html
      format.json
    end
  end

  def contentchipset
      if(params.has_key?(:del)) 
        # lernchip löschen
        lc=Lernchip.where("urlalias='#{params[:id]}'").first
        lernchipid=lc.id
        lc.destroy
        lcitem=Courseitem.where("lernchip_id=#{lernchipid}").first
        lcitem.destroy
      end
    lernchips=Courseitem.where("course_id=#{params[:chipset_id]}").order("position")

    respond_to do |format|
        format.html {render :partial => "chipsetcontent", :locals => {:lernchips => lernchips}}
    end
  end

 def chipsettiteledit
   respond_to do |format|
        format.html {render :partial => "chipsettitel", :locals => {:chipset => chipset}}
    end
 end 

 def chipsetorder
  require 'json' 
 
     ids= params[:ids]
     array = JSON.parse(ids)
    x=0
    for id in array

       Rails.logger.info id
       Rails.logger.info x
       x=x+1
       c=Courseitem.where("lernchip_id=#{id}").first
       c.position=x
       c.save
    end
  end

  def viewlink
    Rails.logger.info(params[:id])
    @course=Course.where("urlextern='#{params[:id]}'").first
    
    Rails.logger.info @course.title
    respond_to do |format|
        format.html {render :partial => "courses/setpreview", :locals => {:@course => @course}}
    end

  end

def modalchipset
    respond_to do |format|
        format.html {render :partial => "modalcreate"}
      end
 end

 def chipsetlink
        urlextern=params[:id]
      @chipset=Course.where("urlextern='#{urlextern}'").first
      respond_to do |format|
        format.html {render :partial => "courses/chipsetlink", :locals => {:chipset => @chipset}}
      end
 end
  def deletecourse

      @course=Course.where("urlextern='#{params[:id]}'").first
      @folder=@course.folder_id
      @course.destroy
      @lernchips=Lernchip.where("user_id=#{current_user.id} and folder_id=#{session[:folder_id]}").order("title").limit(12)
      @chipsets=Course.where("user_id=#{current_user.id} and folder_id=#{session[:folder_id]}").order("title").limit(12)
      Rails.logger.info session[:folder_id]
      foldername="Persönlicher Ordner"
      if session[:folder_id]!='0'
        folder=Folder.find(session[:folder_id])
        foldername=folder.name
      end
      respond_to do |format|
        format.html {render :partial => "lernchips/foldercontent", :locals => {:maxzahl => 11, :lernchips => @lernchips, :chipsets => @chipsets, :foldername => foldername}}
      end

  end
  #
  def lcshow
    respond_to do |format|
      lernchip=Lernchip.find(params[:id])
      format.html {render :partial => "lcshow", :locals => {:lernchip => lernchip}}

      format.json
    end
  end

  # GET /courses/1 or /courses/1.json
  def show
   respond_to do |format|
        format.html {render :partial => "chipsettitel", :locals => {:chipset => @course}}
    end

  end

  # GET /courses/new
  def new
    @course = Course.new
  end

  # GET /courses/1/edit
  def edit
       respond_to do |format|
        format.html {render :partial => "edit", :locals => {:chipset => @course}}
    end
  end

  # POST /courses or /courses.json
  def create
    course = Course.new(course_params)
    course.user_id=current_user.id
      o = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
      course.urlextern = (0...10).map { o[rand(o.length)] }.join
      course.ltisecret = (0...10).map { o[rand(o.length)] }.join
      course.folder_id=session[:folder_id]
      course.title=params[:title]
      foldername="Persönlicher Ordner"
      if session[:folder_id]!='0'
        folder=Folder.find(session[:folder_id])
        foldername=folder.name
      end
      if course.save
          Rails.logger.info "Kurs gespeichert"
          @lernchips=Lernchip.where("user_id=#{current_user.id} and folder_id=#{session[:folder_id]}").order("title").limit(12)
          @chipsets=Course.where("user_id=#{current_user.id} and folder_id=#{session[:folder_id]}").order("title").limit(12)
          respond_to do |format|
        #format.html { redirect_to @course, notice: "Course was successfully created." }

        format.html {render :partial => "lernchips/foldercontent", :locals => {:maxzahl => 11, :lernchips => @lernchips, :chipsets => @chipsets, :foldername => foldername}}
      end
    end
  end

  # PATCH/PUT /courses/1 or /courses/1.json
  def update
    Rails.logger.info params[:id]
    c=Course.find(params[:id])
    titel=params[:title]
    c.title=titel
    Rails.logger.info c.urlextern
    if c.save
      respond_to do |format|
        format.html {render :partial => "chipsettitel", :locals => {:chipset => c} }
      end
    end      
  end

  # DELETE /courses/1 or /courses/1.json
  def destroy
    @course.destroy
    respond_to do |format|
      format.html { redirect_to courses_url, notice: "Course was successfully destroyed." }
      format.json { head :no_content }
    end
  end




  private
    # Use callbacks to share common setup or constraints between actions.
    def set_course
      @course = Course.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def course_params

    end
end
