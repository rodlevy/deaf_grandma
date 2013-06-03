get '/' do
  @grandma = params[:grandma]
  p @grandma
  # Look in app/views/index.erb
  erb :g_speak
end

post '/grandma' do
  @user_statement = params[:user_input]
  #{}"Implement the /grandma route yourself.<br>Params: <code>#{params.inspect}</code>"
  if @user_statement == params[:user_input].upcase
    grandma = "I can hear you"
  else
    grandma = "I can't hear you"
  end
  if request.xhr?
    grandma
  else
    redirect to '/'
  end
end

