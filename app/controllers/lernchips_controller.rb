 class LernchipsController < ApplicationController
  skip_forgery_protection

  def htmx
  end
  def answer
       render :html => "Die Antwort ist angekommen"
  end
  def index
    folder_id=session[:folder_id].to_i
    Rails.logger.info "folder_id:"
    Rails.logger.info folder_id
    if folder_id==0
      folder_id=1
    end
      current_folder=Folder.find(folder_id)
      @foldername=current_folder.name
      @folders=Folder.where("parent_id=1 and user_id=#{current_user.id}").order("name")
      @ofolders=Folder.where("parent_id=#{current_user.organisation.folder_id}")
      @lernchips=Lernchip.where("user_id=#{current_user.id} and folder_id=#{session[:folder_id]}").order("title")
      @chipsets=Course.where("user_id=#{current_user.id} and folder_id=#{session[:folder_id]}").order("title")


      # chipset: background-color#e63838;
  end

def pdfshow
  @lernchip=Lernchip.find(params[:id])
     render :layout => false

end

def modallernchipnew
  @lernchip = Lernchip.new
    respond_to do |format|
        format.html {render :partial => "modallernchipnew", :locals => {:lernchip => @lernchip}}
      end
 end

 def modallernchipedit
 	@lernchip=Lernchip.find(params[:lernchip])
    respond_to do |format|
        format.html {render :partial => "modallernchipedit", :locals => {:lernchip => @lernchip}}
      end
 end

 def lernchiplink
        urlalias=params[:id]
      @lernchip=Lernchip.where("urlalias='#{urlalias}'").first
      respond_to do |format|
        format.html {render :partial => "lernchips/lernchiplink", :locals => {:lernchip => @lernchip}}
      end
 end

  def movetofolder
    typ="lernchip"
    Rails.logger.info params[:lernchip_id][0]
    if params[:lernchip_id][0]=="c"
       #Chipset
       content=Course.find(params[:lernchip_id][1..])
       typ="chipset"
    else
       content=Lernchip.find(params[:lernchip_id])
    end
    Rails.logger.info typ
      Rails.logger.info session[:folder_id]
      origin_folder=Folder.find(session[:folder_id])
      foldername=origin_folder.name
      target_folder=Folder.find(params[:folder_id])
        # target ist Organisationsordner - Lernchip wird kopiert.
      Rails.logger.info "target_folder.organisation_id "+target_folder.organisation_id.to_s
      Rails.logger.info "origin_folder.organisation_id "+origin_folder.organisation_id.to_s

      if (target_folder.organisation_id==1 && origin_folder.organisation_id=!1) || (target_folder.organisation_id!=1 && origin_folder.organisation_id==1)
          if typ=="lernchip"
            if content.contenttyp.typ==1
              newid=dup_content(typ,content, target_folder.id)
            end
            if content.contenttyp.typ==2
              newlernchip=content.deep_clone do |original, kopy|
                kopy.datei.attach(original.datei.blob)
              end
              o = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
              newlernchip.urlalias = (0...10).map { o[rand(o.length)] }.join
              newlernchip.ltisecret = (0...10).map { o[rand(o.length)] }.join
              newlernchip.folder_id=target_folder.id
              newlernchip.save
              newid=newlernchip.id 
            end            
          end
          if typ=="chipset"
            newid=dup_content(typ,content, target_folder.id)
          end
          Rails.logger.info "dupliziert und gespeichert"
      else
          content.folder_id=params[:folder_id]
          content.save
          Rails.logger.info "gespeichert"
      end
   
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

    #lc_json_c=chipsets.to_json(only: [:title,:id,:courseitems.size])
   
