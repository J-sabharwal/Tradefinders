class Api::TradeController < ApplicationController
 
  def show
    @company = Company.find params[:trade_type]
    render :json => {
      companies: @company
    }
  end

end
