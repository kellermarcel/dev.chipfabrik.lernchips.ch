require "test_helper"

class PlayControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get play_index_url
    assert_response :success
  end

  test "should get edit" do
    get play_edit_url
    assert_response :success
  end
end