#    render :json => { :chipsets => lc_json_c,:lernchips => lc_json_l}


  end





  def lernchiptochipset
    # lernchip duplizieren
    typ="lernchip"
    lernchip=Lernchip.find(params[:lernchip_id])
    folder_id=params[:chipset_id][1..]
    newlernchip=duplernchip(lernchip,folder_id)
    Rails.logger.info newlernchip.id


    # neues Courseitem
    ci=Courseitem.new
    ci.lernchip_id=newlernchip.id
    ci.course_id=params[:chipset_id][1..]
    max=Courseitem.select("max(position) as maximum").where("course_id=#{params[:chipset_id][1..]}")
    if max.size==0
      ci.position=0
    else
      ci.position=max[0].maximum+1
    end
    if ci.save
      @lernchips=Lernchip.where("user_id=#{current_user.id} and folder_id=#{session[:folder_id]}").order("title").limit(12)
      @chipsets=Course.where("user_id=#{current_user.id} and folder_id=#{session[:folder_id]}").order("title").limit(12)
      foldername="Persönlicher Ordner"
      if session[:folder_id]!='0'
        folder=Folder.find(session[:folder_id])
        foldername=folder.name
      end
      respond_to do |format|
        format.html {render :partial => "lernchips/foldercontent", :locals => {:maxzahl=>11,:lernchips => @lernchips, :chipsets => @chipsets, :foldername => foldername}}
      end 
    else
      Rails.logger.info "Speicher nicht erfolgreich"
      render :html => "false"
    end
  end

  def update
	lernchip=Lernchip.find(params[:id])
	Rails.logger.info lernchip.urlalias
    lernchip.title=params[:title]
    
    if lernchip.save
            redirect_to CONTENTSERVER+"/h5p/edit/"+lernchip.urlalias
    end      
  end

  def showfoldercontent
    Rails.logger.info("showfoldercontent");
    folder_id=params[:folder_id]
    session[:folder_id] = folder_id
    titel=params[:folder_name]
  	@chipsets=Course.where("user_id=#{current_user.id} and folder_id=#{folder_id}").order("title")
   	@lernchips=Lernchip.where("user_id=#{current_user.id} and folder_id=#{folder_id}")
   
    foldername="Persönlicher Ordner"
    if folder_id!='0'
      folder=Folder.find(params[:folder_id])
      foldername=folder.name
	    if folder.parent_id>1
    		@chipsets=Course.where("folder_id=#{folder_id}").order("title")
    		@lernchips=Lernchip.where("folder_id=#{folder_id}")
    	end
    end
    #render :partial => "foldercontent", : locals => { :chipsets => chipsets, :lernchips => lernchips }

      respond_to do |format|
        format.html {render :partial => "lernchips/foldercontent", :locals => {:maxzahl=>11,:lernchips => @lernchips, :chipsets => @chipsets, :foldername => foldername}}
      end
  end

  def showmore
    folder_id=session[:folder_id]
    @chipsets=Course.where("user_id=#{current_user.id} and folder_id=#{folder_id}").order("title")
    @lernchips=Lernchip.where("user_id=#{current_user.id} and folder_id=#{folder_id}")

    #render :partial => "foldercontent", : locals => { :chipsets => chipsets, :lernchips => lernchips }

      respond_to do |format|
        format.html {render :partial => "lernchips/foldercontent", :locals => {:maxzahl=>params[:maxzahl].to_i,:lernchips => @lernchips, :chipsets => @chipsets}}
      end

  end

	def new

		@lernchip = Lernchip.new
    @lernchip.folder_id = params[:folderid]
    	@contentarts=Contentart.all
    	@contenttyps=Contenttyp.all
      Rails.logger.info @lernchip.folder_id
	end


def newlernchip


end

	def create
    	Rails.logger.info "Lernchip create"
      Rails.logger.info lernchip_params
    	@lernchip = Lernchip.new(lernchip_params)
      
    	#@lernchip.title=params[:lernchip][:title]
    	#@lernchip.contenttyp_id=params[:lernchip][:contenttyp]
    	o = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
      @lernchip.urlalias = (0..10).map {o[rand(o.length)]}.join
    	@lernchip.ltisecret = (0...10).map { o[rand(o.length)] }.join
    	@lernchip.user_id=current_user.id
    	@lernchip.organisation_id=current_user.organisation_id
    	@lernchip.folder_id=session[:folder_id]

    	if @lernchip.save  
          if params[:lernchip][:contenttyp_id]=="51"
            folder_id=session[:folder_id]


    #render :partial => "foldercontent", : locals => { :chipsets => chipsets, :lernchips => lernchips }

            respond_to do |format|
                format.html {redirect_to :action => 'index', alert => "Der Lernchip wurde erzeugt" }
            end
          else
      		  ct=Contenttyp.find(@lernchip.contenttyp_id)
      		  lccontent=Content.where("urlalias='#{ct.filename}'").first
      		  Rails.logger.info "vor "
      		  content=Content.new
		        content.content=lccontent.content
		        content.metadata=lccontent.metadata
		        content.urlalias=@lernchip.urlalias
		        content.lernchip_id=@lernchip.id
      		  content.save
     		    params.merge(:id => @lernchip.id)

            redirect_to CONTENTSERVER+"/h5p/edit/"+@lernchip.urlalias
          end
    	else
      		render :new 
    	end
  end



	def createchipset
		course=Course.new
		course.folder_id=params[:folderid]
		course.user_id=current_user.id
   		o = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
    	course.urlextern = (0...10).map { o[rand(o.length)] }.join
    	course.ltisecret = (0...10).map { o[rand(o.length)] }.join
      course.save
