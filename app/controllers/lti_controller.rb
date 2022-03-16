class LtiController < ApplicationController
  skip_before_action :verify_authenticity_token
  after_action :allow_iframe, only: [:launch]
  before_action :authenticate_user!, except: [:launch]

  def launch
    #require 'ims/lti'
    #Check if the key is present or not
    Rails.logger.info params[:oauth_consumer_key]
    typ=''
    link=Lernchip.where("urlalias='#{params[:oauth_consumer_key]}'").first

    if link
         typ='lc'
    end
    if typ==''
       link=Course.where("urlextern='#{params[:oauth_consumer_key]}'").first
       if link
         typ='set'
       end
     end
Rails.logger.info typ
#    if not Rails.configuration.lti_settings[params[:oauth_consumer_key]]
    if typ==''
      render :launch_error, status: 401
      return
    end

    #require 'oauth/request_proxy/action_controller_request'
    #provider = IMS::LTI::ToolProvider.new(consumer_key, consumer_secret, params)
#    @provider = IMS::LTI::ToolProvider.new(
 #     params[:oauth_consumer_key],
  #    lc.ltisecret,
#      params
#    )

#      # the request wasn't 
#      render :launch_error, status: 401
#      return
#    end

    #Request was valid, create a session for a user
    session[:user_id] = params.require :user_id
    session[:lis_person_name_full] = params.require :lis_person_name_full
    @lis_person_name_full = session[:lis_person_name_full]
    if typ=='lc'
       #redirect_to 'https://dev.chipfabrik.ch/lernchips/link'+link.urlalias
        #item=Item.where("lernchip_id=#{link.id}").first
        #url="https://vue.chipfabrik.ch/pdfjs/full?file=%2F"+item.file.url[1..-1]
        #url='https://vue.chipfabrik.ch/lernchips/link'+link.urlalias
        #Rails.logger.info url

       #redirect_to url 
        if link.contenttyp.typ==1
            redirect_to CONTENTSERVER+'/h5p/play/'+link.urlalias
        end
        if link.contenttyp.typ==2
            respond_to do |format|
              format.html {render :partial => "pdfshow", :locals => {:lernchip => link}}
            end
          #redirect_to SERVER+'/pdfshow?id='+link.id.to_s
        end
    end
    if typ=='set'
       redirect_to SERVER+'/courses/'+link.urlextern      
    end
    

  end
  def allow_iframe
    #response.headers.except! 'X-Frame-Options'
    response.headers['X-Frame-Options'] = 'ALLOW-FROM *'
  end



end
