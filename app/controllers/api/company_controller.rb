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
    companies = companies.left_outer_joins(:photos).select(
      "companies.*",
      "photos.photo_url as #{:photo_url}",
    )

    render :json => {
      params: params,
      companies: companies,
    }
  end

  def show
    # Get photo
    companies = Company.all.left_outer_joins(:photos).select(
      "companies.*",
      "photos.photo_url as #{:photo_url}",
    )

    company = companies.find params[:id]
    render :json => {
      company: company,
    }
  end

  def create
    company = Company.create(
      name: params[:name],
      email: params[:email],
      description: params[:description],
      phone_number: params[:phone_number],
      trade_type: params[:trade_type],
      location: params[:location],
      company_photo: params[:company_photo],
    )
    render :json => {
      new_company: company,
    }
  end

  def destroy
  end
end