Rails.logger.info "Course save"

        @lernchips=Lernchip.where("user_id=#{current_user.id} and folder_id=1").order("title")
        @chipsets=Course.where("user_id=#{current_user.id} and folder_id=1").order("title")
      respond_to do |format|
        format.html
      end
	end


  
  def testpreview
     urlalias=params[:id]
    @lernchip=Lernchip.where("urlalias='#{urlalias}'").first
    

    respond_to do |format|
      format.html
      format.json
    end
  end



  def deletelernchip
      urlalias=params[:id]
      @lernchip=Lernchip.where("urlalias='#{urlalias}'").first
      @lernchip.destroy

      if(params.has_key?(:chipset_id))
        Rails.logger.info params[:chipset_id]
        chipsetitem=Courseitem.where("lernchip_id=#{@lernchip.id}").first
        chipsetitem.destroy
        lernchips=Courseitem.where("course_id=#{params[:chipset_id]}").order("position")
        respond_to do |format|
           format.html {render :partial => "courses/chipsetcontent", :locals => {:lernchips => lernchips}}
        end
      else
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

  end



  def chipsettitle
    chipset=Course.where("id=#{params[:chipset_id]}").first
    chipset.save
  end

    private

    def lernchip_params
      params.require(:lernchip).permit(:title,:contenttyp_id,:datei,:contenttyp) 
    end

    def duplernchip(lernchip,folder_id)
      Rails.logger.info "duplernchip"
        if lernchip.contenttyp.typ==2
          newlernchip=lernchip.deep_clone do |original, kopy|
            kopy.datei.attach(original.datei.blob) 
          end
        end
        if lernchip.contenttyp.typ==1
          newlernchip=lernchip.deep_clone
        end
        o = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
        newlernchip.urlalias = (0...10).map { o[rand(o.length)] }.join
        newlernchip.ltisecret = (0...10).map { o[rand(o.length)] }.join
        newlernchip.folder_id=folder_id
        newlernchip.save
        if newlernchip.contenttyp.typ==1
          c=Content.where("lernchip_id=#{lernchip.id}").first.dup
          Rails.logger.info c
          c.urlalias=newlernchip.urlalias
          c.lernchip_id=newlernchip.id
          c.save          
        end
        return newlernchip
    end
 


    def dup_content(typ,content,folder_id)
      Rails.logger.info "dup_content"
      Rails.logger.info typ
      if typ=="lernchip"
        lcnew=content.dup
        o = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
        urlalias = (0...10).map { o[rand(o.length)] }.join
        lcnew.urlalias=urlalias
        lcnew.ltisecret = (0...10).map { o[rand(o.length)] }.join
        lcnew.folder_id=folder_id
        lcnew.save
        Rails.logger.info "lcnew_id "
        Rails.logger.info lcnew.id     
        Rails.logger.info urlalias
        # lc-content verdoppeln wenn H5P Element
        if lcnew.contenttyp.typ==1
          c=Content.where("lernchip_id=#{content.id}").first.dup
          Rails.logger.info c
          c.urlalias=urlalias
          c.lernchip_id=lcnew.id
          c.save
        end

        return lcnew.id
      end
    end

    def dupchipset(chipset)
        Rails.logger.info "content_id" 
        Rails.logger.info content.id
        chipsetnew=content.dup

        o = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
        urlalias = (0...10).map { o[rand(o.length)] }.join
        chipsetnew.urlextern=urlalias
        chipsetnew.ltisecret = (0...10).map { o[rand(o.length)] }.join
        chipsetnew.folder_id=folder_id
        chipsetnew.save
        #
        ci=Courseitem.where("course_id=#{content.id}")
        for courseitem in ci
          lernchipid=dup_content("lernchip",courseitem.lernchip,chipsetnew.id)
          itemnew=Courseitem.new
          itemnew.lernchip_id=lernchipid
          itemnew.course_id=chipsetnew.id
          itemnew.save
        end
    end
  


end