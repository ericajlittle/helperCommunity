class ReviewsController < ApplicationController
  before_filter :authorize
  def create
    if current_user
      @user = User.find(params[:user_id])
      # @review = @user.reviews.create(review_params)
      # redirect_to user_path(@user)
      @review = @user.reviews.new(review_params) # I need to know how this works???
      # @review.user_id = current_user.id if current_user
      @review.user_id = @user.id
      @review.reviewer_id = current_user.id
      if @review.save!
        redirect_to @review.user
      else
        redirect :back
      end # ???
    end
  end

  def destroy
    @user = User.find(params[:user_id])
    @review = @user.reviews.find(params[:id])
    @review.destroy

    redirect_to @review.user
  end

  private
    def review_params
      params.require(:review).permit(:content, :rating, :reviewer_name)
    end
end
