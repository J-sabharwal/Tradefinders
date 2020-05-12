class Api::CompanyController < ApplicationController
  def index
    companies = Company.all

    unless params[:trade_type].to_s.strip.empty?
      companies = companies.where("lower(#{:trade_type}) = '#{params[:trade_type].downcase}'")
    end

    unless params[:location].to_s.strip.empty?
      companies = companies.where("lower(#{:location}) = '#{params[:location].downcase}'")
    end

    # Get photo
    companies = companies.joins(:photos).select(
      "companies.*",
      "photos.photo_url as #{:photo_url}",
    )

    render :json => {
      params: params,
      companies: companies,
    }
  end

  def show
    company = Company.find params[:id]
    render :json => {
      company: company,
    }
  end

  def create
  end

  def destroy
  end
end
