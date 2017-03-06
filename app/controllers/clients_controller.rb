class ClientsController < ApplicationController
  before_action :set_client, only: [:show, :edit, :update, :destroy, :params, :client_params]

  # GET /clients
  # GET /clients.json
  def index
    @clients = Client.all
  end

  # GET /clients/1
  # GET /clients/1.json
  def show
    @client = Client.find(params[:id])
  end

  # GET /clients/new
  def new
    @Clients = Client.new
  end

  # GET /clients/1/edit
  def edit
    @Clients = Client.find(params[:id])
  end

  def nutritionaldata
    @Client = Client.find(params[:id])
  end

  # POST /clients
  # POST /clients.json
  def create
    @client = Client.new(client_params)

    respond_to do |format|
      if @client.save
        format.html { flash[:notice] = "Post successfully created" }
        format.json { render :show, status: :created, location: @client }
      else
        format.html { render :new }
        format.json { render json: @client.errors, status: :unprocessable_entity }
      end
    end
  end


  def client_params1
      
    end

  # PATCH/PUT /clients/1
  # PATCH/PUT /clients/1.json
  def update
    respond_to do |format|
      if @Client.update(client_params)
        format.html { flash[:notice] = "Post successfully created" }
        format.json { render :show, status: :ok, location: @client }
      else
        format.html { render :edit }
        format.json { render json: @client.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /clients/1
  # DELETE /clients/1.json
  def destroy
    @client.destroy
    respond_to do |format|
      format.html { redirect_to clients_url, notice: 'Client was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_client
      @Client = Client.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def client_params
      params.require(:client).permit(:id, :firstname, :lastname, :dob, :gender, :allergies, :provider, :cdiet, :dx, :ht, :cbw, :date0, :thirtywt, :ninetywt, :oneeightywt, :date1, :date2, :date3, :intakefrom, :intaketo, :bmi, :ibw, :calreq, :proreq, :flreq, :fassess, :fpes, :pes0, :pes1, :pes2)
    end
end
