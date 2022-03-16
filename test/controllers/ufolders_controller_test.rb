require "test_helper"

class UfoldersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @ufolder = ufolders(:one)
  end

  test "should get index" do
    get ufolders_url
    assert_response :success
  end

  test "should get new" do
    get new_ufolder_url
    assert_response :success
  end

  test "should create ufolder" do
    assert_difference('Ufolder.count') do
      post ufolders_url, params: { ufolder: { name: @ufolder.name, parent_id: @ufolder.parent_id, user_id: @ufolder.user_id } }
    end

    assert_redirected_to ufolder_url(Ufolder.last)
  end

  test "should show ufolder" do
    get ufolder_url(@ufolder)
    assert_response :success
  end

  test "should get edit" do
    get edit_ufolder_url(@ufolder)
    assert_response :success
  end

  test "should update ufolder" do
    patch ufolder_url(@ufolder), params: { ufolder: { name: @ufolder.name, parent_id: @ufolder.parent_id, user_id: @ufolder.user_id } }
    assert_redirected_to ufolder_url(@ufolder)
  end

  test "should destroy ufolder" do
    assert_difference('Ufolder.count', -1) do
      delete ufolder_url(@ufolder)
    end

    assert_redirected_to ufolders_url
  end
end
